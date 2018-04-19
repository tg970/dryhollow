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
