Vue.use(VueLoading);
Vue.component('loading', VueLoading);

new Vue({
  el: '#app',
  data: {
    isLoading: false,
    schoolStatic: [],
    schoolRank: [],
    schoolDone: [],
    schoolLink: [],
    tempPicUrl: 'https://imgur.com/CULu0I4',
    topthree: [
      {color: '#FFD700'},
      {color: '#A9A9A9'},
      {color: '#B87333'},
    ],
    // schoolRatio: [],
    other: ''
  },
  mounted() {
    this.getSchool();
  },
  methods: {
    getImgUrl (url) {
      this.tempPicUrl = url;
      $('#productPicModal').modal('show');
    },
    getDoneSchool () {
      return new Promise((resolve, reject) => {
        const api = 'https://riceballweb.herokuapp.com/getdistinct';
        axios.get(api).then(rsp => {
          const data = rsp.data;
          console.log(JSON.stringify(data));
          data.forEach(el => {
            // let temp = el.sn;
            this.schoolDone.push(el.sn);
            // this.schoolDone.push();
            this.schoolLink.push(el.link);
          });
          console.log(this.schoolDone);
          resolve();
          
        }).catch(e => {
          console.log(e);
          reject(e);
        })
      });
    },
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
          this.getDoneSchool().then(() => {
            this.rank(this.schoolStatic);
          }).catch(err => {
            console.log(err);
          })
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
        let done = false;
        let link = '';
        // console.log(sn[idx]);
        if(this.schoolDone.includes(sn[idx])) {
          console.log('Done');
          done = true;
        }
        if(done === true) {
          let urlidx = this.schoolDone.indexOf(sn[idx]);
          link = this.schoolLink[urlidx];
        }
        this.schoolRank.push({
          name: sn[idx],
          vote: rank[idx],
          done: done,
          link: link
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