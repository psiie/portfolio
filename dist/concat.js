console.log("v2.3");var app=angular.module("Portfolio",["ui.router"]);app.factory("projects",function(){return{1:{title:"About Me",info:!0,infoColor:{backgroundColor:"#E8ECF1"},infoTitle:"about me",desc:[]},2:{title:"Dungeon Explorer",cover:"project/cover-dung.png",img:["dungeon1.png","dungeon2.png"],desc:["A quick, roguelike game where the main objective is to stay alive and delve as deep into the depths as possible."]},3:{title:"SquidLink",cover:"project/cover-squidl.png",img:["squidlink1.png","squidlink2.png","squidlink3.png","squidlink4.png"],desc:["A tool for helping to get files from A to B. All without the need for additional software or hardware. Squidlink utilizes Webtorrent as it's core but is geared towards ease of use."]},4:{title:"Game of Life",cover:"project/cover-life.png",img:["gol1.png","gol2.png"],desc:["An exploration into efficiency and game logic. With simple 4 rules, complexity can arise."]},5:{title:"Homocides by Police",cover:"project/cover-cops.png",img:["homocide1.png","homocide2.png"],desc:["Lorem Ipsum"]},6:{title:"Contact Me",info:!0,infoColor:{backgroundColor:"#cdd7ea"},infoTitle:"contact me",desc:["Reno McKenzie","Reno@RenoMcKenzie.com","https://www.linkedin.com/in/renomckenzie","darkenvy.github.com"]},7:{title:"Resumé",info:!0,infoColor:{backgroundColor:"#F5F1DA"},infoTitle:"resumé",desc:[]}}}),app.controller("MainCtrl",["$scope","projects","$location","$anchorScroll",function(e,o,t,i){e.projects=o,e.gotoTop=function(){i()},e.flip=function(e){"About Me"==e.title||"Resumé"==e.title?(t.path("/about"),i()):e._flipped=!e._flipped}}]),app.controller("ProjectsCtrl",["$scope","projects","$stateParams",function(e,o,t){e.project=o[t.id]}]),app.controller("ContactCtrl",["$scope",function(e){e.text="contact page"}]),app.controller("AboutCtrl",["$scope",function(e){e.text="about page"}]),app.config(["$stateProvider","$urlRouterProvider",function(e,o){o.otherwise("/"),e.state("main",{url:"/",templateUrl:"views/main.html"}).state("projects",{url:"/projects/:id",templateUrl:"views/projects.html",controller:"ProjectsCtrl"}).state("contact",{url:"/contact",templateUrl:"views/contact.html",controller:"ContactCtrl"}).state("about",{url:"/about",templateUrl:"views/about.html",controller:"AboutCtrl"})}]);
//# sourceMappingURL=concat.js.map
