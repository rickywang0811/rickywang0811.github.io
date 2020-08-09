Vue.use(VueLoading);
Vue.component('loading', VueLoading);

new Vue({
  el: '#app',
  data: {
    isLoading: false,
    schoolStatic: [],
    schoolRank: [],
    schoolRatio: [],
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
      const len = arr.length;

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
      console.log(sn);
      console.log(rank);

      let firstidx = rank.indexOf(Math.max(...rank));
      // console.log(firstidx);
      this.schoolRank.push(sn[firstidx]);
      let truefirst = 100*(rank[firstidx]/len);
      let first = Math.round(truefirst);
      if (isNaN(first)) {first = 0};
      this.schoolRatio.push(`${first}%`);
      sn.splice(firstidx, 1);
      rank.splice(firstidx, 1);
      // console.log(sn);
      // console.log(rank);

      let secondidx = rank.indexOf(Math.max(...rank));
      // console.log(secondidx);
      this.schoolRank.push(sn[secondidx]);
      let truesecond = 100*(rank[secondidx]/len);
      let second = Math.round(truesecond);
      if (isNaN(second)) {second = 0};
      this.schoolRatio.push(`${second}%`);
      sn.splice(secondidx, 1);
      rank.splice(secondidx, 1);
      // console.log(sn);
      // console.log(rank);

      let thirdidx = rank.indexOf(Math.max(...rank));
      // console.log(thirdidx);
      this.schoolRank.push(sn[thirdidx]);
      let truethird = 100*(rank[thirdidx]/len);
      let third = Math.round(truethird);
      if (isNaN(third)) {third = 0};
      this.schoolRatio.push(`${third}%`);
      sn.splice(thirdidx, 1);
      rank.splice(thirdidx, 1);
      // console.log(sn);
      // console.log(rank);

      let forthidx = rank.indexOf(Math.max(...rank));
      // console.log(thirdidx);
      this.schoolRank.push(sn[forthidx]);
      let trueforth = 100*(rank[forthidx]/len);
      let forth = Math.round(trueforth);
      if (isNaN(forth)) {forth = 0};
      this.schoolRatio.push(`${forth}%`);
      sn.splice(forthidx, 1);
      rank.splice(forthidx, 1);
      // console.log(sn);
      // console.log(rank);

      let fifthidx = rank.indexOf(Math.max(...rank));
      // console.log(thirdidx);
      this.schoolRank.push(sn[fifthidx]);
      let truefifth = 100*(rank[fifthidx]/len);
      let fifth = Math.round(truefifth);
      if (isNaN(fifth)) {fifth = 0};
      this.schoolRatio.push(`${fifth}%`);
      sn.splice(fifthidx, 1);
      rank.splice(fifthidx, 1);
      // console.log(sn);
      // console.log(rank);
      this.other = Math.round(100 - truefirst - truesecond - truethird - trueforth - truefifth);
      this.other = `${this.other}%`
      if(isNaN(this.other)) { this.other = 0; };
    }
  },
});