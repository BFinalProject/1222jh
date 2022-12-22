<template>
  <div>
    <NavHeader />
    <br />
    <br />
    <br />
    <br />
    <div id="wrapper">
      <!-- Main -->
      <div id="main">
        <div class="inner">
          <!-- Header -->
          <header id="header">
            <h3 style="text-align: center;">글쓰기</h3>
          </header>

          <main>
            <form class="write">
              <input type="text" placeholder="제목을 입력해주세요." required />
              <hr />
              <input
                type="text"
                placeholder="내용을 입력해주세요."
                class="text"
                required
              />
              <div class="button">
                <p><a href="free.html">글쓰기</a><a href="/board">취소</a></p>
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>
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
  }
};
</script>

<style scoped>
.write {
  width: 700px;
  margin: 0 auto;
}
.write input {
  width: 676px;
  padding: 10px;
  margin: 12px auto 0;
  border: solid 2.5px rgb(102, 96, 98);
  border-radius: 12px;
}
.write .text {
  table-layout: fixed;
  height: 300px;
  white-space: pre-line;
  word-break: break-all;
}
.write .button {
  padding: 0 200px;
  margin: 15px auto;
}
.write .button a {
  border: 1px solid black;
  background: gainsboro;
  margin: 10px;
  padding: 5px;
  text-decoration: none;
  color: black;
}
.write .button a:hover {
  color: blueviolet;
}
.write p {
  text-align: center;
}

::placeholder {
  font-family: "Do Hyeon", sans-serif;
  font-size: 20px;
}
#header {
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  border-bottom: solid 5px #f56a6a;
  padding: 6em 0 1em 0;
  position: relative;
}
#main {
  -moz-flex-grow: 1;
  -webkit-flex-grow: 1;
  -ms-flex-grow: 1;
  flex-grow: 1;
  -moz-flex-shrink: 1;
  -webkit-flex-shrink: 1;
  -ms-flex-shrink: 1;
  flex-shrink: 1;
  width: 100%;
}
#main > .inner {
  padding: 0 15em 0.1em 15em;
  margin: 0 auto;
  max-width: 110em;
}

h3 {
  font-family: "Do Hyeon", sans-serif;
  font-size: 44px;
  text-align: center;
}
</style>
