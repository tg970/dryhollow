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
    'start','contact','boxes', 'card','confirm'
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

  this.subContact = (newInfo) => {
    if (
      newInfo.first &&
      newInfo.last &&
      newInfo.email &&
      newInfo.address1 &&
      newInfo.city &&
      newInfo.state &&
      newInfo.zip
    ) {
      this.order.contact = newInfo;
      console.log('sub-next:', this.order);
      this.active['boxes'] = false;
      this.advance();
    } else {
      console.log('nope', newInfo);
    }
      //setTimeout(() => { this.advance(); }, 500);
    //} else {
      //console.log('nope');
    //}
  }

  this.subCache = (cache) => {
    console.log(cache);
    if (cache) {
      this.order.cache = cache;
      this.active['card'] = false;
      this.advance();
      // setTimeout(() => { this.advance(); }, 500);
    }
  }

  this.subCC = (cc) => {
    console.log(cc);
    if (cc.zip && cc.cvv && cc.mo && cc.yr) {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImdyaW5kZXJzLmpzIiwibmF2Q3RybC5qcyIsInRhYkN0cmwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcFNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2NvbnNvbGUubG9nKCd5ZXAnKTtcbmNvbnN0IGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdkcnlob2xsb3dfQXBwJywgWyduZ1JvdXRlJywgJ25nTWF0ZXJpYWwnLCAnbmdTYW5pdGl6ZSddKTtcblxubGV0IHVzZXIgPSBudWxsO1xuXG5jb25zdCB2YWxpZENhcmQgPSAobnVtKSA9PiB7XG4gIGxldCBzdHIgPSBTdHJpbmcobnVtKVxuICBsZXQgYXJyID0gc3RyLnNwbGl0KCcnKS5yZXZlcnNlKClcbiAgbGV0IHN1bSA9IDBcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoaSAlIDIgIT0gMCkge1xuICAgICAgdGVtcE51bSA9IGFycltpXSoyO1xuICAgICAgaWYgKHRlbXBOdW0gPiA5KSB7XG4gICAgICAgIHN1bSArPSAodGVtcE51bS0xMCsxKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3VtICs9IHRlbXBOdW1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3VtICs9IE51bWJlcihhcnJbaV0pXG4gICAgfVxuICB9XG4gIHJldHVybiBzdW0gJSAxMCA9PT0gMFxufTtcblxuY29uc3QgZ2V0TGVuID0gKG51bSkgPT4ge1xuICByZXR1cm4gbnVtLnRvU3RyaW5nKCkubGVuZ3RoO1xufVxuXG5hcHAuY29uZmlnKFsnJHJvdXRlUHJvdmlkZXInLCckbG9jYXRpb25Qcm92aWRlcicsICckbWRUaGVtaW5nUHJvdmlkZXInLCBmdW5jdGlvbigkcm91dGVQcm92aWRlciwkbG9jYXRpb25Qcm92aWRlcikgeyAvLywgJG1kVGhlbWluZ1Byb3ZpZGVyXG4gICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh7IGVuYWJsZWQ6IHRydWUgfSk7XG5cbiAgJHJvdXRlUHJvdmlkZXIud2hlbignLycsIHtcbiAgICB0ZW1wbGF0ZVVybDogJ3BhcnRpYWxzL2hvbWUuaHRtbCcsXG4gICAgY29udHJvbGxlcjogJ0hvbWVDb250cm9sbGVyIGFzIGN0cmwnLFxuICAgIGNvbnRyb2xsZXJBczogJ2N0cmwnXG4gIH0pO1xuXG4gIC8vICRyb3V0ZVByb3ZpZGVyLndoZW4oJy93b3JrY2VudGVycycsIHtcbiAgLy8gICB0ZW1wbGF0ZVVybDogJ3BhcnRpYWxzL3dvcmtjZW50ZXIuaHRtbCcsXG4gIC8vICAgY29udHJvbGxlcjogJ1dvcmtDZW50ZXJDb250cm9sbGVyIGFzIGN0cmwnLFxuICAvLyAgIGNvbnRyb2xsZXJBczogJ2N0cmwnXG4gIC8vIH0pO1xuXG4gIC8vICRyb3V0ZVByb3ZpZGVyLndoZW4oJy9hYm91dCcsIHtcbiAgLy8gICB0ZW1wbGF0ZVVybDogJ3BhcnRpYWxzL2Fib3V0Lmh0bWwnLFxuICAvLyB9KTtcblxuICAkcm91dGVQcm92aWRlci5vdGhlcndpc2Uoe1xuICAgIHJlZGlyZWN0VG86ICcvJ1xuICB9KTtcblxuICAvLyAkbWRUaGVtaW5nUHJvdmlkZXIuZGVmaW5lUGFsZXR0ZSgnYW1hemluZ0dyYXknLCB7XG4gIC8vICAgJzUwJzogJ0Q1RDRDRicsXG4gIC8vICAgJzEwMCc6ICdENUQ0Q0YnLFxuICAvLyAgICcyMDAnOiAnRDVENENGJyxcbiAgLy8gICAnMzAwJzogJzhFOEQ5MicsXG4gIC8vICAgJzQwMCc6ICc4RThEOTInLFxuICAvLyAgICc1MDAnOiAnOEU4RDkyJyxcbiAgLy8gICAnNjAwJzogJzNFNEE2MicsXG4gIC8vICAgJzcwMCc6ICczRTRBNjInLFxuICAvLyAgICc4MDAnOiAnM0U0QTYyJyxcbiAgLy8gICAnOTAwJzogJzNFNEE2MicsXG4gIC8vICAgJ0ExMDAnOiAnM0U0QTYyJyxcbiAgLy8gICAnQTIwMCc6ICczRTRBNjInLFxuICAvLyAgICdBNDAwJzogJzNFNEE2MicsXG4gIC8vICAgJ0E3MDAnOiAnM0U0QTYyJyxcbiAgLy8gICAnY29udHJhc3REZWZhdWx0Q29sb3InOiAnbGlnaHQnLFxuICAvLyAgICdjb250cmFzdERhcmtDb2xvcnMnOiBbJzUwJywgJzEwMCcsXG4gIC8vICAgICcyMDAnLCAnMzAwJywgJ0ExMDAnXVxuICAvLyAgIC8vICdjb250cmFzdExpZ2h0Q29sb3JzJzogdW5kZWZpbmVkXG4gIC8vIH0pO1xuICAvL1xuICAvLyAkbWRUaGVtaW5nUHJvdmlkZXIuZGVmaW5lUGFsZXR0ZSgnYW1hemluZ0JsdWUnLCB7XG4gIC8vICAgJzUwJzogJ0M0RTFGMScsXG4gIC8vICAgJzEwMCc6ICdDNEUxRjEnLFxuICAvLyAgICcyMDAnOiAnQzRFMUYxJyxcbiAgLy8gICAnMzAwJzogJzM5OTdENycsXG4gIC8vICAgJzQwMCc6ICczOTk3RDcnLFxuICAvLyAgICc1MDAnOiAnMzk5N0Q3JyxcbiAgLy8gICAnNjAwJzogJzFBNEE5NicsXG4gIC8vICAgJzcwMCc6ICcxQTRBOTYnLFxuICAvLyAgICc4MDAnOiAnMUE0QTk2JyxcbiAgLy8gICAnOTAwJzogJzFBNEE5NicsXG4gIC8vICAgJ0ExMDAnOiAnMUE0QTk2JyxcbiAgLy8gICAnQTIwMCc6ICcxQTRBOTYnLFxuICAvLyAgICdBNDAwJzogJzFBNEE5NicsXG4gIC8vICAgJ0E3MDAnOiAnMUE0QTk2JyxcbiAgLy8gICAnY29udHJhc3REZWZhdWx0Q29sb3InOiAnbGlnaHQnLFxuICAvLyAgICdjb250cmFzdERhcmtDb2xvcnMnOiBbJzUwJywgJzEwMCcsXG4gIC8vICAgICcyMDAnLCAnMzAwJywgJ0ExMDAnXVxuICAvLyAgIC8vICdjb250cmFzdExpZ2h0Q29sb3JzJzogdW5kZWZpbmVkXG4gIC8vIH0pO1xuXG4gIC8vICRtZFRoZW1pbmdQcm92aWRlci50aGVtZSgnZGVmYXVsdCcpXG4gIC8vICAgLnByaW1hcnlQYWxldHRlKCdhbWF6aW5nR3JheScsIHtcbiAgLy8gICAgICdkZWZhdWx0JzogJzYwMCcsXG4gIC8vICAgICAnaHVlLTEnOiAnNDAwJyxcbiAgLy8gICAgICdodWUtMic6ICcxMDAnLFxuICAvLyAgIH0pXG4gIC8vICAgLmFjY2VudFBhbGV0dGUoJ2FtYXppbmdCbHVlJywge1xuICAvLyAgICAgJ2RlZmF1bHQnOiAnNjAwJyxcbiAgLy8gICAgICdodWUtMSc6ICc0MDAnLFxuICAvLyAgICAgJ2h1ZS0yJzogJzEwMCcsXG4gIC8vICAgfSlcbiAgLy8gLndhcm5QYWxldHRlKCdyZWQnKTtcblxufV0pO1xuIiwibGV0IHJhdyA9IFtcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIktyYWtlblwiLFxuICAgXCJNb2RlbFwiOiBcIlNvbGlkIENvbG9yXCIsXG4gICBcIlR5cGVcIjogXCI0IFBpZWNlXCIsXG4gICBcIlNpemVcIjogXCIxXFxcIlwiLFxuICAgXCJDb2xvclwiOiBcIkdyYXksIFZpb2xldCwgTGlnaHQgQmx1ZSwgR3JlZW5cIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJLcmFrZW5cIixcbiAgIFwiTW9kZWxcIjogXCJTb2xpZCBDb2xvclwiLFxuICAgXCJUeXBlXCI6IFwiNCBQaWVjZVwiLFxuICAgXCJTaXplXCI6IFwiMi4yXFxcIlwiLFxuICAgXCJDb2xvclwiOiBcIkdyYXksIFZpb2xldCwgTGlnaHQgQmx1ZSwgR3JlZW5cIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJLcmFrZW5cIixcbiAgIFwiTW9kZWxcIjogXCJTb2xpZCBDb2xvclwiLFxuICAgXCJUeXBlXCI6IFwiNCBQaWVjZVwiLFxuICAgXCJTaXplXCI6IFwiMi41XFxcIlwiLFxuICAgXCJDb2xvclwiOiBcIkdyYXksIExpZ2h0IEJsdWUsIEdvbGQsIEdyZWVuXCJcbiB9LFxuIHtcbiAgIFwiTWFudWZhY3R1cmVyXCI6IFwiS3Jha2VuXCIsXG4gICBcIk1vZGVsXCI6IFwidy8gU3Rhc2ggV2luZG93c1wiLFxuICAgXCJUeXBlXCI6IFwiNCBQaWVjZVwiLFxuICAgXCJTaXplXCI6IFwiMlxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJCbGFja1wiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIktyYWtlblwiLFxuICAgXCJNb2RlbFwiOiBcIkRpYW1vbmQgUmlkZ2VcIixcbiAgIFwiVHlwZVwiOiBcIjQgUGllY2VcIixcbiAgIFwiU2l6ZVwiOiBcIjIuMlxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJHcmF5LCBWaW9sZXQsIExpZ2h0IEJsdWUsIEdvbGQsIEdyZWVuLCBSZWQsIEJsYWNrLCBTaWx2ZXJcIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJLcmFrZW5cIixcbiAgIFwiTW9kZWxcIjogXCJEaWFtb25kIFJpZGdlXCIsXG4gICBcIlR5cGVcIjogXCI0IFBpZWNlXCIsXG4gICBcIlNpemVcIjogXCIyLjVcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiR3JheSwgVmlvbGV0LCBMaWdodCBCbHVlLCBHb2xkLCBHcmVlbiwgUmVkLCBCbGFjaywgU2lsdmVyXCJcbiB9LFxuIHtcbiAgIFwiTWFudWZhY3R1cmVyXCI6IFwiS3Jha2VuXCIsXG4gICBcIk1vZGVsXCI6IFwiVGllcmVkXCIsXG4gICBcIlR5cGVcIjogXCI0IFBpZWNlXCIsXG4gICBcIlNpemVcIjogXCIyLjJcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiR3JlZW4sIEdvbGQsIFZpb2xldCwgQmxhY2ssIExpZ2h0IEJsdWUsIEdyYXksIFJlZFwiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIktyYWtlblwiLFxuICAgXCJNb2RlbFwiOiBcIlRpZXJlZFwiLFxuICAgXCJUeXBlXCI6IFwiNCBQaWVjZVwiLFxuICAgXCJTaXplXCI6IFwiMi41XFxcIlwiLFxuICAgXCJDb2xvclwiOiBcIkdyZWVuLCBHb2xkLCBWaW9sZXQsIEJsYWNrLCBMaWdodCBCbHVlLCBHcmF5LCBSZWRcIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJLcmFrZW5cIixcbiAgIFwiTW9kZWxcIjogXCJIZXhcIixcbiAgIFwiVHlwZVwiOiBcIjQgUGllY2VcIixcbiAgIFwiU2l6ZVwiOiBcIjIuMlxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJCbHVlLCBSZWQsIFBpbmssIEJsYWNrLCBMaWdodCBCbHVlLCBHb2xkLCBHcmVlbiwgVmlvbGV0XCJcbiB9LFxuIHtcbiAgIFwiTWFudWZhY3R1cmVyXCI6IFwiS3Jha2VuXCIsXG4gICBcIk1vZGVsXCI6IFwiSGV4XCIsXG4gICBcIlR5cGVcIjogXCI0IFBpZWNlXCIsXG4gICBcIlNpemVcIjogXCIyLjVcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiQmx1ZSwgUmVkLCBQaW5rLCBCbGFjaywgTGlnaHQgQmx1ZSwgR29sZCwgR3JlZW4sIFZpb2xldFwiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIktyYWtlblwiLFxuICAgXCJNb2RlbFwiOiBcIncvIENsZWFyIFRvcCArIFB1c2ggQnV0dG9uIEJvdHRvbVwiLFxuICAgXCJUeXBlXCI6IFwiMiBQaWVjZVwiLFxuICAgXCJTaXplXCI6IFwiMS41XFxcIlwiLFxuICAgXCJDb2xvclwiOiBcIkJsYWNrXCJcbiB9LFxuIHtcbiAgIFwiTWFudWZhY3R1cmVyXCI6IFwiS3Jha2VuXCIsXG4gICBcIk1vZGVsXCI6IFwidy8gQ2xlYXIgVG9wICsgUHVzaCBCdXR0b24gQm90dG9tXCIsXG4gICBcIlR5cGVcIjogXCIyIFBpZWNlXCIsXG4gICBcIlNpemVcIjogXCIxLjVcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiQmxhY2tcIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJDYWxpIENydXNoZXJcIixcbiAgIFwiTW9kZWxcIjogXCJDYWxpIENydXNoZXIgMi4wXCIsXG4gICBcIlR5cGVcIjogXCI0IFBpZWNlXCIsXG4gICBcIlNpemVcIjogXCIxLjg1XFxcIlwiLFxuICAgXCJDb2xvclwiOiBcIkJsYWNrLCBCbHVlLCBHb2xkLCBHcmVlbiwgUmVkXCJcbiB9LFxuIHtcbiAgIFwiTWFudWZhY3R1cmVyXCI6IFwiQ2FsaSBDcnVzaGVyXCIsXG4gICBcIk1vZGVsXCI6IFwiQ2FsaSBDcnVzaGVyIDIuMVwiLFxuICAgXCJUeXBlXCI6IFwiNCBQaWVjZVwiLFxuICAgXCJTaXplXCI6IFwiMi4zNVxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJCbGFjaywgQmx1ZSwgR29sZCwgR3JlZW4sIFJlZFwiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIkNhbGkgQ3J1c2hlclwiLFxuICAgXCJNb2RlbFwiOiBcIkNhbGkgQ3J1c2hlciAyLjJcIixcbiAgIFwiVHlwZVwiOiBcIjMgUGllY2VcIixcbiAgIFwiU2l6ZVwiOiBcIjEuODVcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiQmxhY2ssIEJsdWUsIEdvbGQsIEdyZWVuLCBSZWRcIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJDYWxpIENydXNoZXJcIixcbiAgIFwiTW9kZWxcIjogXCJDYWxpIENydXNoZXIgMi4zXCIsXG4gICBcIlR5cGVcIjogXCIzIFBpZWNlXCIsXG4gICBcIlNpemVcIjogXCIyLjM1XFxcIlwiLFxuICAgXCJDb2xvclwiOiBcIkJsYWNrLCBCbHVlLCBHb2xkLCBHcmVlbiwgUmVkXCJcbiB9LFxuIHtcbiAgIFwiTWFudWZhY3R1cmVyXCI6IFwiQ2FsaSBDcnVzaGVyXCIsXG4gICBcIk1vZGVsXCI6IFwiQ2FsaSBDcnVzaGVyIDIuNFwiLFxuICAgXCJUeXBlXCI6IFwiMiBQaWVjZVwiLFxuICAgXCJTaXplXCI6IFwiMS44NVxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJCbGFjaywgQmx1ZSwgR29sZCwgR3JlZW4sIFJlZFwiXG4gfSxcbiB7XG4gICBcIk1hbnVmYWN0dXJlclwiOiBcIkNhbGkgQ3J1c2hlclwiLFxuICAgXCJNb2RlbFwiOiBcIkNhbGkgQ3J1c2hlciAyLjVcIixcbiAgIFwiVHlwZVwiOiBcIjIgUGllY2VcIixcbiAgIFwiU2l6ZVwiOiBcIjIuMzVcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiQmxhY2ssIEJsdWUsIEdvbGQsIEdyZWVuLCBSZWRcIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJDYWxpIENydXNoZXJcIixcbiAgIFwiTW9kZWxcIjogXCJIb21lZ3Jvd25cIixcbiAgIFwiVHlwZVwiOiBcIjQgUGllY2VcIixcbiAgIFwiU2l6ZVwiOiBcIjEuODVcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiTGlnaHQgQmx1ZSwgQmxhY2ssIEJsdWUsIEJyb3duLCBHcmF5LCBHb2xkLCBHcmVlbiwgVmlvbGV0LCBQaW5rLCBSZWRcIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJDYWxpIENydXNoZXJcIixcbiAgIFwiTW9kZWxcIjogXCJIb21lZ3Jvd25cIixcbiAgIFwiVHlwZVwiOiBcIjQgUGllY2VcIixcbiAgIFwiU2l6ZVwiOiBcIjIuMzVcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiTGlnaHQgQmx1ZSwgQmxhY2ssIEJsdWUsIEJyb3duLCBHcmF5LCBHb2xkLCBHcmVlbiwgVmlvbGV0LCBQaW5rLCBSZWRcIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJDYWxpIENydXNoZXJcIixcbiAgIFwiTW9kZWxcIjogXCJIb21lZ3Jvd25cIixcbiAgIFwiVHlwZVwiOiBcIjIgUGllY2VcIixcbiAgIFwiU2l6ZVwiOiBcIjIuMzVcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiTGlnaHQgQmx1ZSwgQmxhY2ssIEJsdWUsIEJyb3duLCBHcmF5LCBHb2xkLCBHcmVlbiwgVmlvbGV0LCBQaW5rLCBSZWRcIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJDYWxpIENydXNoZXJcIixcbiAgIFwiTW9kZWxcIjogXCJPcmlnaW5hbCBHYW5zdGFcIixcbiAgIFwiVHlwZVwiOiBcIjQgUGllY2VcIixcbiAgIFwiU2l6ZVwiOiBcIjJcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiQmxhY2ssIEJsdWUsIEdvbGQsIEdyZWVuLCBWaW9sZXQsIFBpbmssIFJlZCwgU2lsdmVyXCJcbiB9LFxuIHtcbiAgIFwiTWFudWZhY3R1cmVyXCI6IFwiQ2FsaSBDcnVzaGVyXCIsXG4gICBcIk1vZGVsXCI6IFwiT3JpZ2luYWwgR2Fuc3RhXCIsXG4gICBcIlR5cGVcIjogXCI0IFBpZWNlXCIsXG4gICBcIlNpemVcIjogXCIyLjVcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiQmxhY2ssIEJsdWUsIEdvbGQsIEdyZWVuLCBWaW9sZXQsIFBpbmssIFJlZCwgU2lsdmVyXCJcbiB9LFxuIHtcbiAgIFwiTWFudWZhY3R1cmVyXCI6IFwiQ2FsaSBDcnVzaGVyXCIsXG4gICBcIk1vZGVsXCI6IFwiT3JpZ2luYWwgR2Fuc3RhXCIsXG4gICBcIlR5cGVcIjogXCIyIFBpZWNlXCIsXG4gICBcIlNpemVcIjogXCIyXFxcIlwiLFxuICAgXCJDb2xvclwiOiBcIkJsYWNrLCBHb2xkLCBWaW9sZXRcIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJLYW5uYXN0w7ZyXCIsXG4gICBcIk1vZGVsXCI6IFwiTXVsdGktQ2hhbWJlclwiLFxuICAgXCJUeXBlXCI6IFwiUmVndWxhclwiLFxuICAgXCJTaXplXCI6IFwiMS41XFxcIlwiLFxuICAgXCJDb2xvclwiOiBcIlNpbHZlciArIE1hdHRlIEJsYWNrXCJcbiB9LFxuIHtcbiAgIFwiTWFudWZhY3R1cmVyXCI6IFwiS2FubmFzdMO2clwiLFxuICAgXCJNb2RlbFwiOiBcIk11bHRpLUNoYW1iZXJcIixcbiAgIFwiVHlwZVwiOiBcIlJlZ3VsYXJcIixcbiAgIFwiU2l6ZVwiOiBcIjIuNVxcXCJcIixcbiAgIFwiQ29sb3JcIjogXCJTaWx2ZXIgKyBNYXR0ZSBCbGFjaywgTWF0dGUgQmxhY2tcIlxuIH0sXG4ge1xuICAgXCJNYW51ZmFjdHVyZXJcIjogXCJLYW5uYXN0w7ZyXCIsXG4gICBcIk1vZGVsXCI6IFwiTXVsdGktQ2hhbWJlclwiLFxuICAgXCJUeXBlXCI6IFwidy8gSmFyXCIsXG4gICBcIlNpemVcIjogXCIyLjVcXFwiXCIsXG4gICBcIkNvbG9yXCI6IFwiU2lsdmVyICsgTWF0dGUgQmxhY2ssIE1hdHRlIEJsYWNrXCJcbiB9LFxuIHtcbiAgIFwiTWFudWZhY3R1cmVyXCI6IFwiS2FubmFzdMO2clwiLFxuICAgXCJNb2RlbFwiOiBcIk11bHRpLUNoYW1iZXJcIixcbiAgIFwiVHlwZVwiOiBcIncvIENsZWFyIFRvcFwiLFxuICAgXCJTaXplXCI6IFwiMi41XFxcIlwiLFxuICAgXCJDb2xvclwiOiBcIlNpbHZlciArIE1hdHRlIEJsYWNrXCJcbiB9LFxuIHtcbiAgIFwiTWFudWZhY3R1cmVyXCI6IFwiS2FubmFzdMO2clwiLFxuICAgXCJNb2RlbFwiOiBcIk11bHRpLUNoYW1iZXJcIixcbiAgIFwiVHlwZVwiOiBcIlcvIEphciArIENsZWFyIFRvcFwiLFxuICAgXCJTaXplXCI6IFwiMi41XFxcIlwiLFxuICAgXCJDb2xvclwiOiBcIlNpbHZlciArIE1hdHRlIEJsYWNrXCJcbiB9XG5dO1xuXG4vLyBsZXQgZ3JpbmRlcnMgPSB7IH07XG4vLyBsZXQgZmFpbHNhZmUgPSAxMDA7XG4vLyBsZXQgY291bnQgPSAwO1xuLy9cbi8vIHdoaWxlIChyYXcubGVuZ3RoID4gMCAmJiBmYWlsc2FmZSA+IDApIHtcbi8vICAgZm9yIChsZXQgaSBpbiByYXcpIHtcbi8vICAgICBsZXQgciA9IHJhd1tpXVxuLy8gICAgIGlmIChncmluZGVyc1tyLk1hbnVmYWN0dXJlcl0gPT0gdW5kZWZpbmVkKSB7XG4vLyAgICAgICBncmluZGVyc1tyLk1hbnVmYWN0dXJlcl0gPSB7fTtcbi8vICAgICB9XG4vLyAgICAgaWYgKGdyaW5kZXJzW3IuTWFudWZhY3R1cmVyXVtyLk1vZGVsXSA9PSB1bmRlZmluZWQpIHtcbi8vICAgICAgIGdyaW5kZXJzW3IuTWFudWZhY3R1cmVyXVtyLk1vZGVsXSA9IHt9O1xuLy8gICAgIH1cbi8vICAgICBpZiAoZ3JpbmRlcnNbci5NYW51ZmFjdHVyZXJdW3IuTW9kZWxdW3IuVHlwZV0gPT0gdW5kZWZpbmVkKSB7XG4vLyAgICAgICBncmluZGVyc1tyLk1hbnVmYWN0dXJlcl1bci5Nb2RlbF1bci5UeXBlXSA9IHt9O1xuLy8gICAgIH1cbi8vICAgICBpZiAoZ3JpbmRlcnNbci5NYW51ZmFjdHVyZXJdW3IuTW9kZWxdW3IuVHlwZV1bci5TaXplXSA9PSB1bmRlZmluZWQpIHtcbi8vICAgICAgIGdyaW5kZXJzW3IuTWFudWZhY3R1cmVyXVtyLk1vZGVsXVtyLlR5cGVdW3IuU2l6ZV0gPSBbXTtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgbGV0IGNvbG9ycyA9IHIuQ29sb3Iuc3BsaXQoXCIsIFwiKVxuLy8gICAgICAgZ3JpbmRlcnNbci5NYW51ZmFjdHVyZXJdW3IuTW9kZWxdW3IuVHlwZV1bci5TaXplXSA9IGNvbG9ycztcbi8vICAgICAgIHJhdy5zcGxpY2UoaSwgMSk7XG4vLyAgICAgfVxuLy8gICAgIGNvdW50Kytcbi8vICAgfVxuLy8gICBmYWlsc2FmZS0tO1xuLy8gfVxuXG4vLyBjb25zb2xlLmxvZygnZmluYWw6JywgZ3JpbmRlcnMpO1xuLy8gY29uc29sZS5sb2coJ3JhdzonLCByYXcpO1xuLy8gY29uc29sZS5sb2coJ2NvdW50OicsIGNvdW50KTtcbi8vIGNvbnNvbGUubG9nKGZhaWxzYWZlKTtcbiIsImFwcC5jb250cm9sbGVyKCdOYXZpZ2F0aW9uQ29udHJvbGxlcicsIFsnJGh0dHAnLCAnJHNjb3BlJywgJyRsb2NhdGlvbicsICckbWREaWFsb2cnLCAnJG1kVG9hc3QnLGZ1bmN0aW9uKCRodHRwLCAkc2NvcGUsICRsb2NhdGlvbiwgJG1kRGlhbG9nLCAkbWRUb2FzdCkge1xuICAvLyB0aGlzLnVzZXIgPSB1c2VyO1xuICAvL1xuICAvLyB0aGlzLmxvZ291dCA9ICgpID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZygnbG9nb3V0Jyk7XG4gIC8vICAgbG9jYWxTdG9yYWdlLmNsZWFyKCd0b2tlbicpO1xuICAvLyAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAvLyB9XG4gIC8vXG4gIC8vIHRoaXMub3BlbkxvZ2luID0gKGV2KSA9PiB7XG4gIC8vICAgJG1kRGlhbG9nLnNob3coe1xuICAvLyAgICAgbG9jYWxzOiB7ZGF0YVRvUGFzczoge319LFxuICAvLyAgICAgY29udHJvbGxlcjogRGlhbG9nQ29udHJvbGxlcixcbiAgLy8gICAgIGNvbnRyb2xsZXJBczogJ2N0cmwnLFxuICAvLyAgICAgdGVtcGxhdGVVcmw6ICdwYXJ0aWFscy9sb2dpbi5odG1sJyxcbiAgLy8gICAgIHBhcmVudDogYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmJvZHkpLFxuICAvLyAgICAgdGFyZ2V0RXZlbnQ6IGV2LFxuICAvLyAgICAgY2xpY2tPdXRzaWRlVG9DbG9zZTp0cnVlLFxuICAvLyAgIH0pXG4gIC8vICAgLnRoZW4oKG5ld0luZm8pID0+IHtcbiAgLy8gICAgICRodHRwKHtcbiAgLy8gICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgLy8gICAgICAgICB1cmw6IGAvdXNlci9sb2dpbmAsXG4gIC8vICAgICAgICAgZGF0YTogeyBuZXdJbmZvIH1cbiAgLy8gICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gIC8vICAgICAgICAgLy9jb25zb2xlLmxvZygncmVzcG9uc2U6JywgcmVzcG9uc2UpO1xuICAvLyAgICAgICAgIC8vY29uc29sZS5sb2coJ2RhdGE6JywgcmVzcG9uc2UuZGF0YSk7XG4gIC8vICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcbiAgLy8gICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNmdWwgbG9naW4nKTtcbiAgLy8gICAgICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmRhdGEudG9rZW4pKTtcbiAgLy8gICAgICAgICAgIHVzZXIgPSByZXNwb25zZS5kYXRhLnVzZXJcbiAgLy8gICAgICAgICAgIHRoaXMudXNlciA9IHVzZXI7XG4gIC8vICAgICAgICAgICB0aGlzLnVzZXIubG9nZ2VkID0gdHJ1ZTtcbiAgLy8gICAgICAgICAgIC8vY29uc29sZS5sb2codXNlcik7XG4gIC8vICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgLy8gICAgICAgICAgICAgJG1kVG9hc3Quc2hvdyhcbiAgLy8gICAgICAgICAgICAgICAkbWRUb2FzdC5zaW1wbGUoKVxuICAvLyAgICAgICAgICAgICAgICAgLnRleHRDb250ZW50KGAgICBIZWxsbywgICAke3VzZXIuZmlyc3R9IWApXG4gIC8vICAgICAgICAgICAgICAgICAucG9zaXRpb24oXCJib3R0b20gcmlnaHRcIiApXG4gIC8vICAgICAgICAgICAgICAgICAuaGlkZURlbGF5KDMwMDApXG4gIC8vICAgICAgICAgICAgICk7XG4gIC8vICAgICAgICAgICB9LCAxMDAwKTtcbiAgLy8gICAgICAgICAgICRzY29wZS4kYnJvYWRjYXN0KCd1cGRhdGVBdXRoJywgeyBkYXRhOiB0aGlzLnVzZXIgfSlcbiAgLy8gICAgICAgICB9IGVsc2Uge1xuICAvLyAgICAgICAgICAgcmV0dXJuIHRoaXMub3BlbkxvZ2luKGV2KVxuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gIC8vICAgICAgICAgY29uc29sZS5sb2coJ2xvZ2luIGVycm9yOicsIGVycm9yKTtcbiAgLy8gICAgICAgICB0aGlzLm9wZW5Mb2dpbihldilcbiAgLy8gICAgICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoJ0NhdGNoJywgZXJyKSlcbiAgLy8gICB9LCBmdW5jdGlvbigpIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKCdjYW5jZWwgZGlhbG9nJyk7O1xuICAvLyAgIH0pO1xuICAvLyB9XG4gIC8vXG4gIC8vIHRoaXMub3BlblJlZ2lzdGVyID0gKGV2KSA9PiB7XG4gIC8vICAgJG1kRGlhbG9nLnNob3coe1xuICAvLyAgICAgbG9jYWxzOiB7ZGF0YVRvUGFzczoge319LFxuICAvLyAgICAgY29udHJvbGxlcjogRGlhbG9nQ29udHJvbGxlcixcbiAgLy8gICAgIGNvbnRyb2xsZXJBczogJ2N0cmwnLFxuICAvLyAgICAgdGVtcGxhdGVVcmw6ICdwYXJ0aWFscy9yZWdpc3Rlci5odG1sJyxcbiAgLy8gICAgIHBhcmVudDogYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmJvZHkpLFxuICAvLyAgICAgdGFyZ2V0RXZlbnQ6IGV2LFxuICAvLyAgICAgY2xpY2tPdXRzaWRlVG9DbG9zZTp0cnVlLFxuICAvLyAgIH0pXG4gIC8vICAgLnRoZW4oKG5ld0luZm8pID0+IHtcbiAgLy8gICAgIC8vY29uc29sZS5sb2coJ3JlZ2lzdGVyIHJlcXVlc3Q6JywgbmV3SW5mbyk7XG4gIC8vICAgICAkaHR0cCh7XG4gIC8vICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gIC8vICAgICAgICAgdXJsOiBgL3VzZXJgLFxuICAvLyAgICAgICAgIGRhdGE6IHsgbmV3SW5mbyB9XG4gIC8vICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAvLyAgICAgICAgIC8vY29uc29sZS5sb2coJ3JlZ2lzdGVyIHN1Y2Nlc2Z1bDonLCByZXNwb25zZS5kYXRhKTtcbiAgLy8gICAgICAgICByZXR1cm4gdGhpcy5vcGVuTG9naW4oZXYpXG4gIC8vICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdsb2dpbiBlcnJvcjonLCBlcnJvcik7XG4gIC8vICAgICAgICAgdGhpcy5vcGVuUmVnaXN0ZXIoZXYpXG4gIC8vICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdDYXRjaCcsIGVycikpXG4gIC8vICAgfSwgZnVuY3Rpb24oKSB7XG4gIC8vICAgICBjb25zb2xlLmxvZygnY2FuY2VsIGRpYWxvZycpOztcbiAgLy8gICB9KTtcbiAgLy8gfVxuICAvL1xuICAvLyB0aGlzLmF1dG9Mb2dpbiA9ICgpID0+IHtcbiAgLy8gICAkaHR0cCh7XG4gIC8vICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAvLyAgICAgICB1cmw6IGAvdXNlci9sb2dpbmAsXG4gIC8vICAgICAgIGRhdGE6IHsgbmV3SW5mbzogeyB1c2VybmFtZTogJ3RnJywgcGFzc3dvcmQ6ICd0ZycgfSB9XG4gIC8vICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgLy8gICAgICAgLy9jb25zb2xlLmxvZygncmVzcG9uc2U6JywgcmVzcG9uc2UpO1xuICAvLyAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1xuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNmdWwgbG9naW4nKTtcbiAgLy8gICAgICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZS5kYXRhLnRva2VuKSk7XG4gIC8vICAgICAgICAgdXNlciA9IHJlc3BvbnNlLmRhdGEudXNlclxuICAvLyAgICAgICAgIHRoaXMudXNlciA9IHVzZXI7XG4gIC8vICAgICAgICAgdGhpcy51c2VyLmxvZ2dlZCA9IHRydWU7XG4gIC8vICAgICAgICAgLy9jb25zb2xlLmxvZyh1c2VyKTtcbiAgLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgLy8gICAgICAgICAgICRtZFRvYXN0LnNob3coXG4gIC8vICAgICAgICAgICAgICRtZFRvYXN0LnNpbXBsZSgpXG4gIC8vICAgICAgICAgICAgICAgLnRleHRDb250ZW50KGAgICBIZWxsbywgICAke3VzZXIuZmlyc3R9IWApXG4gIC8vICAgICAgICAgICAgICAgLnBvc2l0aW9uKFwiYm90dG9tIHJpZ2h0XCIgKVxuICAvLyAgICAgICAgICAgICAgIC5oaWRlRGVsYXkoMzAwMClcbiAgLy8gICAgICAgICAgICk7XG4gIC8vICAgICAgICAgfSwgMTAwMCk7XG4gIC8vICAgICAgICAgJHNjb3BlLiRicm9hZGNhc3QoJ3VwZGF0ZUF1dGgnLCB7IGRhdGE6IHRoaXMudXNlciB9KVxuICAvLyAgICAgICB9IGVsc2Uge1xuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdsb2dpbiBlcnJvcicpXG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAvLyAgICAgICBjb25zb2xlLmxvZygnbG9naW4gZXJyb3I6JywgZXJyb3IpO1xuICAvLyAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdDYXRjaCcsIGVycikpXG4gIC8vIH07XG4gIC8vIGlmICgkbG9jYXRpb24uYWJzVXJsKCkgPT0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MTEyMi8nKSB7XG4gIC8vICAgLy90aGlzLmF1dG9Mb2dpbigpXG4gIC8vIH1cbiAgLy9cbiAgLy8gdGhpcy5uYXZMaW5rID0gKHBhdGgpID0+IHtcbiAgLy8gICAvL2NvbnNvbGUubG9nKCduYXZMaW5rJywgcGF0aCk7XG4gIC8vICAgLy90aGlzLnRvRnJvbSA9IHVuZGVmaW5lZDtcbiAgLy8gICBpZiAoJGxvY2F0aW9uLnVybCgpID09IHBhdGgpIHtcbiAgLy8gICAgICRzY29wZS4kYnJvYWRjYXN0KCduYXZMaW5rJywgeyBkYXRhOiBwYXRoIH0pO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICAkbG9jYXRpb24ucGF0aChwYXRoKTtcbiAgLy8gICB9O1xuICAvLyB9O1xuXG59XSk7XG4iLCJhcHAuY29udHJvbGxlcignSG9tZUNvbnRyb2xsZXInLCBbJyRodHRwJywgJyRyb3V0ZScsICckc2NvcGUnLCAnJGxvY2F0aW9uJywgJyRtZERpYWxvZycsICckbWRUb2FzdCcsIGZ1bmN0aW9uKCRodHRwLCAkcm91dGUsICRzY29wZSwgJGxvY2F0aW9uLCAkbWREaWFsb2csICRtZFRvYXN0KSB7XG4gIHRoaXMudGFicyA9IFtcbiAgICAnc3RhcnQnLCdjb250YWN0JywnYm94ZXMnLCAnY2FyZCcsJ2NvbmZpcm0nXG4gIF1cbiAgdGhpcy5hY3RpdmUgPSB7XG4gICAgJ3N0YXJ0JzogZmFsc2UsXG4gICAgJ2NvbnRhY3QnOiBmYWxzZSxcbiAgICAnYm94ZXMnOiBmYWxzZSxcbiAgICAnY2FyZCc6IGZhbHNlLFxuICAgICdjb25maXJtJzogZmFsc2VcbiAgfVxuICB0aGlzLnBhcnRpYWxzID0ge307XG4gIGZvciAobGV0IHQgb2YgdGhpcy50YWJzKSB7XG4gICAgdGhpcy5wYXJ0aWFsc1t0XSA9IGBwYXJ0aWFscy8ke3R9Lmh0bWxgO1xuICB9XG5cbiAgdGhpcy5uZXh0ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCduZXh0Jyk7XG4gICAgdGhpcy5hY3RpdmVbJ2NvbnRhY3QnXSA9IGZhbHNlO1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCsrO1xuICB9XG5cbiAgdGhpcy5iYWNrID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdiYWNrJyk7XG4gICAgdGhpcy5zZWxlY3RlZEluZGV4LS07XG4gIH1cblxuICB0aGlzLmF1dG9TZWxlY3QgPSAob2JqLCBrLCBzKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2F1dG9TZWxlY3QnLCAkc2NvcGUpO1xuICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICBjb25zb2xlLmxvZyhrZXlzKTtcbiAgICBpZiAoa2V5cy5sZW5ndGggPT0gMSkge1xuICAgICAgLy90aGlzLm5ld0luZm9ba10gPSBvYmpba2V5c1swXV07XG4gICAgfVxuICB9XG5cbiAgdGhpcy5vcmRlciA9IHt9XG5cbiAgdGhpcy5zdWJDb250YWN0ID0gKG5ld0luZm8pID0+IHtcbiAgICBpZiAoXG4gICAgICBuZXdJbmZvLmZpcnN0ICYmXG4gICAgICBuZXdJbmZvLmxhc3QgJiZcbiAgICAgIG5ld0luZm8uZW1haWwgJiZcbiAgICAgIG5ld0luZm8uYWRkcmVzczEgJiZcbiAgICAgIG5ld0luZm8uY2l0eSAmJlxuICAgICAgbmV3SW5mby5zdGF0ZSAmJlxuICAgICAgbmV3SW5mby56aXBcbiAgICApIHtcbiAgICAgIHRoaXMub3JkZXIuY29udGFjdCA9IG5ld0luZm87XG4gICAgICBjb25zb2xlLmxvZygnc3ViLW5leHQ6JywgdGhpcy5vcmRlcik7XG4gICAgICB0aGlzLmFjdGl2ZVsnYm94ZXMnXSA9IGZhbHNlO1xuICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdub3BlJywgbmV3SW5mbyk7XG4gICAgfVxuICAgICAgLy9zZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5hZHZhbmNlKCk7IH0sIDUwMCk7XG4gICAgLy99IGVsc2Uge1xuICAgICAgLy9jb25zb2xlLmxvZygnbm9wZScpO1xuICAgIC8vfVxuICB9XG5cbiAgdGhpcy5zdWJDYWNoZSA9IChjYWNoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGNhY2hlKTtcbiAgICBpZiAoY2FjaGUpIHtcbiAgICAgIHRoaXMub3JkZXIuY2FjaGUgPSBjYWNoZTtcbiAgICAgIHRoaXMuYWN0aXZlWydjYXJkJ10gPSBmYWxzZTtcbiAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuYWR2YW5jZSgpOyB9LCA1MDApO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMuc3ViQ0MgPSAoY2MpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjYyk7XG4gICAgaWYgKGNjLnppcCAmJiBjYy5jdnYgJiYgY2MubW8gJiYgY2MueXIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd2YWxpZCBiaXRzJyk7XG4gICAgICBpZiAodmFsaWRDYXJkKGNjLm51bWJlcikpIHtcbiAgICAgICAgdGhpcy5vcmRlci5jYyA9IGNjO1xuICAgICAgICB0aGlzLmFjdGl2ZVsnY29uZmlybSddID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5hZHZhbmNlKCk7IH0sIDUwMCk7XG4gICAgICAgIHRoaXMudmFsaWRDYXJkID0gJ0NyZWRpdCBDYXJkIE9LISdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiVGhlIGNyZWRpdCBjYXJkIHlvdSBlbnRlcmVkIGlzIG5vdCBhIHZhbGlkIGNhcmQgbnVtYmVyLi4uXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB0aGlzLnN1Ym1pdCA9IChuZXdJbmZvKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3N1bWJpdDonLCBuZXdJbmZvKTtcbiAgICAkaHR0cCh7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHVybDogYC9vcmRlcmAsXG4gICAgICBkYXRhOiBuZXdJbmZvXG4gICAgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnc3VjY2VzZnVsIHBvc3QnLCByZXNwb25zZS5kYXRhKTtcbiAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuaW5mbyA9IG5ld0luZm87XG4gICAgICBhbGVydCgnTmljZSBKb2IhJyk7XG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvcjonLCBlcnJvcik7XG4gICAgICBhbGVydCgnU29tZXRoaW5nIHdlbnQgd3JvbmcuLi4nKVxuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKCdDYXRjaCcsIGVycikpXG5cbiAgfVxuICAvL3RoaXMuZ3JpbmRlcnMgPSBncmluZGVycztcblxuICB0aGlzLnN0YXRlcyA9IHtcbiAgICBcIkFMXCI6IFwiQWxhYmFtYVwiLFxuICAgIFwiQUtcIjogXCJBbGFza2FcIixcbiAgICBcIkFTXCI6IFwiQW1lcmljYW4gU2Ftb2FcIixcbiAgICBcIkFaXCI6IFwiQXJpem9uYVwiLFxuICAgIFwiQVJcIjogXCJBcmthbnNhc1wiLFxuICAgIFwiQ0FcIjogXCJDYWxpZm9ybmlhXCIsXG4gICAgXCJDT1wiOiBcIkNvbG9yYWRvXCIsXG4gICAgXCJDVFwiOiBcIkNvbm5lY3RpY3V0XCIsXG4gICAgXCJERVwiOiBcIkRlbGF3YXJlXCIsXG4gICAgXCJEQ1wiOiBcIkRpc3RyaWN0IE9mIENvbHVtYmlhXCIsXG4gICAgXCJGTVwiOiBcIkZlZGVyYXRlZCBTdGF0ZXMgT2YgTWljcm9uZXNpYVwiLFxuICAgIFwiRkxcIjogXCJGbG9yaWRhXCIsXG4gICAgXCJHQVwiOiBcIkdlb3JnaWFcIixcbiAgICBcIkdVXCI6IFwiR3VhbVwiLFxuICAgIFwiSElcIjogXCJIYXdhaWlcIixcbiAgICBcIklEXCI6IFwiSWRhaG9cIixcbiAgICBcIklMXCI6IFwiSWxsaW5vaXNcIixcbiAgICBcIklOXCI6IFwiSW5kaWFuYVwiLFxuICAgIFwiSUFcIjogXCJJb3dhXCIsXG4gICAgXCJLU1wiOiBcIkthbnNhc1wiLFxuICAgIFwiS1lcIjogXCJLZW50dWNreVwiLFxuICAgIFwiTEFcIjogXCJMb3Vpc2lhbmFcIixcbiAgICBcIk1FXCI6IFwiTWFpbmVcIixcbiAgICBcIk1IXCI6IFwiTWFyc2hhbGwgSXNsYW5kc1wiLFxuICAgIFwiTURcIjogXCJNYXJ5bGFuZFwiLFxuICAgIFwiTUFcIjogXCJNYXNzYWNodXNldHRzXCIsXG4gICAgXCJNSVwiOiBcIk1pY2hpZ2FuXCIsXG4gICAgXCJNTlwiOiBcIk1pbm5lc290YVwiLFxuICAgIFwiTVNcIjogXCJNaXNzaXNzaXBwaVwiLFxuICAgIFwiTU9cIjogXCJNaXNzb3VyaVwiLFxuICAgIFwiTVRcIjogXCJNb250YW5hXCIsXG4gICAgXCJORVwiOiBcIk5lYnJhc2thXCIsXG4gICAgXCJOVlwiOiBcIk5ldmFkYVwiLFxuICAgIFwiTkhcIjogXCJOZXcgSGFtcHNoaXJlXCIsXG4gICAgXCJOSlwiOiBcIk5ldyBKZXJzZXlcIixcbiAgICBcIk5NXCI6IFwiTmV3IE1leGljb1wiLFxuICAgIFwiTllcIjogXCJOZXcgWW9ya1wiLFxuICAgIFwiTkNcIjogXCJOb3J0aCBDYXJvbGluYVwiLFxuICAgIFwiTkRcIjogXCJOb3J0aCBEYWtvdGFcIixcbiAgICBcIk1QXCI6IFwiTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzXCIsXG4gICAgXCJPSFwiOiBcIk9oaW9cIixcbiAgICBcIk9LXCI6IFwiT2tsYWhvbWFcIixcbiAgICBcIk9SXCI6IFwiT3JlZ29uXCIsXG4gICAgXCJQV1wiOiBcIlBhbGF1XCIsXG4gICAgXCJQQVwiOiBcIlBlbm5zeWx2YW5pYVwiLFxuICAgIFwiUFJcIjogXCJQdWVydG8gUmljb1wiLFxuICAgIFwiUklcIjogXCJSaG9kZSBJc2xhbmRcIixcbiAgICBcIlNDXCI6IFwiU291dGggQ2Fyb2xpbmFcIixcbiAgICBcIlNEXCI6IFwiU291dGggRGFrb3RhXCIsXG4gICAgXCJUTlwiOiBcIlRlbm5lc3NlZVwiLFxuICAgIFwiVFhcIjogXCJUZXhhc1wiLFxuICAgIFwiVVRcIjogXCJVdGFoXCIsXG4gICAgXCJWVFwiOiBcIlZlcm1vbnRcIixcbiAgICBcIlZJXCI6IFwiVmlyZ2luIElzbGFuZHNcIixcbiAgICBcIlZBXCI6IFwiVmlyZ2luaWFcIixcbiAgICBcIldBXCI6IFwiV2FzaGluZ3RvblwiLFxuICAgIFwiV1ZcIjogXCJXZXN0IFZpcmdpbmlhXCIsXG4gICAgXCJXSVwiOiBcIldpc2NvbnNpblwiLFxuICAgIFwiV1lcIjogXCJXeW9taW5nXCJcbiAgfVxuXG4gIC8vdGhpcy5zZWxlY3RlZEluZGV4ID0gMztcblxuICB0aGlzLmFkdmFuY2UgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2FkdmFuY2UnKTtcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXgrKztcbiAgfVxuXG59XSk7XG4iXX0=
