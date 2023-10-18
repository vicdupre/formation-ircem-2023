import { NavLink } from "react-router-dom";

const linkStyles = ({ isActive }) => ({
  fontWeight: isActive ? "bold" : "normal",
  color: isActive ? "tomato" : "inherit",
});

const Navbar = () => {
  return (
    <nav
      style={{
        //https://css-tricks.com/snippets/css/a-guide-to-flexbox/
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <NavLink style={linkStyles} to="/">
        Accueil
      </NavLink>
      <NavLink style={linkStyles} to="/products">
        Produits
      </NavLink>
      <NavLink style={linkStyles} to="/posts">
        Posts
      </NavLink>
    </nav>
  );
};

export default Navbar;
