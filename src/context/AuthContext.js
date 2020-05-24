import React, {createContext, useState} from 'react';
import api from '../api_manager';


const AuthContext = createContext();
const { Provider } = AuthContext;

const userModel = {
  email: '',
  nickname: '',
  phoneNumber: '',
  isSocial: '',
};

const AuthContextProvider = (props) => {
  const [user, _setUser] = useState(userModel);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const fetchProfile = async () => {
    let res = await api.get('v1/me/profile/');
    if(!res.ok){
      _setUser(userModel);
      setIsAuthenticated(false);
      return false
    }
    _setUser(res.data);
    setIsAuthenticated(true);
    return true
  };

  const patchProfile = async (values) => {
    let res = await api.patch('v1/me/profile/', values);
    if(!res.ok){return false}
    _setUser(res.data);
    return true
  };

  const state = {user, isAuthenticated};
  const actions = {fetchProfile, patchProfile};

  return (
      <Provider value={{...state, ...actions }}>
        {props.children}
      </Provider>
  )
};

const withAuthContext = ChildComponent => props => (
    <AuthContext.Consumer>
      {
        context => <ChildComponent {...props} auth={context}  />
      }
    </AuthContext.Consumer>
);

export {
  AuthContext,
  AuthContextProvider,
  withAuthContext,
};
