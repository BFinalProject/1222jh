<template>
  <div>
    <!-- <NavHeader></NavHeader> -->
    <button type="button" class="kakao" @click="kakaoLogin()">
      <img
        src="../design/imageskakao/kakao_login/ko/kakao_login_medium_narrow.png"
      />
    </button>
  </div>
</template>
<script>
import NavHeader from "../views/NavHeader.vue";
export default {
  components: {
    NavHeader
  },
  methods: {
    kakaoLogin() {
      window.Kakao.Auth.login({
        scope: "profile, account_email",
        success: this.getKakaoAccount
      });
    },
    getKakaoAccount() {
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: res => {
          const kakao_account = res.kakao_account;
          const nickname = kakao_account.profile.nickname;
          const email = kakao_account.email;
          console.log("nickname", nickname);
          console.log("email", email);
          // 로그인 처리 구현
          alert("로그인 성공!");
        },
        fail: error => {
          console.log(error);
        }
      });
    }
  }
};
</script>
