import PropTypes from "prop-types";

const Welcome = (props) => {
  const { name, children } = props;
  return (
    <div>
      <p>Hello {name}</p>
      {children}
    </div>
  );
};

Welcome.propTypes = {
  name: PropTypes.string,
  children: PropTypes.element,
};

Welcome.defaultProps = {
  name: "World",
};

export default Welcome;
