import React from "react";

class ButtonComponent extends React.Component {
  render() {
    const buttonDetails = this.props.fieldDetails;
    return (
      <div className="field">
        <button
          type={buttonDetails.type}
          className="ui primary button"
          onClick={this.props.submitForm}
        >
          {buttonDetails.label}
        </button>
      </div>
    );
  }
}

export default ButtonComponent;
