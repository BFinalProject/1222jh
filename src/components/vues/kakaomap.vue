<template>
  <div>
    <button
      class="btn btn-warning"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasScrolling"
      aria-controls="offcanvasScrolling"
    >
      카테고리
    </button>

    <div
      class="offcanvas offcanvas-start show"
      data-bs-scroll="true"
      data-bs-backdrop="false"
      tabindex="-1"
      id="offcanvasScrolling"
      aria-labelledby="offcanvasScrollingLabel"
    >
      <div class="offcanvas-header" display="flex" text-align="center">
        <h4 class="offcanvas-title" id="offcanvasScrollingLabel">
          아래에 해당하는 카테고리를 선택해주세요
        </h4>

        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <!-- 1 -->
      <div>
        <div>
          <input
            type="checkbox"
            class="btn-check"
            name="option1"
            id="option1"
            autocomplete="off"
            value="한식"
            v-model="checkedemotion"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option1"
            >한식</label
          >

          <input
            type="checkbox"
            class="btn-check"
            name="option2"
            id="option2"
            autocomplete="off"
            value="중식"
            v-model="checkedemotion"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option2"
            >중식</label
          >

          <input
            type="checkbox"
            class="btn-check"
            name="option3"
            id="option3"
            autocomplete="off"
            value="양식"
            v-model="checkedemotion"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option3"
            >양식</label
          >

          <input
            type="checkbox"
            class="btn-check"
            name="option4"
            id="option4"
            autocomplete="off"
            value="일식"
            v-model="checkedemotion"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option4"
            >일식</label
          >
          <input
            type="checkbox"
            class="btn-check"
            name="option5"
            id="option5"
            autocomplete="off"
            value="기타 음식"
            v-model="checkedemotion"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option5"
            >기타 음식</label
          >

          <!-- <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
            <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
            <label class="btn btn-outline-primary" for="btncheck1">Checkbox 1</label>

            <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
            <label class="btn btn-outline-primary" for="btncheck2">Checkbox 2</label>

            <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off">
            <label class="btn btn-outline-primary" for="btncheck3">Checkbox 3</label>

            <input type="checkbox" class="btn-check" id="btncheck4" autocomplete="off">
            <label class="btn btn-outline-primary" for="btncheck4">Checkbox 12</label>

            <input type="checkbox" class="btn-check" id="btncheck5" autocomplete="off">
            <label class="btn btn-outline-primary" for="btncheck5">Checkbox 22</label>

            <input type="checkbox" class="btn-check" id="btncheck6" autocomplete="off">
            <label class="btn btn-outline-primary" for="btncheck6">Checkbox 32</label>
            
          </div> -->

          <br />
          <!-- 2 -->

          <input
            type="checkbox"
            class="btn-check"
            name="options2"
            id="option6"
            autocomplete="off"
            value="술집"
            v-model="checkedemotion"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option6"
            >술집</label
          >

          <input
            type="checkbox"
            class="btn-check"
            name="options2"
            id="option7"
            autocomplete="off"
            value="맛집"
            v-model="checkedemotion"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option7"
            >맛집</label
          >

          <input
            type="checkbox"
            class="btn-check"
            name="options2"
            id="option8"
            autocomplete="off"
            value="기념일"
            v-model="checkedemotion"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option8"
            >기념일</label
          >

          <input
            type="checkbox"
            class="btn-check"
            name="options2"
            id="option9"
            autocomplete="off"
            value="가성비"
            v-model="checkedemotion"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option9"
            >가성비</label
          >
          <input
            type="checkbox"
            class="btn-check"
            name="options2"
            id="option10"
            autocomplete="off"
            value="뷰"
            v-model="checkedemotion"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option10"
            >뷰</label
          >

          <br />
          <!-- 3 -->

          <input
            type="checkbox"
            class="btn-check"
            name="options3"
            id="option11"
            autocomplete="off"
            value="가족"
            v-model="checkedemotion"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option11"
            >가족</label
          >

          <input
            type="checkbox"
            class="btn-check"
            name="options3"
            id="option12"
            autocomplete="off"
            value="애견동반"
            v-model="checkedemotion"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option12"
            >애견동반</label
          >

          <input
            type="checkbox"
            class="btn-check"
            name="options3"
            id="option13"
            autocomplete="off"
            value="색다른"
            v-model="checkedemotion"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option13"
            >색다른</label
          >

          <input
            type="checkbox"
            class="btn-check"
            name="options3"
            id="option14"
            autocomplete="off"
            value="청결"
            v-model="checkedemotion"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option14"
            >청결</label
          >
          <input
            type="checkbox"
            class="btn-check"
            name="options3"
            id="option15"
            autocomplete="off"
            value="시끌벅적"
            v-model="checkedemotion"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option15"
            >시끌벅적</label
          >

          <br />
          <!-- 4 -->

          <input
            type="checkbox"
            class="btn-check"
            name="options4"
            id="option16"
            autocomplete="off"
            value="한적"
            v-model="checkedemotion"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option16"
            >한적</label
          >

          <input
            type="checkbox"
            class="btn-check"
            name="options4"
            id="option17"
            autocomplete="off"
            value="활동적"
            v-model="checkedemotion"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option17"
            >활동적</label
          >

          <input
            type="checkbox"
            class="btn-check"
            name="options4"
            id="option18"
            autocomplete="off"
            value="고급스런"
            v-model="checkedemotion"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option18"
            >고급스런</label
          >

          <input
            type="checkbox"
            class="btn-check"
            name="options4"
            id="option19"
            autocomplete="off"
            value="감성적"
            v-model="checkedemotion"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option19"
            >감성적</label
          >
          <input
            type="checkbox"
            class="btn-check"
            name="options4"
            id="option20"
            autocomplete="off"
            value="이국적"
            v-model="checkedemotion"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option20"
            >이국적</label
          >

          <br />
          <!-- 5 -->

          <input
            type="checkbox"
            class="btn-check"
            name="options5"
            id="option21"
            autocomplete="off"
            value="편리한"
            v-model="checkedemotion"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option21"
            >편리한</label
          >

          <input
            type="checkbox"
            class="btn-check"
            name="options5"
            id="option22"
            autocomplete="off"
            value="전통적"
            v-model="checkedemotion"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option22"
            >전통적</label
          >

          <input
            type="checkbox"
            class="btn-check"
            name="options5"
            id="option23"
            autocomplete="off"
            value="모던한"
            v-model="checkedemotion"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option23"
            >모던한</label
          >

          <input
            type="checkbox"
            class="btn-check"
            name="options5"
            id="option24"
            autocomplete="off"
            value="편안한"
            v-model="checkedemotion"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option24"
            >편안한</label
          >
          <input
            type="checkbox"
            class="btn-check"
            name="options5"
            id="option25"
            autocomplete="off"
            value="이색적"
            v-model="checkedemotion"
          />
          <label style="margin: 10px;" class="btn btn-warning" for="option25"
            >이색적</label
          >
          <br />
          <span>체크한 이름: {{ checkedemotion }}</span>
        </div>
      </div>
      <div style="margin-top: 50px;">
        <button @click="displayMarker(data)">마커 선택</button>
        <button @click="display(markerPositions2)">마커 선택2</button>
        <button @click="displayMarker([])">마커 삭제</button>
        <button @click="displayMarker2(data)">데이타</button>
        <button @click="Overlaydata()">데이타2</button>
        <!-- 지금내가쓰고있는게 오버레이 데이타임 -->
      </div>
    </div>

    <div id="map"></div>
    <!-- <div class="button-group">
      <button @click="changeSize(0)">Hide</button>
      <button @click="changeSize(900)">show</button>
      <button @click="displayMarker(markerPositions1)">marker set 1</button>
      <button @click="displayMarker(markerPositions2)">marker set 2</button>
      <button @click="datas()">마커 생성</button>
      <button @click="displayMarker([])">마커 지움 (empty)</button>
      <button @click="displayInfoWindow(markerPositions1)">인포 윈도우</button>
      
        <div v-if="show">yes</div>
        <div v-else>No</div>
        <button @click="toggleShow()">Toggle </button>
    </div> -->
  </div>
</template>

<script>
import Axios from "axios";
import $ from "jquery";
export default {
  name: "kakaomap",
  data() {
    return {
      map: null,
      data2: [],
      checkedemotion: [],

      data1: [
        [37.482802136930516, 126.79564879005665],
        [37.483987091628535, 126.7830868366494],
        [37.46851044224279, 126.797275939562]
      ],
      data: [
        { x: 37.482802136930516, y: 126.79564879005665 },
        { x: 37.483987091628535, y: 126.7830868366494 },
        { x: 37.46851044224279, y: 126.797275939562 }
      ],
      markerPositions2: [
        [37.499590490909185, 127.0263723554437],
        [37.499427948430814, 127.02794423197847],
        [37.498553760499505, 127.02882598822454],
        [37.497625593121384, 127.02935713582038],
        [37.49629291770947, 127.02587362608637],
        [37.49754540521486, 127.02546694890695],
        [37.49646391248451, 127.02675574250912]
      ],

      location: [],
      markers: [],
      markers: []

      // position:[]
    };
  },
  // let mapContainer = document.getElementById('map') // 지도를 표시할 div
  //     let mapOption = {
  //         center: new kakao.maps.LatLng(37.492413, 126.824126), // 지도의 중심좌표
  //         level: 5 // 지도의 확대 레벨
  //       };

  // let map = new kakao.maps.Map(mapContainer, mapOption);
  mounted() {
    // 이 이프문은 무슨이프문임 윈도우 카카오랑 그리고 카카오맵은 뭔뜻임 이건 따온거라 정확하게모르겟음;;
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      // 이 스크립트 어딨어? 인잇맵 ? ㅇㅇ스크립트 온로드 한 파일 어딨어
      script.onload = () => kakao.maps.load(this.initMap);
      // 여기서도만들고 ㅇㅇ 여기서 만든거랑 호출할때 불려오는거 그래서 맵이 2개라고 말한거임ㅁ 그래서 호출하는 부분에서 맵을 지우려고햇는데 안되더라고
      // 그걸왜지우는데? 그스크립트안에 무슨기능있냐? 그스크립트에선 오버레이, 마커 , 마커 이어주는 라인 ,마커 이미지 변경 인데 거기서도 새로운 맵을 만드니까 그 새로운 맵을 만드는 매소드만 지워서 마운트된 맵가지고 컨트롤 하려고햇는데 안되더라고
      // 그스크립트는 니가만든거야 아니면 어디서가져온거야 그 카카오 소스에서 가지고 오긴햇는데 내가 원하는 것들 섞은거지 그럼 니가원하는 기능을 뷰에다써야지 왜 js 에써? ???? 함수로 만들어서 버튼눌럿을대 호출이 되야하니까
      // 뷰는 그냥 js 기반이라 그냥 js 코드도됨. 그 함수안에 코드를 포이치에 쳐넣으면 작동하지않을까?
      // 그리고 document.getElementById('id명').onclick();  이런식으로 <- 강제 온클릭 이벤트도걸수있꼬

      // 왜 굳이 스크립트를 만들어서 그걸 붙여 여기에다가 스크립트 쓰라고만든건데

      // 애초부터 마운트시점도 달라
      // 일반 window dom 이랑 뷰 dom 이랑 달라.

      // 결국엔 스크립트를 니가 어디선가 불러올 때 뷰dom 이랑 불일치하니까 불러오지도못하거나 그냥 덮어씌워짐
      // 그냥 그 js 안에 있는 기능을 여기서 함수하나 만들어서 호출하는게 났지 그리고 v-on:change= "함수명(data)" 써서 데이터값 바뀌거나 클릭하면 함수작동하게할수있어. 이거아니면 v-on:click 도있고
      // js 지우고 그안에있는 함수들만 들고와서 따로붙이셈

      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=adfe893e046c16c34558d22483c0563d";
      document.head.appendChild(script);
    }

    // this.test();
  },

  methods: {
    datas: function() {
      let data = [
        [37.482802136930516, 126.79564879005665],
        [37.483987091628535, 126.7830868366494],
        [37.46851044224279, 126.797275939562]
      ];

      // 우선적으로 let data 는 비어져있겟지 니가 데이터를 어디선가 받아오면
      // let data = [];
      //  axios 써서 데이터를 받아오고 reponse.data 를 data = reponse.data 로집어넣으면 해당하는 리스트가
      // 위에 값이있는것처럼 채워질꺼고 밑에함수에서 if(data 가 널이 아니라면 해줘)
      // 이런식으로가면됨
      if (data.length != 0) {
        this.displayMarker(data);
        console.log(data);
      } else {
        alert("데이터를 확인해주세요");
      }
    },
    //   toggleShows: function{
    //     let data: {
    //       show: false
    //     }
    //     toggleShow() {
    //     this.show = !this.show;
    //   },
    // },

    //마커 on off 만드는 함수

    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 5
      };
      // 아뭐야 그냥 여기서 돌린거임? ㅇㅇ 그럼 이닛맵에 붙이면되잖아 왜 함수를 또호출해
      //지도 객체를 등록합니다.
      //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
      this.map = new kakao.maps.Map(container, options);
    },

    changeSize(size) {
      const container = document.getElementById("map");
      // container.style.width = `${size}px`;
      // container.style.height = `${size}px`;
      container.style.width = `${size}px`;
      container.style.height = `${size}px`;
      this.map.relayout();
    },

    displayMarker(markerPositions) {
      if (this.markers.length > 0) {
        this.markers.forEach(marker => marker.setMap(null));
      }

      const positions = markerPositions.map(
        position => new kakao.maps.LatLng(...position)
      );

      if (positions.length > 0) {
        this.markers = positions.map(
          position =>
            new kakao.maps.Marker({
              map: this.map,
              position
            })
        );

        const bounds = positions.reduce(
          (bounds, latlng) => bounds.extend(latlng),
          new kakao.maps.LatLngBounds()
        );

        this.map.setBounds(bounds);
      }
    },

    test: function() {
      // let vm = this;

      let sendData = {};
      // sendData 안에 {data : '123'} 이러면 백단으로 이데이터를 보냄ㅇㅋ?
      // 이건 그냥 말그대로 포스트 제대로안가져와서그런거같은데 일단 로그인페이지 만들어봐 여기서 백단가지고
      // 그리고 전역변수도 담긴다 {data : 전역변수} 이렇게써도 담김 이정도면 알아먹지? 얼추 해보면서 익혀야겟지 이건 모르면 물어볼듯다시 ㅇㅇ
      //  이게 비동기로 페이지 데이터를 가져오는거니까 한번 로그인 화면부터 만들어봐 백단 불러다가 이게왜 이거고 이건왜 저건지 한번씩 듣고.
      //  저id 는 왜 넣어놓은건지, 어디서오는건지, 로그인을하면 그상태에서지속적으로 로그인 정보를 가지고 저 {id} 에 던지는건지 뭔지.
      //  난 왜만들어놓은지는 모르겟는데 그냥 세션에서 계속 id 값을 던져서 확인하는거같은데 근데 그렇게받을꺼면 권한은 왜검? authorize 가 애초부터
      //  로그인안되있으면 작동안하게도할수있는데 ㅇㅂㅇ; 무튼 로그인만들고 페이지넘어가게 한다음 해봐봐 ㅇㅇ;

      Axios.post("/api/hello", sendData).then(function(response) {
        let data = response.data;
        console.log(data);
      });
    },
    // 이게지금 니가쓰는거임? ㄴㄴ 지금은 안쓰지 접때 너가 만들어준거야 옛날에
    displayInfoWindow() {
      let data = [
        [37.482802136930516, 126.79564879005665],
        [37.483987091628535, 126.7830868366494],
        [37.46851044224279, 126.797275939562]
      ];
      //   let data = [
      //     {lat : "37.482802136930516" , lon : "126.79564879005665"},
      //     {lat : "37.483987091628535" , lon : "126.7830868366494"},
      //     {lat : "37.46851044224279" , lon : "126.797275939562"}

      // data.forEach()

      data.forEach(element => {
        let iwContent = '<div style="padding:5px;">Hello World!</div>';
        let iwPosition = new kakao.maps.LatLng(element);
        let iwRemoveable = true;
        console.log(element);

        this.infowindow = new kakao.maps.InfoWindow({
          map: this.map, // 인포윈도우가 표시될 지도
          position: iwPosition,
          content: iwContent,
          removable: iwRemoveable
        });
        this.map.setCenter(iwPosition);
      });
      InfoWindow.open(map, marker);
      console.log(this.infowindow);
    },
    //데이타
    dataset() {
      let data = [
        { x: 37.482802136930516, y: 126.79564879005665, text: "test" },
        { x: 37.483987091628535, y: 126.7830868366494, text: "test2" },
        { x: 37.46851044224279, y: 126.797275939562, text: "53235" }
      ];

      //data 는 결국 axios 태워서 디비에서가져올꺼고.
      let mapContainer = document.getElementById("map"), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(37.46851044224279, 126.797275939562), // 지도의 중심좌표
          level: 3 // 지도의 확대 레벨
        };
      let map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

      // 여기서도만들고 근데 여기서 만든건 함수라서 호출안하면 안만들어지는거아냐 ? ㄱㄷ
      let imageSrc =
          "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png", // 마커이미지의 주소입니다
        imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
        imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
      let markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      );

      data.forEach(element => {
        console.log(element.x);
        console.log(element.y);

        let position = new kakao.maps.LatLng(element.x, element.y);
        // let Overlayposition = new kakao.maps.LatLng(element.x, element.y);

        // 마커를 생성합니다

        let marker = new kakao.maps.Marker({
          position: position,
          image: markerImage,
          clickable: true // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
        });

        // 아래 코드는 위의 마커를 생성하는 코드에서 clickable: true 와 같이
        // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
        // marker.setClickable(true);

        // 마커를 지도에 표시합니다.
        marker.setMap(map);
        // let text = "testst"
        // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
        let iwContent =
            '<div style="padding:5px;" class=testsersdfasdf>' +
            element.text +
            "</div>",
          //     var iwContent = '<div class="customoverlay">' +
          // '  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
          // '    <span class="title">구의야구공원</span>' +
          // '  </a>' +
          // '</div>';
          // 그건 알지
          // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
          iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

        // 커스텀 오버레이가 표시될 위치입니다
        let position2 = new kakao.maps.LatLng(element.x, element.y);
        console.log(position2);
        // 커스텀 오버레이를 생성합니다
        let customOverlay = new kakao.maps.CustomOverlay({
          map: map,
          position: position2,
          content: iwContent,
          removable: iwRemoveable,
          yAnchor: 1
        });
        // 인포윈도우를 생성합니다
        let infowindow = new kakao.maps.InfoWindow({
          content: iwContent,
          removable: iwRemoveable
        });

        // 마커에 클릭이벤트를 등록합니다
        kakao.maps.event.addListener(marker, "click", function() {
          customOverlay.setMap(map, marker);
          infowindow.open(map, marker);
          // customOverlay.open(map, marker);
        });
      });
      // });
    },

    displayMarker2(markerPositions) {
      let imageSrc =
          "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png", // 마커이미지의 주소입니다
        imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
        imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

      // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
      let markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      );

      if (this.markers.length > 0) {
        this.markers.forEach(marker => marker.setMap(null));
      }

      const positions = markerPositions.map(
        position => new kakao.maps.LatLng(...position)
      );

      if (positions.length > 0) {
        this.markers = positions.map(
          position =>
            new kakao.maps.Marker({
              map: this.map,
              image: markerImage,
              position
            })
        );
        console.log(markerPositions);
        markerPositions.forEach(element => {
          let content =
            `<div class= 'customoverlay'>` +
            '  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
            '    <span class="title">구의야구공원</span>' +
            "  </a>" +
            "</div>";

          let position2 = new kakao.maps.LatLng(element);
          console.log(position2);
          console.log(markerPositions);

          // 커스텀 오버레이를 생성합니다
          let customOverlay = new kakao.maps.CustomOverlay({
            map: map,
            position: position2,
            content: content,
            yAnchor: 1
          });
        });

        const bounds = positions.reduce(
          (bounds, latlng) => bounds.extend(latlng),
          new kakao.maps.LatLngBounds()
        );

        this.map.setBounds(bounds);
      }
    },

    //데이타2

    Overlaydata: function() {
      let vm = this;

      // $("#map").empty();

      let mapContainer = document.getElementById("map"), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(37.46851044224279, 126.797275939562), // 지도의 중심좌표
          level: 3 // 지도의 확대 레벨
        };
      let map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

      let data = [
        { x: 37.482802136930516, y: 126.79564879005665 },
        { x: 37.483987091628535, y: 126.7830868366494 },
        { x: 37.46851044224279, y: 126.797275939562 }
      ];
      // 최초에 이함수 돌릴떄 맵을 생성하고 시작하는데 ㅇㅇ 그치 맵 만드는 함수가 이거니까 그랳서 지워볼려고햇는데 안되더라고
      // 그니까 초기화 하면되는거잖아 그냥

      let imageSrc =
          "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png", // 마커이미지의 주소입니다
        imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
        imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

      // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
      let markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      );

      data.forEach(element => {
        console.log(element.x);
        console.log(element.y);
        console.log(data);
        let markerPosition = new kakao.maps.LatLng(element.x, element.y); // 마커가 표시될 위치입니다

        console.log(markerPosition);

        // 마커를 생성합니다
        let marker = new kakao.maps.Marker({
          position: markerPosition,
          image: markerImage // 마커이미지 설정
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        let content =
          `<div class= 'customoverlay'>` +
          '  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
          '    <span class="title">구의야구공원</span>' +
          "  </a>" +
          "</div>";

        // 커스텀 오버레이가 표시될 위치입니다
        let position = new kakao.maps.LatLng(element.x, element.y);
        console.log(element.x + "2");
        console.log(element.y + "2");
        console.log(data + "2");

        // 커스텀 오버레이를 생성합니다
        let customOverlay = new kakao.maps.CustomOverlay({
          map: map,
          position: position,
          content: content,
          yAnchor: 1
        });

        var linePath = [
          // { x: 37.482802136930516, y: 126.79564879005665 },
          // { x: 37.483987091628535, y: 126.7830868366494 },
          // { x: 37.46851044224279, y: 126.797275939562 }
          // new kakao.maps.LatLng(element.x, element.y),
          new kakao.maps.LatLng(37.482802136930516, 126.79564879005665),
          new kakao.maps.LatLng(37.483987091628535, 126.7830868366494),
          new kakao.maps.LatLng(37.46851044224279, 126.797275939562)
          // console.log(element.x,element.y)
          // 이 3개는 뭐임? 이거도 지금 변수로 넣어야하는데 안되가지고 강제로 마커 위치 넣어서 라인그린거임
        ];
        // console.log(element.x,element.y);
        // let line = [new kakao.maps.LatLng(element.x, element.y)]
        // 지도에 표시할 선을 생성합니다
        var polyline = new kakao.maps.Polyline({
          path: linePath, // 선을 구성하는 좌표배열 입니다
          strokeWeight: 5, // 선의 두께 입니다
          strokeColor: "#FFAE00", // 선의 색깔입니다
          strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle: "solid" // 선의 스타일입니다
        });

        // 지도에 선을 표시합니다
        polyline.setMap(map);

        var points = [
          new kakao.maps.LatLng(37.482802136930516, 126.79564879005665),
          new kakao.maps.LatLng(37.483987091628535, 126.7830868366494),
          new kakao.maps.LatLng(37.46851044224279, 126.797275939562)
        ];

        // 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다
        var bounds = new kakao.maps.LatLngBounds();

        var i;
        for (i = 0; i < points.length; i++) {
          // 배열의 좌표들이 잘 보이게 마커를 지도에 추가합니다
          // LatLngBounds 객체에 좌표를 추가합니다
          bounds.extend(points[i]);
        }
      });
    },
    Overlaymap: function() {
      let vm = this;

      // $("#map").empty();

      let mapContainer = document.getElementById("map"), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(37.46851044224279, 126.797275939562), // 지도의 중심좌표
          level: 3 // 지도의 확대 레벨
        };
      let map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

      let data = [
        { x: 37.482802136930516, y: 126.79564879005665 },
        { x: 37.483987091628535, y: 126.7830868366494 },
        { x: 37.46851044224279, y: 126.797275939562 }
      ];
      // 최초에 이함수 돌릴떄 맵을 생성하고 시작하는데 ㅇㅇ 그치 맵 만드는 함수가 이거니까 그랳서 지워볼려고햇는데 안되더라고
      // 그니까 초기화 하면되는거잖아 그냥

      let imageSrc =
          "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png", // 마커이미지의 주소입니다
        imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
        imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

      // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
      let markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      );

      data.forEach(element => {
        console.log(element.x);
        console.log(element.y);
        console.log(data);
        let markerPosition = new kakao.maps.LatLng(element.x, element.y); // 마커가 표시될 위치입니다

        console.log(markerPosition);

        // 마커를 생성합니다
        let marker = new kakao.maps.Marker({
          position: markerPosition,
          image: markerImage // 마커이미지 설정
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        let content =
          `<div class= 'customoverlay'>` +
          '  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
          '    <span class="title">구의야구공원</span>' +
          "  </a>" +
          "</div>";

        // 커스텀 오버레이가 표시될 위치입니다
        let position = new kakao.maps.LatLng(element.x, element.y);
        console.log(element.x + "2");
        console.log(element.y + "2");
        console.log(data + "2");

        // 커스텀 오버레이를 생성합니다
        let customOverlay = new kakao.maps.CustomOverlay({
          map: map,
          position: position,
          content: content,
          yAnchor: 1
        });

        var linePath = [
          // { x: 37.482802136930516, y: 126.79564879005665 },
          // { x: 37.483987091628535, y: 126.7830868366494 },
          // { x: 37.46851044224279, y: 126.797275939562 }
          // new kakao.maps.LatLng(element.x, element.y),
          new kakao.maps.LatLng(37.482802136930516, 126.79564879005665),
          new kakao.maps.LatLng(37.483987091628535, 126.7830868366494),
          new kakao.maps.LatLng(37.46851044224279, 126.797275939562)
          // console.log(element.x,element.y)
          // 이 3개는 뭐임? 이거도 지금 변수로 넣어야하는데 안되가지고 강제로 마커 위치 넣어서 라인그린거임
        ];
        // console.log(element.x,element.y);
        // let line = [new kakao.maps.LatLng(element.x, element.y)]
        // 지도에 표시할 선을 생성합니다
        var polyline = new kakao.maps.Polyline({
          path: linePath, // 선을 구성하는 좌표배열 입니다
          strokeWeight: 5, // 선의 두께 입니다
          strokeColor: "#FFAE00", // 선의 색깔입니다
          strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle: "solid" // 선의 스타일입니다
        });

        // 지도에 선을 표시합니다
        polyline.setMap(map);

        var points = [
          new kakao.maps.LatLng(37.482802136930516, 126.79564879005665),
          new kakao.maps.LatLng(37.483987091628535, 126.7830868366494),
          new kakao.maps.LatLng(37.46851044224279, 126.797275939562)
        ];

        // 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다
        var bounds = new kakao.maps.LatLngBounds();

        var i;
        for (i = 0; i < points.length; i++) {
          // 배열의 좌표들이 잘 보이게 마커를 지도에 추가합니다
          // LatLngBounds 객체에 좌표를 추가합니다
          bounds.extend(points[i]);
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* @import "bootstrap/dist/css/bootstrap.min.css";
    @import "bootstrap"; */
.customoverlay {
  position: relative;
  bottom: 85px;
  border-radius: 6px;
  border: 1px solid #ccc;
  border-bottom: 2px solid #ddd;
  float: left;
}

.customoverlay:nth-of-type(n) {
  border: 0;
  box-shadow: 0px 1px 2px #888;
}

.customoverlay a {
  display: block;
  text-decoration: none;
  color: #000;
  text-align: center;
  border-radius: 6px;
  font-size: 14px;
  font-weight: bold;
  overflow: hidden;
  background: #d95050;
  background: #d95050
    url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png)
    no-repeat right 14px center;
}

.customoverlay .title {
  display: block;
  text-align: center;
  background: #fff;
  margin-right: 35px;
  padding: 10px 15px;
  font-size: 14px;
  font-weight: bold;
}

.customoverlay:after {
  content: "";
  position: absolute;
  margin-left: -12px;
  left: 50%;
  bottom: -12px;
  width: 22px;
  height: 12px;
  background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png");
}

#map {
  width: 100%;
  height: 96vh;
}

.button-group {
  margin: 10px 0px;
}

button {
  margin: 0 3px;
}

.box {
  margin: 30px 50px 30px 50px;
}

.offcanvas-start {
  width: 490px;
}

.offcanvas {
  text-align: center;
  justify-content: center;
}

.offcanvas-header {
  text-align: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}
</style>
