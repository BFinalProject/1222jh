<template>
  <div>
    <NavHeader />
    <div class="container1" id="container1">
      <div class="form-container1 sign-up-container1">
        <form action="#">
          <h1>비밀번호 찾기</h1>
          <div class="social-container1"></div>
          <input
            type="password"
            id="password1"
            onchange="passwordreconfirm()"
            placeholder="아이디를 입력해주세요"
          /><br />
          <span id="pwConfirm" style="display: none"
            >입력한 글자가 6글자 이상이어야 합니다.</span
          >

          <input
            type="password"
            id="password2"
            onchange="passwordreconfirm()"
            placeholder="이메일을 입력해주세요"
          /><br />
          <!-- <span id="re" name="password2" onchange="alert(passwordreconfirm())"></span> -->
          <!-- onchange="alert(passwordreconfirm())" -->

          <span id="pwConfirm2" style="display: none"
            >비밀번호가 불일치 합니다.</span
          >
          <span id="pwConfirm3" style="display: none"
            >비밀번호가 일치 합니다.</span
          >
          <button
            type="button"
            class="button1"
            onclick="location.href='/login'"
          >
            비밀번호 찾기
          </button>
        </form>
      </div>
      <div class="form-container1 sign-in-container1">
        <form action="#">
          <h1>아이디 찾기</h1>
          <br />
          <input type="email" placeholder="이메일을 입력해주세요" />
          <br />
          <div class="login">
            <button
              type="button"
              class="button1"
              style="margin-bottom: 10px"
              onclick="location.href='/main2'"
            >
              찾기
            </button>
          </div>
        </form>
      </div>
      <div class="overlay-container1">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1>아이디 찾기</h1>
            <p>
              아이디가 생각나지 않으세요?
            </p>
            <button type="button" class="button1" id="signIn">
              아이디 찾기
            </button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1>비밀번호 찾기</h1>
            <p>비밀번호가 생각이 나지 않으시나요?</p>
            <button type="button" class="button1" id="signUp">
              비밀번호찾기
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
@import "./findidpw.css";
body {
  display: flex;
}
</style>
<script>
import NavHeader from "../views/NavHeader.vue";

export default {
  data: function() {
    return {
      // userList:[],
      // updatepassword:[]
    };
  },
  components: {
    NavHeader
  },

  created: function() {
    // console.log("created");
  },
  mounted: function() {
    let vm = this;
    // $('body').class
    // $('body').css({"display": "flex"});
  },
  methods: {
    kakaoLogin() {
      window.Kakao.Auth.login({
        scope: "account_email, gender, age_range",
        success: this.getKakaoAccount
      });
    },
    getKakaoAccount() {
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: res => {
          const kakao_account = res.kakao_account;
          // const nickname = kakao_account.profile.nickname;
          const email = kakao_account.email;
          const gender = kakao_account.gender;
          const age_range = kakao_account.age_range;
          // console.log("nickname", nickname);
          console.log("email", email);
          console.log("gender", gender);
          console.log("age_range", age_range);
          // 로그인 처리 구현
          alert("로그인 성공!");
        },
        fail: error => {
          console.log(error);
        }
      });
      // fnUserInsertList: function(jsonObj) {
      //   this.$sendAxios("/user/insertUserList", jsonObj,
      //     function(resp){
      //         console.log(resp);
      //     });
      // },

      // fnUserUpdatePassword: function(jsonObj) {
      //   this.$sendAxios("/user/updatePassword", jsonObj,
      //     function(resp){
      //          console.log(resp);
      //         });
      //     },
    }
  }
};
</script>
<style scoped>
button {
  font-family: "Do Hyeon", sans-serif;
  font-size: 20px;
  font-weight: 100;
}
h1 {
  font-family: "Do Hyeon", sans-serif;
  font-size: 32px;
  font-weight: 100;
}
</style>
