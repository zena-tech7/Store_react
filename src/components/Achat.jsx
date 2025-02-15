export default function Achat({ panier }) {
  const total = panier.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container my-5">
      <h2>Votre Panier</h2>
      {panier.length > 0 ? (
        <>
          <h4>Total: {total} DH</h4>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Description</th>
                <th>Prix</th>
              </tr>
            </thead>
            <tbody>
              {panier.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.price} DH</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <p>Votre panier est vide</p>
      )}
    </div>
  );
}
