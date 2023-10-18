import PropTypes from "prop-types";

const Counter = (props) => {
  const { value, onIncrement, onDecrement, onReset } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
        marginBottom: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <button onClick={onDecrement}>-</button>
        <p>{value}</p>
        <button onClick={onIncrement}>+</button>
      </div>
      <span style={{ cursor: "pointer" }} onClick={onReset}>
        Réinitialiser
      </span>
    </div>
  );
};

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default Counter;
