"use strict";
let height;
let ticket;

window.prompt("身長を入力してください。");
if (height >= 100) {
    window.alert("プレミアムチケットを持って持っていますか？")
} else if (height >= 80){
    window.alert("付き添いありで乗車可能です。")
} else {
    window.alert("乗車できません。")
}
