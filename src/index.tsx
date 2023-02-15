// Use HashRouter for git single page
import { BrowserRouter, HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from 'src/App';
import { SidebarProvider } from 'src/contexts/SidebarContext';
import * as serviceWorker from 'src/serviceWorker';
import GlobalStyles from 'src/components/Global/';
import 'nprogress/nprogress.css';
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
