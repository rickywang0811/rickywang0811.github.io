const TaiwanMap = new Vue({
  el: '#app',
  data: {
    // h1: '請選擇學校所在縣市',
    h1: '請選擇學校所在縣市',
    // h2: '哈囉',
    done: {
      基隆市: [
        '基隆女中'
      ],
      新北市: [
        '板橋高中',
        '能仁家商'
      ],
      臺北市: [
        '北一女中',
        '師大附中',
        '中山女高',
        '永春高中',
        '復興商工',
        '景美女中',
        '華興高中',
        '薇閣高中'
      ],
      桃園市: [
        '育達高中',
        '中大壢中'
      ],
      新竹縣: [],
      新竹市: [
        '新竹女中'
      ],
      苗栗縣: [],
      臺中市: [
        '西苑高中',
        '僑泰中學',
        '曉明女中',
        '台中一中'
      ],
      彰化縣: [
      ],
      雲林縣: [
      ],
      嘉義市: [
      ],
      嘉義縣: [],
      臺南市: [],
      高雄市: [],
      屏東縣: [],
      宜蘭縣: [],
      花蓮縣: [],
      臺東縣: [],
      澎湖縣: [],
      金門縣: [],
      連江縣: [],
      南投縣: []
    }
  },
  computed: {},
  methods: {
    emptyCity () {
      if (this.h1 === '請選擇學校所在縣市') {
        return false;
      }
      if (this.done[this.h1].length !== 0) {
        // console.log('No...');
        return false;
      } else {
        // console.log('Yes...');
        return true;
      }
    },
    async getTaiwanMap() {
      const width = (this.$refs.map.offsetWidth).toFixed(),
            height = (this.$refs.map.offsetHeight).toFixed();

      // 判斷螢幕寬度，給不同放大值
      let mercatorScale, w = window.screen.width;
      if(w > 1366) {
        mercatorScale = 11000;
      }
      else if(w <= 1366 && w > 480) {
        mercatorScale = 9000;
      }
      else {
        mercatorScale = 6000;
      }

      // d3：svg path 產生器
      var path = await d3.geo.path().projection(
        // !important 座標變換函式
        d3.geo
          .mercator()
          .center([121,24])
          .scale(mercatorScale)
          .translate([width/2, height/2.5])
      );
      
      // 讓d3抓svg，並寫入寬高
      var svg = await d3.select('#svg')
          .attr('width', width)
          .attr('height', height)
          .attr('viewBox', `0 0 ${width} ${height}`);
      
      // 讓d3抓GeoJSON檔，並寫入path的路徑
      var url = 'dist/taiwan.geojson';
      await d3.json(url, (error, geometry) => {
        if (error) throw error;

        svg
          .selectAll('path')
          .data(geometry.features)
          .enter().append('path')
          .attr('d', path)
          .attr({
            // 設定id，為了click時加class用
            id: (d) => 'city' + d.properties.COUNTYCODE
          })
          .on('click', d => {
            this.h1 = d.properties.COUNTYNAME; // 換中文名
            this.h2 = d.properties.COUNTYENG; // 換英文名
            // 有 .active 存在，就移除 .active
            if(document.querySelector('.active')) {
              document.querySelector('.active').classList.remove('active');
            }
            // 被點擊的縣市加上 .active
            document.getElementById('city' + d.properties.COUNTYCODE).classList.add('active');
          });
      });
      return svg;
    },
  },
  mounted() {
    this.getTaiwanMap();
  }
})