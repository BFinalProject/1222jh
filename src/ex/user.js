import 'es6-promise/auto'
import Vue from 'vue';
import VueRouter from 'vue-router';
import CompPager from './old/components/paging.vue';
import Common from './components/common/common.js';
import axios from 'axios'
import Menu from './components/common/menu.vue'
import userList from './components/user/userList.vue'
import userInsert from './components/user/userInsert.vue'
import codeManage from './components/user/codeManage.vue';
import userInfo from './components/user/userInfo.vue'
Vue.use(VueRouter);
Vue.component('pager', CompPager);
Vue.component('auto-menu', Menu);

Vue.config.devtools = true;

const CSRF_TOKEN = document.cookie.match(new RegExp(`XSRF-TOKEN=([^;]+)`))[1];
const instance = axios.create({
  headers: { "X-XSRF-TOKEN": CSRF_TOKEN }
});
export const AXIOS = instance;

Vue.prototype.$axios = AXIOS;
Vue.prototype.$sendAxios = function(url, sendData, callback){
    AXIOS.post(url, sendData)
    .then(function(response) {
        try {   
            Common.fnCheckAxiosResult(response);
        } catch (error) {
            
        } finally{
            callback(response);
        }
    }).catch(function(error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
        else if (error.request) {
            console.log(error.request);
        }
        else {
            console.log('Error', error.message);
        }
        console.log(error.config);
    });
};

const routes = [    
    { path: '/userList', component: userList, name: 'userList', nameKor:'유저리스트', useYn:"Y" },
    { path: '/userInsert', component: userInsert, name: 'userInsert', nameKor:'유저입력', useYn:"Y" },
    { path: '/codeManage', component: codeManage, name: 'codeManage', nameKor:'코드관리', useYn:"N" },
    { path: '/userInfo', component: userInfo, name: 'userInfo', nameKor:'유저정보', useYn:"Y"}
    // { path: '/userauthority', component: userauthority, name: 'userauthority', nameKor:'유저메뉴권한', useYn:"Y" }
];

Vue.prototype.$routeList = routes;

const router = new VueRouter({
    routes
})

const rootVm = new Vue({
    data: function() {
        return{
            csrf:{
                name : "",
                value : ""
            },
        }
    },
    mounted: function() {
        console.log("mount");
    },
    methods: {
    },
    router
}).$mount('#xp-container');



