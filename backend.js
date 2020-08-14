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
    // schoolRatio: [],
    other: ''
  },
  mounted() {
    this.getSchool();
    // this.getDoneSchool();
  },
  methods: {
    postDoneSchool () {
      this.isLoading = true;
      const api = 'https://riceballweb.herokuapp.com/doneonesn';
      // const api = 'http://127.0.0.1:5889/doneonesn';
      let body = {
        name: [],
        link: []
      };
      this.schoolRank.forEach(el => {
        if(el.done === true) {
          body.name.push(el.name);
          body.link.push(el.link);
        }
      })
      console.log(body.name);
      console.log(body.link);
      axios.post(api, body).then(rsp => {
        console.log(rsp);
        this.isLoading = false;
      }).catch(e => {
        console.log(e);
        this.isLoading = false;
      })
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
          }).catch(e => {
            console.log(e);
          })
        }

        this.isLoading = false;
        // this.getDoneSchool();
      }).catch(e => {
        console.log(e);
        this.isLoading = false;
      })
    },
    rank (arr) {
      let sn = [];
      let rank = [];

      arr.forEach(el => {
        if (sn.includes(el)) {
          let idx = sn.indexOf(el);
          rank[idx]++;
        } else {
          sn.push(el);
          let idx = sn.indexOf(el);
          rank[idx] = 1;
        }
      })
      // console.log(sn);
      // console.log(rank);

      const len = sn.length;
      // this.schoolDone[0] = '台中市市立大甲高中';
      // console.log(this.schoolDone);
      for (let i = 0;i < len; i++) {
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
          link: link,
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