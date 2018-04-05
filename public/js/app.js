//console.log('yep');
const app = angular.module('dryhollow_App', ['ngRoute', 'ngMaterial', 'ngSanitize']);

let user = null;

app.controller('NavigationController', ['$http', '$scope', '$location', '$mdDialog', '$mdToast',function($http, $scope, $location, $mdDialog, $mdToast) {
  // this.user = user;
  //
  // this.logout = () => {
  //   console.log('logout');
  //   localStorage.clear('token');
  //   location.reload();
  // }
  //
  // this.openLogin = (ev) => {
  //   $mdDialog.show({
  //     locals: {dataToPass: {}},
  //     controller: DialogController,
  //     controllerAs: 'ctrl',
  //     templateUrl: 'partials/login.html',
  //     parent: angular.element(document.body),
  //     targetEvent: ev,
  //     clickOutsideToClose:true,
  //   })
  //   .then((newInfo) => {
  //     $http({
  //         method: 'POST',
  //         url: `/user/login`,
  //         data: { newInfo }
  //       }).then(response => {
  //         //console.log('response:', response);
  //         //console.log('data:', response.data);
  //         if (response.status == 200) {
  //           console.log('succesful login');
  //           // localStorage.setItem('token', JSON.stringify(response.data.token));
  //           user = response.data.user
  //           this.user = user;
  //           this.user.logged = true;
  //           //console.log(user);
  //           setTimeout(() => {
  //             $mdToast.show(
  //               $mdToast.simple()
  //                 .textContent(`   Hello,   ${user.first}!`)
  //                 .position("bottom right" )
  //                 .hideDelay(3000)
  //             );
  //           }, 1000);
  //           $scope.$broadcast('updateAuth', { data: this.user })
  //         } else {
  //           return this.openLogin(ev)
  //         }
  //       }).catch((error) => {
  //         console.log('login error:', error);
  //         this.openLogin(ev)
  //       }).catch(err => console.error('Catch', err))
  //   }, function() {
  //     console.log('cancel dialog');;
  //   });
  // }
  //
  // this.openRegister = (ev) => {
  //   $mdDialog.show({
  //     locals: {dataToPass: {}},
  //     controller: DialogController,
  //     controllerAs: 'ctrl',
  //     templateUrl: 'partials/register.html',
  //     parent: angular.element(document.body),
  //     targetEvent: ev,
  //     clickOutsideToClose:true,
  //   })
  //   .then((newInfo) => {
  //     //console.log('register request:', newInfo);
  //     $http({
  //         method: 'POST',
  //         url: `/user`,
  //         data: { newInfo }
  //       }).then(response => {
  //         //console.log('register succesful:', response.data);
  //         return this.openLogin(ev)
  //       }, (error) => {
  //         console.log('login error:', error);
  //         this.openRegister(ev)
  //       }).catch(err => console.error('Catch', err))
  //   }, function() {
  //     console.log('cancel dialog');;
  //   });
  // }
  //
  // this.autoLogin = () => {
  //   $http({
  //       method: 'POST',
  //       url: `/user/login`,
  //       data: { newInfo: { username: 'tg', password: 'tg' } }
  //     }).then(response => {
  //       //console.log('response:', response);
  //       if (response.status == 200) {
  //         console.log('succesful login');
  //         // localStorage.setItem('token', JSON.stringify(response.data.token));
  //         user = response.data.user
  //         this.user = user;
  //         this.user.logged = true;
  //         //console.log(user);
  //         setTimeout(() => {
  //           $mdToast.show(
  //             $mdToast.simple()
  //               .textContent(`   Hello,   ${user.first}!`)
  //               .position("bottom right" )
  //               .hideDelay(3000)
  //           );
  //         }, 1000);
  //         $scope.$broadcast('updateAuth', { data: this.user })
  //       } else {
  //         console.log('login error')
  //       }
  //     }).catch((error) => {
  //       console.log('login error:', error);
  //   }).catch(err => console.error('Catch', err))
  // };
  // if ($location.absUrl() == 'http://localhost:1122/') {
  //   //this.autoLogin()
  // }
  //
  // this.navLink = (path) => {
  //   //console.log('navLink', path);
  //   //this.toFrom = undefined;
  //   if ($location.url() == path) {
  //     $scope.$broadcast('navLink', { data: path });
  //   } else {
  //     $location.path(path);
  //   };
  // };

}]);

app.controller('HomeController', ['$http', '$route', '$scope', '$location', '$mdDialog', '$mdToast', function($http, $route, $scope, $location, $mdDialog, $mdToast) {
  this.tabs = [
    'start','contact', 'jars', 'glass'
  ]
  this.partials = {};
  for (let t of this.tabs) {
    this.partials[t] = `partials/${t}.html`;
  }

}]);

app.config(['$routeProvider','$locationProvider', '$mdThemingProvider', function($routeProvider,$locationProvider) { //, $mdThemingProvider
  $locationProvider.html5Mode({ enabled: true });

  $routeProvider.when('/', {
    templateUrl: 'partials/home.html',
    controller: 'HomeController as ctrl',
    controllerAs: 'ctrl'
  });

  // $routeProvider.when('/workcenters', {
  //   templateUrl: 'partials/workcenter.html',
  //   controller: 'WorkCenterController as ctrl',
  //   controllerAs: 'ctrl'
  // });

  // $routeProvider.when('/about', {
  //   templateUrl: 'partials/about.html',
  // });

  $routeProvider.otherwise({
    redirectTo: '/'
  });

  // $mdThemingProvider.definePalette('amazingGray', {
  //   '50': 'D5D4CF',
  //   '100': 'D5D4CF',
  //   '200': 'D5D4CF',
  //   '300': '8E8D92',
  //   '400': '8E8D92',
  //   '500': '8E8D92',
  //   '600': '3E4A62',
  //   '700': '3E4A62',
  //   '800': '3E4A62',
  //   '900': '3E4A62',
  //   'A100': '3E4A62',
  //   'A200': '3E4A62',
  //   'A400': '3E4A62',
  //   'A700': '3E4A62',
  //   'contrastDefaultColor': 'light',
  //   'contrastDarkColors': ['50', '100',
  //    '200', '300', 'A100']
  //   // 'contrastLightColors': undefined
  // });
  //
  // $mdThemingProvider.definePalette('amazingBlue', {
  //   '50': 'C4E1F1',
  //   '100': 'C4E1F1',
  //   '200': 'C4E1F1',
  //   '300': '3997D7',
  //   '400': '3997D7',
  //   '500': '3997D7',
  //   '600': '1A4A96',
  //   '700': '1A4A96',
  //   '800': '1A4A96',
  //   '900': '1A4A96',
  //   'A100': '1A4A96',
  //   'A200': '1A4A96',
  //   'A400': '1A4A96',
  //   'A700': '1A4A96',
  //   'contrastDefaultColor': 'light',
  //   'contrastDarkColors': ['50', '100',
  //    '200', '300', 'A100']
  //   // 'contrastLightColors': undefined
  // });

  // $mdThemingProvider.theme('default')
  //   .primaryPalette('amazingGray', {
  //     'default': '600',
  //     'hue-1': '400',
  //     'hue-2': '100',
  //   })
  //   .accentPalette('amazingBlue', {
  //     'default': '600',
  //     'hue-1': '400',
  //     'hue-2': '100',
  //   })
  // .warnPalette('red');

}]);
