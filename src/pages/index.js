const routes = [
  {
    name: 'initial-page',
    path: '/',
    component: 'src/pages/initialPage.vue',
    authAccess: 'free'
  },
  {
    name: 'form-page',
    path: '/form',
    component: 'src/pages/formPage.vue',
    authAccess: 'free'
  },
  {
    name: 'region-page',
    path: '/region',
    component: 'src/pages/infoRegionPage.vue',
    authAccess: 'free'
  },
  {
    name: 'map-page',
    path: '/map',
    component: 'src/pages/mapPage.vue',
    authAccess: 'free'
  }
]

export default routes
