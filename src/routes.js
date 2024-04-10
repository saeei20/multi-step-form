import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Page7 from './pages/Page7';

const routes = [
    {
        path: '/',
        component: Page1,
        exact: true,
    },

    {
        path: '/Page2',
        component: Page2
    },

    {
        path: '/Page3',
        component: Page3
    },

    {
        path: '/Page4',
        component: Page4,
    },
   
    {
        path: '/Page5',
        component: Page5,
    },

    {
        path: '/Page6',
        component: Page6,
    },

    {
        path: '/Page7',
        component: Page7,
    }
    
];

export default routes;
