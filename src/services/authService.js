import { browserHistory } from 'react-router';
import store from '../store';
const ACCESS_TOKEN_KEY = 'access_token';


export function logout() {
  clearAccessToken();
  browserHistory.push('/');
}

export function requireAuth(nextState, replace) {
  if (!isLoggedIn()) {
    replace({ pathname: '/form' });
  }
}

export function getAccessToken() {
  return sessionStorage.getItem(ACCESS_TOKEN_KEY);
}

function clearAccessToken() {
  store.dispatch({ type: "REMOVE_TOKEN" });
  sessionStorage.removeItem(ACCESS_TOKEN_KEY);
}

export function getLoggedInName() {
  return sessionStorage.getItem('LoggedInName');
}

// Get and store access_token in local storage
export function setAccessToken(accessToken, redirectTo) {
  store.dispatch({ type: "ADD_TOKEN", data: accessToken.access_token });
  sessionStorage.setItem(ACCESS_TOKEN_KEY, accessToken.access_token);
  sessionStorage.setItem('LoggedInName', accessToken.FirstName);

 // console.log("REDIRECT TO" + redirectTo);

 // console.log("REDIRECT TO" + redirectTo);
  if (redirectTo) {
   // console.log("REDIRECT TO INSIDE " + redirectTo);
    browserHistory.replace(redirectTo);
  }
}

export function isLoggedIn() {
  const access_token = getAccessToken();
  // If user loggedIn and refresh the page(reload) then we will lost the token from store but stored in sessionStorage
  if (!access_token) store.dispatch({ type: "ADD_TOKEN", data: access_token });
  return !!access_token;
}
