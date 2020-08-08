Vue.use(VueLoading);
Vue.component('loading', VueLoading);

new Vue({
  el: '#app',
  mounted() {
    // this.tablett();
  },
  methods: {
    submits () {
      if (this.tempschool === "") {
        alert('請選擇學校');
        return;
      } else {
        this.isLoading = true;
        console.log(this.tempschool);
        this.isdis = true;
        const body = { name: this.tempcity + this.tempschool, ig: this.tempigacc};
        console.log(body);
        const api = 'https://riceballweb.herokuapp.com/postonesn';
        axios.post(api, body).then(rsp => {
          console.log(rsp);
          this.isLoading = false;
          window.location = 'end.html';
        }).catch(e => {
          this.isLoading = false;
          console.log(e);
        })
      }
    },
    schoolFromCity (city) {
      this.tempschool = '請選擇學校';
      switch (city) {
        case '新北市':
          return this.school.newtaipei;
        case '台北市':
          return this.school.taipei;
        case '桃園市':
          return this.school.taoyuan;
        case '新竹縣':
          return this.school.hsinchu;
        case '新竹市':
          return this.school.hsinchucity;
        case '苗栗縣':
          return this.school.miaoli;
        case '台中市':
          return this.school.taichung;
        case '彰化縣':
          return this.school.changhua;
        case '雲林縣':
          return this.school.yunlin;
        case '嘉義縣':
          return this.school.chiayi;
        case '嘉義市':
          return this.school.chiayicity;
        case '台南市':
          return this.school.tainan;
        case '高雄市':
          return this.school.kaohsiung;
        case '基隆縣':
          return this.school.keelung;
        case '宜蘭縣':
          return this.school.yilan;
        case '花蓮縣':
          return this.school.hualien;
        case '台東縣':
          return this.school.taitung;
        case '屏東縣':
          return this.school.pingtung;
        case '澎湖縣':
          return this.school.penghu;
        case '連江縣':
          return this.school.lienchiang;
        case '金門縣':
          this.tempschool = this.school.kinmen[0];
          return this.school.kinmen;
        default:
          // this.tempschool = this.school.newtaipei[0];
          this.tempschool = '請先選擇城市';
          return ['請選擇您的城市'];
      }
      
    }
  },
  data: {
    isLoading: false,
    isdis: false,
    tempigacc: '',
    tempcity: '請選擇城市',
    tempschool: '請選擇學校',
    city: [
      '新北市',
      '台北市',
      '桃園市',
      '新竹縣',
      '新竹市',
      '苗栗縣',
      '台中市',
      '彰化縣',
      '雲林縣',
      '高雄市',
      '嘉義市',
      '嘉義縣',
      '台南市',
      '屏東縣',
      '基隆縣',
      '台東縣',
      '花蓮縣',
      '澎湖縣',
      '連江縣',
      '金門縣',
      '宜蘭縣',
    ],
    school: {
      newtaipei: [
        '市立中和高中',
        '國立華僑高級中等學校',
        '私立淡江高中',
        '私立康橋高中',
        '私立金陵女中',
        '新北市裕德高級中等學校',
        '財團法人南山高中',
        '財團法人恆毅高中',
        '私立聖心女中',
        '私立崇義高中',
        '財團法人中華高中',
        '私立東海高中',
        '私立格致高中',
        '私立醒吾高中',
        '私立徐匯高中',
        '財團法人崇光女中',
        '私立光仁高中',
        '私立竹林高中',
        '私立及人高中',
        '財團法人辭修高中',
        '新北市林口康橋國際高中',
        '私立時雨高中',
        '私立樹人家商',
        '私立復興商工',
        '私立南強工商',
        '私立穀保家商',
        '私立開明工商',
        '私立智光商工',
        '私立清傳高商',
        '私立能仁家商',
        '私立豫章工商',
        '私立莊敬工家',
        '私立中華商海',
        '市立泰山高中',
        '市立板橋高中',
        '市立新店高中',
        '市立新莊高中',
        '市立新北高中',
        '市立林口高中',
        '市立瑞芳高工',
        '市立三重商工',
        '市立新北高工',
        '市立淡水商工',
        '市立海山高中',
        '市立三重高中',
        '市立永平高中',
        '市立樹林高中',
        '市立明德高中',
        '市立秀峰高中',
        '市立金山高中',
        '市立安康高中',
        '市立雙溪高中',
        '市立石碇高中',
        '市立丹鳳高中',
        '市立清水高中',
        '市立三民高中',
        '市立錦和高中',
        '市立光復高中',
        '市立竹圍高中',
        '市立北大高級中學',
        '市立豐珠中學',
        '市立鶯歌工商',
        '市立樟樹國際實中',
      ],
      taipei: [
        '臺北市普林思頓高中',
        '市立西松高中',
        '市立中崙高中',
        '臺北市私立協和祐德高級中學',
        '市立松山高中',
        '市立永春高中',
        '市立松山家商',
        '市立松山工農',
        '國立師大附中',
        '私立延平中學',
        '私立金甌女中',
        '私立復興實驗高中',
        '私立東方工商',
        '私立喬治工商',
        '私立開平餐飲',
        '市立和平高中',
        '市立大安高工',
        '私立大同高中',
        '私立稻江護家',
        '市立中山女中',
        '市立大同高中',
        '市立大直高中',
        '私立強恕中學',
        '臺北市開南高中',
        '市立建國中學',
        '市立成功中學',
        '市立北一女中',
        '臺北市靜修高中',
        '私立稻江高商',
        '市立明倫高中',
        '市立成淵高中',
        '市立華江高中',
        '市立大理高中',
        '國立政大附中',
        '私立東山高中',
        '私立滬江高中',
        '私立大誠高中',
        '私立再興中學',
        '私立景文高中',
        '臺北市靜心高中',
        '市立景美女中',
        '市立萬芳高中',
        '市立木柵高工',
        '市立南港高中',
        '市立育成高中',
        '市立南港高工',
        '私立文德女中',
        '私立方濟中學',
        '私立達人女中',
        '市立內湖高中',
        '市立麗山高中',
        '市立南湖高中',
        '市立內湖高工',
        '私立泰北高中',
        '私立衛理女中',
        '私立華興中學',
        '私立華岡藝校',
        '市立陽明高中',
        '市立百齡高中',
        '市立士林高商',
        '私立薇閣高中',
        '臺北市幼華高',
        '臺北市私立奎山實驗高級中學',
        '私立惇敘工商',
        '市立復興高中',
        '市立中正高中',
      ],
      taoyuan: [
        '國立中央大學附屬中壢高中',
        '國立北科大附屬桃園農工',
        '私立漢英高中',
        '桃園市育達高中',
        '私立六和高中',
        '桃園市復旦高中',
        '桃園市治平高中',
        '桃園市振聲高中',
        '私立光啟高中',
        '桃園市啟英高中',
        '桃園市清華高中',
        '桃園市新興高中',
        '私立至善高中',
        '桃園市大興高中',
        '私立大華高中',
        '私立成功工商',
        '私立方曙商工',
        '私立永平工商',
        '市立龍潭高中',
        '市立桃園高中',
        '市立武陵高中',
        '市立楊梅高中',
        '市立陽明高中',
        '市立內壢高中',
        '市立中壢高商',
        '市立中壢家商',
        '市立南崁高中',
        '市立大溪高中',
        '市立壽山高中',
        '市立平鎮高中',
        '市立觀音高中',
        '市立新屋高級中等學校',
        '市立永豐高中',
        '市立大園國際高中',
      ],
      taichung: [
        '國立興大附中',
        '國立中科實驗級中學',
        '財團法人常春高中',
        '私立明台高中',
        '私立致用高中',
        '私立大明高中',
        '私立嘉陽高中',
        '私立明道高中',
        '私立僑泰高中',
        '私立華盛頓高',
        '私立青年高中',
        '私立弘文高中',
        '私立立人高中',
        '私立玉山高中',
        '私立慈明高中',
        '華德福大地實學校',
        '市立大甲高中',
        '市立清水高中',
        '市立豐原高中',
        '市立豐原高商',
        '市立大甲高工',
        '市立東勢高工',
        '市立沙鹿高工',
        '市立霧峰農工',
        '市立后綜高中',
        '市立大里高中',
        '市立新社高中',
        '市立長億高中',
        '市立中港高中',
        '市立龍津高中',
        '國立興大附農',
        '私立東大附中',
        '私立葳格高中',
        '私立新民高中',
        '私立宜寧高中',
        '私立明德高中',
        '私立衛道高中',
        '私立曉明女中',
        '私立嶺東高中',
        '私立磊川華德實驗教育學校',
        '財團法人光華工',
        '市立臺中女中',
        '市立臺中一中',
        '市立忠明高中',
        '市立西苑高中',
        '市立東山高中',
        '市立惠文高中',
        '市立臺中家商',
        '市立臺中高工',
        '市立臺中二中',
        '市立文華高中',
      ],
      tainan: [
        '國立新豐高中',
        '國立臺南大學附中',
        '國立北門高中',
        '國立新營高中',
        '國立後壁高中',
        '國立善化高中',
        '國立新化高中',
        '國立南科國際實驗高中',
        '國立新化高工',
        '國立白河商工',
        '國立北門農工',
        '國立曾文家商',
        '國立新營高工',
        '國立玉井工商',
        '國立臺南高工',
        '國立曾文農工',
        '私立南光高中',
        '私立鳳和高中',
        '私立港明高中',
        '臺南市興國高中',
        '私立明達高中',
        '私立黎明高中',
        '私立新榮高中',
        '私立陽明工商',
        '私立育德工家',
        '市立大灣高中',
        '市立永仁高中',
        '國立臺南二中',
        '國立臺南一中',
        '國立臺南女中',
        '國立家齊高中',
        '國立臺南高商',
        '國立臺南海事',
        '私立長榮高中',
        '私立長榮女中',
        '財團法人聖功女中',
        '臺南市光華高中',
        '私立六信高中',
        '私立瀛海高中',
        '私立崑山高中',
        '私立德光高中',
        '財團法人慈濟高中',
        '私立南英商工',
        '私立亞洲餐旅',
        '私立慈幼工商',
        '市立南寧高中',
        '市立土城高中',
      ],
      kaohsiung: [
        '國立鳳山高中',
        '國立岡山高中',
        '國立旗美高中',
        '國立鳳新高中',
        '國立旗山農工',
        '國立岡山農工',
        '國立鳳山商工',
        '財團法人新光高中',
        '財團法人普門中學',
        '私立正義高中',
        '私立義大國際高中',
        '私立中山工商',
        '私立旗美商工',
        '私立高英工商',
        '私立華德工家',
        '私立高苑工商',
        '市立文山高中',
        '市立林園高中',
        '市立仁武高中',
        '市立路竹高中',
        '市立六龜高中',
        '市立福誠高中',
        '天主教明誠高中',
        '私立大榮高中',
        '私立中華藝校',
        '市立鼓山高中',
        '市立左營高中',
        '市立新莊高中',
        '市立海青工商',
        '市立三民家商',
        '國立中山大學附屬國光高中',
        '市立中山高中',
        '市立楠梓高中',
        '私立立志高中',
        '南海月光實驗學校',
        '私立樹德家商',
        '市立高雄中學',
        '市立三民高中',
        '市立高雄高工',
        '市立新興高中',
        '市立高雄高商',
        '市立高雄女中',
        '國立高師大附中',
        '私立復華高中',
        '天主教道明中學',
        '私立國際商工',
        '私立三信家商',
        '市立中正高中',
        '市立前鎮高中',
        '市立瑞祥高中',
        '市立中正高工',
        '國立高餐大附屬餐旅中學',
        '私立高鳳工家',
        '市立小港高中',
      ],
      hsinchu: [
        '國立竹東高中',
        '國立關西高中',
        '國立竹北高中',
        '私立義民高中',
        '私立忠信高中',
        '私立東泰高中',
        '私立仰德高中',
        '私立內思高工',
        '縣立六家高級中學',
        '縣立湖口高中',
      ],
      hsinchucity: [
        '國立科學工業園區實驗高中',
        '國立新竹女中',
        '國立新竹高中',
        '國立新竹高商',
        '國立新竹高工',
        '私立光復高中',
        '私立曙光女中',
        '私立磐石高中',
        '私立世界高中',
        '市立成德高中',
        '市立香山高中',
        '市立建功高中',
      ],
      miaoli: [
        '國立苗栗高中',
        '國立竹南高中',
        '國立卓蘭高中',
        '國立苑裡高中',
        '國立大湖農工',
        '國立苗栗農工',
        '國立苗栗高商',
        '私立君毅高中',
        '私立大成高中',
        '私立建臺高中',
        '私立全人實驗中',
        '私立中興商工',
        '私立育民工家',
        '私立賢德工商',
        '私立龍德家商',
        '縣立三義高中',
        '縣立苑裡高中',
        '縣立興華高中',
        '縣立大同高中',
      ],
      yilan: [
        '國立蘭陽女中',
        '國立宜蘭高中',
        '國立羅東高中',
        '國立宜蘭高商',
        '國立羅東高商',
        '國立蘇澳海事',
        '國立羅東高工',
        '國立頭城家商',
        '私立慧燈高中',
        '私立中道高中',
        '縣立南澳高中',
        '縣立慈心華德福實中',
      ],
      changhua: [
        '國立彰化女中',
        '國立員林高中',
        '國立彰化高中',
        '國立鹿港高中',
        '國立溪湖高中',
        '國立彰師附工',
        '國立永靖高工',
        '國立二林工商',
        '國立秀水高工',
        '國立彰化高商',
        '國立員林農工',
        '國立員林崇實高工',
        '國立員林家商',
        '國立北斗家商',
        '私立精誠高中',
        '私立文興高中',
        '財團法人正德高中',
        '私立大慶商工',
        '私立達德商工',
        '縣立彰化藝術高中',
        '縣立二林高中',
        '縣立和美高中',
        '縣立田中高中',
        '縣立成功高中',
      ],
      nantou: [
        '國立南投高中',
        '國立中興高中',
        '國立竹山高中',
        '國立暨大附中',
        '國立仁愛高農',
        '國立埔里高工',
        '國立南投高商',
        '國立草屯商工',
        '國立水里商工',
        '私立五育高中',
        '私立三育高中',
        '私立弘明實驗高中',
        '私立普台高中',
        '私立同德家商',
        '縣立旭光高中',
      ],
      yunlin: [
        '國立斗六高中',
        '國立北港高中',
        '國立虎尾高中',
        '國立虎尾農工',
        '國立西螺農工',
        '國立斗六家商',
        '國立北港農工',
        '國立土庫商工',
        '私立永年高中',
        '私立正心高中',
        '私立文生高中',
        '私立巨人高中',
        '私立揚子高中',
        '財團法人義峰中',
        '福智高中',
        '雲林縣維多利實驗高中',
        '私立大成商工',
        '私立大德工商',
        '縣立斗南高中',
        '縣立麥寮高中',
        '縣立古坑華德實驗高級中學',
        '縣立蔦松藝術中',
      ],
      chiayi: [
        '國立東石高中',
        '國立新港藝術中',
        '國立民雄農工',
        '私立同濟高中',
        '私立協同高中',
        '私立協志工商',
        '私立萬能工商',
        '私立弘德工商',
        '縣立竹崎高中',
        '縣立永慶高中',
      ],
      chiayicity: [
        '國立嘉義女中',
        '國立嘉義高中',
        '國立華南高商',
        '國立嘉義高工',
        '國立嘉義高商',
        '國立嘉義家職',
        '私立興華高中',
        '私立仁義高中',
        '私立嘉華高中',
        '私立輔仁高中',
        '私立宏仁女中',
        '私立立仁高中',
        '私立東吳工家',
      ],
      pingtung: [
        '國立屏東女中',
        '國立屏東高中',
        '國立潮州高中',
        '國立屏北高中',
        '國立內埔農工',
        '國立屏東高工',
        '國立佳冬高農',
        '國立東港海事',
        '國立恆春工商',
        '財團法人屏榮高中',
        '私立陸興高中',
        '私立美和高中',
        '私立民生家商',
        '私立日新工商',
        '縣立大同高中',
        '縣立枋寮高中',
        '縣立東港高中',
        '縣立來義高中',
      ],
      taitung: [
        '國立臺東大學附屬體育高中',
        '國立臺東女中',
        '國立臺東高中',
        '國立關山工商',
        '國立臺東高商',
        '國立成功商水',
        '臺東縣均一高中',
        '私立育仁高中',
        '私立公東高工',
        '縣立蘭嶼高中',
      ],
      hualien: [
        '國立花蓮女中',
        '國立花蓮高中',
        '國立玉里高中',
        '國立花蓮高農',
        '國立花蓮高工',
        '國立花蓮高商',
        '國立光復商工',
        '私立海星高中',
        '私立四維高中',
        '財團法人慈濟大學附中',
        '花蓮縣上騰工商',
        '花蓮縣立體育高中',
        '縣立南平中學',
      ],
      penghu: [
        '國立馬公高中',
        '國立澎湖海事水產',
      ],
      keelung: [
        '國立基隆女中',
        '國立基隆高中',
        '國立基隆海事',
        '國立基隆商工',
        '私立二信高中',
        '輔大聖心高中',
        '私立光隆家商',
        '私立培德工家',
        '市立中山高中',
        '市立安樂高中',
        '市立暖暖高中',
        '市立八斗高中',
      ],
      lienchiang: [
        '國立馬祖高中',
      ],
      kinmen: [
        '國立金門高中',
        '國立金門農工',
      ],
    }
  },
});