import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };
  activateMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deActivateMode = () => {
    this.setState({
      editMode: false,
    });
  };
  render() {
    return (
      <>
        {!this.state.editMode && (
          <div>
            <span onClick={this.activateMode}>{this.props.status}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input autoFocus onBlur={this.deActivateMode} value={this.props.status} />
          </div>
        )}
      </>
    );
  }
}

export default ProfileStatus;
