function $(id) {
 return document.getElementById(id);
}
function setstatus(text) {
 $("status").innerHTML = text;
}
function setresult(text) {
 $("res").innerHTML = text;
}
function setEmulateStatus(text) {
  $("emulatestat").innerHTML = text;
}

function init() {
 /*if(!window.amiibo) {
  alert("WiiUブラウザからアクセスしてください");
  return;
 }*/

 window.amiibo.startSearchAmiibo(); //Amiibo検索開始
 setstatus("Amiibo読み込み準備完了");
 window.addEventListener("AmiiboTagDetected", readTag); //イベントハンドラ登録
 window.addEventListener("AmiiboTagLost", tagLost); //イベントハンドラ登録
}

function readTag(e) {
 var tagdata = customEvent.tag;
 if(tagdata.isRead) window.amiibo.playAmiiboSE(); //タグが認識されたら声を再生
 var id_hex = '';
 tagdata.info.id.forEach(function(id, i){
  if (i == 2) return;
  id_hex += ('0'+id.toString(16)%10).slice(-2);
 });
 setstatus("Amiiboを読み込みました");
 setresult("読み込んだタグID:" + id_hex);
}

function tagLost(e) {
 setstatus("タグを見失いました");
}

window.onload = function () {
 if(typeof window.amiibo === "undefined") {
   initAmiiboEmulator(); //WiiUでない場合はAmiiboエミュレータ初期化
   setEmulateStatus("はい");
 }
 init(); //アプリケーション初期化
}
