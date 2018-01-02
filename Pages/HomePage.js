
function goActionList(arg){
	router.push("ActionList");
}

function goSetAlarm(arg){
	router.push("SetAlarm")
}

function goShowResult(arg){
	router.push("ShowResult")
}

module.exports={
	goActionList: goActionList,
	goSetAlarm: goSetAlarm,
	goShowResult: goShowResult
}