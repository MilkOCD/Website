import LandingPage from 'src/Home/LandingPage/LandingPage';
import News from 'src/content/general/News';
import Article from 'src/content/applications/Article';
import SidebarLayout from 'src/layouts/SidebarLayout';

const publicRoutes = [
    { path: '/home', component: <LandingPage /> },
    {
        path: '/dashboard',
        component: <SidebarLayout content={<News />} />
    },
    {
        path: '/news',
        component: <SidebarLayout content={<News />} />
    },
    {
        path: '/create',
        component: <SidebarLayout content={<Article />} />
    },
    { path: '', component: <LandingPage /> }
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
