import styled from "styled-components";
import Item from "./Items";

const ListStyled = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

function List(props) {
  return (
    <div>
      <h2>Look at our items</h2>
      <ListStyled>
        {props.items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ListStyled>
    </div>
  );
}

export default List;
