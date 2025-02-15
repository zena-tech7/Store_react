import { useState } from "react";
import { Link } from "react-router-dom";

export default function Panier({ paniers, onDelete }) {
  const [quantities, setQuantities] = useState(paniers.map(() => 1));
  //   paniers.map(() => 1)
  const handleQuantityChange = (index, value) => {
    const newQuantities = [...quantities];
    console.log(index);
    console.log(value);
    newQuantities[index] = value > 0 ? value : 1; // Ensure quantity is at least 1
    setQuantities(newQuantities);
  };
  const calculateTotal = () =>
    paniers.reduce(
      (total, panier, index) => total + panier["prix"] * quantities[index],
      0
    );

  const handleOrderValidation = () => {
    // Save cart and quantities in localStorage
    const orderData = {
      paniers,
      quantities,
      total: calculateTotal(),
    };
    localStorage.setItem("orderHistory", JSON.stringify(orderData));

    // Optionally alert the user
    alert(`Vous avez ${paniers.length} commande(s)`);
  };

  console.log(paniers.length);
  return (
    <>
      <div className="container">
        {paniers.length ? (
          <>
            <div className="container my-5">
              <h2 className="mb-4">Votre Panier</h2>
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Prix</th>
                    <th scope="col">Quantité</th>
                    <th scope="col">Retirer</th>
                  </tr>
                </thead>
                <tbody>
                  {paniers.map((p, indice) => (
                    <tr key={p.id}>
                      <td>{p["description"]}</td>
                      <td>{p["prix"]} DH</td>
                      <td>
                        <input
                          type="number"
                          value={quantities[indice]}
                          onChange={(e) =>
                            handleQuantityChange(indice, Number(e.target.value))
                          }
                          className="form-control"
                          style={{ width: "80px" }}
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => onDelete(indice)}
                        >
                          Retirer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="d-flex justify-content-between align-items-center">
                <h4>Total: {calculateTotal()} DH</h4>
                <Link to="/achat">
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      //   e.preventDefault(); // Prevents immediate navigation
                      handleOrderValidation();
                    }}
                  >
                    Valider Commande
                  </button>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <p className="text-center text-warning my-4">
            <strong>Pas de commande pour le moment.</strong>
          </p>
        )}
      </div>
    </>
  );
}
