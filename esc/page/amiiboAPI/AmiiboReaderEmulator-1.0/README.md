# amiibo-emu.js
amiibo-emu.jsは、WiiUインターネットブラウザで利用できるAmiibo APIを、PCなどでもエミュレートできるようにしたものです。

WiiUでAmiibo APIが使える！？詳しくは、私が関数などをまとめた[Qiita記事](https://qiita.com/SquidSky/items/305325b96cbc162b383a)をご覧ください。
# 使い方

```html
<script type="text/javascript" src="./amiibo-emu.js"></script>
```
と記述して、ライブラリをインポートします。
次に、JavaScriptプログラムで初期化関数を実行します。これを実行すると、`window.amiibo`以下がエミュレートされます。

```javascript
window.onload = function() {
 initAmiiboEmulator(); //Initalize amiibo emulator
}
```
これで、PCなどでもAmiibo APIをエミュレートできます。
すべてエミュレートしているので、もちろん`window.amiibo.playAmiiboSE()`も使えます。

Amiiboを認識したのと同じ動作をエミュレートすることも、もちろんできます。Amiiboを認識したのをエミュレートするには、`window.amiibo.emulateAmiiboLoaded()`を実行します。これはamiibo-emu.jsだけの機能ですので、注意してください。

```javascript
window.amiibo.emulateAmiiboLoaded();
```

これらのサンプルはsrc/exampleにありますので参考にしてください。
