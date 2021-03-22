import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../../App.css";
import { logoutUser } from "../../actions/authActions";
class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (
      <div style={{ height: "50vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="center-align">
            <h4>
              <b>Olá,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                Você está logado
              </p>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
              }}
              onClick={this.onLogoutClick}
              className="btn btn-sm waves-effect waves-light hoverable  accent-3 form-btn"
            >
              SAIR
            </button>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);
