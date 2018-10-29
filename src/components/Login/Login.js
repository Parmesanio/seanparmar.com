import React from 'react';

const Login = (props) => {
    const login = () => {
        console.log(process.env.REACT_APP_AUTH0_DOMAIN);
        const redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`);
        const scope = encodeURIComponent('openid profile email');
        window.location = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/authorize?client_id=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=${scope}&redirect_uri=${redirectUri}&response_type=code`;
      }
    return ( 
        <section className="login">
        <button onClick={() => login()}>Login</button>
        </section>
     );
}
 
export default Login;