var app = angular.module("app", []);
app.controller("HelloController", function($scope) {
  $scope.intro_message = "I would like to learn about how to make my own ecommerce site, and/or real estate payment center in this class!";
  $scope.img_url = "https://media.giphy.com/media/bmrxNoGqGNMAM/giphy.gif";
  $scope.outside_url = "http://google.com";
  $scope.inside_redirect = "writeup.html";
});

app.controller("WriteupController", function($scope) {
  $scope.index = "index.html";
  $scope.para_one = "Angularjs is typically used for dynamic web applications. It is most useful for adding interactivity to front-end webpages, and doesn't necessarily serve/host a webpage like NodeJS.";
  $scope.para_two = "AngularJS is helpful because it's cross platform, works quickly and efficiently, is easy to afford (open source) and is pretty easy to learn. Some disadvantagous of AngularJS are that it's hard to itnegrate with other JS integrations, and may take more time to test than other JS integrations." ;

});
