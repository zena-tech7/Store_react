import { Link } from "react-router-dom";

export default function Card({ pc, onHandlePanier }) {
  function handleAddToCart() {
    onHandlePanier({
      id: pc.id,
      image: pc.img,
      name: pc.name,
      description: pc.description,
      price: pc.price,
    });
  }

  return (
    <>
      <div
        className="card"
        style={{
          width: "18rem",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          overflow: "hidden",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <Link to={"/card/${pc.id}"}>
          <img
            src={pc.img}
            className="card-img-top"
            alt={pc.description}
            style={{
              height: "200px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </Link>
        <div className="card-body" style={{ padding: "16px" }}>
          <h5
            className="card-title"
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              marginBottom: "8px",
              color: "#333",
              minHeight: "50px",
            }}
          >
            {pc.name}
          </h5>
          <p className="card-text">{pc.description}</p>
          <p
            className="card-text"
            style={{
              color: "#888",
              fontSize: "1rem",
              marginBottom: "12px",
              fontWeight: "bold",
            }}
          >
            {pc.prix} DH
          </p>
          <p className="card-text">
            <button
              onClick={handleAddToCart}
              className="btn btn-primary"
              style={{
                backgroundColor: "#007bff",
                border: "none",
                padding: "10px 20px",
                fontSize: "1rem",
                borderRadius: "5px",
                width: "100%",
              }}
            >
              Ajouter au panier
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
