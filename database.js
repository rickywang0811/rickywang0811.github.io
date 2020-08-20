Vue.use(VueLoading);
Vue.component('loading', VueLoading);

new Vue({
  el: '#app',
  data: {
    isLoading: false,
    igArr: [],
    selected: '',
  },
  mounted() {
  },
  methods: {
    delIgId(id) {
      this.isLoading = true;
      console.log(`Delete id ${id}`)
      const api = 'https://riceballweb.herokuapp.com/delInvalidId';
      // const api = 'http://127.0.0.1:5889/delInvalidId';
      let body = {
        id: id,
      };
      axios.post(api, body).then(rsp => {
        console.log(rsp);
        this.isLoading = false;
        this.igArr = rsp.data;
        this.postSchool();
      }).catch(e => {
        console.log(e);
        this.isLoading = false;
      })
    },
    postSchool () {
      console.log(`Get ${this.selected} list`)
      this.isLoading = true;
      const api = 'https://riceballweb.herokuapp.com/getSchoolVoted';
      // const api = 'http://127.0.0.1:5889/getSchoolVoted';
      let body = {
        name: this.selected,
      };
      axios.post(api, body).then(rsp => {
        console.log(rsp);
        this.isLoading = false;
        this.igArr = rsp.data;
      }).catch(e => {
        console.log(e);
        this.isLoading = false;
      })
    },
  },
});