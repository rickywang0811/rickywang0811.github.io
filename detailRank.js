Vue.use(VueLoading);
Vue.component('loading', VueLoading);

new Vue({
  el: '#app',
  data: {
    isLoading: false,
    schoolStatic: [],
    schoolRank: [],
    // schoolRatio: [],
    other: ''
  },
  mounted() {
    this.getSchool();
  },
  methods: {
    getSchool () {
      this.isLoading = true;
      const api = 'https://riceballweb.herokuapp.com/getallsn';
      axios.get(api).then(rsp => {
        const data = rsp.data;
        // console.log(JSON.stringify(data));
        data.forEach(el => {
          let temp = el.schoolName;
          this.schoolStatic.push(temp);
        });
        // console.log(this.schoolStatic.sort());
        if (this.schoolStatic.length > 0) {
          this.rank(this.schoolStatic);
        }
        this.isLoading = false;
      }).catch(e => {
        console.log(e);
        this.isLoading = false;
      })
    },
    rank (arr) {
      let sn = [];
      let rank = [];
      // const len = arr.length;

      arr.forEach(el => {
        // console.log(typeof el);
        if (sn.includes(el)) {
          let idx = sn.indexOf(el);
          rank[idx]++;
        } else {
          sn.push(el);
          // console.log(sn);
          let idx = sn.indexOf(el);
          // console.log(idx);
          rank[idx] = 1;
        }
      })
      // console.log(sn);
      // console.log(rank);

      const len = sn.length;
      for (let i = 0;i < len; i++) {
        // console.log(`i = ${i}`);
        // console.log(sn[i]);
        // console.log(`length = ${sn.length}`);
        let idx = rank.indexOf(Math.max(...rank));
        this.schoolRank.push({
          name: sn[idx],
          vote: rank[idx]
        });
        sn.splice(idx, 1);
        rank.splice(idx, 1);
      }
      // console.log(sn);
      // console.log(rank);
      // console.log(this.schoolRank);
    }
  },
});