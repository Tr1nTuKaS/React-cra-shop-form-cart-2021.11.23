import { useState, useEffect } from "react";
import List from "../components/shop/List";
import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

function ShopPage() {
  const [shopItems, setShopItems] = useState([]);

  // ComponentDidMount
  useEffect(() => {
    getShopItems();
  }, []);

  const getShopItems = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/products`);
      // console.log('ShopPage.js: response ===', response);
      // response - pilnas atsakas
      // response.data - yra duomenys sekmingos uzklausos atveju
      // console.log(response.data);
      setShopItems(response.data);
    } catch (error) {
      console.log("axios failed");
      console.error(error.message);
    }
  };

  return (
    <main>
      <h1>Shop page</h1>
      <List items={shopItems} />
    </main>
  );
}

export default ShopPage;
