import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser, logout } from '../../redux/userReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.scss';

class Header extends Component{
    state = {
        isToggled: false
    }
    componentDidMount() {
       this.props.setUser();
    }
    handleToggle = () => {
        this.setState({
            isToggled: !this.state.isToggled
        })
        
    }
    render(){
        let { isToggled } = this.state;
        let { user, logout } = this.props;
    return ( 
        <header>
            <Link to="/"><h1>Sean Parmar</h1></Link>
            <nav className={`${isToggled ? 'show' : ''}`}>
                <Link to="/">Home</Link>
                <a href="#">Portfolio</a>
                <a href="#">Contact</a>
                <Link to="/blog/posts">Blog</Link>
                <a href="#" target="_blank" rel="noopener noreferrer">Resume</a>
                {user && <>
                    <Link to="/blog/posts/create">Create Post</Link>
                    <button onClick={() => logout()}>Log out</button>
                </>
                }
            </nav>
            <button className="menu" onClick={this.handleToggle}>{isToggled ? `x` : '☰'}</button>
            <div className="socials">
                <a href="https://www.linkedin.com/in/sean-parmar" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
                <a href="https://github.com/Parmesanio" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} /></a>
                <a href="https://codepen.io/Parmesanio/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'codepen']} /></a>
                <a href="https://itunes.apple.com/us/developer/sean-parmar/id1356437548?mt=8" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'app-store']} /></a>
            </div>
        </header>
     );
    }
}

const mapStateToProps = state => {
    let { user } = state.user;
    return {
        user
    }
}
const mapDispatchToProps = {
    setUser,
    logout
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);