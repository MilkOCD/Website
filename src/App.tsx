import { useRoutes } from 'react-router-dom';
import router from 'src/router';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import useWindowDimensions from './components/Tools';

import gStore from './stores/GlobalStore';
import Toast from './components/GlobalComponent/toast';
import Confirm from './components/GlobalComponent/confirm';

function App() {
    const content = useRoutes(router);

    return (
        <>
            <ThemeProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <CssBaseline />
                    {content}
                    {gStore.setWindowDimensions(useWindowDimensions())}
                    <Toast />
                    <Confirm />
                </LocalizationProvider>
            </ThemeProvider>
        </>
    );
}
export default App;
