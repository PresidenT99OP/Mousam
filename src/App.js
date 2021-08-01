import React from "react";
import Navbar from "./Components/Navbar";
import Temperature from './Components/Temperature'
import Main from "./Components/Main";
import About from "./Components/About";
import { pageUrl } from "./Components/Constants";

import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
  UserButton,
  UserProfile,
  useUser,
} from '@clerk/clerk-react';

import { 
  BrowserRouter as Router, 
  Link, 
  Route, 
  Switch, 
  useHistory 
} from 'react-router-dom';


const clerkFrontendApi = "clerk.c4c9s.1rfff.lcl.dev";
const App = () => {
  return (
    <>

    <Router>
      <ClerkProviderWithNavigate>
    <Navbar/>
    <Switch>
    
        <Route exact path={pageUrl.MAIN} component={Main}/>
    <Route exact path={pageUrl.ABOUTPAGE} component={About}/>
    <Route exact path={pageUrl.WEATHERPAGE} component={Temperature}/>
    {/* Public routes, accesible whether or not a user is signed in */}
    <Route path="/public">
            <div>
              Reached the public route. <Link to="/">Return home.</Link>
            </div>
          </Route>
          <Route path="/sign-in/(.*)?">
            <SignIn routing="path" path="/sign-in" />
          </Route>
          <Route path="/sign-up/(.*)?">
            <SignUp routing="path" path="/sign-up" />
          </Route>

{/* Private routes, accesible only if a user is signed in */}
        <PrivateRoute path="/private">
            <div>
              Reached the private route. <Link to="/">Return home.</Link>
            </div>
          </PrivateRoute>
          <PrivateRoute path="/user/(.*)?">
            <UserProfile routing="path" path="/user" />
        </PrivateRoute>


        <Route>
            <SignedIn>
            <UserProfile/>
            
              
              <Navigation />
            </SignedIn>
            
            <SignedOut>
            
          </SignedOut>
            
          </Route>
    </Switch>
    </ClerkProviderWithNavigate>
    </Router>
    <footer>
        @Copyrights are reserved for WeatherInfo.com 2021
    </footer>
    </>
  );
};
function Navigation() {
  return (
    <ul>
      <li>
        <Link to="/public">Public route</Link>
      </li>
      <li>
        <Link to="/private">Private route</Link>
      </li>
    </ul>
  );
}
function Greeting() {
  const { firstName } = useUser();
  return <div>Hello, {firstName}!</div>;
}

function PrivateRoute(props) {
  // If the route matches but the user is not signed in, redirect to /sign-in
  return (
    <>
      <SignedIn>
        <Route {...props} />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
function ClerkProviderWithNavigate({ children }) {
  const { push } = useHistory();
  return (
    <ClerkProvider
      frontendApi={clerkFrontendApi}
      navigate={(to) => push(to)}
    >
      {children}
    </ClerkProvider>
  );
}

export default App;
