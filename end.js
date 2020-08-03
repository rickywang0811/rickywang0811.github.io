new Vue({
  el: '#app',
  data: {
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
      }).catch(e => {
        console.log(e);
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
      let first = Math.round(100*(rank[firstidx]/len));
      this.schoolRatio.push(`${first}%`);
      sn.splice(firstidx, 1);
      rank.splice(firstidx, 1);
      // console.log(sn);
      // console.log(rank);

      let secondidx = rank.indexOf(Math.max(...rank));
      // console.log(secondidx);
      this.schoolRank.push(sn[secondidx]);
      let second = Math.round(100*(rank[secondidx]/len));
      this.schoolRatio.push(`${second}%`);
      sn.splice(secondidx, 1);
      rank.splice(secondidx, 1);
      // console.log(sn);
      // console.log(rank);

      let thirdidx = rank.indexOf(Math.max(...rank));
      // console.log(thirdidx);
      this.schoolRank.push(sn[thirdidx]);
      let third = Math.round(100*(rank[thirdidx]/len));
      this.schoolRatio.push(`${third}%`);
      sn.splice(thirdidx, 1);
      rank.splice(thirdidx, 1);
      // console.log(sn);
      // console.log(rank);

      let forthidx = rank.indexOf(Math.max(...rank));
      // console.log(thirdidx);
      this.schoolRank.push(sn[forthidx]);
      let forth = Math.round(100*(rank[forthidx]/len));
      this.schoolRatio.push(`${forth}%`);
      sn.splice(forthidx, 1);
      rank.splice(forthidx, 1);
      // console.log(sn);
      // console.log(rank);

      let fifthidx = rank.indexOf(Math.max(...rank));
      // console.log(thirdidx);
      this.schoolRank.push(sn[fifthidx]);
      let fifth = Math.round(100*(rank[fifthidx]/len));
      this.schoolRatio.push(`${fifth}%`);
      sn.splice(fifthidx, 1);
      rank.splice(fifthidx, 1);
      // console.log(sn);
      // console.log(rank);
      this.other = 100 - first - second - third - forth - fifth;
    }
  },
});