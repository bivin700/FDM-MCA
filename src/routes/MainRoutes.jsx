import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';

// render- Dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/default')));

// render - color
const Chef = Loadable(lazy(() => import('pages/component-overview/chef')));
const Customer = Loadable(lazy(() => import('pages/component-overview/customer')));
const ChefManager = Loadable(lazy(() => import('pages/component-overview/chefManager')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <DashboardLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'customer',
      element: <Customer />
    },
    {
      path: 'chef',
      element: <Chef />
    },
    {
      path: 'chefManager',
      element: <ChefManager />
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;
