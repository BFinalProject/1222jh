<template>
  <div>
    <h2>ddd</h2>
    <button @click="fetchContacts()">post</button>
    <button @click="fnGetStat1List()" v-modal=data value="haha">get</button>
    <button @click="getMembers()">검색3</button>
    <input id="csrfToken" type="hidden" name="${_csrf.subject}" value="${_csrf.content}"/>

          <c:choose>
         <c:when test="${articleList == null}"><!-- articleList키값으로 널값일경우  -->
         <tbody>
            <tr height="10">
               <td colspan="4">
                  <p align="center">
                     <b><span style="font-size: 9pt;">등록된 글이 없습니다.</span></b>
                  </p>
               </td>
            </tr>
         </tbody>         
         </c:when>
         <c:otherwise>
         <tbody>
            <c:forEach var="article" items="${articleList}" varStatus="articleNum"> <!-- list 타입의 article를 하나하나 뽑겠다 / status= 상태정보의 속성-->
               <tr align="center">
                  <td width="5%">${articleNum.count}</td>
                  <td width="10%">${article.writeId}</td>
                  <td align="left" width="35%">
                     <span style="padding-right: 30px"></span>
                     <a class="cls1" 
                     href="${contextPath}/board/viewArticle?articleno=${article.articleNo}">
                     ${article.title}
                     </a>
                  </td>
                  <td width="10%">${article.writeDate}</td>
               </tr>
            </c:forEach>
         </tbody>
         </c:otherwise>
      </c:choose>
  </div>

</template>

<script>
import Axios from 'axios'
// axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
// axios.defaults.baseURL = 'http://localgost:8080';
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin']='*';

export default {
  name: 'test',
  data() {
    return {
      listdata : [],
      data : "상준",
      result: "25"
    }
  },
  mounted: function() {
    let vm = this;
    // vm.fetchContacts();
  },
  methods: {
      //1
      fetchContacts: function(){
            // this ~다수 많이 한개이상 
            let vm = this;
            
            let sendData={}
   
            Axios.get("/question/api/list3", sendData).
            then(function(response) {         
                vm.listdata = response.data.content;
                for(var i = 0;  i <vm.listdata.length; i++ ){
                  console.log(vm.listdata[i].content);
                }
            }).catch(function(ex) {
                console.log(ex);
            });
        },
//2 
      fnGetStat1List: function() {
      let vm = this;
      console.log(vm.data);
      let send = {
        subject : vm.data,
        id : vm.result
      };
      Axios.post("/question/api/list4",send,{})
      .then(function(res){
        console.log("하하!");
      });
      // this.$sendAxios("/question/list2",   function(resp){
            // vm.listdata = resp.data;
        // });
    },
      // 3
    getMembers() {
      Axios({
        url: "/api/list3",
        method: "get"
      })
        .then(res => {
          console.log(res.data.content);
        })
        .catch(err => {
          console.log(err);
        })
    },
    
    // auth: function () {
    //   const request = Axios.post('api/list3')
    //     .then(response => response.data);
    //   return {
    //     type: paging,
    //     payload: request
    //   }
    // }
  }
};
</script>
