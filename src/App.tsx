import { Switch, Route, Redirect } from 'react-router-dom';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import useWindowDimensions from './components/Tools';
import gStore from './stores/GlobalStore';
import Toast from './components/GlobalComponent/toast';
import Confirm from './components/GlobalComponent/confirm';
import FormDialog from './components/GlobalComponent/form';
import { publicRoutes } from './routes';
import Backdrop from '@mui/material/Backdrop';
import BoxLoader from './components/BoxLoader';
import { observer } from 'mobx-react';

function App() {
    return (
        <>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={gStore.isLoading}>
                <BoxLoader />
            </Backdrop>
            <ThemeProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <CssBaseline />
                    <Switch>
                        {publicRoutes.map((route, index) => {
                            return (
                                <Route key={index} path={route.path}>
                                    {route.component}
                                </Route>
                            );
                        })}
                    </Switch>
                    {gStore.setWindowDimensions(useWindowDimensions())}
                    <Toast />
                    <Confirm />
                    <FormDialog />
                </LocalizationProvider>
            </ThemeProvider>
        </>
    );
}
export default observer(App);
