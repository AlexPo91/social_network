import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
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
    this.props.updateStatus(this.state.status)
  };
  changeStatus = (e) => {
    this.setState({
      status: e.target.value
    })
  }
  componentDidUpdate(prevProps, prevState){
    if(this.props.status !== prevProps.status){
      this.setState({
        status: this.props.status
      })
    }
  }
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
            <input autoFocus onBlur={this.deActivateMode} onChange={this.changeStatus} value={this.state.status} />
          </div>
        )}
      </>
    );
  }
}

export default ProfileStatus;
