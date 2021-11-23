import styled from "styled-components";
import { Link } from "react-router-dom";

const MainHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10%;
  color: snow;
  background-color: #333;
  padding-left: 1rem;
`;
const MainNav = styled.nav`
  display: flex;
  gap: 1rem;
  & a {
    padding: 0.5rem 1rem;
  }
`;

const navData = [
  { title: "Home", url: "/" },
  { title: "Shop", url: "/shop" },
  { title: "Cart", url: "/cart" },
];

function Header() {
  return (
    <MainHeader>
      <Link to="/">
        React<strong>Shop</strong>
      </Link>
      <MainNav>
        {navData.map(({ title, url }) => (
          <Link key={title} to={url}>
            {title}
          </Link>
        ))}
      </MainNav>
    </MainHeader>
  );
}
export default Header;
