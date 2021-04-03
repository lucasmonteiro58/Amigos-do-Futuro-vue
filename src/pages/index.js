const routes = [
  {
    name: 'initial-page',
    path: '/',
    component: 'src/pages/initialPage.vue',
    authAccess: 'free'
  },
  {
    name: 'form-page',
    path: '/form-page',
    component: 'src/pages/formPage.vue',
    authAccess: 'free'
  },
  {
    name: 'region-page',
    path: '/region-page',
    component: 'src/pages/infoRegionPage.vue',
    authAccess: 'free'
  }
]

export default routes
