import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setUser, logout } from "../../redux/userReducer";
import { setExp } from "../../redux/expReducer";
import { setBlogPosts } from "../../redux/blogReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.scss";

class Header extends Component {
  state = {
    isToggled: false
  };
  componentDidMount() {
    this.props.setUser();
    this.props.setExp();
    this.props.setBlogPosts();
  }
  handleToggle = () => {
    this.setState({
      isToggled: !this.state.isToggled
    });
  };
  render() {
    let { isToggled } = this.state;
    let { user, logout } = this.props;
    return (
      <header>
        <div className="header-container">
          <Link to="/">
            <h1>Sean Parmar</h1>
          </Link>
          <div
            className={`${isToggled ? "show-overlay" : "hide-overlay"}`}
            onClick={this.handleToggle}
          />
          <nav className={`${isToggled ? "show" : ""}`}>
            <Link to="/">Home</Link>
            <Link to="/blog/posts">Blog</Link>
            {user && (
              <>
                <Link to="/blog/posts/create">Create Post</Link>
                <button onClick={() => logout()}>Log out</button>
              </>
            )}
          </nav>
          <button className="menu" onClick={this.handleToggle}>
            {isToggled ? `x` : "☰"}
          </button>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  let { user } = state.user;
  return {
    user
  };
};
const mapDispatchToProps = {
  setUser,
  logout,
  setExp,
  setBlogPosts
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
