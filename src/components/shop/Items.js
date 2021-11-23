import styled from "styled-components";
import { useCartCtx } from "../../store/CartContect";
const ItemCard = styled.div`
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  padding: 1rem;
  width: 28%;
  border: 1px solid #000;
  box-shadow: 3px 3px 7px lightgray;
  & > * {
    width: 100%;
  }
  & h2 {
    font-size: 1rem;
  }
  & img {
    height: 200px;
    margin: 0 auto;
    display: block;
    object-fit: contain;
  }
  & button {
    align-self: flex-end;
  }
`;

function Item(props) {
  const { id, title, price, image, category } = props.item;
  const cartCtx = useCartCtx();

  return (
    <ItemCard>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h3>Price {price} eur</h3>
      <p>Category: {category}</p>
      <button onClick={() => cartCtx.addToCart({ id, title, price, qty: 1 })}>
        Add To cart
      </button>
    </ItemCard>
  );
}

export default Item;
