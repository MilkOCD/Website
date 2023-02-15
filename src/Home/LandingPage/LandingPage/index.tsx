import Footer from '../components/Footer';
import Header from '../components/Header';
import { Styles } from '../styles/styles';
import Home from '../pages/Home';
import 'antd/dist/antd.css';

const LandingPage = () => {
    return (
        <>
            <Styles />
            <Header />
            <Home />
            <Footer />
        </>
    );
};

export default LandingPage;
