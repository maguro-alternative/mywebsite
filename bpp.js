const app = new Vue({
  el: '#app', // Vueが管理する一番外側のDOM要素
  data: {
    // Vue内部で使いたい変数は全てこの中に定義する
    name: '',
    contents: '',
    period: '',
    point:'',
    other: '',
    OshiList: [], // これは配列
  },
  methods: {
    // 関数はここ
    addOshi: function() {
      console.log('推しを追加したよ：', this.name, this.contents, this.period, this.point, this.other);
      // 配列の先頭に現在のタスク内容を追加する（最後尾の場合はpush）
//      this.OshiList.unshift(this.name, this.contents, this.period, this.point, this.other);
        this.OshiList.unshift({name:this.name,
                             contents:this.contents,
                             period:this.period,
                             point:this.point,
                             other:this.other});
      console.log('登録した推し一覧：', this.OshiList);
    },
    // 以下を追加、関数名はなんでもよい
    delOshi: function() {
      this.name = '';
      this.contents ='';
      this.period = '';
      this.point = '';
      this.other = '';
      this.OshiList = [];
      console.log('全ての推しを消したよ');
    },
  },
});