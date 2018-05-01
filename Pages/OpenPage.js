var Timer = require("FuseJS/Timer");

Timer.create(function() {
    console.log("This will run once, after 3 seconds");
    goHome();
}, 3000, false);


function goHome(arg){
	router.push("Home")
}

module.exports={
	goHome: goHome
}