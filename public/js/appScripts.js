//console.log('yep');
const app = angular.module('dryhollow_App', ['ngRoute', 'ngMaterial', 'ngSanitize']);

let user = null;

const validCard = (num) => {
  let str = String(num)
  let arr = str.split('').reverse()
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 != 0) {
      tempNum = arr[i]*2;
      if (tempNum > 9) {
        sum += (tempNum-10+1)
      } else {
        sum += tempNum
      }
    } else {
      sum += Number(arr[i])
    }
  }
  return sum % 10 === 0
};

const getLen = (num) => {
  return num.toString().length;
}

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

// let grinders = { };
// let failsafe = 100;
// let count = 0;
//
// while (raw.length > 0 && failsafe > 0) {
//   for (let i in raw) {
//     let r = raw[i]
//     if (grinders[r.Manufacturer] == undefined) {
//       grinders[r.Manufacturer] = {};
//     }
//     if (grinders[r.Manufacturer][r.Model] == undefined) {
//       grinders[r.Manufacturer][r.Model] = {};
//     }
//     if (grinders[r.Manufacturer][r.Model][r.Type] == undefined) {
//       grinders[r.Manufacturer][r.Model][r.Type] = {};
//     }
//     if (grinders[r.Manufacturer][r.Model][r.Type][r.Size] == undefined) {
//       grinders[r.Manufacturer][r.Model][r.Type][r.Size] = [];
//     } else {
//       let colors = r.Color.split(", ")
//       grinders[r.Manufacturer][r.Model][r.Type][r.Size] = colors;
//       raw.splice(i, 1);
//     }
//     count++
//   }
//   failsafe--;
// }

// console.log('final:', grinders);
// console.log('raw:', raw);
// console.log('count:', count);
// console.log(failsafe);

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
    'start','contact', 'boxes', 'card', 'confirm'
  ]
  this.partials = {};
  for (let t of this.tabs) {
    this.partials[t] = `partials/${t}.html`;
  }

  this.next = () => {
    console.log('back');
    this.selectedIndex++;
  }

  this.back = () => {
    console.log('back');
    this.selectedIndex--;
  }

  this.autoSelect = (obj, k, s) => {
    console.log('autoSelect', $scope);
    let keys = Object.keys(obj);
    console.log(keys);
    if (keys.length == 1) {
      //this.newInfo[k] = obj[keys[0]];
    }
  }

  this.order = {}

  if ($location.absUrl() == 'http://localhost:1122/') {
    $scope.newInfo = {
      address1: "42 Wallaby Way",
      address2: "Unit B",
      city: "Austin",
      email: "t@g.com",
      first: "Tyler",
      last: "Goodman",
      state: "TX",
      zip: 78704
    }
  }

  this.subContact = (newInfo) => {
    //if (this.order.contact == undefined) {
      this.order.contact = newInfo;
      console.log('sub-next:', this.order);
      this.selectedIndex++;
    //} else {
      //console.log('nope');
    //}
  }

  this.subCashe = (cashe) => {
    console.log(cashe);
    if (cashe) {
      this.order.cashe = cashe;
      this.selectedIndex++;
    }
  }

   this.subCC = (cc) => {
    console.log(cc);
    if (cc.zip && cc.cvv) {
      console.log('valid bits');
      if (validCard(cc.number)) {
        this.order.cc = cc;
        this.selectedIndex++;
        this.validCard = 'Credit Card OK!'
      } else {
        alert("The credit card you entered is not a valid card number...");
      }
    }
  };

  this.submit = (newInfo) => {
    console.log('sumbit:', newInfo);
    this.submitted = true;
    this.info = newInfo;
    alert('Nice Job!');
    location.reload();
  }
  //this.grinders = grinders;

  this.states = {
    "AL": "Alabama",
    "AK": "Alaska",
    "AS": "American Samoa",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District Of Columbia",
    "FM": "Federated States Of Micronesia",
    "FL": "Florida",
    "GA": "Georgia",
    "GU": "Guam",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MH": "Marshall Islands",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "MP": "Northern Mariana Islands",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PW": "Palau",
    "PA": "Pennsylvania",
    "PR": "Puerto Rico",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VI": "Virgin Islands",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
  }

  //this.selectedIndex = 3;

}]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImdyaW5kZXJzLmpzIiwibmF2Q3RybC5qcyIsInRhYkN0cmwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHBTY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9jb25zb2xlLmxvZygneWVwJyk7XG5jb25zdCBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnZHJ5aG9sbG93X0FwcCcsIFsnbmdSb3V0ZScsICduZ01hdGVyaWFsJywgJ25nU2FuaXRpemUnXSk7XG5cbmxldCB1c2VyID0gbnVsbDtcblxuY29uc3QgdmFsaWRDYXJkID0gKG51bSkgPT4ge1xuICBsZXQgc3RyID0gU3RyaW5nKG51bSlcbiAgbGV0IGFyciA9IHN0ci5zcGxpdCgnJykucmV2ZXJzZSgpXG4gIGxldCBzdW0gPSAwXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGkgJSAyICE9IDApIHtcbiAgICAgIHRlbXBOdW0gPSBhcnJbaV0qMjtcbiAgICAgIGlmICh0ZW1wTnVtID4gOSkge1xuICAgICAgICBzdW0gKz0gKHRlbXBOdW0tMTArMSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1bSArPSB0ZW1wTnVtXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1bSArPSBOdW1iZXIoYXJyW2ldKVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3VtICUgMTAgPT09IDBcbn07XG5cbmNvbnN0IGdldExlbiA9IChudW0pID0+IHtcbiAgcmV0dXJuIG51bS50b1N0cmluZygpLmxlbmd0aDtcbn1cblxuYXBwLmNvbmZpZyhbJyRyb3V0ZVByb3ZpZGVyJywnJGxvY2F0aW9uUHJvdmlkZXInLCAnJG1kVGhlbWluZ1Byb3ZpZGVyJywgZnVuY3Rpb24oJHJvdXRlUHJvdmlkZXIsJGxvY2F0aW9uUHJvdmlkZXIpIHsgLy8sICRtZFRoZW1pbmdQcm92aWRlclxuICAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUoeyBlbmFibGVkOiB0cnVlIH0pO1xuXG4gICRyb3V0ZVByb3ZpZGVyLndoZW4oJy8nLCB7XG4gICAgdGVtcGxhdGVVcmw6ICdwYXJ0aWFscy9ob21lLmh0bWwnLFxuICAgIGNvbnRyb2xsZXI6ICdIb21lQ29udHJvbGxlciBhcyBjdHJsJyxcbiAgICBjb250cm9sbGVyQXM6ICdjdHJsJ1xuICB9KTtcblxuICAvLyAkcm91dGVQcm92aWRlci53aGVuKCcvd29ya2NlbnRlcnMnLCB7XG4gIC8vICAgdGVtcGxhdGVVcmw6ICdwYXJ0aWFscy93b3JrY2VudGVyLmh0bWwnLFxuICAvLyAgIGNvbnRyb2xsZXI6ICdXb3JrQ2VudGVyQ29udHJvbGxlciBhcyBjdHJsJyxcbiAgLy8gICBjb250cm9sbGVyQXM6ICdjdHJsJ1xuICAvLyB9KTtcblxuICAvLyAkcm91dGVQcm92aWRlci53aGVuKCcvYWJvdXQnLCB7XG4gIC8vICAgdGVtcGxhdGVVcmw6ICdwYXJ0aWFscy9hYm91dC5odG1sJyxcbiAgLy8gfSk7XG5cbiAgJHJvdXRlUHJvdmlkZXIub3RoZXJ3aXNlKHtcbiAgICByZWRpcmVjdFRvOiAnLydcbiAgfSk7XG5cbiAgLy8gJG1kVGhlbWluZ1Byb3ZpZGVyLmRlZmluZVBhbGV0dGUoJ2FtYXppbmdHcmF5Jywge1xuICAvLyAgICc1MCc6ICdENUQ0Q0YnLFxuICAvLyAgICcxMDAnOiAnRDVENENGJyxcbiAgLy8gICAnMjAwJzogJ0Q1RDRDRicsXG4gIC8vICAgJzMwMCc6ICc4RThEOTInLFxuICAvLyAgICc0MDAnOiAnOEU4RDkyJyxcbiAgLy8gICAnNTAwJzogJzhFOEQ5MicsXG4gIC8vICAgJzYwMCc6ICczRTRBNjInLFxuICAvLyAgICc3MDAnOiAnM0U0QTYyJyxcbiAgLy8gICAnODAwJzogJzNFNEE2MicsXG4gIC8vICAgJzkwMCc6ICczRTRBNjInLFxuICAvLyAgICdBMTAwJzogJzNFNEE2MicsXG4gIC8vICAgJ0EyMDAnOiAnM0U0QTYyJyxcbiAgLy8gICAnQTQwMCc6ICczRTRBNjInLFxuICAvLyAgICdBNzAwJzogJzNFNEE2MicsXG4gIC8vICAgJ2NvbnRyYXN0RGVmYXVsdENvbG9yJzogJ2xpZ2h0JyxcbiAgLy8gICAnY29udHJhc3REYXJrQ29sb3JzJzogWyc1MCcsICcxMDAnLFxuICAvLyAgICAnMjAwJywgJzMwMCcsICdBMTAwJ11cbiAgLy8gICAvLyAnY29udHJhc3RMaWdodENvbG9ycyc6IHVuZGVmaW5lZFxuICAvLyB9KTtcbiAgLy9cbiAgLy8gJG1kVGhlbWluZ1Byb3ZpZGVyLmRlZmluZVBhbGV0dGUoJ2FtYXppbmdCbHVlJywge1xuICAvLyAgICc1MCc6ICdDNEUxRjEnLFxuICAvLyAgICcxMDAnOiAnQzRFMUYxJyxcbiAgLy8gICAnMjAwJzogJ0M0RTFGMScsXG4gIC8vICAgJzMwMCc6ICczOTk3RDcnLFxuICAvLyAgICc0MDAnOiAnMzk5N0Q3JyxcbiAgLy8gICAnNTAwJzogJzM5OTdENycsXG4gIC8vICAgJzYwMCc6ICcxQTRBOTYnLFxuICAvLyAgICc3MDAnOiAnMUE0QTk2JyxcbiAgLy8gICAnODAwJzogJzFBNEE5NicsXG4gIC8vICAgJzkwMCc6ICcxQTRBOTYnLFxuICAvLyAgICdBMTAwJzogJzFBNEE5NicsXG4gIC8vICAgJ0EyMDAnOiAnMUE0QTk2JyxcbiAgLy8gICAnQTQwMCc6ICcxQTRBOTYnLFxuICAvLyAgICdBNzAwJzogJzFBNEE5NicsXG4gIC8vICAgJ2NvbnRyYXN0RGVmYXVsdENvbG9yJzogJ2xpZ2h0JyxcbiAgLy8gICAnY29udHJhc3REYXJrQ29sb3JzJzogWyc1MCcsICcxMDAnLFxuICAvLyAgICAnMjAwJywgJzMwMCcsICdBMTAwJ11cbiAgLy8gICAvLyAnY29udHJhc3RMaWdodENvbG9ycyc6IHVuZGVmaW5lZFxuICAvLyB9KTtcblxuICAvLyAkbWRUaGVtaW5nUHJvdmlkZXIudGhlbWUoJ2RlZmF1bHQnKVxuICAvLyAgIC5wcmltYXJ5UGFsZXR0ZSgnYW1hemluZ0dyYXknLCB7XG4gIC8vICAgICAnZGVmYXVsdCc6ICc2MDAnLFxuICAvLyAgICAgJ2h1ZS0xJzogJzQwMCcsXG4gIC8vICAgICAnaHVlLTInOiAnMTAwJyxcbiAgLy8gICB9KVxuICAvLyAgIC5hY2NlbnRQYWxldHRlKCdhbWF6aW5nQmx1ZScsIHtcbiAgLy8gICAgICdkZWZhdWx0JzogJzYwMCcsXG4gIC8vICAgICAnaHVlLTEnOiAnNDAwJyxcbiAgLy8gICAgICdodWUtMic6ICcxMDAnLFxuICAvLyAgIH0pXG4gIC8vIC53YXJuUGFsZXR0ZSgncmVkJyk7XG5cbn1dKTtcbiIsImxldCByYXcgPSBbXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJLcmFrZW5cIixcbiAgIFwiTW9kZWxcIjogXCJTb2xpZCBDb2xvclwiLFxuICAgXCJUeXBlXCI6IFwiNCBQaWVjZVwiLFxuICAgXCJTaXplXCI6IFwiMVxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJHcmF5LCBWaW9sZXQsIExpZ2h0IEJsdWUsIEdyZWVuXCJcbiB9LFxuIHtcbiAgIFwiTWFudWZhY3R1cmVyXCI6IFwiS3Jha2VuXCIsXG4gICBcIk1vZGVsXCI6IFwiU29saWQgQ29sb3JcIixcbiAgIFwiVHlwZVwiOiBcIjQgUGllY2VcIixcbiAgIFwiU2l6ZVwiOiBcIjIuMlxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJHcmF5LCBWaW9sZXQsIExpZ2h0IEJsdWUsIEdyZWVuXCJcbiB9LFxuIHtcbiAgIFwiTWFudWZhY3R1cmVyXCI6IFwiS3Jha2VuXCIsXG4gICBcIk1vZGVsXCI6IFwiU29saWQgQ29sb3JcIixcbiAgIFwiVHlwZVwiOiBcIjQgUGllY2VcIixcbiAgIFwiU2l6ZVwiOiBcIjIuNVxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJHcmF5LCBMaWdodCBCbHVlLCBHb2xkLCBHcmVlblwiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIktyYWtlblwiLFxuICAgXCJNb2RlbFwiOiBcIncvIFN0YXNoIFdpbmRvd3NcIixcbiAgIFwiVHlwZVwiOiBcIjQgUGllY2VcIixcbiAgIFwiU2l6ZVwiOiBcIjJcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiQmxhY2tcIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJLcmFrZW5cIixcbiAgIFwiTW9kZWxcIjogXCJEaWFtb25kIFJpZGdlXCIsXG4gICBcIlR5cGVcIjogXCI0IFBpZWNlXCIsXG4gICBcIlNpemVcIjogXCIyLjJcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiR3JheSwgVmlvbGV0LCBMaWdodCBCbHVlLCBHb2xkLCBHcmVlbiwgUmVkLCBCbGFjaywgU2lsdmVyXCJcbiB9LFxuIHtcbiAgIFwiTWFudWZhY3R1cmVyXCI6IFwiS3Jha2VuXCIsXG4gICBcIk1vZGVsXCI6IFwiRGlhbW9uZCBSaWRnZVwiLFxuICAgXCJUeXBlXCI6IFwiNCBQaWVjZVwiLFxuICAgXCJTaXplXCI6IFwiMi41XFxcIlwiLFxuICAgXCJDb2xvclwiOiBcIkdyYXksIFZpb2xldCwgTGlnaHQgQmx1ZSwgR29sZCwgR3JlZW4sIFJlZCwgQmxhY2ssIFNpbHZlclwiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIktyYWtlblwiLFxuICAgXCJNb2RlbFwiOiBcIlRpZXJlZFwiLFxuICAgXCJUeXBlXCI6IFwiNCBQaWVjZVwiLFxuICAgXCJTaXplXCI6IFwiMi4yXFxcIlwiLFxuICAgXCJDb2xvclwiOiBcIkdyZWVuLCBHb2xkLCBWaW9sZXQsIEJsYWNrLCBMaWdodCBCbHVlLCBHcmF5LCBSZWRcIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJLcmFrZW5cIixcbiAgIFwiTW9kZWxcIjogXCJUaWVyZWRcIixcbiAgIFwiVHlwZVwiOiBcIjQgUGllY2VcIixcbiAgIFwiU2l6ZVwiOiBcIjIuNVxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJHcmVlbiwgR29sZCwgVmlvbGV0LCBCbGFjaywgTGlnaHQgQmx1ZSwgR3JheSwgUmVkXCJcbiB9LFxuIHtcbiAgIFwiTWFudWZhY3R1cmVyXCI6IFwiS3Jha2VuXCIsXG4gICBcIk1vZGVsXCI6IFwiSGV4XCIsXG4gICBcIlR5cGVcIjogXCI0IFBpZWNlXCIsXG4gICBcIlNpemVcIjogXCIyLjJcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiQmx1ZSwgUmVkLCBQaW5rLCBCbGFjaywgTGlnaHQgQmx1ZSwgR29sZCwgR3JlZW4sIFZpb2xldFwiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIktyYWtlblwiLFxuICAgXCJNb2RlbFwiOiBcIkhleFwiLFxuICAgXCJUeXBlXCI6IFwiNCBQaWVjZVwiLFxuICAgXCJTaXplXCI6IFwiMi41XFxcIlwiLFxuICAgXCJDb2xvclwiOiBcIkJsdWUsIFJlZCwgUGluaywgQmxhY2ssIExpZ2h0IEJsdWUsIEdvbGQsIEdyZWVuLCBWaW9sZXRcIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJLcmFrZW5cIixcbiAgIFwiTW9kZWxcIjogXCJ3LyBDbGVhciBUb3AgKyBQdXNoIEJ1dHRvbiBCb3R0b21cIixcbiAgIFwiVHlwZVwiOiBcIjIgUGllY2VcIixcbiAgIFwiU2l6ZVwiOiBcIjEuNVxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJCbGFja1wiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIktyYWtlblwiLFxuICAgXCJNb2RlbFwiOiBcIncvIENsZWFyIFRvcCArIFB1c2ggQnV0dG9uIEJvdHRvbVwiLFxuICAgXCJUeXBlXCI6IFwiMiBQaWVjZVwiLFxuICAgXCJTaXplXCI6IFwiMS41XFxcIlwiLFxuICAgXCJDb2xvclwiOiBcIkJsYWNrXCJcbiB9LFxuIHtcbiAgIFwiTWFudWZhY3R1cmVyXCI6IFwiQ2FsaSBDcnVzaGVyXCIsXG4gICBcIk1vZGVsXCI6IFwiQ2FsaSBDcnVzaGVyIDIuMFwiLFxuICAgXCJUeXBlXCI6IFwiNCBQaWVjZVwiLFxuICAgXCJTaXplXCI6IFwiMS44NVxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJCbGFjaywgQmx1ZSwgR29sZCwgR3JlZW4sIFJlZFwiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIkNhbGkgQ3J1c2hlclwiLFxuICAgXCJNb2RlbFwiOiBcIkNhbGkgQ3J1c2hlciAyLjFcIixcbiAgIFwiVHlwZVwiOiBcIjQgUGllY2VcIixcbiAgIFwiU2l6ZVwiOiBcIjIuMzVcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiQmxhY2ssIEJsdWUsIEdvbGQsIEdyZWVuLCBSZWRcIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJDYWxpIENydXNoZXJcIixcbiAgIFwiTW9kZWxcIjogXCJDYWxpIENydXNoZXIgMi4yXCIsXG4gICBcIlR5cGVcIjogXCIzIFBpZWNlXCIsXG4gICBcIlNpemVcIjogXCIxLjg1XFxcIlwiLFxuICAgXCJDb2xvclwiOiBcIkJsYWNrLCBCbHVlLCBHb2xkLCBHcmVlbiwgUmVkXCJcbiB9LFxuIHtcbiAgIFwiTWFudWZhY3R1cmVyXCI6IFwiQ2FsaSBDcnVzaGVyXCIsXG4gICBcIk1vZGVsXCI6IFwiQ2FsaSBDcnVzaGVyIDIuM1wiLFxuICAgXCJUeXBlXCI6IFwiMyBQaWVjZVwiLFxuICAgXCJTaXplXCI6IFwiMi4zNVxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJCbGFjaywgQmx1ZSwgR29sZCwgR3JlZW4sIFJlZFwiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIkNhbGkgQ3J1c2hlclwiLFxuICAgXCJNb2RlbFwiOiBcIkNhbGkgQ3J1c2hlciAyLjRcIixcbiAgIFwiVHlwZVwiOiBcIjIgUGllY2VcIixcbiAgIFwiU2l6ZVwiOiBcIjEuODVcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiQmxhY2ssIEJsdWUsIEdvbGQsIEdyZWVuLCBSZWRcIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJDYWxpIENydXNoZXJcIixcbiAgIFwiTW9kZWxcIjogXCJDYWxpIENydXNoZXIgMi41XCIsXG4gICBcIlR5cGVcIjogXCIyIFBpZWNlXCIsXG4gICBcIlNpemVcIjogXCIyLjM1XFxcIlwiLFxuICAgXCJDb2xvclwiOiBcIkJsYWNrLCBCbHVlLCBHb2xkLCBHcmVlbiwgUmVkXCJcbiB9LFxuIHtcbiAgIFwiTWFudWZhY3R1cmVyXCI6IFwiQ2FsaSBDcnVzaGVyXCIsXG4gICBcIk1vZGVsXCI6IFwiSG9tZWdyb3duXCIsXG4gICBcIlR5cGVcIjogXCI0IFBpZWNlXCIsXG4gICBcIlNpemVcIjogXCIxLjg1XFxcIlwiLFxuICAgXCJDb2xvclwiOiBcIkxpZ2h0IEJsdWUsIEJsYWNrLCBCbHVlLCBCcm93biwgR3JheSwgR29sZCwgR3JlZW4sIFZpb2xldCwgUGluaywgUmVkXCJcbiB9LFxuIHtcbiAgIFwiTWFudWZhY3R1cmVyXCI6IFwiQ2FsaSBDcnVzaGVyXCIsXG4gICBcIk1vZGVsXCI6IFwiSG9tZWdyb3duXCIsXG4gICBcIlR5cGVcIjogXCI0IFBpZWNlXCIsXG4gICBcIlNpemVcIjogXCIyLjM1XFxcIlwiLFxuICAgXCJDb2xvclwiOiBcIkxpZ2h0IEJsdWUsIEJsYWNrLCBCbHVlLCBCcm93biwgR3JheSwgR29sZCwgR3JlZW4sIFZpb2xldCwgUGluaywgUmVkXCJcbiB9LFxuIHtcbiAgIFwiTWFudWZhY3R1cmVyXCI6IFwiQ2FsaSBDcnVzaGVyXCIsXG4gICBcIk1vZGVsXCI6IFwiSG9tZWdyb3duXCIsXG4gICBcIlR5cGVcIjogXCIyIFBpZWNlXCIsXG4gICBcIlNpemVcIjogXCIyLjM1XFxcIlwiLFxuICAgXCJDb2xvclwiOiBcIkxpZ2h0IEJsdWUsIEJsYWNrLCBCbHVlLCBCcm93biwgR3JheSwgR29sZCwgR3JlZW4sIFZpb2xldCwgUGluaywgUmVkXCJcbiB9LFxuIHtcbiAgIFwiTWFudWZhY3R1cmVyXCI6IFwiQ2FsaSBDcnVzaGVyXCIsXG4gICBcIk1vZGVsXCI6IFwiT3JpZ2luYWwgR2Fuc3RhXCIsXG4gICBcIlR5cGVcIjogXCI0IFBpZWNlXCIsXG4gICBcIlNpemVcIjogXCIyXFxcIlwiLFxuICAgXCJDb2xvclwiOiBcIkJsYWNrLCBCbHVlLCBHb2xkLCBHcmVlbiwgVmlvbGV0LCBQaW5rLCBSZWQsIFNpbHZlclwiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIkNhbGkgQ3J1c2hlclwiLFxuICAgXCJNb2RlbFwiOiBcIk9yaWdpbmFsIEdhbnN0YVwiLFxuICAgXCJUeXBlXCI6IFwiNCBQaWVjZVwiLFxuICAgXCJTaXplXCI6IFwiMi41XFxcIlwiLFxuICAgXCJDb2xvclwiOiBcIkJsYWNrLCBCbHVlLCBHb2xkLCBHcmVlbiwgVmlvbGV0LCBQaW5rLCBSZWQsIFNpbHZlclwiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIkNhbGkgQ3J1c2hlclwiLFxuICAgXCJNb2RlbFwiOiBcIk9yaWdpbmFsIEdhbnN0YVwiLFxuICAgXCJUeXBlXCI6IFwiMiBQaWVjZVwiLFxuICAgXCJTaXplXCI6IFwiMlxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJCbGFjaywgR29sZCwgVmlvbGV0XCJcbiB9LFxuIHtcbiAgIFwiTWFudWZhY3R1cmVyXCI6IFwiS2FubmFzdMO2clwiLFxuICAgXCJNb2RlbFwiOiBcIk11bHRpLUNoYW1iZXJcIixcbiAgIFwiVHlwZVwiOiBcIlJlZ3VsYXJcIixcbiAgIFwiU2l6ZVwiOiBcIjEuNVxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJTaWx2ZXIgKyBNYXR0ZSBCbGFja1wiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIkthbm5hc3TDtnJcIixcbiAgIFwiTW9kZWxcIjogXCJNdWx0aS1DaGFtYmVyXCIsXG4gICBcIlR5cGVcIjogXCJSZWd1bGFyXCIsXG4gICBcIlNpemVcIjogXCIyLjVcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiU2lsdmVyICsgTWF0dGUgQmxhY2ssIE1hdHRlIEJsYWNrXCJcbiB9LFxuIHtcbiAgIFwiTWFudWZhY3R1cmVyXCI6IFwiS2FubmFzdMO2clwiLFxuICAgXCJNb2RlbFwiOiBcIk11bHRpLUNoYW1iZXJcIixcbiAgIFwiVHlwZVwiOiBcIncvIEphclwiLFxuICAgXCJTaXplXCI6IFwiMi41XFxcIlwiLFxuICAgXCJDb2xvclwiOiBcIlNpbHZlciArIE1hdHRlIEJsYWNrLCBNYXR0ZSBCbGFja1wiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIkthbm5hc3TDtnJcIixcbiAgIFwiTW9kZWxcIjogXCJNdWx0aS1DaGFtYmVyXCIsXG4gICBcIlR5cGVcIjogXCJ3LyBDbGVhciBUb3BcIixcbiAgIFwiU2l6ZVwiOiBcIjIuNVxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJTaWx2ZXIgKyBNYXR0ZSBCbGFja1wiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIkthbm5hc3TDtnJcIixcbiAgIFwiTW9kZWxcIjogXCJNdWx0aS1DaGFtYmVyXCIsXG4gICBcIlR5cGVcIjogXCJXLyBKYXIgKyBDbGVhciBUb3BcIixcbiAgIFwiU2l6ZVwiOiBcIjIuNVxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJTaWx2ZXIgKyBNYXR0ZSBCbGFja1wiXG4gfVxuXTtcblxuLy8gbGV0IGdyaW5kZXJzID0geyB9O1xuLy8gbGV0IGZhaWxzYWZlID0gMTAwO1xuLy8gbGV0IGNvdW50ID0gMDtcbi8vXG4vLyB3aGlsZSAocmF3Lmxlbmd0aCA+IDAgJiYgZmFpbHNhZmUgPiAwKSB7XG4vLyAgIGZvciAobGV0IGkgaW4gcmF3KSB7XG4vLyAgICAgbGV0IHIgPSByYXdbaV1cbi8vICAgICBpZiAoZ3JpbmRlcnNbci5NYW51ZmFjdHVyZXJdID09IHVuZGVmaW5lZCkge1xuLy8gICAgICAgZ3JpbmRlcnNbci5NYW51ZmFjdHVyZXJdID0ge307XG4vLyAgICAgfVxuLy8gICAgIGlmIChncmluZGVyc1tyLk1hbnVmYWN0dXJlcl1bci5Nb2RlbF0gPT0gdW5kZWZpbmVkKSB7XG4vLyAgICAgICBncmluZGVyc1tyLk1hbnVmYWN0dXJlcl1bci5Nb2RlbF0gPSB7fTtcbi8vICAgICB9XG4vLyAgICAgaWYgKGdyaW5kZXJzW3IuTWFudWZhY3R1cmVyXVtyLk1vZGVsXVtyLlR5cGVdID09IHVuZGVmaW5lZCkge1xuLy8gICAgICAgZ3JpbmRlcnNbci5NYW51ZmFjdHVyZXJdW3IuTW9kZWxdW3IuVHlwZV0gPSB7fTtcbi8vICAgICB9XG4vLyAgICAgaWYgKGdyaW5kZXJzW3IuTWFudWZhY3R1cmVyXVtyLk1vZGVsXVtyLlR5cGVdW3IuU2l6ZV0gPT0gdW5kZWZpbmVkKSB7XG4vLyAgICAgICBncmluZGVyc1tyLk1hbnVmYWN0dXJlcl1bci5Nb2RlbF1bci5UeXBlXVtyLlNpemVdID0gW107XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIGxldCBjb2xvcnMgPSByLkNvbG9yLnNwbGl0KFwiLCBcIilcbi8vICAgICAgIGdyaW5kZXJzW3IuTWFudWZhY3R1cmVyXVtyLk1vZGVsXVtyLlR5cGVdW3IuU2l6ZV0gPSBjb2xvcnM7XG4vLyAgICAgICByYXcuc3BsaWNlKGksIDEpO1xuLy8gICAgIH1cbi8vICAgICBjb3VudCsrXG4vLyAgIH1cbi8vICAgZmFpbHNhZmUtLTtcbi8vIH1cblxuLy8gY29uc29sZS5sb2coJ2ZpbmFsOicsIGdyaW5kZXJzKTtcbi8vIGNvbnNvbGUubG9nKCdyYXc6JywgcmF3KTtcbi8vIGNvbnNvbGUubG9nKCdjb3VudDonLCBjb3VudCk7XG4vLyBjb25zb2xlLmxvZyhmYWlsc2FmZSk7XG4iLCJhcHAuY29udHJvbGxlcignTmF2aWdhdGlvbkNvbnRyb2xsZXInLCBbJyRodHRwJywgJyRzY29wZScsICckbG9jYXRpb24nLCAnJG1kRGlhbG9nJywgJyRtZFRvYXN0JyxmdW5jdGlvbigkaHR0cCwgJHNjb3BlLCAkbG9jYXRpb24sICRtZERpYWxvZywgJG1kVG9hc3QpIHtcbiAgLy8gdGhpcy51c2VyID0gdXNlcjtcbiAgLy9cbiAgLy8gdGhpcy5sb2dvdXQgPSAoKSA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coJ2xvZ291dCcpO1xuICAvLyAgIGxvY2FsU3RvcmFnZS5jbGVhcigndG9rZW4nKTtcbiAgLy8gICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgLy8gfVxuICAvL1xuICAvLyB0aGlzLm9wZW5Mb2dpbiA9IChldikgPT4ge1xuICAvLyAgICRtZERpYWxvZy5zaG93KHtcbiAgLy8gICAgIGxvY2Fsczoge2RhdGFUb1Bhc3M6IHt9fSxcbiAgLy8gICAgIGNvbnRyb2xsZXI6IERpYWxvZ0NvbnRyb2xsZXIsXG4gIC8vICAgICBjb250cm9sbGVyQXM6ICdjdHJsJyxcbiAgLy8gICAgIHRlbXBsYXRlVXJsOiAncGFydGlhbHMvbG9naW4uaHRtbCcsXG4gIC8vICAgICBwYXJlbnQ6IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5ib2R5KSxcbiAgLy8gICAgIHRhcmdldEV2ZW50OiBldixcbiAgLy8gICAgIGNsaWNrT3V0c2lkZVRvQ2xvc2U6dHJ1ZSxcbiAgLy8gICB9KVxuICAvLyAgIC50aGVuKChuZXdJbmZvKSA9PiB7XG4gIC8vICAgICAkaHR0cCh7XG4gIC8vICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gIC8vICAgICAgICAgdXJsOiBgL3VzZXIvbG9naW5gLFxuICAvLyAgICAgICAgIGRhdGE6IHsgbmV3SW5mbyB9XG4gIC8vICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAvLyAgICAgICAgIC8vY29uc29sZS5sb2coJ3Jlc3BvbnNlOicsIHJlc3BvbnNlKTtcbiAgLy8gICAgICAgICAvL2NvbnNvbGUubG9nKCdkYXRhOicsIHJlc3BvbnNlLmRhdGEpO1xuICAvLyAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XG4gIC8vICAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzZnVsIGxvZ2luJyk7XG4gIC8vICAgICAgICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhLnRva2VuKSk7XG4gIC8vICAgICAgICAgICB1c2VyID0gcmVzcG9uc2UuZGF0YS51c2VyXG4gIC8vICAgICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAvLyAgICAgICAgICAgdGhpcy51c2VyLmxvZ2dlZCA9IHRydWU7XG4gIC8vICAgICAgICAgICAvL2NvbnNvbGUubG9nKHVzZXIpO1xuICAvLyAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gIC8vICAgICAgICAgICAgICRtZFRvYXN0LnNob3coXG4gIC8vICAgICAgICAgICAgICAgJG1kVG9hc3Quc2ltcGxlKClcbiAgLy8gICAgICAgICAgICAgICAgIC50ZXh0Q29udGVudChgICAgSGVsbG8sICAgJHt1c2VyLmZpcnN0fSFgKVxuICAvLyAgICAgICAgICAgICAgICAgLnBvc2l0aW9uKFwiYm90dG9tIHJpZ2h0XCIgKVxuICAvLyAgICAgICAgICAgICAgICAgLmhpZGVEZWxheSgzMDAwKVxuICAvLyAgICAgICAgICAgICApO1xuICAvLyAgICAgICAgICAgfSwgMTAwMCk7XG4gIC8vICAgICAgICAgICAkc2NvcGUuJGJyb2FkY2FzdCgndXBkYXRlQXV0aCcsIHsgZGF0YTogdGhpcy51c2VyIH0pXG4gIC8vICAgICAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICAgIHJldHVybiB0aGlzLm9wZW5Mb2dpbihldilcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdsb2dpbiBlcnJvcjonLCBlcnJvcik7XG4gIC8vICAgICAgICAgdGhpcy5vcGVuTG9naW4oZXYpXG4gIC8vICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdDYXRjaCcsIGVycikpXG4gIC8vICAgfSwgZnVuY3Rpb24oKSB7XG4gIC8vICAgICBjb25zb2xlLmxvZygnY2FuY2VsIGRpYWxvZycpOztcbiAgLy8gICB9KTtcbiAgLy8gfVxuICAvL1xuICAvLyB0aGlzLm9wZW5SZWdpc3RlciA9IChldikgPT4ge1xuICAvLyAgICRtZERpYWxvZy5zaG93KHtcbiAgLy8gICAgIGxvY2Fsczoge2RhdGFUb1Bhc3M6IHt9fSxcbiAgLy8gICAgIGNvbnRyb2xsZXI6IERpYWxvZ0NvbnRyb2xsZXIsXG4gIC8vICAgICBjb250cm9sbGVyQXM6ICdjdHJsJyxcbiAgLy8gICAgIHRlbXBsYXRlVXJsOiAncGFydGlhbHMvcmVnaXN0ZXIuaHRtbCcsXG4gIC8vICAgICBwYXJlbnQ6IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5ib2R5KSxcbiAgLy8gICAgIHRhcmdldEV2ZW50OiBldixcbiAgLy8gICAgIGNsaWNrT3V0c2lkZVRvQ2xvc2U6dHJ1ZSxcbiAgLy8gICB9KVxuICAvLyAgIC50aGVuKChuZXdJbmZvKSA9PiB7XG4gIC8vICAgICAvL2NvbnNvbGUubG9nKCdyZWdpc3RlciByZXF1ZXN0OicsIG5ld0luZm8pO1xuICAvLyAgICAgJGh0dHAoe1xuICAvLyAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAvLyAgICAgICAgIHVybDogYC91c2VyYCxcbiAgLy8gICAgICAgICBkYXRhOiB7IG5ld0luZm8gfVxuICAvLyAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgLy8gICAgICAgICAvL2NvbnNvbGUubG9nKCdyZWdpc3RlciBzdWNjZXNmdWw6JywgcmVzcG9uc2UuZGF0YSk7XG4gIC8vICAgICAgICAgcmV0dXJuIHRoaXMub3BlbkxvZ2luKGV2KVxuICAvLyAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZygnbG9naW4gZXJyb3I6JywgZXJyb3IpO1xuICAvLyAgICAgICAgIHRoaXMub3BlblJlZ2lzdGVyKGV2KVxuICAvLyAgICAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignQ2F0Y2gnLCBlcnIpKVxuICAvLyAgIH0sIGZ1bmN0aW9uKCkge1xuICAvLyAgICAgY29uc29sZS5sb2coJ2NhbmNlbCBkaWFsb2cnKTs7XG4gIC8vICAgfSk7XG4gIC8vIH1cbiAgLy9cbiAgLy8gdGhpcy5hdXRvTG9naW4gPSAoKSA9PiB7XG4gIC8vICAgJGh0dHAoe1xuICAvLyAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgLy8gICAgICAgdXJsOiBgL3VzZXIvbG9naW5gLFxuICAvLyAgICAgICBkYXRhOiB7IG5ld0luZm86IHsgdXNlcm5hbWU6ICd0ZycsIHBhc3N3b3JkOiAndGcnIH0gfVxuICAvLyAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gIC8vICAgICAgIC8vY29uc29sZS5sb2coJ3Jlc3BvbnNlOicsIHJlc3BvbnNlKTtcbiAgLy8gICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzZnVsIGxvZ2luJyk7XG4gIC8vICAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YS50b2tlbikpO1xuICAvLyAgICAgICAgIHVzZXIgPSByZXNwb25zZS5kYXRhLnVzZXJcbiAgLy8gICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAvLyAgICAgICAgIHRoaXMudXNlci5sb2dnZWQgPSB0cnVlO1xuICAvLyAgICAgICAgIC8vY29uc29sZS5sb2codXNlcik7XG4gIC8vICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gIC8vICAgICAgICAgICAkbWRUb2FzdC5zaG93KFxuICAvLyAgICAgICAgICAgICAkbWRUb2FzdC5zaW1wbGUoKVxuICAvLyAgICAgICAgICAgICAgIC50ZXh0Q29udGVudChgICAgSGVsbG8sICAgJHt1c2VyLmZpcnN0fSFgKVxuICAvLyAgICAgICAgICAgICAgIC5wb3NpdGlvbihcImJvdHRvbSByaWdodFwiIClcbiAgLy8gICAgICAgICAgICAgICAuaGlkZURlbGF5KDMwMDApXG4gIC8vICAgICAgICAgICApO1xuICAvLyAgICAgICAgIH0sIDEwMDApO1xuICAvLyAgICAgICAgICRzY29wZS4kYnJvYWRjYXN0KCd1cGRhdGVBdXRoJywgeyBkYXRhOiB0aGlzLnVzZXIgfSlcbiAgLy8gICAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZygnbG9naW4gZXJyb3InKVxuICAvLyAgICAgICB9XG4gIC8vICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgLy8gICAgICAgY29uc29sZS5sb2coJ2xvZ2luIGVycm9yOicsIGVycm9yKTtcbiAgLy8gICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignQ2F0Y2gnLCBlcnIpKVxuICAvLyB9O1xuICAvLyBpZiAoJGxvY2F0aW9uLmFic1VybCgpID09ICdodHRwOi8vbG9jYWxob3N0OjExMjIvJykge1xuICAvLyAgIC8vdGhpcy5hdXRvTG9naW4oKVxuICAvLyB9XG4gIC8vXG4gIC8vIHRoaXMubmF2TGluayA9IChwYXRoKSA9PiB7XG4gIC8vICAgLy9jb25zb2xlLmxvZygnbmF2TGluaycsIHBhdGgpO1xuICAvLyAgIC8vdGhpcy50b0Zyb20gPSB1bmRlZmluZWQ7XG4gIC8vICAgaWYgKCRsb2NhdGlvbi51cmwoKSA9PSBwYXRoKSB7XG4gIC8vICAgICAkc2NvcGUuJGJyb2FkY2FzdCgnbmF2TGluaycsIHsgZGF0YTogcGF0aCB9KTtcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgJGxvY2F0aW9uLnBhdGgocGF0aCk7XG4gIC8vICAgfTtcbiAgLy8gfTtcblxufV0pO1xuIiwiYXBwLmNvbnRyb2xsZXIoJ0hvbWVDb250cm9sbGVyJywgWyckaHR0cCcsICckcm91dGUnLCAnJHNjb3BlJywgJyRsb2NhdGlvbicsICckbWREaWFsb2cnLCAnJG1kVG9hc3QnLCBmdW5jdGlvbigkaHR0cCwgJHJvdXRlLCAkc2NvcGUsICRsb2NhdGlvbiwgJG1kRGlhbG9nLCAkbWRUb2FzdCkge1xuICB0aGlzLnRhYnMgPSBbXG4gICAgJ3N0YXJ0JywnY29udGFjdCcsICdib3hlcycsICdjYXJkJywgJ2NvbmZpcm0nXG4gIF1cbiAgdGhpcy5wYXJ0aWFscyA9IHt9O1xuICBmb3IgKGxldCB0IG9mIHRoaXMudGFicykge1xuICAgIHRoaXMucGFydGlhbHNbdF0gPSBgcGFydGlhbHMvJHt0fS5odG1sYDtcbiAgfVxuXG4gIHRoaXMubmV4dCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnYmFjaycpO1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCsrO1xuICB9XG5cbiAgdGhpcy5iYWNrID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdiYWNrJyk7XG4gICAgdGhpcy5zZWxlY3RlZEluZGV4LS07XG4gIH1cblxuICB0aGlzLmF1dG9TZWxlY3QgPSAob2JqLCBrLCBzKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2F1dG9TZWxlY3QnLCAkc2NvcGUpO1xuICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICBjb25zb2xlLmxvZyhrZXlzKTtcbiAgICBpZiAoa2V5cy5sZW5ndGggPT0gMSkge1xuICAgICAgLy90aGlzLm5ld0luZm9ba10gPSBvYmpba2V5c1swXV07XG4gICAgfVxuICB9XG5cbiAgdGhpcy5vcmRlciA9IHt9XG5cbiAgaWYgKCRsb2NhdGlvbi5hYnNVcmwoKSA9PSAnaHR0cDovL2xvY2FsaG9zdDoxMTIyLycpIHtcbiAgICAkc2NvcGUubmV3SW5mbyA9IHtcbiAgICAgIGFkZHJlc3MxOiBcIjQyIFdhbGxhYnkgV2F5XCIsXG4gICAgICBhZGRyZXNzMjogXCJVbml0IEJcIixcbiAgICAgIGNpdHk6IFwiQXVzdGluXCIsXG4gICAgICBlbWFpbDogXCJ0QGcuY29tXCIsXG4gICAgICBmaXJzdDogXCJUeWxlclwiLFxuICAgICAgbGFzdDogXCJHb29kbWFuXCIsXG4gICAgICBzdGF0ZTogXCJUWFwiLFxuICAgICAgemlwOiA3ODcwNFxuICAgIH1cbiAgfVxuXG4gIHRoaXMuc3ViQ29udGFjdCA9IChuZXdJbmZvKSA9PiB7XG4gICAgLy9pZiAodGhpcy5vcmRlci5jb250YWN0ID09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5vcmRlci5jb250YWN0ID0gbmV3SW5mbztcbiAgICAgIGNvbnNvbGUubG9nKCdzdWItbmV4dDonLCB0aGlzLm9yZGVyKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCsrO1xuICAgIC8vfSBlbHNlIHtcbiAgICAgIC8vY29uc29sZS5sb2coJ25vcGUnKTtcbiAgICAvL31cbiAgfVxuXG4gIHRoaXMuc3ViQ2FzaGUgPSAoY2FzaGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjYXNoZSk7XG4gICAgaWYgKGNhc2hlKSB7XG4gICAgICB0aGlzLm9yZGVyLmNhc2hlID0gY2FzaGU7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXgrKztcbiAgICB9XG4gIH1cblxuICAgdGhpcy5zdWJDQyA9IChjYykgPT4ge1xuICAgIGNvbnNvbGUubG9nKGNjKTtcbiAgICBpZiAoY2MuemlwICYmIGNjLmN2dikge1xuICAgICAgY29uc29sZS5sb2coJ3ZhbGlkIGJpdHMnKTtcbiAgICAgIGlmICh2YWxpZENhcmQoY2MubnVtYmVyKSkge1xuICAgICAgICB0aGlzLm9yZGVyLmNjID0gY2M7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCsrO1xuICAgICAgICB0aGlzLnZhbGlkQ2FyZCA9ICdDcmVkaXQgQ2FyZCBPSyEnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChcIlRoZSBjcmVkaXQgY2FyZCB5b3UgZW50ZXJlZCBpcyBub3QgYSB2YWxpZCBjYXJkIG51bWJlci4uLlwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdGhpcy5zdWJtaXQgPSAobmV3SW5mbykgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdzdW1iaXQ6JywgbmV3SW5mbyk7XG4gICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xuICAgIHRoaXMuaW5mbyA9IG5ld0luZm87XG4gICAgYWxlcnQoJ05pY2UgSm9iIScpO1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9XG4gIC8vdGhpcy5ncmluZGVycyA9IGdyaW5kZXJzO1xuXG4gIHRoaXMuc3RhdGVzID0ge1xuICAgIFwiQUxcIjogXCJBbGFiYW1hXCIsXG4gICAgXCJBS1wiOiBcIkFsYXNrYVwiLFxuICAgIFwiQVNcIjogXCJBbWVyaWNhbiBTYW1vYVwiLFxuICAgIFwiQVpcIjogXCJBcml6b25hXCIsXG4gICAgXCJBUlwiOiBcIkFya2Fuc2FzXCIsXG4gICAgXCJDQVwiOiBcIkNhbGlmb3JuaWFcIixcbiAgICBcIkNPXCI6IFwiQ29sb3JhZG9cIixcbiAgICBcIkNUXCI6IFwiQ29ubmVjdGljdXRcIixcbiAgICBcIkRFXCI6IFwiRGVsYXdhcmVcIixcbiAgICBcIkRDXCI6IFwiRGlzdHJpY3QgT2YgQ29sdW1iaWFcIixcbiAgICBcIkZNXCI6IFwiRmVkZXJhdGVkIFN0YXRlcyBPZiBNaWNyb25lc2lhXCIsXG4gICAgXCJGTFwiOiBcIkZsb3JpZGFcIixcbiAgICBcIkdBXCI6IFwiR2VvcmdpYVwiLFxuICAgIFwiR1VcIjogXCJHdWFtXCIsXG4gICAgXCJISVwiOiBcIkhhd2FpaVwiLFxuICAgIFwiSURcIjogXCJJZGFob1wiLFxuICAgIFwiSUxcIjogXCJJbGxpbm9pc1wiLFxuICAgIFwiSU5cIjogXCJJbmRpYW5hXCIsXG4gICAgXCJJQVwiOiBcIklvd2FcIixcbiAgICBcIktTXCI6IFwiS2Fuc2FzXCIsXG4gICAgXCJLWVwiOiBcIktlbnR1Y2t5XCIsXG4gICAgXCJMQVwiOiBcIkxvdWlzaWFuYVwiLFxuICAgIFwiTUVcIjogXCJNYWluZVwiLFxuICAgIFwiTUhcIjogXCJNYXJzaGFsbCBJc2xhbmRzXCIsXG4gICAgXCJNRFwiOiBcIk1hcnlsYW5kXCIsXG4gICAgXCJNQVwiOiBcIk1hc3NhY2h1c2V0dHNcIixcbiAgICBcIk1JXCI6IFwiTWljaGlnYW5cIixcbiAgICBcIk1OXCI6IFwiTWlubmVzb3RhXCIsXG4gICAgXCJNU1wiOiBcIk1pc3Npc3NpcHBpXCIsXG4gICAgXCJNT1wiOiBcIk1pc3NvdXJpXCIsXG4gICAgXCJNVFwiOiBcIk1vbnRhbmFcIixcbiAgICBcIk5FXCI6IFwiTmVicmFza2FcIixcbiAgICBcIk5WXCI6IFwiTmV2YWRhXCIsXG4gICAgXCJOSFwiOiBcIk5ldyBIYW1wc2hpcmVcIixcbiAgICBcIk5KXCI6IFwiTmV3IEplcnNleVwiLFxuICAgIFwiTk1cIjogXCJOZXcgTWV4aWNvXCIsXG4gICAgXCJOWVwiOiBcIk5ldyBZb3JrXCIsXG4gICAgXCJOQ1wiOiBcIk5vcnRoIENhcm9saW5hXCIsXG4gICAgXCJORFwiOiBcIk5vcnRoIERha290YVwiLFxuICAgIFwiTVBcIjogXCJOb3J0aGVybiBNYXJpYW5hIElzbGFuZHNcIixcbiAgICBcIk9IXCI6IFwiT2hpb1wiLFxuICAgIFwiT0tcIjogXCJPa2xhaG9tYVwiLFxuICAgIFwiT1JcIjogXCJPcmVnb25cIixcbiAgICBcIlBXXCI6IFwiUGFsYXVcIixcbiAgICBcIlBBXCI6IFwiUGVubnN5bHZhbmlhXCIsXG4gICAgXCJQUlwiOiBcIlB1ZXJ0byBSaWNvXCIsXG4gICAgXCJSSVwiOiBcIlJob2RlIElzbGFuZFwiLFxuICAgIFwiU0NcIjogXCJTb3V0aCBDYXJvbGluYVwiLFxuICAgIFwiU0RcIjogXCJTb3V0aCBEYWtvdGFcIixcbiAgICBcIlROXCI6IFwiVGVubmVzc2VlXCIsXG4gICAgXCJUWFwiOiBcIlRleGFzXCIsXG4gICAgXCJVVFwiOiBcIlV0YWhcIixcbiAgICBcIlZUXCI6IFwiVmVybW9udFwiLFxuICAgIFwiVklcIjogXCJWaXJnaW4gSXNsYW5kc1wiLFxuICAgIFwiVkFcIjogXCJWaXJnaW5pYVwiLFxuICAgIFwiV0FcIjogXCJXYXNoaW5ndG9uXCIsXG4gICAgXCJXVlwiOiBcIldlc3QgVmlyZ2luaWFcIixcbiAgICBcIldJXCI6IFwiV2lzY29uc2luXCIsXG4gICAgXCJXWVwiOiBcIld5b21pbmdcIlxuICB9XG5cbiAgLy90aGlzLnNlbGVjdGVkSW5kZXggPSAzO1xuXG59XSk7XG4iXX0=
