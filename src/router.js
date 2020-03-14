import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//const LoginLayout = () => import(/* webpackChunkName: "navbarbefore" */ './views/LoginLayout.vue')  
const PageLayout = () => import(/* webpackChunkName: "navbarbefore" */ './views/PageLayout.vue')

function loadViewDashboard(view) {
  return () => import(/* webpackChunkName: "view[request]" */ `./views/${view}.vue`) 
}
    Vue.use(Router)   
    //const router = new Router({mode: 'history', routes: routes})   

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',       
      component: PageLayout,       
      children: [    
      {           
          name: 'Dashboard',           
          path: '/Dashboard',           
          component: loadViewDashboard('Dashboard')         
      },
      {           
        name: 'About',           
        path: '/About',           
        component: loadViewDashboard('About')         
      }            
      ]
    }
  ],
})