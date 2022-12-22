import "es6-promise/auto";
import Vue from "vue";
import VueRouter from "vue-router";
// import CompPager from './old/components/paging.vue';
// import Common from './components/common/common.js';
import axios from "axios";
import main from "./vues/main.vue";
import test from "./vues/test.vue";
import login from "./vues/login.vue";
import kakaomap from "./vues/kakaomap.vue";
import board from "./vues/board.vue";
import boardread from "./vues/boardread.vue";
import boardwrite from "./vues/boardwrite.vue";
import kakaologin from "./vues/kakaologin.vue";
import kakaomaporder from "../kakaomapview/kakaomaporder.vue";
import kakaomaps from "./vues/kakaomaps.vue";
import hotplace from "./vues/hotplace.vue";
import main2 from "./vues/main2.vue";
import findidpw from "./vues/findidpw.vue";
// import '../mainboard/css/bootstrap.min.css'
// import '../mainboard/css/font-awesome.min.css'
// import '../mainboard/css/style.css'

// import Menu from './components/common/menu.vue'
// import projectList from './components/project/projectList.vue'
// import manHourInsert from './components/project/manHourInsert.vue'
// import monthList from './components/project/monthList.vue'
// import projectManage from './components/project/projectManage.vue'
// import timetableMngt from './components/project/timetableMngt.vue'

Vue.use(VueRouter);
// Vue.component('pager', CompPager);
// Vue.component('auto-menu', Menu);

Vue.config.devtools = true;

// const CSRF_TOKEN = document.cookie.match(new RegExp(`XSRF-TOKEN=([^;]+)`))[1];`
// const instance = axios.create({
//   headers: { "X-XSRF-TOKEN": CSRF_TOKEN }
// });
// export const AXIOS = instance;

// Vue.prototype.$axios = AXIOS;
Vue.prototype.$sendAxios = function(url, sendData, callback) {
  // console.log(url,sendData, callback);
  // AXIOS.post(url, sendData)
  // .then(function(response) {
  // try {
  // Common.fnCheckAxiosResult(response);
  // } catch (error) {
  //
  // } finally{
  // callback(response);
  // }
  // }).catch(function(error) {
  // if (error.response) {
  // console.log(error.response.data);
  // console.log(error.response.status);
  // console.log(error.response.headers);
  // }
  // else if (error.request) {
  // console.log(error.request);
  // }
  // else {
  // console.log('Error', error.message);
  // }
  // console.log(error.config);
  // });
};

//????????
const routes = [
  { path: "/", component: main, name: "main", nameKor: "메인", useYn: "Y" },
  {
    path: "/login",
    component: login,
    name: "login",
    nameKor: "로그인",
    useYn: "Y"
  },
  {
    path: "/test",
    component: test,
    name: "test",
    nameKor: "일일업무 입력",
    useYn: "Y"
  },
  {
    path: "/kakaomap",
    component: kakaomap,
    name: "kakaomap",
    nameKor: "맵",
    useYn: "Y"
  },
  {
    path: "/kakaomaps",
    component: kakaomaps,
    name: "kakaomaps",
    nameKor: "맵test",
    useYn: "Y"
  },
  {
    path: "/board",
    component: board,
    name: "board",
    nameKor: "게시판메인",
    useYn: "Y"
  },
  {
    path: "/boardread",
    component: boardread,
    name: "boardread",
    nameKor: "글읽기",
    useYn: "Y"
  },
  {
    path: "/boardwrite",
    component: boardwrite,
    name: "boardwrite",
    nameKor: "글쓰기",
    useYn: "Y"
  },
  {
    path: "/kakaologin",
    component: kakaologin,
    name: "kakaologin",
    nameKor: "카카오로그인",
    useYn: "Y"
  },

  {
    path: "/kakaomaporder",
    component: kakaomaporder,
    name: "kakaomaporder",
    nameKor: "장소추천",
    useYn: "Y"
  },

  {
    path: "/hotplace",
    component: hotplace,
    name: "hotplace",
    nameKor: "핫플레이스",
    useYn: "Y"
  },
  {
    path: "/main2",
    component: main2,
    name: "main2",
    nameKor: "가라홈",
    useYn: "Y"
  },
  {
    path: "/findidpw",
    component: findidpw,
    name: "findidpw",
    nameKor: "아이디비번찾기",
    useYn: "Y"
  }
];
Vue.prototype.$routeList = routes;

const router = new VueRouter({
  mode: "history",
  routes
});

const rootVm = new Vue({
  data: function() {
    return {
      csrf: {
        name: "",
        value: ""
      }
    };
  },
  mounted: function() {
    console.log("나 main.js");
  },
  methods: {},
  router
}).$mount("#xp-container");

// const cors = require('cors');
//  let corsOption = {
//     origin: 'http://localhost:4000',//허락하는 요청 주소
//     credentials: true //트루로 하면 설정한 내용을 리스폰스 헤더에 추가
//  }
//  app.use(cors(corsOption)); //cors 미들웨어 추가
window.Kakao.init("1c0916f97202401d9aebb0405b6b0ab6");
