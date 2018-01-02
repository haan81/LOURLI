    var Observable = require('FuseJS/Observable');
    var ETC_TEXT = Observable();
    var ActList = require("ActList");
    
    let items_Etc=[{Name:"ENTER"}]
    
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
        var sAction = args.data.Name;

        if (sAction!="ENTER")
        {      
            fetch('https://script.google.com/macros/s/AKfycbwmsx6T76fseLVwaA12wscU3iTed_XSQQ9doyNus39Uegl0kko/exec', {
                method: 'post',
                headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
                body: 'Date=' + currDate + '&' +
                      'Time=' + currTime + '&' +
                      'Action=' + sAction
                }).then(function(response) {})
        }            
        else
        {
            fetch('https://script.google.com/macros/s/AKfycbwmsx6T76fseLVwaA12wscU3iTed_XSQQ9doyNus39Uegl0kko/exec', {
                method: 'post',
                headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
                body: 'Date=' + currDate + '&' +
                      'Time=' + currTime + '&' +
                      'Action=' + ETC_TEXT.value
                }).then(function(response) {})
        }           
    }       

    function goBack(){
        router.goBack();
    }

    module.exports = {
        items_Etc: items_Etc,
        ActList: ActList,
        ETC_TEXT: ETC_TEXT,
        onClick: onClick,
        goBack: goBack

    }
