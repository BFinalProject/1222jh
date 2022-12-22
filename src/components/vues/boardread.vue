<template>
  <div>
    <NavHeader />
    <!-- Wrapper -->
    <br />
    <div id="wrapper">
      <!-- Main -->
      <div id="main">
        <div class="inner">
          <!-- Header -->
          <header id="header">
            <a href="/board" class="logo">
              <h3>자유게시판</h3>
            </a>
          </header>
          <!-- Content -->
          <br />
          <h2>{{ detailList.subject }}</h2>
          <!-- <h1>아니 시발</h1> -->
          <h1>작성자:{{ detailList.id }}</h1>
          <hr />
          <p>
            {{ detailList.content }}
            <!-- {{ detailList }} -->

            <!-- 이거무임 ? -->
          </p>
          <hr />
          <section style="width:1300px">
            <header class="main">
              <table class="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>답글내용</th>
                    <th scope="col">등록일자</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, idx) in comment" :key="idx">
                    <th scope="row" v-show="comment.length != 0">
                      {{ idx + 1 }}
                    </th>
                    <td v-show="comment.length != 0">{{ item.id }}</td>
                    <td v-show="comment.length != 0">{{ item.content }}</td>
                    <td v-show="comment.length != 0">{{ item.createDate }}</td>
                  </tr>

                  <tr v-show="comment.length == 0">
                    <td>댓글이없습니다</td>
                  </tr>
                </tbody>
              </table>
            </header>

            <!-- Preloader -->
            <div class="preloader"></div>
            <br />
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                v-model="comments"
              />
              <button
                class="btn btn-outline-secondary"
                type=""
                id="button-addon2"
                @click="onSubmitForm()"
              >
                답글쓰기
              </button>
            </div>
          </section>
        </div>
      </div>

      <!-- Sidebar -->
    </div>
  </div>
</template>
<script>
import Axios from "axios";
import NavHeader from "../views/NavHeader.vue";
export default {
  data() {
    return {};
  },

  data: function() {
    return {
      detailList: [],
      listdata: [],
      comment: [],
      commentList: [],
      boardId: "",
      commentid: "",
      comments: "",
      commentid: "",
      capitalize: "",
      click_id: ""
    };
  },

  components: {
    NavHeader
  },
  name: "boardread",
  mounted: function() {
    let vm = this;
    vm.fetchContacts();
  },

  methods: {
    onSubmitForm: function() {
      let vm = this;
      let commentList = vm.detailList;
      // let board_id = vm.$route.query.boardId;
      console.log(commentList.id);

      let send = {
        content: vm.comments,
        username: "sky6548"
      };

      console.log(String(this.click_id));
      let url = "/answer/create/" + vm.$route.query.boardId;

      console.log(url);

      Axios.post(url, send).then(function(response) {
        console.log("stsetsetset");
      });
    },

    fetchContacts: function() {
      let vm = this;
      let board_id = vm.$route.query.boardId;

      let url = "/question/detail/" + board_id;
      console.log(url);

      Axios.get(url)
        .then(function(response) {
          vm.detailList = response.data;
          vm.comment = response.data.answerList;
          vm.commentList = response.data.answerList;
          // vm.click_id = vm.commentList[0].id;

          // console.log(response.data);
          // console.log(commentList.id)
          // console.log(capitalize);
        })
        .catch(function(ex) {
          console.log(ex);
        });
    }
  }
};
</script>
<style scoped>
@import "../../boardread/css/boardread.css";

body {
  display: flex;
}
a,
th,
td,
button {
  font-family: "Do Hyeon", sans-serif;
  font-size: 20px;
  text-align: center;
  vertical-align: middle;
}
h1 {
  font-family: "Do Hyeon", sans-serif;
  font-size: 24px;
}
h2 {
  font-family: "Do Hyeon", sans-serif;
  font-size: 36px;
}
h3 {
  font-family: "Do Hyeon", sans-serif;
  font-size: 44px;
}
p {
  font-family: "Do Hyeon", sans-serif;
  font-size: 24px;
}
</style>
