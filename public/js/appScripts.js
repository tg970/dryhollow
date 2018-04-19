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
    'start','contact', 'jars', 'glass', 'grinders'
  ]
  this.partials = {};
  for (let t of this.tabs) {
    this.partials[t] = `partials/${t}.html`;
  }

  this.next = () => {
    console.log('yep');
    this.selectedIndex++;
  }

  this.autoSelect = (obj, k, s) => {
    console.log('autoSelect', $scope);
    let keys = Object.keys(obj);
    console.log(keys);
    if (keys.length == 1) {
      //this.newInfo[k] = obj[keys[0]];
    }
  }

  this.submit = (newInfo) => {
    console.log('sumbit:', newInfo);
    this.info = newInfo;
  }
  this.grinders = grinders;

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

let raw = [
 {
   "Manufacturer": "Kraken",
   "Model": "Solid Color",
   "Type": "4 Piece",
   "Size": "1\"",
   "Color": "Gray, Violet, Light Blue, Green"
 },
 {
   "Manufacturer": "Kraken",
   "Model": "Solid Color",
   "Type": "4 Piece",
   "Size": "2.2\"",
   "Color": "Gray, Violet, Light Blue, Green"
 },
 {
   "Manufacturer": "Kraken",
   "Model": "Solid Color",
   "Type": "4 Piece",
   "Size": "2.5\"",
   "Color": "Gray, Light Blue, Gold, Green"
 },
 {
   "Manufacturer": "Kraken",
   "Model": "w/ Stash Windows",
   "Type": "4 Piece",
   "Size": "2\"",
   "Color": "Black"
 },
 {
   "Manufacturer": "Kraken",
   "Model": "Diamond Ridge",
   "Type": "4 Piece",
   "Size": "2.2\"",
   "Color": "Gray, Violet, Light Blue, Gold, Green, Red, Black, Silver"
 },
 {
   "Manufacturer": "Kraken",
   "Model": "Diamond Ridge",
   "Type": "4 Piece",
   "Size": "2.5\"",
   "Color": "Gray, Violet, Light Blue, Gold, Green, Red, Black, Silver"
 },
 {
   "Manufacturer": "Kraken",
   "Model": "Tiered",
   "Type": "4 Piece",
   "Size": "2.2\"",
   "Color": "Green, Gold, Violet, Black, Light Blue, Gray, Red"
 },
 {
   "Manufacturer": "Kraken",
   "Model": "Tiered",
   "Type": "4 Piece",
   "Size": "2.5\"",
   "Color": "Green, Gold, Violet, Black, Light Blue, Gray, Red"
 },
 {
   "Manufacturer": "Kraken",
   "Model": "Hex",
   "Type": "4 Piece",
   "Size": "2.2\"",
   "Color": "Blue, Red, Pink, Black, Light Blue, Gold, Green, Violet"
 },
 {
   "Manufacturer": "Kraken",
   "Model": "Hex",
   "Type": "4 Piece",
   "Size": "2.5\"",
   "Color": "Blue, Red, Pink, Black, Light Blue, Gold, Green, Violet"
 },
 {
   "Manufacturer": "Kraken",
   "Model": "w/ Clear Top + Push Button Bottom",
   "Type": "2 Piece",
   "Size": "1.5\"",
   "Color": "Black"
 },
 {
   "Manufacturer": "Kraken",
   "Model": "w/ Clear Top + Push Button Bottom",
   "Type": "2 Piece",
   "Size": "1.5\"",
   "Color": "Black"
 },
 {
   "Manufacturer": "Cali Crusher",
   "Model": "Cali Crusher 2.0",
   "Type": "4 Piece",
   "Size": "1.85\"",
   "Color": "Black, Blue, Gold, Green, Red"
 },
 {
   "Manufacturer": "Cali Crusher",
   "Model": "Cali Crusher 2.1",
   "Type": "4 Piece",
   "Size": "2.35\"",
   "Color": "Black, Blue, Gold, Green, Red"
 },
 {
   "Manufacturer": "Cali Crusher",
   "Model": "Cali Crusher 2.2",
   "Type": "3 Piece",
   "Size": "1.85\"",
   "Color": "Black, Blue, Gold, Green, Red"
 },
 {
   "Manufacturer": "Cali Crusher",
   "Model": "Cali Crusher 2.3",
   "Type": "3 Piece",
   "Size": "2.35\"",
   "Color": "Black, Blue, Gold, Green, Red"
 },
 {
   "Manufacturer": "Cali Crusher",
   "Model": "Cali Crusher 2.4",
   "Type": "2 Piece",
   "Size": "1.85\"",
   "Color": "Black, Blue, Gold, Green, Red"
 },
 {
   "Manufacturer": "Cali Crusher",
   "Model": "Cali Crusher 2.5",
   "Type": "2 Piece",
   "Size": "2.35\"",
   "Color": "Black, Blue, Gold, Green, Red"
 },
 {
   "Manufacturer": "Cali Crusher",
   "Model": "Homegrown",
   "Type": "4 Piece",
   "Size": "1.85\"",
   "Color": "Light Blue, Black, Blue, Brown, Gray, Gold, Green, Violet, Pink, Red"
 },
 {
   "Manufacturer": "Cali Crusher",
   "Model": "Homegrown",
   "Type": "4 Piece",
   "Size": "2.35\"",
   "Color": "Light Blue, Black, Blue, Brown, Gray, Gold, Green, Violet, Pink, Red"
 },
 {
   "Manufacturer": "Cali Crusher",
   "Model": "Homegrown",
   "Type": "2 Piece",
   "Size": "2.35\"",
   "Color": "Light Blue, Black, Blue, Brown, Gray, Gold, Green, Violet, Pink, Red"
 },
 {
   "Manufacturer": "Cali Crusher",
   "Model": "Original Gansta",
   "Type": "4 Piece",
   "Size": "2\"",
   "Color": "Black, Blue, Gold, Green, Violet, Pink, Red, Silver"
 },
 {
   "Manufacturer": "Cali Crusher",
   "Model": "Original Gansta",
   "Type": "4 Piece",
   "Size": "2.5\"",
   "Color": "Black, Blue, Gold, Green, Violet, Pink, Red, Silver"
 },
 {
   "Manufacturer": "Cali Crusher",
   "Model": "Original Gansta",
   "Type": "2 Piece",
   "Size": "2\"",
   "Color": "Black, Gold, Violet"
 },
 {
   "Manufacturer": "Kannastör",
   "Model": "Multi-Chamber",
   "Type": "Regular",
   "Size": "1.5\"",
   "Color": "Silver + Matte Black"
 },
 {
   "Manufacturer": "Kannastör",
   "Model": "Multi-Chamber",
   "Type": "Regular",
   "Size": "2.5\"",
   "Color": "Silver + Matte Black, Matte Black"
 },
 {
   "Manufacturer": "Kannastör",
   "Model": "Multi-Chamber",
   "Type": "w/ Jar",
   "Size": "2.5\"",
   "Color": "Silver + Matte Black, Matte Black"
 },
 {
   "Manufacturer": "Kannastör",
   "Model": "Multi-Chamber",
   "Type": "w/ Clear Top",
   "Size": "2.5\"",
   "Color": "Silver + Matte Black"
 },
 {
   "Manufacturer": "Kannastör",
   "Model": "Multi-Chamber",
   "Type": "W/ Jar + Clear Top",
   "Size": "2.5\"",
   "Color": "Silver + Matte Black"
 }
];

let grinders = { };
let failsafe = 100;
let count = 0;

while (raw.length > 0 && failsafe > 0) {
  for (let i in raw) {
    let r = raw[i]
    if (grinders[r.Manufacturer] == undefined) {
      grinders[r.Manufacturer] = {};
    }
    if (grinders[r.Manufacturer][r.Model] == undefined) {
      grinders[r.Manufacturer][r.Model] = {};
    }
    if (grinders[r.Manufacturer][r.Model][r.Type] == undefined) {
      grinders[r.Manufacturer][r.Model][r.Type] = {};
    }
    if (grinders[r.Manufacturer][r.Model][r.Type][r.Size] == undefined) {
      grinders[r.Manufacturer][r.Model][r.Type][r.Size] = [];
    } else {
      let colors = r.Color.split(", ")
      grinders[r.Manufacturer][r.Model][r.Type][r.Size] = colors;
      raw.splice(i, 1);
    }
    count++
  }
  failsafe--;
}

console.log('final:', grinders);
console.log('raw:', raw);
console.log('count:', count);
console.log(failsafe);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImdyaW5kZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHBTY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9jb25zb2xlLmxvZygneWVwJyk7XG5jb25zdCBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnZHJ5aG9sbG93X0FwcCcsIFsnbmdSb3V0ZScsICduZ01hdGVyaWFsJywgJ25nU2FuaXRpemUnXSk7XG5cbmxldCB1c2VyID0gbnVsbDtcblxuYXBwLmNvbnRyb2xsZXIoJ05hdmlnYXRpb25Db250cm9sbGVyJywgWyckaHR0cCcsICckc2NvcGUnLCAnJGxvY2F0aW9uJywgJyRtZERpYWxvZycsICckbWRUb2FzdCcsZnVuY3Rpb24oJGh0dHAsICRzY29wZSwgJGxvY2F0aW9uLCAkbWREaWFsb2csICRtZFRvYXN0KSB7XG4gIC8vIHRoaXMudXNlciA9IHVzZXI7XG4gIC8vXG4gIC8vIHRoaXMubG9nb3V0ID0gKCkgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKCdsb2dvdXQnKTtcbiAgLy8gICBsb2NhbFN0b3JhZ2UuY2xlYXIoJ3Rva2VuJyk7XG4gIC8vICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIC8vIH1cbiAgLy9cbiAgLy8gdGhpcy5vcGVuTG9naW4gPSAoZXYpID0+IHtcbiAgLy8gICAkbWREaWFsb2cuc2hvdyh7XG4gIC8vICAgICBsb2NhbHM6IHtkYXRhVG9QYXNzOiB7fX0sXG4gIC8vICAgICBjb250cm9sbGVyOiBEaWFsb2dDb250cm9sbGVyLFxuICAvLyAgICAgY29udHJvbGxlckFzOiAnY3RybCcsXG4gIC8vICAgICB0ZW1wbGF0ZVVybDogJ3BhcnRpYWxzL2xvZ2luLmh0bWwnLFxuICAvLyAgICAgcGFyZW50OiBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQuYm9keSksXG4gIC8vICAgICB0YXJnZXRFdmVudDogZXYsXG4gIC8vICAgICBjbGlja091dHNpZGVUb0Nsb3NlOnRydWUsXG4gIC8vICAgfSlcbiAgLy8gICAudGhlbigobmV3SW5mbykgPT4ge1xuICAvLyAgICAgJGh0dHAoe1xuICAvLyAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAvLyAgICAgICAgIHVybDogYC91c2VyL2xvZ2luYCxcbiAgLy8gICAgICAgICBkYXRhOiB7IG5ld0luZm8gfVxuICAvLyAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgLy8gICAgICAgICAvL2NvbnNvbGUubG9nKCdyZXNwb25zZTonLCByZXNwb25zZSk7XG4gIC8vICAgICAgICAgLy9jb25zb2xlLmxvZygnZGF0YTonLCByZXNwb25zZS5kYXRhKTtcbiAgLy8gICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xuICAvLyAgICAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc2Z1bCBsb2dpbicpO1xuICAvLyAgICAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YS50b2tlbikpO1xuICAvLyAgICAgICAgICAgdXNlciA9IHJlc3BvbnNlLmRhdGEudXNlclxuICAvLyAgICAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgLy8gICAgICAgICAgIHRoaXMudXNlci5sb2dnZWQgPSB0cnVlO1xuICAvLyAgICAgICAgICAgLy9jb25zb2xlLmxvZyh1c2VyKTtcbiAgLy8gICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAvLyAgICAgICAgICAgICAkbWRUb2FzdC5zaG93KFxuICAvLyAgICAgICAgICAgICAgICRtZFRvYXN0LnNpbXBsZSgpXG4gIC8vICAgICAgICAgICAgICAgICAudGV4dENvbnRlbnQoYCAgIEhlbGxvLCAgICR7dXNlci5maXJzdH0hYClcbiAgLy8gICAgICAgICAgICAgICAgIC5wb3NpdGlvbihcImJvdHRvbSByaWdodFwiIClcbiAgLy8gICAgICAgICAgICAgICAgIC5oaWRlRGVsYXkoMzAwMClcbiAgLy8gICAgICAgICAgICAgKTtcbiAgLy8gICAgICAgICAgIH0sIDEwMDApO1xuICAvLyAgICAgICAgICAgJHNjb3BlLiRicm9hZGNhc3QoJ3VwZGF0ZUF1dGgnLCB7IGRhdGE6IHRoaXMudXNlciB9KVxuICAvLyAgICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgICByZXR1cm4gdGhpcy5vcGVuTG9naW4oZXYpXG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZygnbG9naW4gZXJyb3I6JywgZXJyb3IpO1xuICAvLyAgICAgICAgIHRoaXMub3BlbkxvZ2luKGV2KVxuICAvLyAgICAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignQ2F0Y2gnLCBlcnIpKVxuICAvLyAgIH0sIGZ1bmN0aW9uKCkge1xuICAvLyAgICAgY29uc29sZS5sb2coJ2NhbmNlbCBkaWFsb2cnKTs7XG4gIC8vICAgfSk7XG4gIC8vIH1cbiAgLy9cbiAgLy8gdGhpcy5vcGVuUmVnaXN0ZXIgPSAoZXYpID0+IHtcbiAgLy8gICAkbWREaWFsb2cuc2hvdyh7XG4gIC8vICAgICBsb2NhbHM6IHtkYXRhVG9QYXNzOiB7fX0sXG4gIC8vICAgICBjb250cm9sbGVyOiBEaWFsb2dDb250cm9sbGVyLFxuICAvLyAgICAgY29udHJvbGxlckFzOiAnY3RybCcsXG4gIC8vICAgICB0ZW1wbGF0ZVVybDogJ3BhcnRpYWxzL3JlZ2lzdGVyLmh0bWwnLFxuICAvLyAgICAgcGFyZW50OiBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQuYm9keSksXG4gIC8vICAgICB0YXJnZXRFdmVudDogZXYsXG4gIC8vICAgICBjbGlja091dHNpZGVUb0Nsb3NlOnRydWUsXG4gIC8vICAgfSlcbiAgLy8gICAudGhlbigobmV3SW5mbykgPT4ge1xuICAvLyAgICAgLy9jb25zb2xlLmxvZygncmVnaXN0ZXIgcmVxdWVzdDonLCBuZXdJbmZvKTtcbiAgLy8gICAgICRodHRwKHtcbiAgLy8gICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgLy8gICAgICAgICB1cmw6IGAvdXNlcmAsXG4gIC8vICAgICAgICAgZGF0YTogeyBuZXdJbmZvIH1cbiAgLy8gICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gIC8vICAgICAgICAgLy9jb25zb2xlLmxvZygncmVnaXN0ZXIgc3VjY2VzZnVsOicsIHJlc3BvbnNlLmRhdGEpO1xuICAvLyAgICAgICAgIHJldHVybiB0aGlzLm9wZW5Mb2dpbihldilcbiAgLy8gICAgICAgfSwgKGVycm9yKSA9PiB7XG4gIC8vICAgICAgICAgY29uc29sZS5sb2coJ2xvZ2luIGVycm9yOicsIGVycm9yKTtcbiAgLy8gICAgICAgICB0aGlzLm9wZW5SZWdpc3RlcihldilcbiAgLy8gICAgICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0NhdGNoJywgZXJyKSlcbiAgLy8gICB9LCBmdW5jdGlvbigpIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKCdjYW5jZWwgZGlhbG9nJyk7O1xuICAvLyAgIH0pO1xuICAvLyB9XG4gIC8vXG4gIC8vIHRoaXMuYXV0b0xvZ2luID0gKCkgPT4ge1xuICAvLyAgICRodHRwKHtcbiAgLy8gICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gIC8vICAgICAgIHVybDogYC91c2VyL2xvZ2luYCxcbiAgLy8gICAgICAgZGF0YTogeyBuZXdJbmZvOiB7IHVzZXJuYW1lOiAndGcnLCBwYXNzd29yZDogJ3RnJyB9IH1cbiAgLy8gICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAvLyAgICAgICAvL2NvbnNvbGUubG9nKCdyZXNwb25zZTonLCByZXNwb25zZSk7XG4gIC8vICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XG4gIC8vICAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc2Z1bCBsb2dpbicpO1xuICAvLyAgICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEudG9rZW4pKTtcbiAgLy8gICAgICAgICB1c2VyID0gcmVzcG9uc2UuZGF0YS51c2VyXG4gIC8vICAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgLy8gICAgICAgICB0aGlzLnVzZXIubG9nZ2VkID0gdHJ1ZTtcbiAgLy8gICAgICAgICAvL2NvbnNvbGUubG9nKHVzZXIpO1xuICAvLyAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAvLyAgICAgICAgICAgJG1kVG9hc3Quc2hvdyhcbiAgLy8gICAgICAgICAgICAgJG1kVG9hc3Quc2ltcGxlKClcbiAgLy8gICAgICAgICAgICAgICAudGV4dENvbnRlbnQoYCAgIEhlbGxvLCAgICR7dXNlci5maXJzdH0hYClcbiAgLy8gICAgICAgICAgICAgICAucG9zaXRpb24oXCJib3R0b20gcmlnaHRcIiApXG4gIC8vICAgICAgICAgICAgICAgLmhpZGVEZWxheSgzMDAwKVxuICAvLyAgICAgICAgICAgKTtcbiAgLy8gICAgICAgICB9LCAxMDAwKTtcbiAgLy8gICAgICAgICAkc2NvcGUuJGJyb2FkY2FzdCgndXBkYXRlQXV0aCcsIHsgZGF0YTogdGhpcy51c2VyIH0pXG4gIC8vICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgY29uc29sZS5sb2coJ2xvZ2luIGVycm9yJylcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKCdsb2dpbiBlcnJvcjonLCBlcnJvcik7XG4gIC8vICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0NhdGNoJywgZXJyKSlcbiAgLy8gfTtcbiAgLy8gaWYgKCRsb2NhdGlvbi5hYnNVcmwoKSA9PSAnaHR0cDovL2xvY2FsaG9zdDoxMTIyLycpIHtcbiAgLy8gICAvL3RoaXMuYXV0b0xvZ2luKClcbiAgLy8gfVxuICAvL1xuICAvLyB0aGlzLm5hdkxpbmsgPSAocGF0aCkgPT4ge1xuICAvLyAgIC8vY29uc29sZS5sb2coJ25hdkxpbmsnLCBwYXRoKTtcbiAgLy8gICAvL3RoaXMudG9Gcm9tID0gdW5kZWZpbmVkO1xuICAvLyAgIGlmICgkbG9jYXRpb24udXJsKCkgPT0gcGF0aCkge1xuICAvLyAgICAgJHNjb3BlLiRicm9hZGNhc3QoJ25hdkxpbmsnLCB7IGRhdGE6IHBhdGggfSk7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgICRsb2NhdGlvbi5wYXRoKHBhdGgpO1xuICAvLyAgIH07XG4gIC8vIH07XG5cbn1dKTtcblxuYXBwLmNvbnRyb2xsZXIoJ0hvbWVDb250cm9sbGVyJywgWyckaHR0cCcsICckcm91dGUnLCAnJHNjb3BlJywgJyRsb2NhdGlvbicsICckbWREaWFsb2cnLCAnJG1kVG9hc3QnLCBmdW5jdGlvbigkaHR0cCwgJHJvdXRlLCAkc2NvcGUsICRsb2NhdGlvbiwgJG1kRGlhbG9nLCAkbWRUb2FzdCkge1xuICB0aGlzLnRhYnMgPSBbXG4gICAgJ3N0YXJ0JywnY29udGFjdCcsICdqYXJzJywgJ2dsYXNzJywgJ2dyaW5kZXJzJ1xuICBdXG4gIHRoaXMucGFydGlhbHMgPSB7fTtcbiAgZm9yIChsZXQgdCBvZiB0aGlzLnRhYnMpIHtcbiAgICB0aGlzLnBhcnRpYWxzW3RdID0gYHBhcnRpYWxzLyR7dH0uaHRtbGA7XG4gIH1cblxuICB0aGlzLm5leHQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3llcCcpO1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCsrO1xuICB9XG5cbiAgdGhpcy5hdXRvU2VsZWN0ID0gKG9iaiwgaywgcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdhdXRvU2VsZWN0JywgJHNjb3BlKTtcbiAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgY29uc29sZS5sb2coa2V5cyk7XG4gICAgaWYgKGtleXMubGVuZ3RoID09IDEpIHtcbiAgICAgIC8vdGhpcy5uZXdJbmZvW2tdID0gb2JqW2tleXNbMF1dO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMuc3VibWl0ID0gKG5ld0luZm8pID0+IHtcbiAgICBjb25zb2xlLmxvZygnc3VtYml0OicsIG5ld0luZm8pO1xuICAgIHRoaXMuaW5mbyA9IG5ld0luZm87XG4gIH1cbiAgdGhpcy5ncmluZGVycyA9IGdyaW5kZXJzO1xuXG59XSk7XG5cbmFwcC5jb25maWcoWyckcm91dGVQcm92aWRlcicsJyRsb2NhdGlvblByb3ZpZGVyJywgJyRtZFRoZW1pbmdQcm92aWRlcicsIGZ1bmN0aW9uKCRyb3V0ZVByb3ZpZGVyLCRsb2NhdGlvblByb3ZpZGVyKSB7IC8vLCAkbWRUaGVtaW5nUHJvdmlkZXJcbiAgJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHsgZW5hYmxlZDogdHJ1ZSB9KTtcblxuICAkcm91dGVQcm92aWRlci53aGVuKCcvJywge1xuICAgIHRlbXBsYXRlVXJsOiAncGFydGlhbHMvaG9tZS5odG1sJyxcbiAgICBjb250cm9sbGVyOiAnSG9tZUNvbnRyb2xsZXIgYXMgY3RybCcsXG4gICAgY29udHJvbGxlckFzOiAnY3RybCdcbiAgfSk7XG5cbiAgLy8gJHJvdXRlUHJvdmlkZXIud2hlbignL3dvcmtjZW50ZXJzJywge1xuICAvLyAgIHRlbXBsYXRlVXJsOiAncGFydGlhbHMvd29ya2NlbnRlci5odG1sJyxcbiAgLy8gICBjb250cm9sbGVyOiAnV29ya0NlbnRlckNvbnRyb2xsZXIgYXMgY3RybCcsXG4gIC8vICAgY29udHJvbGxlckFzOiAnY3RybCdcbiAgLy8gfSk7XG5cbiAgLy8gJHJvdXRlUHJvdmlkZXIud2hlbignL2Fib3V0Jywge1xuICAvLyAgIHRlbXBsYXRlVXJsOiAncGFydGlhbHMvYWJvdXQuaHRtbCcsXG4gIC8vIH0pO1xuXG4gICRyb3V0ZVByb3ZpZGVyLm90aGVyd2lzZSh7XG4gICAgcmVkaXJlY3RUbzogJy8nXG4gIH0pO1xuXG4gIC8vICRtZFRoZW1pbmdQcm92aWRlci5kZWZpbmVQYWxldHRlKCdhbWF6aW5nR3JheScsIHtcbiAgLy8gICAnNTAnOiAnRDVENENGJyxcbiAgLy8gICAnMTAwJzogJ0Q1RDRDRicsXG4gIC8vICAgJzIwMCc6ICdENUQ0Q0YnLFxuICAvLyAgICczMDAnOiAnOEU4RDkyJyxcbiAgLy8gICAnNDAwJzogJzhFOEQ5MicsXG4gIC8vICAgJzUwMCc6ICc4RThEOTInLFxuICAvLyAgICc2MDAnOiAnM0U0QTYyJyxcbiAgLy8gICAnNzAwJzogJzNFNEE2MicsXG4gIC8vICAgJzgwMCc6ICczRTRBNjInLFxuICAvLyAgICc5MDAnOiAnM0U0QTYyJyxcbiAgLy8gICAnQTEwMCc6ICczRTRBNjInLFxuICAvLyAgICdBMjAwJzogJzNFNEE2MicsXG4gIC8vICAgJ0E0MDAnOiAnM0U0QTYyJyxcbiAgLy8gICAnQTcwMCc6ICczRTRBNjInLFxuICAvLyAgICdjb250cmFzdERlZmF1bHRDb2xvcic6ICdsaWdodCcsXG4gIC8vICAgJ2NvbnRyYXN0RGFya0NvbG9ycyc6IFsnNTAnLCAnMTAwJyxcbiAgLy8gICAgJzIwMCcsICczMDAnLCAnQTEwMCddXG4gIC8vICAgLy8gJ2NvbnRyYXN0TGlnaHRDb2xvcnMnOiB1bmRlZmluZWRcbiAgLy8gfSk7XG4gIC8vXG4gIC8vICRtZFRoZW1pbmdQcm92aWRlci5kZWZpbmVQYWxldHRlKCdhbWF6aW5nQmx1ZScsIHtcbiAgLy8gICAnNTAnOiAnQzRFMUYxJyxcbiAgLy8gICAnMTAwJzogJ0M0RTFGMScsXG4gIC8vICAgJzIwMCc6ICdDNEUxRjEnLFxuICAvLyAgICczMDAnOiAnMzk5N0Q3JyxcbiAgLy8gICAnNDAwJzogJzM5OTdENycsXG4gIC8vICAgJzUwMCc6ICczOTk3RDcnLFxuICAvLyAgICc2MDAnOiAnMUE0QTk2JyxcbiAgLy8gICAnNzAwJzogJzFBNEE5NicsXG4gIC8vICAgJzgwMCc6ICcxQTRBOTYnLFxuICAvLyAgICc5MDAnOiAnMUE0QTk2JyxcbiAgLy8gICAnQTEwMCc6ICcxQTRBOTYnLFxuICAvLyAgICdBMjAwJzogJzFBNEE5NicsXG4gIC8vICAgJ0E0MDAnOiAnMUE0QTk2JyxcbiAgLy8gICAnQTcwMCc6ICcxQTRBOTYnLFxuICAvLyAgICdjb250cmFzdERlZmF1bHRDb2xvcic6ICdsaWdodCcsXG4gIC8vICAgJ2NvbnRyYXN0RGFya0NvbG9ycyc6IFsnNTAnLCAnMTAwJyxcbiAgLy8gICAgJzIwMCcsICczMDAnLCAnQTEwMCddXG4gIC8vICAgLy8gJ2NvbnRyYXN0TGlnaHRDb2xvcnMnOiB1bmRlZmluZWRcbiAgLy8gfSk7XG5cbiAgLy8gJG1kVGhlbWluZ1Byb3ZpZGVyLnRoZW1lKCdkZWZhdWx0JylcbiAgLy8gICAucHJpbWFyeVBhbGV0dGUoJ2FtYXppbmdHcmF5Jywge1xuICAvLyAgICAgJ2RlZmF1bHQnOiAnNjAwJyxcbiAgLy8gICAgICdodWUtMSc6ICc0MDAnLFxuICAvLyAgICAgJ2h1ZS0yJzogJzEwMCcsXG4gIC8vICAgfSlcbiAgLy8gICAuYWNjZW50UGFsZXR0ZSgnYW1hemluZ0JsdWUnLCB7XG4gIC8vICAgICAnZGVmYXVsdCc6ICc2MDAnLFxuICAvLyAgICAgJ2h1ZS0xJzogJzQwMCcsXG4gIC8vICAgICAnaHVlLTInOiAnMTAwJyxcbiAgLy8gICB9KVxuICAvLyAud2FyblBhbGV0dGUoJ3JlZCcpO1xuXG59XSk7XG4iLCJsZXQgcmF3ID0gW1xuIHtcbiAgIFwiTWFudWZhY3R1cmVyXCI6IFwiS3Jha2VuXCIsXG4gICBcIk1vZGVsXCI6IFwiU29saWQgQ29sb3JcIixcbiAgIFwiVHlwZVwiOiBcIjQgUGllY2VcIixcbiAgIFwiU2l6ZVwiOiBcIjFcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiR3JheSwgVmlvbGV0LCBMaWdodCBCbHVlLCBHcmVlblwiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIktyYWtlblwiLFxuICAgXCJNb2RlbFwiOiBcIlNvbGlkIENvbG9yXCIsXG4gICBcIlR5cGVcIjogXCI0IFBpZWNlXCIsXG4gICBcIlNpemVcIjogXCIyLjJcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiR3JheSwgVmlvbGV0LCBMaWdodCBCbHVlLCBHcmVlblwiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIktyYWtlblwiLFxuICAgXCJNb2RlbFwiOiBcIlNvbGlkIENvbG9yXCIsXG4gICBcIlR5cGVcIjogXCI0IFBpZWNlXCIsXG4gICBcIlNpemVcIjogXCIyLjVcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiR3JheSwgTGlnaHQgQmx1ZSwgR29sZCwgR3JlZW5cIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJLcmFrZW5cIixcbiAgIFwiTW9kZWxcIjogXCJ3LyBTdGFzaCBXaW5kb3dzXCIsXG4gICBcIlR5cGVcIjogXCI0IFBpZWNlXCIsXG4gICBcIlNpemVcIjogXCIyXFxcIlwiLFxuICAgXCJDb2xvclwiOiBcIkJsYWNrXCJcbiB9LFxuIHtcbiAgIFwiTWFudWZhY3R1cmVyXCI6IFwiS3Jha2VuXCIsXG4gICBcIk1vZGVsXCI6IFwiRGlhbW9uZCBSaWRnZVwiLFxuICAgXCJUeXBlXCI6IFwiNCBQaWVjZVwiLFxuICAgXCJTaXplXCI6IFwiMi4yXFxcIlwiLFxuICAgXCJDb2xvclwiOiBcIkdyYXksIFZpb2xldCwgTGlnaHQgQmx1ZSwgR29sZCwgR3JlZW4sIFJlZCwgQmxhY2ssIFNpbHZlclwiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIktyYWtlblwiLFxuICAgXCJNb2RlbFwiOiBcIkRpYW1vbmQgUmlkZ2VcIixcbiAgIFwiVHlwZVwiOiBcIjQgUGllY2VcIixcbiAgIFwiU2l6ZVwiOiBcIjIuNVxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJHcmF5LCBWaW9sZXQsIExpZ2h0IEJsdWUsIEdvbGQsIEdyZWVuLCBSZWQsIEJsYWNrLCBTaWx2ZXJcIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJLcmFrZW5cIixcbiAgIFwiTW9kZWxcIjogXCJUaWVyZWRcIixcbiAgIFwiVHlwZVwiOiBcIjQgUGllY2VcIixcbiAgIFwiU2l6ZVwiOiBcIjIuMlxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJHcmVlbiwgR29sZCwgVmlvbGV0LCBCbGFjaywgTGlnaHQgQmx1ZSwgR3JheSwgUmVkXCJcbiB9LFxuIHtcbiAgIFwiTWFudWZhY3R1cmVyXCI6IFwiS3Jha2VuXCIsXG4gICBcIk1vZGVsXCI6IFwiVGllcmVkXCIsXG4gICBcIlR5cGVcIjogXCI0IFBpZWNlXCIsXG4gICBcIlNpemVcIjogXCIyLjVcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiR3JlZW4sIEdvbGQsIFZpb2xldCwgQmxhY2ssIExpZ2h0IEJsdWUsIEdyYXksIFJlZFwiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIktyYWtlblwiLFxuICAgXCJNb2RlbFwiOiBcIkhleFwiLFxuICAgXCJUeXBlXCI6IFwiNCBQaWVjZVwiLFxuICAgXCJTaXplXCI6IFwiMi4yXFxcIlwiLFxuICAgXCJDb2xvclwiOiBcIkJsdWUsIFJlZCwgUGluaywgQmxhY2ssIExpZ2h0IEJsdWUsIEdvbGQsIEdyZWVuLCBWaW9sZXRcIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJLcmFrZW5cIixcbiAgIFwiTW9kZWxcIjogXCJIZXhcIixcbiAgIFwiVHlwZVwiOiBcIjQgUGllY2VcIixcbiAgIFwiU2l6ZVwiOiBcIjIuNVxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJCbHVlLCBSZWQsIFBpbmssIEJsYWNrLCBMaWdodCBCbHVlLCBHb2xkLCBHcmVlbiwgVmlvbGV0XCJcbiB9LFxuIHtcbiAgIFwiTWFudWZhY3R1cmVyXCI6IFwiS3Jha2VuXCIsXG4gICBcIk1vZGVsXCI6IFwidy8gQ2xlYXIgVG9wICsgUHVzaCBCdXR0b24gQm90dG9tXCIsXG4gICBcIlR5cGVcIjogXCIyIFBpZWNlXCIsXG4gICBcIlNpemVcIjogXCIxLjVcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiQmxhY2tcIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJLcmFrZW5cIixcbiAgIFwiTW9kZWxcIjogXCJ3LyBDbGVhciBUb3AgKyBQdXNoIEJ1dHRvbiBCb3R0b21cIixcbiAgIFwiVHlwZVwiOiBcIjIgUGllY2VcIixcbiAgIFwiU2l6ZVwiOiBcIjEuNVxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJCbGFja1wiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIkNhbGkgQ3J1c2hlclwiLFxuICAgXCJNb2RlbFwiOiBcIkNhbGkgQ3J1c2hlciAyLjBcIixcbiAgIFwiVHlwZVwiOiBcIjQgUGllY2VcIixcbiAgIFwiU2l6ZVwiOiBcIjEuODVcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiQmxhY2ssIEJsdWUsIEdvbGQsIEdyZWVuLCBSZWRcIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJDYWxpIENydXNoZXJcIixcbiAgIFwiTW9kZWxcIjogXCJDYWxpIENydXNoZXIgMi4xXCIsXG4gICBcIlR5cGVcIjogXCI0IFBpZWNlXCIsXG4gICBcIlNpemVcIjogXCIyLjM1XFxcIlwiLFxuICAgXCJDb2xvclwiOiBcIkJsYWNrLCBCbHVlLCBHb2xkLCBHcmVlbiwgUmVkXCJcbiB9LFxuIHtcbiAgIFwiTWFudWZhY3R1cmVyXCI6IFwiQ2FsaSBDcnVzaGVyXCIsXG4gICBcIk1vZGVsXCI6IFwiQ2FsaSBDcnVzaGVyIDIuMlwiLFxuICAgXCJUeXBlXCI6IFwiMyBQaWVjZVwiLFxuICAgXCJTaXplXCI6IFwiMS44NVxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJCbGFjaywgQmx1ZSwgR29sZCwgR3JlZW4sIFJlZFwiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIkNhbGkgQ3J1c2hlclwiLFxuICAgXCJNb2RlbFwiOiBcIkNhbGkgQ3J1c2hlciAyLjNcIixcbiAgIFwiVHlwZVwiOiBcIjMgUGllY2VcIixcbiAgIFwiU2l6ZVwiOiBcIjIuMzVcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiQmxhY2ssIEJsdWUsIEdvbGQsIEdyZWVuLCBSZWRcIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJDYWxpIENydXNoZXJcIixcbiAgIFwiTW9kZWxcIjogXCJDYWxpIENydXNoZXIgMi40XCIsXG4gICBcIlR5cGVcIjogXCIyIFBpZWNlXCIsXG4gICBcIlNpemVcIjogXCIxLjg1XFxcIlwiLFxuICAgXCJDb2xvclwiOiBcIkJsYWNrLCBCbHVlLCBHb2xkLCBHcmVlbiwgUmVkXCJcbiB9LFxuIHtcbiAgIFwiTWFudWZhY3R1cmVyXCI6IFwiQ2FsaSBDcnVzaGVyXCIsXG4gICBcIk1vZGVsXCI6IFwiQ2FsaSBDcnVzaGVyIDIuNVwiLFxuICAgXCJUeXBlXCI6IFwiMiBQaWVjZVwiLFxuICAgXCJTaXplXCI6IFwiMi4zNVxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJCbGFjaywgQmx1ZSwgR29sZCwgR3JlZW4sIFJlZFwiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIkNhbGkgQ3J1c2hlclwiLFxuICAgXCJNb2RlbFwiOiBcIkhvbWVncm93blwiLFxuICAgXCJUeXBlXCI6IFwiNCBQaWVjZVwiLFxuICAgXCJTaXplXCI6IFwiMS44NVxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJMaWdodCBCbHVlLCBCbGFjaywgQmx1ZSwgQnJvd24sIEdyYXksIEdvbGQsIEdyZWVuLCBWaW9sZXQsIFBpbmssIFJlZFwiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIkNhbGkgQ3J1c2hlclwiLFxuICAgXCJNb2RlbFwiOiBcIkhvbWVncm93blwiLFxuICAgXCJUeXBlXCI6IFwiNCBQaWVjZVwiLFxuICAgXCJTaXplXCI6IFwiMi4zNVxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJMaWdodCBCbHVlLCBCbGFjaywgQmx1ZSwgQnJvd24sIEdyYXksIEdvbGQsIEdyZWVuLCBWaW9sZXQsIFBpbmssIFJlZFwiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIkNhbGkgQ3J1c2hlclwiLFxuICAgXCJNb2RlbFwiOiBcIkhvbWVncm93blwiLFxuICAgXCJUeXBlXCI6IFwiMiBQaWVjZVwiLFxuICAgXCJTaXplXCI6IFwiMi4zNVxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJMaWdodCBCbHVlLCBCbGFjaywgQmx1ZSwgQnJvd24sIEdyYXksIEdvbGQsIEdyZWVuLCBWaW9sZXQsIFBpbmssIFJlZFwiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIkNhbGkgQ3J1c2hlclwiLFxuICAgXCJNb2RlbFwiOiBcIk9yaWdpbmFsIEdhbnN0YVwiLFxuICAgXCJUeXBlXCI6IFwiNCBQaWVjZVwiLFxuICAgXCJTaXplXCI6IFwiMlxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJCbGFjaywgQmx1ZSwgR29sZCwgR3JlZW4sIFZpb2xldCwgUGluaywgUmVkLCBTaWx2ZXJcIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJDYWxpIENydXNoZXJcIixcbiAgIFwiTW9kZWxcIjogXCJPcmlnaW5hbCBHYW5zdGFcIixcbiAgIFwiVHlwZVwiOiBcIjQgUGllY2VcIixcbiAgIFwiU2l6ZVwiOiBcIjIuNVxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJCbGFjaywgQmx1ZSwgR29sZCwgR3JlZW4sIFZpb2xldCwgUGluaywgUmVkLCBTaWx2ZXJcIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJDYWxpIENydXNoZXJcIixcbiAgIFwiTW9kZWxcIjogXCJPcmlnaW5hbCBHYW5zdGFcIixcbiAgIFwiVHlwZVwiOiBcIjIgUGllY2VcIixcbiAgIFwiU2l6ZVwiOiBcIjJcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiQmxhY2ssIEdvbGQsIFZpb2xldFwiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIkthbm5hc3TDtnJcIixcbiAgIFwiTW9kZWxcIjogXCJNdWx0aS1DaGFtYmVyXCIsXG4gICBcIlR5cGVcIjogXCJSZWd1bGFyXCIsXG4gICBcIlNpemVcIjogXCIxLjVcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiU2lsdmVyICsgTWF0dGUgQmxhY2tcIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJLYW5uYXN0w7ZyXCIsXG4gICBcIk1vZGVsXCI6IFwiTXVsdGktQ2hhbWJlclwiLFxuICAgXCJUeXBlXCI6IFwiUmVndWxhclwiLFxuICAgXCJTaXplXCI6IFwiMi41XFxcIlwiLFxuICAgXCJDb2xvclwiOiBcIlNpbHZlciArIE1hdHRlIEJsYWNrLCBNYXR0ZSBCbGFja1wiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIkthbm5hc3TDtnJcIixcbiAgIFwiTW9kZWxcIjogXCJNdWx0aS1DaGFtYmVyXCIsXG4gICBcIlR5cGVcIjogXCJ3LyBKYXJcIixcbiAgIFwiU2l6ZVwiOiBcIjIuNVxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJTaWx2ZXIgKyBNYXR0ZSBCbGFjaywgTWF0dGUgQmxhY2tcIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJLYW5uYXN0w7ZyXCIsXG4gICBcIk1vZGVsXCI6IFwiTXVsdGktQ2hhbWJlclwiLFxuICAgXCJUeXBlXCI6IFwidy8gQ2xlYXIgVG9wXCIsXG4gICBcIlNpemVcIjogXCIyLjVcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiU2lsdmVyICsgTWF0dGUgQmxhY2tcIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJLYW5uYXN0w7ZyXCIsXG4gICBcIk1vZGVsXCI6IFwiTXVsdGktQ2hhbWJlclwiLFxuICAgXCJUeXBlXCI6IFwiVy8gSmFyICsgQ2xlYXIgVG9wXCIsXG4gICBcIlNpemVcIjogXCIyLjVcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiU2lsdmVyICsgTWF0dGUgQmxhY2tcIlxuIH1cbl07XG5cbmxldCBncmluZGVycyA9IHsgfTtcbmxldCBmYWlsc2FmZSA9IDEwMDtcbmxldCBjb3VudCA9IDA7XG5cbndoaWxlIChyYXcubGVuZ3RoID4gMCAmJiBmYWlsc2FmZSA+IDApIHtcbiAgZm9yIChsZXQgaSBpbiByYXcpIHtcbiAgICBsZXQgciA9IHJhd1tpXVxuICAgIGlmIChncmluZGVyc1tyLk1hbnVmYWN0dXJlcl0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICBncmluZGVyc1tyLk1hbnVmYWN0dXJlcl0gPSB7fTtcbiAgICB9XG4gICAgaWYgKGdyaW5kZXJzW3IuTWFudWZhY3R1cmVyXVtyLk1vZGVsXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgIGdyaW5kZXJzW3IuTWFudWZhY3R1cmVyXVtyLk1vZGVsXSA9IHt9O1xuICAgIH1cbiAgICBpZiAoZ3JpbmRlcnNbci5NYW51ZmFjdHVyZXJdW3IuTW9kZWxdW3IuVHlwZV0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICBncmluZGVyc1tyLk1hbnVmYWN0dXJlcl1bci5Nb2RlbF1bci5UeXBlXSA9IHt9O1xuICAgIH1cbiAgICBpZiAoZ3JpbmRlcnNbci5NYW51ZmFjdHVyZXJdW3IuTW9kZWxdW3IuVHlwZV1bci5TaXplXSA9PSB1bmRlZmluZWQpIHtcbiAgICAgIGdyaW5kZXJzW3IuTWFudWZhY3R1cmVyXVtyLk1vZGVsXVtyLlR5cGVdW3IuU2l6ZV0gPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGNvbG9ycyA9IHIuQ29sb3Iuc3BsaXQoXCIsIFwiKVxuICAgICAgZ3JpbmRlcnNbci5NYW51ZmFjdHVyZXJdW3IuTW9kZWxdW3IuVHlwZV1bci5TaXplXSA9IGNvbG9ycztcbiAgICAgIHJhdy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICAgIGNvdW50KytcbiAgfVxuICBmYWlsc2FmZS0tO1xufVxuXG5jb25zb2xlLmxvZygnZmluYWw6JywgZ3JpbmRlcnMpO1xuY29uc29sZS5sb2coJ3JhdzonLCByYXcpO1xuY29uc29sZS5sb2coJ2NvdW50OicsIGNvdW50KTtcbmNvbnNvbGUubG9nKGZhaWxzYWZlKTtcbiJdfQ==