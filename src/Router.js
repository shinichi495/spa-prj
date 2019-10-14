import React, { Component } from 'react';
import { HashRouter,Redriect, Route, Switch, BrowserRouter } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';



const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
// const Login = React.lazy(() => import('./views/CoreViews/Login/Login'));
const Register_Guest = React.lazy(() => import('./views/CoreViews/Register_Guest/Register_Guest'));
const AdminLogin = React.lazy(() => import('./views/CoreViews/AdminLogin/AdminLogin'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));



class Router extends Component {

  render() {
    return (
      <BrowserRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              {/* <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />  
              <Route exact path="/dashboard" name="Dashboard" render={props => <DefaultLayout {...props}/>} />  
              <Route exact path="/register_guest" name="Register_Guest Page" render={props => <Register_Guest {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} /> */}
              {/* <Route exact path="/default" name="Default" render={props => <DefaultLayout {...props}/>} />   */}
              <Route path="/" name="Default" render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </BrowserRouter>
      
    );
  }
}

export default Router;
