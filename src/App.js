import React, { Component } from 'react';
import { HashRouter,Redriect, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/CoreViews/Login/Login'));
const Register_Guest = React.lazy(() => import('./views/CoreViews/Register_Guest/Register_Guest'));
const Product = React.lazy(() => import('./views/CoreViews/Product/Product'));
const Services = React.lazy(() => import('./views/CoreViews/Product/Services'));
const Employee = React.lazy(() => import('./views/CoreViews/Employee/Employee'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));

class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />  
              <Route exact path="/Employee" name="Employee Page" render={props => <Employee {...props}/>} />  
              <Route exact path="/Product" name="Product" render={props => <Product {...props}/>} />  
              <Route exact path="/Services" name="Services" render={props => <Services {...props}/>} />  
              <Route exact path="/dashboard" name="Dashboard" render={props => <DefaultLayout {...props}/>} />  
              <Route exact path="/register_guest" name="Register_Guest Page" render={props => <Register_Guest {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/" name="Login" render={props => <Login {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
