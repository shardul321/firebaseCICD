import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const AuthLogIn = () => {
    const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

    return (
        <>
            <div>Auth0</div>
            <h2>{isAuthenticated && user.nickname}</h2>
            <div>
                {!isAuthenticated ?
                    <button onClick={() => loginWithRedirect()}>Log In</button>
                    :
                    <button onClick={() => logout({ returnTo: window.location.origin })}> Log Out</button>
                }
            </div>
        </>
    )
}

export default AuthLogIn