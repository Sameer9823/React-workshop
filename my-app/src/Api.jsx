import { useEffect, useState } from "react";
function App() {
  const [productsArray, setProductsArray] = useState([{rating: {rate: 70}}]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((x) => {
        setProductsArray(x);
      });
  }, []);

  return (
    <div>
      <p>Your products</p>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {productsArray.map((x, index) => (
          <div
            style={{
              width: 500,
              height: 500,
              padding: 10,
              border: "5px solid",
              margin: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={x.image} style={{ width: 50 }} />
            <br />
            <div> Category: {x.category} &nbsp;</div>
            <br/>
            <div> Rating: {x.rating.rate} &nbsp;</div>
            <br/>
            <div> Title: {x.title} &nbsp;</div>
            <br />
            <div> Description: {x.description} &nbsp;</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;