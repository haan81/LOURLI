    var Observable = require('FuseJS/Observable');

    var YYYY=Observable();
    var MM=Observable();
    var DD=Observable();
    

    var items=Observable();
    var items_Color = ["#4CD8FC", "#A943C1", "#FFCE6B", "#EB4CAF", "#33CB9F"];
    var currentPage = Observable(0);

    function activated(arg) {
        currentPage.value = arg.data.index;
    }

    var defaultRotation = Observable(0);

    
    function Clicked_ShowResult(){
        items.clear();
        var SelectedDate=YYYY.value + "/" + MM.value + "/" + DD.value;

        fetch('https://spreadsheets.google.com/feeds/list/14mvZ3ov6EyWR4-n9kTfVlvXvVw5JrxwEqo46j1fNbwI/od6/public/values?alt=json')
        .then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then((data)=>{
            var entry=data.feed.entry;
            var ArrHour = [];
            var ArrMin = [];
            var ArrAct = [];
            for(var i in entry)
            { // 각 행에대해 아래 스크립트를 실행합니다.
                var sDateofData = entry[i].title.$t;
                var sTmp = entry[i].content.$t;
                var arrTmp = sTmp.split(",");

                var sHour = arrTmp[0].split(":")[1].trim();
                var sMin = arrTmp[0].split(":")[2].trim();

                var sTime = sHour + ":" + sMin;
                var sAction = arrTmp[1].split(":")[1].trim();

                var sYear = sDateofData.split("/")[0].trim();
                var sMonth = sDateofData.split("/")[1].trim();
                var sDay = sDateofData.split("/")[2].trim();
                
                if (sMonth.length==1)
                    sMonth="0"+sMonth;
                if (sDay.length==1)
                    sDay="0"+sDay;

                sDateofData = sYear + "/" + sMonth + "/" + sDay;               

                //console.log(sDateofData + " // " + SelectedDate);
                if(sDateofData==SelectedDate)
                //if(sDateofData=="2017/04/10")
                {
                    console.log(sDateofData + " // " + SelectedDate);
                
                    console.log(sTime);   
                    console.log(sAction);

                    ArrHour[ArrHour.length] = Number(sHour);
                    ArrMin[ArrMin.length] = Number(sMin);
                    ArrAct[ArrAct.length] = sAction;
                }        

            }

            // 마지막 액션의 종료시간은 24:00으로 설정한다.
            ArrHour[ArrHour.length] = Number("24");
            ArrMin[ArrMin.length] = Number("00");

            Calcu_HourofAction(ArrHour, ArrMin, ArrAct);
        })
        .catch((e)=>{
                console.log("Fetch failed!", e);
                
        });
    }

    function Calcu_HourofAction(ArrHour, ArrMin, ArrAct) {
        var ArrRes_Act = [];
        var ArrayResult_H = [];
        var ArrayResult_M = [];
        for(iCnt=0; iCnt < ArrHour.length; iCnt++)
        {
            if (iCnt>0){
                var sTmpH = ArrHour[iCnt];
                var sTmpM = ArrMin[iCnt];
                
                var sTmpH_pre = ArrHour[iCnt-1];
                var sTmpM_pre = ArrMin[iCnt-1];
                
                var TotalMin = (sTmpH*60+sTmpM) - (sTmpH_pre*60+sTmpM_pre)
                var ActH = parseInt(TotalMin/60);
                var ActM = TotalMin%60;
                var TotalH = ActH + "h " + ActM + "M";
 
                var sAct = ArrAct[iCnt-1]
                var bExist = false;


                for(itmp=0;itmp<ArrRes_Act.length;itmp++)
                {
                    if (ArrRes_Act[itmp]==sAct)
                    {
                        ArrayResult_H[itmp]=ArrayResult_H[itmp]+ActH;
                        ArrayResult_M[itmp]=ArrayResult_M[itmp]+ActM;
                        if (ArrayResult_M[itmp]>60)
                        {
                            ArrayResult_M[itmp]=ArrayResult_M[itmp]-60;
                            ArrayResult_H[itmp]=ArrayResult_H[itmp]+1;
                        }
                        bExist = true;
                        break;
                    }
                }
                
                if (bExist==false){
                    ArrRes_Act.push(sAct);
                    ArrayResult_H[ArrayResult_H.length] = ActH;
                    ArrayResult_M[ArrayResult_M.length] = ActM;
                }
            }
        }

        var itemList=[];
        var MinsofDay= 24 * 60;
        for(ii=0;ii<ArrRes_Act.length;ii++)
        {
            //console.log(ArrayResult_H[ii] + ":" + ArrayResult_M[ii] + " - " + ArrRes_Act[ii]);            
            
            var MinsofItem = ArrayResult_H[ii]*60 + ArrayResult_M[ii];
            var Persentage = parseInt( (MinsofItem/MinsofDay)*100 );

            var ColorIdx = ii%items_Color.length;

            var item={
                Name: ArrRes_Act[ii], 
                value: Persentage, 
                Color: items_Color[ColorIdx]
            };

            itemList.push(item);

        }

        items.add(itemList);
    }

    function goBack(){
        router.goBack();
    }

    module.exports = {
        goBack: goBack,
        items: items.map(function(i){
            var lastItem = {
                startAngle: 0,
                endAngle: 0,
                angle: 0
            };
            i.forEach(function(x, c) {
                x.index = c;
                x.angle = ((x.value / 100) * 360);
                if (c === 0) {
                    defaultRotation.value = x.angle / 2 + 90;
                    lastItem.wheelRotate = 0;
                }
                if (c > 0) {
                    lastItem.wheelRotate = (x.angle / 2) + (lastItem.angle / 2);
                }

                x.startAngle = lastItem.startAngle - x.angle;
                x.endAngle = lastItem.startAngle;

                x.isActive = Observable(function(){
                    return currentPage.value == x.index;
                });

                lastItem = x;

            });
            return i;
        }).expand(),
        Clicked_ShowResult:Clicked_ShowResult,
        YYYY:YYYY,
        MM:MM,
        DD:DD
    };
