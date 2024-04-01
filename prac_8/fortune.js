"use strict";
function btnClick(){
   //入力された値の取得
   let wordValue = document.getElementById("wordInput").value;
   let result = document.getElementById("result");
   result.textContent = wordValue + "さんの運勢は"+ omikujiSelect + "!";
}

let omikujiSelect = document.getElementById("omikujiSelect");
omikujiSelect.addEventListener("change",function(){
    
    let omikujiSelect = Number(omikujiSelect);
    
    let omikujiSelectStr = "今日の運勢は:";

    switch(omikujiSelect) {
        case 1:
            omikujiSelectStr += "大吉";
            break;
        case 2:
            omikujiSelectStr += "小吉";
            break;
        case 3:
            omikujiSelectStr += "吉";
            break;
        case 4:
            omikujiSelectStr += "末吉";
            break;
         case 5:
            omikujiSelectStr += "凶";
            break;
         case 6:
            omikujiSelectStr += "大凶";
            break;
        default:
            paymentSelectStr = "";
    }
   
    var elements = document.getElementById("top");
    while(element.firstChild){
      elements.removeChild(elements.firstChild);

    }
});
