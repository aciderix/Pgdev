const HeaderComponent = {
  template: '#header-template'
};

const routes = [
  { path: '/', component: { template: '#vibrations-resonances-template' } },
  { path: '/activite', component: { template: '#activite-template' } },
  { path: '/contact', component: { template: '#contact-template' } },
  { path: '/experiences', component: { template: '#experiences-template' } },
  { path: '/formation', component: { template: '#formation-template' } },
  { path: '/instruments', component: { template: '#instruments-template' } },
  { path: '/interventions', component: { template: '#interventions-template' } },
  { path: '/parcours', component: { template: '#parcours-template' } },
  { path: '/photos', component: { template: '#photos-template' } },
  { path: '/temoignages', component: { template: '#temoignages-template' } },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = Vue.createApp({
  components: { HeaderComponent },
});

app.use(router);
app.mount('#app');
