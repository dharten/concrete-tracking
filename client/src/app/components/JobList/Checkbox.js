import React, { Component} from 'react';

class Checkbox extends Component {
  constructor() {
    super();
    this.state = {
      isChecked: false,
    }
  }

  toggleCheckboxChange = () => {
    this.setState(prevState => ({
        isChecked: !prevState.isChecked,
    }), () => {
      this.props.addItem(this.state.isChecked, this.props.job)
    });
  }

  render() {
    return (
      <td>
        <input
          type="checkbox"
          value={this.props.job._id}
          checked={this.state.isChecked}
          onClick={this.toggleCheckboxChange}
        />
      </td>
    );
  }
}

export default Checkbox;
