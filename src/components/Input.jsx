import PropTypes from "prop-types";
import classes from "./Input.module.css";
const Input = (props) => {
  const { label, value, onChange, name, type, id, error } = props;

  return (
    <div className={classes.main}>
      <label>{label}</label>
      <input
        value={value}
        onChange={onChange}
        id={id}
        name={name}
        type={type}
      />
      {error && <p className={classes.error}>{error}</p>}
    </div>
  );
};
Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  error: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
};

export default Input;
