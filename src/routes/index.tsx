import SidebarLayout from 'src/layouts/SidebarLayout';
import LandingPage from 'src/Home/LandingPage/LandingPage';
import News from 'src/content/general/News';
import Article from 'src/content/applications/Article';
import ListBook from 'src/content/dashboards/component/Book';

const publicRoutes = [
    { path: '/home', component: <LandingPage /> },
    {
        path: '/news',
        component: <SidebarLayout content={<News />} />
    },
    {
        path: '/create',
        component: <SidebarLayout content={<Article />} />
    },
    {
        path: '/dashboard/books',
        component: <SidebarLayout content={<ListBook />} />
    },
    {
        path: '/dashboard',
        component: <SidebarLayout content={<News />} />
    },
    { path: '', component: <LandingPage /> }
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
