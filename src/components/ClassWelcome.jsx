import PropTypes from "prop-types";
import { Component } from "react";

class ClassWelcome extends Component {
  constructor(props) {
    super(props);
    // this.state = { ... }
  }

  render() {
    return (
      <div>
        <p>Hello {this.props.name}</p>
        {this.props.children}
      </div>
    );
  }
}

ClassWelcome.propTypes = {
  name: PropTypes.string,
  children: PropTypes.element,
};

ClassWelcome.defaultProps = {
  name: "World",
};

export default ClassWelcome;
