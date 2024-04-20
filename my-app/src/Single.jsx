import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

const Home = () => {
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
              width: 600,
              height: 450,
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
  )
};

const Cart = () => {
  const [productsArray, setProductsArray] = useState([{products: [{quantity: 5}]}]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/carts")
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
              width: 200,
              height: 200,
              padding: 10,
              border: "5px solid",
              margin: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div> products in cart: {x.products[0].quantity} &nbsp;</div>
          </div>
        ))}
      </div>
    </div>
  )
};

const Contact = () => {
  return <h1>Contact Me page</h1>;
};

const NoPage = () => {
  return <h1>404 page not found</h1>;
};

export default App;