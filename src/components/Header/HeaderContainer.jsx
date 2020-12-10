import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { logOut } from "../../redux/auth-reducer";
import { getIsAuth, getLogin } from "../../utils/selectors";

class HeaderContainer extends React.Component {

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: getIsAuth(state),
  login: getLogin(state),
});

export default connect(mapStateToProps, { logOut })(HeaderContainer);
