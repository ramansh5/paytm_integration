import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
//import require from './favicon.ico';
import './styles.scss';
import 'font-awesome/css/font-awesome.css';
import 'flexboxgrid/css/flexboxgrid.css';

import { Provider } from 'react-redux';

import store from './store';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiThemebtn = getMuiTheme() ;

injectTapEventPlugin();

render(
    <Provider store={store}>
    
        <Router routes={routes} history={browserHistory}   />
       
    </Provider>
    , document.getElementById('app')
);
