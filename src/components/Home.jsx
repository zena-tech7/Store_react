import { useState } from "react";
import data from "../data/Data.json";
import Card from "./Card";

export default function Home({ onHandlePanier }) {
  const [products] = useState(data);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Produits Disponibles</h1>
      <div className="row justify-content-center gap-4">
        {products.map((p) => (
          <div className="col-md-4 col-sm-6 col-12" key={p.id}>
            <Card pc={p} onHandlePanier={onHandlePanier} />
          </div>
        ))}
      </div>
    </div>
  );
}
