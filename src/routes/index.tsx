import SidebarLayout from 'src/layouts/SidebarLayout';
// import LandingPage from 'src/Home/LandingPage/LandingPage';
import Blank from 'src/content/dashboards/Blank';
import SliderLayout from 'src/layouts/SliderLayout';
import News from 'src/content/general/News';
import Article from 'src/content/applications/Article';
import ListBook from 'src/content/dashboards/component/Book';
import KnowledgeComponent from 'src/content/dashboards/component/Knowledge';

const publicRoutes = [
    { path: '/home', component: <SliderLayout /> },
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
    // Kiến thức đầu tư (Close)
    {
        path: '/dashboard/basic',
        component: <SidebarLayout content={<KnowledgeComponent />} />
    },
    {
        path: '/dashboard/technical',
        component: <SidebarLayout content={<KnowledgeComponent />} />
    },
    {
        path: '/dashboard/starter',
        component: <SidebarLayout content={<KnowledgeComponent />} />
    },
    // Kiến thức đầu tư (Close)
    {
        path: '/dashboard',
        component: <SidebarLayout content={<Blank />} />
    },
    { path: '', component: <SliderLayout /> }
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
