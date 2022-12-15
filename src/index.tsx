import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';

// Use HashRouter for git single page
import { BrowserRouter, HashRouter } from 'react-router-dom';

import 'nprogress/nprogress.css';
import App from 'src/App';
import { SidebarProvider } from 'src/contexts/SidebarContext';
import * as serviceWorker from 'src/serviceWorker';

import GlobalStyles from 'src/components/Global/';

import Bubble from './components/Bubble';
import OpenIconSpeedDial from './components/SpeedDial';

ReactDOM.render(
    <HelmetProvider>
        <SidebarProvider>
            <BrowserRouter>
                <OpenIconSpeedDial />
                <GlobalStyles>
                    <App />
                </GlobalStyles>
            </BrowserRouter>
        </SidebarProvider>
    </HelmetProvider>,
    document.getElementById('root')
);

serviceWorker.unregister();
