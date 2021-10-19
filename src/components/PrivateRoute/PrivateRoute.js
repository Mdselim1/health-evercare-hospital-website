import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../context/useAuth';


const PrivateRoute = (props) => {
    console.log(props);
    const { children, ...rest } = props;
    const {user } = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) => 
                user.email ? children
                    : (
                        <Redirect
                            to={{
                                pathname:"/login",
                                state:{from:
                                location}
                        }}
                        >

                        </Redirect>
                    )
                    
            }
        >
            
        </Route>
    );
};

export default PrivateRoute;