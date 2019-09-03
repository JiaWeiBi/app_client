import Dashboard from './views/Dashboard.vue'
import Team from './views/Team'

const routers = [
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard
      // },
      // {
      //   path: '/projects',
      //   name: 'projects',
      //   component: Projects
      },
      {
        path: '/team',
        name: 'team',
        component: Team
      }
]

export default routers;