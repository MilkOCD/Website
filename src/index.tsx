import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import 'nprogress/nprogress.css';
import App from 'src/App';
import { SidebarProvider } from 'src/contexts/SidebarContext';
import * as serviceWorker from 'src/serviceWorker';

import GlobalStyles from 'src/components/Global/';

ReactDOM.render(
    <HelmetProvider>
        <SidebarProvider>
            <BrowserRouter>
                <GlobalStyles>
                    <App />
                </GlobalStyles>
            </BrowserRouter>
        </SidebarProvider>
    </HelmetProvider>,
    document.getElementById('root')
);

serviceWorker.unregister();
