import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { NavLink, useHistory } from "react-router-dom";
import { logoutUser } from "../../redux/actions/auth";

const Header = ({ accessToken, logoutUser }) => {
  const history = useHistory();

  const handleLogout = async () => {
    await logoutUser();
    history.push("login/");
  };

  return (
    <nav>
      {accessToken ? (
        <>
          <NavLink to="/">Profile</NavLink>
          {" | "}
          <NavLink to="/logout" onClick={handleLogout}>
            Logout
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
          {" | "}
          <NavLink to="/sign-up">SignUp</NavLink>
        </>
      )}
    </nav>
  );
};

Header.propTypes = {
  accessToken: PropTypes.string,
  logoutUser: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    accessToken: state.auth,
  };
}

const mapDispatchToProps = {
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
