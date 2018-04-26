    var Observable = require('FuseJS/Observable');
    var InputtedStr = Observable();
    var Act = Observable();
    var ActList = require("ActList");
    
    
    function onClick(args) {

        var currentdate = new Date();
        var currDate = currentdate.getFullYear() + "/"
                       + (currentdate.getMonth()+1)  + "/" 
                       + currentdate.getDate()

        var coeff = 1000 * 60 * 5;
        var date = new Date();  //or use any other date
        var rounded = new Date(Math.round(date.getTime() / coeff) * coeff)

        var currTime = rounded.getHours() + ':' + rounded.getMinutes()
        var curTime = currTime.toString();  
        var sAction = Act.value;

        
        fetch('https://script.google.com/macros/s/AKfycbwmsx6T76fseLVwaA12wscU3iTed_XSQQ9doyNus39Uegl0kko/exec', {
            method: 'post',
            headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
            body: 'Date=' + currDate + '&' +
                  'Time=' + currTime + '&' +
                  'Action=' + sAction
            }).then(function(response) {})
    
        var a = "Date : " + currDate + " | Time : " + currTime + " | Activity : " + sAction; 
        console.log("a : " + a);

        InputtedStr.value = currDate + " | " + currTime + " | " + sAction;
        console.log("onClink : " + InputtedStr.value);
    }       

    function goBack(){
        router.goBack();
    }

    module.exports = {
        Act:Act,
        ActList: ActList,
        InputtedStr: InputtedStr,
        onClick: onClick,
        goBack: goBack

    }
    
    module.exports.margin = 10;

    var isPicker = Observable(false);
    module.exports.pickerOn = isPicker;
    module.exports.pickerDown = function() {
                    console.log("Act: "  + Act.value);
                    isPicker.value = false;
    };

    module.exports.togglePicker = function() { 
        isPicker.value = !isPicker.value;
    }
    