angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      template: '<h1>Noticias Taller 3<h1/>'
    })
    .state('login',{

    	url:'/login',
    	component:'login',
    	isPrivate: false
    })
    .state('noticias',{

    	url:'/noticias',
    	component:'noticias'
    });

    $httpProvider.interceptors.push('InterceptorApi');
}
