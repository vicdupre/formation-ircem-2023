import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Oups, cette page n&apos;existe pas !</h1>
      <Link to="/">Retour à l&apos;accueil</Link>
    </div>
  );
};

export default NotFound;
