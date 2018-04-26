    var Observable = require('FuseJS/Observable');
    var items = Observable();
    var SettedItem = Observable();
    var idx = 0;
    var iClickedIdx = 0;
                    
    function ClickRec(args)
    {   
        iClickedIdx=args.data.ID;
        //Clicked_TEXT.value=args.data.ID
    }

    function addItem(){
        if(SettedItem.value!=""){
            items.add({
                color : [Math.random(), Math.random(), Math.random(), 1],
                //height : (Math.random() + 1.0) * 80,
                height : 50,
                Value : SettedItem.value,
                ID : idx
            });
            idx=idx+1;
            SettedItem.value="";
        }
    }

    function RemoveItem(){
        var idx=0;
        idx=iClickedIdx;
        console.log(items.getAt(idx));

        for (i = 0; i < items.length; i++) 
        { 
            if(items.getAt(i).ID==idx){
                items.remove(items.getAt(i));
            }
        }
    }

    function goBack(){
        router.goBack();
    }

    module.exports = {
        items : items,
        addItem : addItem,
        RemoveItem : RemoveItem,
        ClickRec: ClickRec,
        SettedItem : SettedItem,
        goBack: goBack
    };