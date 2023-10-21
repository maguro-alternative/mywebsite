//Amiibo reader emulate
function initAmiiboEmulator() {
  window.amiibo = function() {
    console.log("Amiibo API is emulated");
  }
  //window.amiiboに同じ関数名を登録
  window.amiibo.startSearchAmiibo = function() {
    //Amiibo検索開始をエミュレート
    //console.log("Amiibo emulator: Start search emulate");
    var cev = document.createEvent("HTMLEvents");
    cev.initEvent("AmiiboTagSearchStart", true, false);
    window.dispatchEvent(cev);
  }
  window.amiibo.endSearchAmiibo = function() {
    //Amiibo検索終了をエミュレート
    var cev = document.createEvent("HTMLEvents");
    cev.initEvent("AmiiboTagSearchCancel", true, false);
    window.dispatchEvent(cev);
  }
  window.amiibo.playAmiiboSE = function() {
    //「アミィーボッ！」をエミュレート
    var snd = new Audio();
    snd.src = "audio/amiibo.mp3";
    snd.load();
    snd.play();
  }
  window.amiibo.emulateAmiiboLoaded = function() {
    var cev = document.createEvent("HTMLEvents");
    cev.initEvent("AmiiboTagDetected", true, false);
    window.customEvent = {
      tag: {
        info: {
          id: ['0x22201','0x20108','0x82177'],
          emulateinfo: 'yes'
        },
        isRead: true
      }
    };
    window.dispatchEvent(cev);
    console.log("Emulate amiibo tag load");
  }
}
