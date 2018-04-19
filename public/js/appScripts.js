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
  this.active = {
    'start': false,
    'contact': false,
    'boxes': false,
    'card': false,
    'confirm': false
  }
  this.partials = {};
  for (let t of this.tabs) {
    this.partials[t] = `partials/${t}.html`;
  }

  this.next = () => {
    console.log('next');
    this.active['contact'] = false;
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
    $scope.cc = {
      number: 4465400347917041,
      zip: 12345,
      cvv: 123
    }
  }

  this.subContact = (newInfo) => {
    //if (this.order.contact == undefined) {
      this.order.contact = newInfo;
      console.log('sub-next:', this.order);
      this.active['boxes'] = false;
      this.advance();
      //setTimeout(() => { this.advance(); }, 500);
    //} else {
      //console.log('nope');
    //}
  }

  this.subCashe = (cashe) => {
    console.log(cashe);
    if (cashe) {
      this.order.cashe = cashe;
      this.active['card'] = false;
      this.advance();
      // setTimeout(() => { this.advance(); }, 500);
    }
  }

  this.subCC = (cc) => {
    console.log(cc);
    if (cc.zip && cc.cvv) {
      console.log('valid bits');
      if (validCard(cc.number)) {
        this.order.cc = cc;
        this.active['confirm'] = false;
        this.advance();
        // setTimeout(() => { this.advance(); }, 500);
        this.validCard = 'Credit Card OK!'
      } else {
        alert("The credit card you entered is not a valid card number...");
      }
    }
  };

  this.submit = (newInfo) => {
    console.log('sumbit:', newInfo);
    $http({
      method: 'POST',
      url: `/order`,
      data: newInfo
    }).then(response => {
      console.log('succesful post', response.data);
      this.submitted = true;
      this.info = newInfo;
      alert('Nice Job!');
      location.reload();
    }).catch((error) => {
      console.log('error:', error);
      alert('Something went wrong...')
    }).catch(err => console.error('Catch', err))

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

  this.advance = () => {
    console.log('advance');
    this.selectedIndex++;
  }

}]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImdyaW5kZXJzLmpzIiwibmF2Q3RybC5qcyIsInRhYkN0cmwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwU2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vY29uc29sZS5sb2coJ3llcCcpO1xuY29uc3QgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2RyeWhvbGxvd19BcHAnLCBbJ25nUm91dGUnLCAnbmdNYXRlcmlhbCcsICduZ1Nhbml0aXplJ10pO1xuXG5sZXQgdXNlciA9IG51bGw7XG5cbmNvbnN0IHZhbGlkQ2FyZCA9IChudW0pID0+IHtcbiAgbGV0IHN0ciA9IFN0cmluZyhudW0pXG4gIGxldCBhcnIgPSBzdHIuc3BsaXQoJycpLnJldmVyc2UoKVxuICBsZXQgc3VtID0gMFxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChpICUgMiAhPSAwKSB7XG4gICAgICB0ZW1wTnVtID0gYXJyW2ldKjI7XG4gICAgICBpZiAodGVtcE51bSA+IDkpIHtcbiAgICAgICAgc3VtICs9ICh0ZW1wTnVtLTEwKzEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdW0gKz0gdGVtcE51bVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdW0gKz0gTnVtYmVyKGFycltpXSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN1bSAlIDEwID09PSAwXG59O1xuXG5jb25zdCBnZXRMZW4gPSAobnVtKSA9PiB7XG4gIHJldHVybiBudW0udG9TdHJpbmcoKS5sZW5ndGg7XG59XG5cbmFwcC5jb25maWcoWyckcm91dGVQcm92aWRlcicsJyRsb2NhdGlvblByb3ZpZGVyJywgJyRtZFRoZW1pbmdQcm92aWRlcicsIGZ1bmN0aW9uKCRyb3V0ZVByb3ZpZGVyLCRsb2NhdGlvblByb3ZpZGVyKSB7IC8vLCAkbWRUaGVtaW5nUHJvdmlkZXJcbiAgJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHsgZW5hYmxlZDogdHJ1ZSB9KTtcblxuICAkcm91dGVQcm92aWRlci53aGVuKCcvJywge1xuICAgIHRlbXBsYXRlVXJsOiAncGFydGlhbHMvaG9tZS5odG1sJyxcbiAgICBjb250cm9sbGVyOiAnSG9tZUNvbnRyb2xsZXIgYXMgY3RybCcsXG4gICAgY29udHJvbGxlckFzOiAnY3RybCdcbiAgfSk7XG5cbiAgLy8gJHJvdXRlUHJvdmlkZXIud2hlbignL3dvcmtjZW50ZXJzJywge1xuICAvLyAgIHRlbXBsYXRlVXJsOiAncGFydGlhbHMvd29ya2NlbnRlci5odG1sJyxcbiAgLy8gICBjb250cm9sbGVyOiAnV29ya0NlbnRlckNvbnRyb2xsZXIgYXMgY3RybCcsXG4gIC8vICAgY29udHJvbGxlckFzOiAnY3RybCdcbiAgLy8gfSk7XG5cbiAgLy8gJHJvdXRlUHJvdmlkZXIud2hlbignL2Fib3V0Jywge1xuICAvLyAgIHRlbXBsYXRlVXJsOiAncGFydGlhbHMvYWJvdXQuaHRtbCcsXG4gIC8vIH0pO1xuXG4gICRyb3V0ZVByb3ZpZGVyLm90aGVyd2lzZSh7XG4gICAgcmVkaXJlY3RUbzogJy8nXG4gIH0pO1xuXG4gIC8vICRtZFRoZW1pbmdQcm92aWRlci5kZWZpbmVQYWxldHRlKCdhbWF6aW5nR3JheScsIHtcbiAgLy8gICAnNTAnOiAnRDVENENGJyxcbiAgLy8gICAnMTAwJzogJ0Q1RDRDRicsXG4gIC8vICAgJzIwMCc6ICdENUQ0Q0YnLFxuICAvLyAgICczMDAnOiAnOEU4RDkyJyxcbiAgLy8gICAnNDAwJzogJzhFOEQ5MicsXG4gIC8vICAgJzUwMCc6ICc4RThEOTInLFxuICAvLyAgICc2MDAnOiAnM0U0QTYyJyxcbiAgLy8gICAnNzAwJzogJzNFNEE2MicsXG4gIC8vICAgJzgwMCc6ICczRTRBNjInLFxuICAvLyAgICc5MDAnOiAnM0U0QTYyJyxcbiAgLy8gICAnQTEwMCc6ICczRTRBNjInLFxuICAvLyAgICdBMjAwJzogJzNFNEE2MicsXG4gIC8vICAgJ0E0MDAnOiAnM0U0QTYyJyxcbiAgLy8gICAnQTcwMCc6ICczRTRBNjInLFxuICAvLyAgICdjb250cmFzdERlZmF1bHRDb2xvcic6ICdsaWdodCcsXG4gIC8vICAgJ2NvbnRyYXN0RGFya0NvbG9ycyc6IFsnNTAnLCAnMTAwJyxcbiAgLy8gICAgJzIwMCcsICczMDAnLCAnQTEwMCddXG4gIC8vICAgLy8gJ2NvbnRyYXN0TGlnaHRDb2xvcnMnOiB1bmRlZmluZWRcbiAgLy8gfSk7XG4gIC8vXG4gIC8vICRtZFRoZW1pbmdQcm92aWRlci5kZWZpbmVQYWxldHRlKCdhbWF6aW5nQmx1ZScsIHtcbiAgLy8gICAnNTAnOiAnQzRFMUYxJyxcbiAgLy8gICAnMTAwJzogJ0M0RTFGMScsXG4gIC8vICAgJzIwMCc6ICdDNEUxRjEnLFxuICAvLyAgICczMDAnOiAnMzk5N0Q3JyxcbiAgLy8gICAnNDAwJzogJzM5OTdENycsXG4gIC8vICAgJzUwMCc6ICczOTk3RDcnLFxuICAvLyAgICc2MDAnOiAnMUE0QTk2JyxcbiAgLy8gICAnNzAwJzogJzFBNEE5NicsXG4gIC8vICAgJzgwMCc6ICcxQTRBOTYnLFxuICAvLyAgICc5MDAnOiAnMUE0QTk2JyxcbiAgLy8gICAnQTEwMCc6ICcxQTRBOTYnLFxuICAvLyAgICdBMjAwJzogJzFBNEE5NicsXG4gIC8vICAgJ0E0MDAnOiAnMUE0QTk2JyxcbiAgLy8gICAnQTcwMCc6ICcxQTRBOTYnLFxuICAvLyAgICdjb250cmFzdERlZmF1bHRDb2xvcic6ICdsaWdodCcsXG4gIC8vICAgJ2NvbnRyYXN0RGFya0NvbG9ycyc6IFsnNTAnLCAnMTAwJyxcbiAgLy8gICAgJzIwMCcsICczMDAnLCAnQTEwMCddXG4gIC8vICAgLy8gJ2NvbnRyYXN0TGlnaHRDb2xvcnMnOiB1bmRlZmluZWRcbiAgLy8gfSk7XG5cbiAgLy8gJG1kVGhlbWluZ1Byb3ZpZGVyLnRoZW1lKCdkZWZhdWx0JylcbiAgLy8gICAucHJpbWFyeVBhbGV0dGUoJ2FtYXppbmdHcmF5Jywge1xuICAvLyAgICAgJ2RlZmF1bHQnOiAnNjAwJyxcbiAgLy8gICAgICdodWUtMSc6ICc0MDAnLFxuICAvLyAgICAgJ2h1ZS0yJzogJzEwMCcsXG4gIC8vICAgfSlcbiAgLy8gICAuYWNjZW50UGFsZXR0ZSgnYW1hemluZ0JsdWUnLCB7XG4gIC8vICAgICAnZGVmYXVsdCc6ICc2MDAnLFxuICAvLyAgICAgJ2h1ZS0xJzogJzQwMCcsXG4gIC8vICAgICAnaHVlLTInOiAnMTAwJyxcbiAgLy8gICB9KVxuICAvLyAud2FyblBhbGV0dGUoJ3JlZCcpO1xuXG59XSk7XG4iLCJsZXQgcmF3ID0gW1xuIHtcbiAgIFwiTWFudWZhY3R1cmVyXCI6IFwiS3Jha2VuXCIsXG4gICBcIk1vZGVsXCI6IFwiU29saWQgQ29sb3JcIixcbiAgIFwiVHlwZVwiOiBcIjQgUGllY2VcIixcbiAgIFwiU2l6ZVwiOiBcIjFcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiR3JheSwgVmlvbGV0LCBMaWdodCBCbHVlLCBHcmVlblwiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIktyYWtlblwiLFxuICAgXCJNb2RlbFwiOiBcIlNvbGlkIENvbG9yXCIsXG4gICBcIlR5cGVcIjogXCI0IFBpZWNlXCIsXG4gICBcIlNpemVcIjogXCIyLjJcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiR3JheSwgVmlvbGV0LCBMaWdodCBCbHVlLCBHcmVlblwiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIktyYWtlblwiLFxuICAgXCJNb2RlbFwiOiBcIlNvbGlkIENvbG9yXCIsXG4gICBcIlR5cGVcIjogXCI0IFBpZWNlXCIsXG4gICBcIlNpemVcIjogXCIyLjVcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiR3JheSwgTGlnaHQgQmx1ZSwgR29sZCwgR3JlZW5cIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJLcmFrZW5cIixcbiAgIFwiTW9kZWxcIjogXCJ3LyBTdGFzaCBXaW5kb3dzXCIsXG4gICBcIlR5cGVcIjogXCI0IFBpZWNlXCIsXG4gICBcIlNpemVcIjogXCIyXFxcIlwiLFxuICAgXCJDb2xvclwiOiBcIkJsYWNrXCJcbiB9LFxuIHtcbiAgIFwiTWFudWZhY3R1cmVyXCI6IFwiS3Jha2VuXCIsXG4gICBcIk1vZGVsXCI6IFwiRGlhbW9uZCBSaWRnZVwiLFxuICAgXCJUeXBlXCI6IFwiNCBQaWVjZVwiLFxuICAgXCJTaXplXCI6IFwiMi4yXFxcIlwiLFxuICAgXCJDb2xvclwiOiBcIkdyYXksIFZpb2xldCwgTGlnaHQgQmx1ZSwgR29sZCwgR3JlZW4sIFJlZCwgQmxhY2ssIFNpbHZlclwiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIktyYWtlblwiLFxuICAgXCJNb2RlbFwiOiBcIkRpYW1vbmQgUmlkZ2VcIixcbiAgIFwiVHlwZVwiOiBcIjQgUGllY2VcIixcbiAgIFwiU2l6ZVwiOiBcIjIuNVxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJHcmF5LCBWaW9sZXQsIExpZ2h0IEJsdWUsIEdvbGQsIEdyZWVuLCBSZWQsIEJsYWNrLCBTaWx2ZXJcIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJLcmFrZW5cIixcbiAgIFwiTW9kZWxcIjogXCJUaWVyZWRcIixcbiAgIFwiVHlwZVwiOiBcIjQgUGllY2VcIixcbiAgIFwiU2l6ZVwiOiBcIjIuMlxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJHcmVlbiwgR29sZCwgVmlvbGV0LCBCbGFjaywgTGlnaHQgQmx1ZSwgR3JheSwgUmVkXCJcbiB9LFxuIHtcbiAgIFwiTWFudWZhY3R1cmVyXCI6IFwiS3Jha2VuXCIsXG4gICBcIk1vZGVsXCI6IFwiVGllcmVkXCIsXG4gICBcIlR5cGVcIjogXCI0IFBpZWNlXCIsXG4gICBcIlNpemVcIjogXCIyLjVcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiR3JlZW4sIEdvbGQsIFZpb2xldCwgQmxhY2ssIExpZ2h0IEJsdWUsIEdyYXksIFJlZFwiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIktyYWtlblwiLFxuICAgXCJNb2RlbFwiOiBcIkhleFwiLFxuICAgXCJUeXBlXCI6IFwiNCBQaWVjZVwiLFxuICAgXCJTaXplXCI6IFwiMi4yXFxcIlwiLFxuICAgXCJDb2xvclwiOiBcIkJsdWUsIFJlZCwgUGluaywgQmxhY2ssIExpZ2h0IEJsdWUsIEdvbGQsIEdyZWVuLCBWaW9sZXRcIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJLcmFrZW5cIixcbiAgIFwiTW9kZWxcIjogXCJIZXhcIixcbiAgIFwiVHlwZVwiOiBcIjQgUGllY2VcIixcbiAgIFwiU2l6ZVwiOiBcIjIuNVxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJCbHVlLCBSZWQsIFBpbmssIEJsYWNrLCBMaWdodCBCbHVlLCBHb2xkLCBHcmVlbiwgVmlvbGV0XCJcbiB9LFxuIHtcbiAgIFwiTWFudWZhY3R1cmVyXCI6IFwiS3Jha2VuXCIsXG4gICBcIk1vZGVsXCI6IFwidy8gQ2xlYXIgVG9wICsgUHVzaCBCdXR0b24gQm90dG9tXCIsXG4gICBcIlR5cGVcIjogXCIyIFBpZWNlXCIsXG4gICBcIlNpemVcIjogXCIxLjVcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiQmxhY2tcIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJLcmFrZW5cIixcbiAgIFwiTW9kZWxcIjogXCJ3LyBDbGVhciBUb3AgKyBQdXNoIEJ1dHRvbiBCb3R0b21cIixcbiAgIFwiVHlwZVwiOiBcIjIgUGllY2VcIixcbiAgIFwiU2l6ZVwiOiBcIjEuNVxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJCbGFja1wiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIkNhbGkgQ3J1c2hlclwiLFxuICAgXCJNb2RlbFwiOiBcIkNhbGkgQ3J1c2hlciAyLjBcIixcbiAgIFwiVHlwZVwiOiBcIjQgUGllY2VcIixcbiAgIFwiU2l6ZVwiOiBcIjEuODVcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiQmxhY2ssIEJsdWUsIEdvbGQsIEdyZWVuLCBSZWRcIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJDYWxpIENydXNoZXJcIixcbiAgIFwiTW9kZWxcIjogXCJDYWxpIENydXNoZXIgMi4xXCIsXG4gICBcIlR5cGVcIjogXCI0IFBpZWNlXCIsXG4gICBcIlNpemVcIjogXCIyLjM1XFxcIlwiLFxuICAgXCJDb2xvclwiOiBcIkJsYWNrLCBCbHVlLCBHb2xkLCBHcmVlbiwgUmVkXCJcbiB9LFxuIHtcbiAgIFwiTWFudWZhY3R1cmVyXCI6IFwiQ2FsaSBDcnVzaGVyXCIsXG4gICBcIk1vZGVsXCI6IFwiQ2FsaSBDcnVzaGVyIDIuMlwiLFxuICAgXCJUeXBlXCI6IFwiMyBQaWVjZVwiLFxuICAgXCJTaXplXCI6IFwiMS44NVxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJCbGFjaywgQmx1ZSwgR29sZCwgR3JlZW4sIFJlZFwiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIkNhbGkgQ3J1c2hlclwiLFxuICAgXCJNb2RlbFwiOiBcIkNhbGkgQ3J1c2hlciAyLjNcIixcbiAgIFwiVHlwZVwiOiBcIjMgUGllY2VcIixcbiAgIFwiU2l6ZVwiOiBcIjIuMzVcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiQmxhY2ssIEJsdWUsIEdvbGQsIEdyZWVuLCBSZWRcIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJDYWxpIENydXNoZXJcIixcbiAgIFwiTW9kZWxcIjogXCJDYWxpIENydXNoZXIgMi40XCIsXG4gICBcIlR5cGVcIjogXCIyIFBpZWNlXCIsXG4gICBcIlNpemVcIjogXCIxLjg1XFxcIlwiLFxuICAgXCJDb2xvclwiOiBcIkJsYWNrLCBCbHVlLCBHb2xkLCBHcmVlbiwgUmVkXCJcbiB9LFxuIHtcbiAgIFwiTWFudWZhY3R1cmVyXCI6IFwiQ2FsaSBDcnVzaGVyXCIsXG4gICBcIk1vZGVsXCI6IFwiQ2FsaSBDcnVzaGVyIDIuNVwiLFxuICAgXCJUeXBlXCI6IFwiMiBQaWVjZVwiLFxuICAgXCJTaXplXCI6IFwiMi4zNVxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJCbGFjaywgQmx1ZSwgR29sZCwgR3JlZW4sIFJlZFwiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIkNhbGkgQ3J1c2hlclwiLFxuICAgXCJNb2RlbFwiOiBcIkhvbWVncm93blwiLFxuICAgXCJUeXBlXCI6IFwiNCBQaWVjZVwiLFxuICAgXCJTaXplXCI6IFwiMS44NVxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJMaWdodCBCbHVlLCBCbGFjaywgQmx1ZSwgQnJvd24sIEdyYXksIEdvbGQsIEdyZWVuLCBWaW9sZXQsIFBpbmssIFJlZFwiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIkNhbGkgQ3J1c2hlclwiLFxuICAgXCJNb2RlbFwiOiBcIkhvbWVncm93blwiLFxuICAgXCJUeXBlXCI6IFwiNCBQaWVjZVwiLFxuICAgXCJTaXplXCI6IFwiMi4zNVxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJMaWdodCBCbHVlLCBCbGFjaywgQmx1ZSwgQnJvd24sIEdyYXksIEdvbGQsIEdyZWVuLCBWaW9sZXQsIFBpbmssIFJlZFwiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIkNhbGkgQ3J1c2hlclwiLFxuICAgXCJNb2RlbFwiOiBcIkhvbWVncm93blwiLFxuICAgXCJUeXBlXCI6IFwiMiBQaWVjZVwiLFxuICAgXCJTaXplXCI6IFwiMi4zNVxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJMaWdodCBCbHVlLCBCbGFjaywgQmx1ZSwgQnJvd24sIEdyYXksIEdvbGQsIEdyZWVuLCBWaW9sZXQsIFBpbmssIFJlZFwiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIkNhbGkgQ3J1c2hlclwiLFxuICAgXCJNb2RlbFwiOiBcIk9yaWdpbmFsIEdhbnN0YVwiLFxuICAgXCJUeXBlXCI6IFwiNCBQaWVjZVwiLFxuICAgXCJTaXplXCI6IFwiMlxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJCbGFjaywgQmx1ZSwgR29sZCwgR3JlZW4sIFZpb2xldCwgUGluaywgUmVkLCBTaWx2ZXJcIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJDYWxpIENydXNoZXJcIixcbiAgIFwiTW9kZWxcIjogXCJPcmlnaW5hbCBHYW5zdGFcIixcbiAgIFwiVHlwZVwiOiBcIjQgUGllY2VcIixcbiAgIFwiU2l6ZVwiOiBcIjIuNVxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJCbGFjaywgQmx1ZSwgR29sZCwgR3JlZW4sIFZpb2xldCwgUGluaywgUmVkLCBTaWx2ZXJcIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJDYWxpIENydXNoZXJcIixcbiAgIFwiTW9kZWxcIjogXCJPcmlnaW5hbCBHYW5zdGFcIixcbiAgIFwiVHlwZVwiOiBcIjIgUGllY2VcIixcbiAgIFwiU2l6ZVwiOiBcIjJcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiQmxhY2ssIEdvbGQsIFZpb2xldFwiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIkthbm5hc3TDtnJcIixcbiAgIFwiTW9kZWxcIjogXCJNdWx0aS1DaGFtYmVyXCIsXG4gICBcIlR5cGVcIjogXCJSZWd1bGFyXCIsXG4gICBcIlNpemVcIjogXCIxLjVcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiU2lsdmVyICsgTWF0dGUgQmxhY2tcIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJLYW5uYXN0w7ZyXCIsXG4gICBcIk1vZGVsXCI6IFwiTXVsdGktQ2hhbWJlclwiLFxuICAgXCJUeXBlXCI6IFwiUmVndWxhclwiLFxuICAgXCJTaXplXCI6IFwiMi41XFxcIlwiLFxuICAgXCJDb2xvclwiOiBcIlNpbHZlciArIE1hdHRlIEJsYWNrLCBNYXR0ZSBCbGFja1wiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIkthbm5hc3TDtnJcIixcbiAgIFwiTW9kZWxcIjogXCJNdWx0aS1DaGFtYmVyXCIsXG4gICBcIlR5cGVcIjogXCJ3LyBKYXJcIixcbiAgIFwiU2l6ZVwiOiBcIjIuNVxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJTaWx2ZXIgKyBNYXR0ZSBCbGFjaywgTWF0dGUgQmxhY2tcIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJLYW5uYXN0w7ZyXCIsXG4gICBcIk1vZGVsXCI6IFwiTXVsdGktQ2hhbWJlclwiLFxuICAgXCJUeXBlXCI6IFwidy8gQ2xlYXIgVG9wXCIsXG4gICBcIlNpemVcIjogXCIyLjVcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiU2lsdmVyICsgTWF0dGUgQmxhY2tcIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJLYW5uYXN0w7ZyXCIsXG4gICBcIk1vZGVsXCI6IFwiTXVsdGktQ2hhbWJlclwiLFxuICAgXCJUeXBlXCI6IFwiVy8gSmFyICsgQ2xlYXIgVG9wXCIsXG4gICBcIlNpemVcIjogXCIyLjVcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiU2lsdmVyICsgTWF0dGUgQmxhY2tcIlxuIH1cbl07XG5cbi8vIGxldCBncmluZGVycyA9IHsgfTtcbi8vIGxldCBmYWlsc2FmZSA9IDEwMDtcbi8vIGxldCBjb3VudCA9IDA7XG4vL1xuLy8gd2hpbGUgKHJhdy5sZW5ndGggPiAwICYmIGZhaWxzYWZlID4gMCkge1xuLy8gICBmb3IgKGxldCBpIGluIHJhdykge1xuLy8gICAgIGxldCByID0gcmF3W2ldXG4vLyAgICAgaWYgKGdyaW5kZXJzW3IuTWFudWZhY3R1cmVyXSA9PSB1bmRlZmluZWQpIHtcbi8vICAgICAgIGdyaW5kZXJzW3IuTWFudWZhY3R1cmVyXSA9IHt9O1xuLy8gICAgIH1cbi8vICAgICBpZiAoZ3JpbmRlcnNbci5NYW51ZmFjdHVyZXJdW3IuTW9kZWxdID09IHVuZGVmaW5lZCkge1xuLy8gICAgICAgZ3JpbmRlcnNbci5NYW51ZmFjdHVyZXJdW3IuTW9kZWxdID0ge307XG4vLyAgICAgfVxuLy8gICAgIGlmIChncmluZGVyc1tyLk1hbnVmYWN0dXJlcl1bci5Nb2RlbF1bci5UeXBlXSA9PSB1bmRlZmluZWQpIHtcbi8vICAgICAgIGdyaW5kZXJzW3IuTWFudWZhY3R1cmVyXVtyLk1vZGVsXVtyLlR5cGVdID0ge307XG4vLyAgICAgfVxuLy8gICAgIGlmIChncmluZGVyc1tyLk1hbnVmYWN0dXJlcl1bci5Nb2RlbF1bci5UeXBlXVtyLlNpemVdID09IHVuZGVmaW5lZCkge1xuLy8gICAgICAgZ3JpbmRlcnNbci5NYW51ZmFjdHVyZXJdW3IuTW9kZWxdW3IuVHlwZV1bci5TaXplXSA9IFtdO1xuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICBsZXQgY29sb3JzID0gci5Db2xvci5zcGxpdChcIiwgXCIpXG4vLyAgICAgICBncmluZGVyc1tyLk1hbnVmYWN0dXJlcl1bci5Nb2RlbF1bci5UeXBlXVtyLlNpemVdID0gY29sb3JzO1xuLy8gICAgICAgcmF3LnNwbGljZShpLCAxKTtcbi8vICAgICB9XG4vLyAgICAgY291bnQrK1xuLy8gICB9XG4vLyAgIGZhaWxzYWZlLS07XG4vLyB9XG5cbi8vIGNvbnNvbGUubG9nKCdmaW5hbDonLCBncmluZGVycyk7XG4vLyBjb25zb2xlLmxvZygncmF3OicsIHJhdyk7XG4vLyBjb25zb2xlLmxvZygnY291bnQ6JywgY291bnQpO1xuLy8gY29uc29sZS5sb2coZmFpbHNhZmUpO1xuIiwiYXBwLmNvbnRyb2xsZXIoJ05hdmlnYXRpb25Db250cm9sbGVyJywgWyckaHR0cCcsICckc2NvcGUnLCAnJGxvY2F0aW9uJywgJyRtZERpYWxvZycsICckbWRUb2FzdCcsZnVuY3Rpb24oJGh0dHAsICRzY29wZSwgJGxvY2F0aW9uLCAkbWREaWFsb2csICRtZFRvYXN0KSB7XG4gIC8vIHRoaXMudXNlciA9IHVzZXI7XG4gIC8vXG4gIC8vIHRoaXMubG9nb3V0ID0gKCkgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKCdsb2dvdXQnKTtcbiAgLy8gICBsb2NhbFN0b3JhZ2UuY2xlYXIoJ3Rva2VuJyk7XG4gIC8vICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIC8vIH1cbiAgLy9cbiAgLy8gdGhpcy5vcGVuTG9naW4gPSAoZXYpID0+IHtcbiAgLy8gICAkbWREaWFsb2cuc2hvdyh7XG4gIC8vICAgICBsb2NhbHM6IHtkYXRhVG9QYXNzOiB7fX0sXG4gIC8vICAgICBjb250cm9sbGVyOiBEaWFsb2dDb250cm9sbGVyLFxuICAvLyAgICAgY29udHJvbGxlckFzOiAnY3RybCcsXG4gIC8vICAgICB0ZW1wbGF0ZVVybDogJ3BhcnRpYWxzL2xvZ2luLmh0bWwnLFxuICAvLyAgICAgcGFyZW50OiBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQuYm9keSksXG4gIC8vICAgICB0YXJnZXRFdmVudDogZXYsXG4gIC8vICAgICBjbGlja091dHNpZGVUb0Nsb3NlOnRydWUsXG4gIC8vICAgfSlcbiAgLy8gICAudGhlbigobmV3SW5mbykgPT4ge1xuICAvLyAgICAgJGh0dHAoe1xuICAvLyAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAvLyAgICAgICAgIHVybDogYC91c2VyL2xvZ2luYCxcbiAgLy8gICAgICAgICBkYXRhOiB7IG5ld0luZm8gfVxuICAvLyAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgLy8gICAgICAgICAvL2NvbnNvbGUubG9nKCdyZXNwb25zZTonLCByZXNwb25zZSk7XG4gIC8vICAgICAgICAgLy9jb25zb2xlLmxvZygnZGF0YTonLCByZXNwb25zZS5kYXRhKTtcbiAgLy8gICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xuICAvLyAgICAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc2Z1bCBsb2dpbicpO1xuICAvLyAgICAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuZGF0YS50b2tlbikpO1xuICAvLyAgICAgICAgICAgdXNlciA9IHJlc3BvbnNlLmRhdGEudXNlclxuICAvLyAgICAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgLy8gICAgICAgICAgIHRoaXMudXNlci5sb2dnZWQgPSB0cnVlO1xuICAvLyAgICAgICAgICAgLy9jb25zb2xlLmxvZyh1c2VyKTtcbiAgLy8gICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAvLyAgICAgICAgICAgICAkbWRUb2FzdC5zaG93KFxuICAvLyAgICAgICAgICAgICAgICRtZFRvYXN0LnNpbXBsZSgpXG4gIC8vICAgICAgICAgICAgICAgICAudGV4dENvbnRlbnQoYCAgIEhlbGxvLCAgICR7dXNlci5maXJzdH0hYClcbiAgLy8gICAgICAgICAgICAgICAgIC5wb3NpdGlvbihcImJvdHRvbSByaWdodFwiIClcbiAgLy8gICAgICAgICAgICAgICAgIC5oaWRlRGVsYXkoMzAwMClcbiAgLy8gICAgICAgICAgICAgKTtcbiAgLy8gICAgICAgICAgIH0sIDEwMDApO1xuICAvLyAgICAgICAgICAgJHNjb3BlLiRicm9hZGNhc3QoJ3VwZGF0ZUF1dGgnLCB7IGRhdGE6IHRoaXMudXNlciB9KVxuICAvLyAgICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgICByZXR1cm4gdGhpcy5vcGVuTG9naW4oZXYpXG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZygnbG9naW4gZXJyb3I6JywgZXJyb3IpO1xuICAvLyAgICAgICAgIHRoaXMub3BlbkxvZ2luKGV2KVxuICAvLyAgICAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcignQ2F0Y2gnLCBlcnIpKVxuICAvLyAgIH0sIGZ1bmN0aW9uKCkge1xuICAvLyAgICAgY29uc29sZS5sb2coJ2NhbmNlbCBkaWFsb2cnKTs7XG4gIC8vICAgfSk7XG4gIC8vIH1cbiAgLy9cbiAgLy8gdGhpcy5vcGVuUmVnaXN0ZXIgPSAoZXYpID0+IHtcbiAgLy8gICAkbWREaWFsb2cuc2hvdyh7XG4gIC8vICAgICBsb2NhbHM6IHtkYXRhVG9QYXNzOiB7fX0sXG4gIC8vICAgICBjb250cm9sbGVyOiBEaWFsb2dDb250cm9sbGVyLFxuICAvLyAgICAgY29udHJvbGxlckFzOiAnY3RybCcsXG4gIC8vICAgICB0ZW1wbGF0ZVVybDogJ3BhcnRpYWxzL3JlZ2lzdGVyLmh0bWwnLFxuICAvLyAgICAgcGFyZW50OiBhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQuYm9keSksXG4gIC8vICAgICB0YXJnZXRFdmVudDogZXYsXG4gIC8vICAgICBjbGlja091dHNpZGVUb0Nsb3NlOnRydWUsXG4gIC8vICAgfSlcbiAgLy8gICAudGhlbigobmV3SW5mbykgPT4ge1xuICAvLyAgICAgLy9jb25zb2xlLmxvZygncmVnaXN0ZXIgcmVxdWVzdDonLCBuZXdJbmZvKTtcbiAgLy8gICAgICRodHRwKHtcbiAgLy8gICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgLy8gICAgICAgICB1cmw6IGAvdXNlcmAsXG4gIC8vICAgICAgICAgZGF0YTogeyBuZXdJbmZvIH1cbiAgLy8gICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gIC8vICAgICAgICAgLy9jb25zb2xlLmxvZygncmVnaXN0ZXIgc3VjY2VzZnVsOicsIHJlc3BvbnNlLmRhdGEpO1xuICAvLyAgICAgICAgIHJldHVybiB0aGlzLm9wZW5Mb2dpbihldilcbiAgLy8gICAgICAgfSwgKGVycm9yKSA9PiB7XG4gIC8vICAgICAgICAgY29uc29sZS5sb2coJ2xvZ2luIGVycm9yOicsIGVycm9yKTtcbiAgLy8gICAgICAgICB0aGlzLm9wZW5SZWdpc3RlcihldilcbiAgLy8gICAgICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0NhdGNoJywgZXJyKSlcbiAgLy8gICB9LCBmdW5jdGlvbigpIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKCdjYW5jZWwgZGlhbG9nJyk7O1xuICAvLyAgIH0pO1xuICAvLyB9XG4gIC8vXG4gIC8vIHRoaXMuYXV0b0xvZ2luID0gKCkgPT4ge1xuICAvLyAgICRodHRwKHtcbiAgLy8gICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gIC8vICAgICAgIHVybDogYC91c2VyL2xvZ2luYCxcbiAgLy8gICAgICAgZGF0YTogeyBuZXdJbmZvOiB7IHVzZXJuYW1lOiAndGcnLCBwYXNzd29yZDogJ3RnJyB9IH1cbiAgLy8gICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAvLyAgICAgICAvL2NvbnNvbGUubG9nKCdyZXNwb25zZTonLCByZXNwb25zZSk7XG4gIC8vICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XG4gIC8vICAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc2Z1bCBsb2dpbicpO1xuICAvLyAgICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEudG9rZW4pKTtcbiAgLy8gICAgICAgICB1c2VyID0gcmVzcG9uc2UuZGF0YS51c2VyXG4gIC8vICAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgLy8gICAgICAgICB0aGlzLnVzZXIubG9nZ2VkID0gdHJ1ZTtcbiAgLy8gICAgICAgICAvL2NvbnNvbGUubG9nKHVzZXIpO1xuICAvLyAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAvLyAgICAgICAgICAgJG1kVG9hc3Quc2hvdyhcbiAgLy8gICAgICAgICAgICAgJG1kVG9hc3Quc2ltcGxlKClcbiAgLy8gICAgICAgICAgICAgICAudGV4dENvbnRlbnQoYCAgIEhlbGxvLCAgICR7dXNlci5maXJzdH0hYClcbiAgLy8gICAgICAgICAgICAgICAucG9zaXRpb24oXCJib3R0b20gcmlnaHRcIiApXG4gIC8vICAgICAgICAgICAgICAgLmhpZGVEZWxheSgzMDAwKVxuICAvLyAgICAgICAgICAgKTtcbiAgLy8gICAgICAgICB9LCAxMDAwKTtcbiAgLy8gICAgICAgICAkc2NvcGUuJGJyb2FkY2FzdCgndXBkYXRlQXV0aCcsIHsgZGF0YTogdGhpcy51c2VyIH0pXG4gIC8vICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgY29uc29sZS5sb2coJ2xvZ2luIGVycm9yJylcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKCdsb2dpbiBlcnJvcjonLCBlcnJvcik7XG4gIC8vICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0NhdGNoJywgZXJyKSlcbiAgLy8gfTtcbiAgLy8gaWYgKCRsb2NhdGlvbi5hYnNVcmwoKSA9PSAnaHR0cDovL2xvY2FsaG9zdDoxMTIyLycpIHtcbiAgLy8gICAvL3RoaXMuYXV0b0xvZ2luKClcbiAgLy8gfVxuICAvL1xuICAvLyB0aGlzLm5hdkxpbmsgPSAocGF0aCkgPT4ge1xuICAvLyAgIC8vY29uc29sZS5sb2coJ25hdkxpbmsnLCBwYXRoKTtcbiAgLy8gICAvL3RoaXMudG9Gcm9tID0gdW5kZWZpbmVkO1xuICAvLyAgIGlmICgkbG9jYXRpb24udXJsKCkgPT0gcGF0aCkge1xuICAvLyAgICAgJHNjb3BlLiRicm9hZGNhc3QoJ25hdkxpbmsnLCB7IGRhdGE6IHBhdGggfSk7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgICRsb2NhdGlvbi5wYXRoKHBhdGgpO1xuICAvLyAgIH07XG4gIC8vIH07XG5cbn1dKTtcbiIsImFwcC5jb250cm9sbGVyKCdIb21lQ29udHJvbGxlcicsIFsnJGh0dHAnLCAnJHJvdXRlJywgJyRzY29wZScsICckbG9jYXRpb24nLCAnJG1kRGlhbG9nJywgJyRtZFRvYXN0JywgZnVuY3Rpb24oJGh0dHAsICRyb3V0ZSwgJHNjb3BlLCAkbG9jYXRpb24sICRtZERpYWxvZywgJG1kVG9hc3QpIHtcbiAgdGhpcy50YWJzID0gW1xuICAgICdzdGFydCcsJ2NvbnRhY3QnLCAnYm94ZXMnLCAnY2FyZCcsICdjb25maXJtJ1xuICBdXG4gIHRoaXMuYWN0aXZlID0ge1xuICAgICdzdGFydCc6IGZhbHNlLFxuICAgICdjb250YWN0JzogZmFsc2UsXG4gICAgJ2JveGVzJzogZmFsc2UsXG4gICAgJ2NhcmQnOiBmYWxzZSxcbiAgICAnY29uZmlybSc6IGZhbHNlXG4gIH1cbiAgdGhpcy5wYXJ0aWFscyA9IHt9O1xuICBmb3IgKGxldCB0IG9mIHRoaXMudGFicykge1xuICAgIHRoaXMucGFydGlhbHNbdF0gPSBgcGFydGlhbHMvJHt0fS5odG1sYDtcbiAgfVxuXG4gIHRoaXMubmV4dCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnbmV4dCcpO1xuICAgIHRoaXMuYWN0aXZlWydjb250YWN0J10gPSBmYWxzZTtcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXgrKztcbiAgfVxuXG4gIHRoaXMuYmFjayA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnYmFjaycpO1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleC0tO1xuICB9XG5cbiAgdGhpcy5hdXRvU2VsZWN0ID0gKG9iaiwgaywgcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdhdXRvU2VsZWN0JywgJHNjb3BlKTtcbiAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgY29uc29sZS5sb2coa2V5cyk7XG4gICAgaWYgKGtleXMubGVuZ3RoID09IDEpIHtcbiAgICAgIC8vdGhpcy5uZXdJbmZvW2tdID0gb2JqW2tleXNbMF1dO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMub3JkZXIgPSB7fVxuXG4gIGlmICgkbG9jYXRpb24uYWJzVXJsKCkgPT0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MTEyMi8nKSB7XG4gICAgJHNjb3BlLm5ld0luZm8gPSB7XG4gICAgICBhZGRyZXNzMTogXCI0MiBXYWxsYWJ5IFdheVwiLFxuICAgICAgYWRkcmVzczI6IFwiVW5pdCBCXCIsXG4gICAgICBjaXR5OiBcIkF1c3RpblwiLFxuICAgICAgZW1haWw6IFwidEBnLmNvbVwiLFxuICAgICAgZmlyc3Q6IFwiVHlsZXJcIixcbiAgICAgIGxhc3Q6IFwiR29vZG1hblwiLFxuICAgICAgc3RhdGU6IFwiVFhcIixcbiAgICAgIHppcDogNzg3MDRcbiAgICB9XG4gICAgJHNjb3BlLmNjID0ge1xuICAgICAgbnVtYmVyOiA0NDY1NDAwMzQ3OTE3MDQxLFxuICAgICAgemlwOiAxMjM0NSxcbiAgICAgIGN2djogMTIzXG4gICAgfVxuICB9XG5cbiAgdGhpcy5zdWJDb250YWN0ID0gKG5ld0luZm8pID0+IHtcbiAgICAvL2lmICh0aGlzLm9yZGVyLmNvbnRhY3QgPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9yZGVyLmNvbnRhY3QgPSBuZXdJbmZvO1xuICAgICAgY29uc29sZS5sb2coJ3N1Yi1uZXh0OicsIHRoaXMub3JkZXIpO1xuICAgICAgdGhpcy5hY3RpdmVbJ2JveGVzJ10gPSBmYWxzZTtcbiAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgLy9zZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5hZHZhbmNlKCk7IH0sIDUwMCk7XG4gICAgLy99IGVsc2Uge1xuICAgICAgLy9jb25zb2xlLmxvZygnbm9wZScpO1xuICAgIC8vfVxuICB9XG5cbiAgdGhpcy5zdWJDYXNoZSA9IChjYXNoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGNhc2hlKTtcbiAgICBpZiAoY2FzaGUpIHtcbiAgICAgIHRoaXMub3JkZXIuY2FzaGUgPSBjYXNoZTtcbiAgICAgIHRoaXMuYWN0aXZlWydjYXJkJ10gPSBmYWxzZTtcbiAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuYWR2YW5jZSgpOyB9LCA1MDApO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMuc3ViQ0MgPSAoY2MpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjYyk7XG4gICAgaWYgKGNjLnppcCAmJiBjYy5jdnYpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd2YWxpZCBiaXRzJyk7XG4gICAgICBpZiAodmFsaWRDYXJkKGNjLm51bWJlcikpIHtcbiAgICAgICAgdGhpcy5vcmRlci5jYyA9IGNjO1xuICAgICAgICB0aGlzLmFjdGl2ZVsnY29uZmlybSddID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5hZHZhbmNlKCk7IH0sIDUwMCk7XG4gICAgICAgIHRoaXMudmFsaWRDYXJkID0gJ0NyZWRpdCBDYXJkIE9LISdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiVGhlIGNyZWRpdCBjYXJkIHlvdSBlbnRlcmVkIGlzIG5vdCBhIHZhbGlkIGNhcmQgbnVtYmVyLi4uXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB0aGlzLnN1Ym1pdCA9IChuZXdJbmZvKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3N1bWJpdDonLCBuZXdJbmZvKTtcbiAgICAkaHR0cCh7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHVybDogYC9vcmRlcmAsXG4gICAgICBkYXRhOiBuZXdJbmZvXG4gICAgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnc3VjY2VzZnVsIHBvc3QnLCByZXNwb25zZS5kYXRhKTtcbiAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuaW5mbyA9IG5ld0luZm87XG4gICAgICBhbGVydCgnTmljZSBKb2IhJyk7XG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvcjonLCBlcnJvcik7XG4gICAgICBhbGVydCgnU29tZXRoaW5nIHdlbnQgd3JvbmcuLi4nKVxuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdDYXRjaCcsIGVycikpXG5cbiAgfVxuICAvL3RoaXMuZ3JpbmRlcnMgPSBncmluZGVycztcblxuICB0aGlzLnN0YXRlcyA9IHtcbiAgICBcIkFMXCI6IFwiQWxhYmFtYVwiLFxuICAgIFwiQUtcIjogXCJBbGFza2FcIixcbiAgICBcIkFTXCI6IFwiQW1lcmljYW4gU2Ftb2FcIixcbiAgICBcIkFaXCI6IFwiQXJpem9uYVwiLFxuICAgIFwiQVJcIjogXCJBcmthbnNhc1wiLFxuICAgIFwiQ0FcIjogXCJDYWxpZm9ybmlhXCIsXG4gICAgXCJDT1wiOiBcIkNvbG9yYWRvXCIsXG4gICAgXCJDVFwiOiBcIkNvbm5lY3RpY3V0XCIsXG4gICAgXCJERVwiOiBcIkRlbGF3YXJlXCIsXG4gICAgXCJEQ1wiOiBcIkRpc3RyaWN0IE9mIENvbHVtYmlhXCIsXG4gICAgXCJGTVwiOiBcIkZlZGVyYXRlZCBTdGF0ZXMgT2YgTWljcm9uZXNpYVwiLFxuICAgIFwiRkxcIjogXCJGbG9yaWRhXCIsXG4gICAgXCJHQVwiOiBcIkdlb3JnaWFcIixcbiAgICBcIkdVXCI6IFwiR3VhbVwiLFxuICAgIFwiSElcIjogXCJIYXdhaWlcIixcbiAgICBcIklEXCI6IFwiSWRhaG9cIixcbiAgICBcIklMXCI6IFwiSWxsaW5vaXNcIixcbiAgICBcIklOXCI6IFwiSW5kaWFuYVwiLFxuICAgIFwiSUFcIjogXCJJb3dhXCIsXG4gICAgXCJLU1wiOiBcIkthbnNhc1wiLFxuICAgIFwiS1lcIjogXCJLZW50dWNreVwiLFxuICAgIFwiTEFcIjogXCJMb3Vpc2lhbmFcIixcbiAgICBcIk1FXCI6IFwiTWFpbmVcIixcbiAgICBcIk1IXCI6IFwiTWFyc2hhbGwgSXNsYW5kc1wiLFxuICAgIFwiTURcIjogXCJNYXJ5bGFuZFwiLFxuICAgIFwiTUFcIjogXCJNYXNzYWNodXNldHRzXCIsXG4gICAgXCJNSVwiOiBcIk1pY2hpZ2FuXCIsXG4gICAgXCJNTlwiOiBcIk1pbm5lc290YVwiLFxuICAgIFwiTVNcIjogXCJNaXNzaXNzaXBwaVwiLFxuICAgIFwiTU9cIjogXCJNaXNzb3VyaVwiLFxuICAgIFwiTVRcIjogXCJNb250YW5hXCIsXG4gICAgXCJORVwiOiBcIk5lYnJhc2thXCIsXG4gICAgXCJOVlwiOiBcIk5ldmFkYVwiLFxuICAgIFwiTkhcIjogXCJOZXcgSGFtcHNoaXJlXCIsXG4gICAgXCJOSlwiOiBcIk5ldyBKZXJzZXlcIixcbiAgICBcIk5NXCI6IFwiTmV3IE1leGljb1wiLFxuICAgIFwiTllcIjogXCJOZXcgWW9ya1wiLFxuICAgIFwiTkNcIjogXCJOb3J0aCBDYXJvbGluYVwiLFxuICAgIFwiTkRcIjogXCJOb3J0aCBEYWtvdGFcIixcbiAgICBcIk1QXCI6IFwiTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzXCIsXG4gICAgXCJPSFwiOiBcIk9oaW9cIixcbiAgICBcIk9LXCI6IFwiT2tsYWhvbWFcIixcbiAgICBcIk9SXCI6IFwiT3JlZ29uXCIsXG4gICAgXCJQV1wiOiBcIlBhbGF1XCIsXG4gICAgXCJQQVwiOiBcIlBlbm5zeWx2YW5pYVwiLFxuICAgIFwiUFJcIjogXCJQdWVydG8gUmljb1wiLFxuICAgIFwiUklcIjogXCJSaG9kZSBJc2xhbmRcIixcbiAgICBcIlNDXCI6IFwiU291dGggQ2Fyb2xpbmFcIixcbiAgICBcIlNEXCI6IFwiU291dGggRGFrb3RhXCIsXG4gICAgXCJUTlwiOiBcIlRlbm5lc3NlZVwiLFxuICAgIFwiVFhcIjogXCJUZXhhc1wiLFxuICAgIFwiVVRcIjogXCJVdGFoXCIsXG4gICAgXCJWVFwiOiBcIlZlcm1vbnRcIixcbiAgICBcIlZJXCI6IFwiVmlyZ2luIElzbGFuZHNcIixcbiAgICBcIlZBXCI6IFwiVmlyZ2luaWFcIixcbiAgICBcIldBXCI6IFwiV2FzaGluZ3RvblwiLFxuICAgIFwiV1ZcIjogXCJXZXN0IFZpcmdpbmlhXCIsXG4gICAgXCJXSVwiOiBcIldpc2NvbnNpblwiLFxuICAgIFwiV1lcIjogXCJXeW9taW5nXCJcbiAgfVxuXG4gIC8vdGhpcy5zZWxlY3RlZEluZGV4ID0gMztcblxuICB0aGlzLmFkdmFuY2UgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2FkdmFuY2UnKTtcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXgrKztcbiAgfVxuXG59XSk7XG4iXX0=
