import React from "react";
import FieldsComponent from "./Fields/FieldsComponent";

class FormComponent extends React.Component {
  render() {
    const formConfiguration = this.props.formConfig;
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <form className="ui form">
          <h4 className="ui dividing header">{formConfiguration.heading}</h4>
          <FieldsComponent
            updateState={this.props.updateState}
            submitForm={this.props.submitForm}
            formConfig={formConfiguration.inputFields}
            formState={this.props.formState}
          />
        </form>
      </div>
    );
  }
}

export default FormComponent;
