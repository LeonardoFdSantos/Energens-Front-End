import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import consolidated from "./components/consolidated";
import cleanings from "./components/cleanings";
import passwords from "./components/passwords";
import customers from "./components/customers";
import internet from "./components/internet";
import inverter from "./components/inverters"
import irradiation from "./components/irradiation";
import predicted from "./components/predicted";
import tabelateste from "./components/tabelateste";
import { BrowserRouter, Switch, Route } from 'react-router-dom'



ReactDOM.render(
    <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={App} />
                <Route path="/consolidated" component={consolidated} />
                <Route path="/cleaning" component={cleanings} />
                <Route path="/password" component={passwords} />
                <Route path="/customer" component={customers} />
                <Route path="/internet" component={internet} />
                <Route path="/inverter" component={inverter} />
                <Route path="/irradiation" component={irradiation} />
                <Route path="/predicted" component={predicted} />
                <Route path="/tabelateste" component={tabelateste} />
            </Switch>
    </ BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
