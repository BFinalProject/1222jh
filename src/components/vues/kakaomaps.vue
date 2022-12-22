<template>
  <div v-cloak>
    <div v-if="onclick == true">
      <!-- <div v-show="onclick"><kakaomaporder/></div> -->
      <button
        class="btn btn-warning"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
        style="position: absolute; z-index: 2;"
      >
        카테고리
      </button>

      <div
        class="offcanvas offcanvas-start show"
        data-b
        bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div
          class="offcanvas-header"
          display="flex"
          text-align="center"
          style="background-color: #113f89;"
        >
          <img
            src="../../mainboard/images/logo2.png"
            style="cursor: pointer;"
            onclick="location.href='/'"
          />
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            style="margin-right: 1rem;"
          ></button>
        </div>
        <div class="offcanvas-header" display="flex">
          <div>
            <h4 class="offcanvas-title" id="offcanvasScrollingLabel">
              아래에 해당하는 카테고리를 선택해주세요
            </h4>
          </div>
        </div>
        <!-- 1 -->
        <div
          style="border-bottom: solid 5px #f56a6a; border-top: solid 5px #f56a6a"
        >
          <br />
          <input
            type="checkbox"
            class="btn-check"
            id="option1"
            autocomplete="off"
            value="한식"
            v-model="checkedemotion"
          />
          <label class="btn btn-outline-primary" for="option1">한식</label>

          <input
            type="checkbox"
            class="btn-check"
            id="option2"
            autocomplete="off"
            value="중식"
            v-model="checkedemotion"
          />
          <label class="btn btn-outline-primary" for="option2">중식</label>

          <input
            type="checkbox"
            class="btn-check"
            id="option3"
            autocomplete="off"
            value="양식"
            v-model="checkedemotion"
          />
          <label class="btn btn-outline-primary" for="option3">양식</label>

          <input
            type="checkbox"
            class="btn-check"
            id="option4"
            autocomplete="off"
            value="일식"
            v-model="checkedemotion"
          />
          <label class="btn btn-outline-primary" for="option4">일식</label>

          <input
            type="checkbox"
            class="btn-check"
            id="option5"
            autocomplete="off"
            value="기타음식"
            v-model="checkedemotion"
          />
          <label class="btn btn-outline-primary" for="option5">기타음식</label>

          <br />

          <input
            type="checkbox"
            class="btn-check"
            id="option6"
            autocomplete="off"
            value="술집"
            v-model="checkedemotion"
          />
          <label class="btn btn-outline-primary" for="option6">술집</label>

          <input
            type="checkbox"
            class="btn-check"
            id="option7"
            autocomplete="off"
            value="맛집"
            v-model="checkedemotion"
          />
          <label class="btn btn-outline-primary" for="option7">맛집</label>

          <input
            type="checkbox"
            class="btn-check"
            id="option8"
            autocomplete="off"
            value="기념일"
            v-model="checkedemotion"
          />
          <label class="btn btn-outline-primary" for="option8">기념일</label>

          <input
            type="checkbox"
            class="btn-check"
            id="option9"
            autocomplete="off"
            value="가성비"
            v-model="checkedemotion"
          />
          <label class="btn btn-outline-primary" for="option9">가성비</label>

          <input
            type="checkbox"
            class="btn-check"
            id="option10"
            autocomplete="off"
            value="뷰"
            v-model="checkedemotion"
          />
          <label class="btn btn-outline-primary" for="option10">뷰</label>
          <br />
          <input
            type="checkbox"
            class="btn-check"
            id="option11"
            autocomplete="off"
            value="가족"
            v-model="checkedemotion"
          />
          <label class="btn btn-outline-primary" for="option11">가족</label>

          <input
            type="checkbox"
            class="btn-check"
            id="option12"
            autocomplete="off"
            value="애견동반"
            v-model="checkedemotion"
          />
          <label class="btn btn-outline-primary" for="option12">애견동반</label>

          <input
            type="checkbox"
            class="btn-check"
            id="option13"
            autocomplete="off"
            value="색다른"
            v-model="checkedemotion"
          />
          <label class="btn btn-outline-primary" for="option13">색다른</label>

          <input
            type="checkbox"
            class="btn-check"
            id="option14"
            autocomplete="off"
            value="청결"
            v-model="checkedemotion"
          />
          <label class="btn btn-outline-primary" for="option14">청결</label>

          <input
            type="checkbox"
            class="btn-check"
            id="option15"
            autocomplete="off"
            value="시끌벅적"
            v-model="checkedemotion"
          />
          <label class="btn btn-outline-primary" for="option15">시끌벅적</label>
          <br />

          <input
            type="checkbox"
            class="btn-check"
            id="option16"
            autocomplete="off"
            value="한적"
            v-model="checkedemotion"
          />

          <label class="btn btn-outline-primary" for="option16">한적</label>

          <input
            type="checkbox"
            class="btn-check"
            id="option17"
            autocomplete="off"
            value="활동적"
            v-model="checkedemotion"
          />
          <label class="btn btn-outline-primary" for="option17">활동적</label>

          <input
            type="checkbox"
            class="btn-check"
            id="option18"
            autocomplete="off"
            value="고급스런"
            v-model="checkedemotion"
          />
          <label class="btn btn-outline-primary" for="option18">고급스런</label>

          <input
            type="checkbox"
            class="btn-check"
            id="option19"
            autocomplete="off"
            value="감성적"
            v-model="checkedemotion"
          />
          <label class="btn btn-outline-primary" for="option19">감성적</label>

          <input
            type="checkbox"
            class="btn-check"
            id="option20"
            autocomplete="off"
            value="이국적"
            v-model="checkedemotion"
          />
          <label class="btn btn-outline-primary" for="option20">이국적</label>
          <br />

          <input
            type="checkbox"
            class="btn-check"
            id="option21"
            autocomplete="off"
            value="편리한"
            v-model="checkedemotion"
          />
          <label class="btn btn-outline-primary" for="option21">편리한</label>

          <input
            type="checkbox"
            class="btn-check"
            id="option22"
            autocomplete="off"
            value="전통적"
            v-model="checkedemotion"
          />
          <label class="btn btn-outline-primary" for="option22">전통적</label>

          <input
            type="checkbox"
            class="btn-check"
            id="option23"
            autocomplete="off"
            value="모던한"
            v-model="checkedemotion"
          />
          <label class="btn btn-outline-primary" for="option23">모던한</label>

          <input
            type="checkbox"
            class="btn-check"
            id="option24"
            autocomplete="off"
            value="편안한"
            v-model="checkedemotion"
          />
          <label class="btn btn-outline-primary" for="option24">편안한</label>

          <input
            type="checkbox"
            class="btn-check"
            id="option25"
            autocomplete="off"
            value="이색적"
            v-model="checkedemotion"
          />
          <label class="btn btn-outline-primary" for="option25">이색적</label>
          <br />
          <br />
          <div>
            <span>체크한 이름: {{ checkedemotion }}</span>
          </div>
        </div>
        <div style="margin-top: 20px;">
          <img
            src="../../mainboard/images/map2.jpg"
            style="width: 100%;position: absolute;bottom: 0px;left: 0px;z-index: -9;height: 35%;"
          />
          <button
            style="background-color:#113f89; border-radius: 5px; color: #ffc303; width: 100px; height: 50px; border-color: #113f89;"
            @click="fnGetSelectList(), Overlaydata()"
          >
            선택완료
          </button>
        </div>
      </div>
    </div>
    <!-- ------------------   order -------------------------------------------------------------------------------- -->

    <!-- <div v-if= "onclick == false"> -->
    <div v-if="onclick == false">
      <button
        class="btn btn-warning"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
        style="position: absolute; z-index: 2;"
      >
        추천장소
      </button>

      <div
        class="offcanvas offcanvas-start show"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div
          class="offcanvas-header"
          display="flex"
          text-align="center"
          style="background-color: #113f89;"
        >
          <img
            src="../../mainboard/images/logo2.png"
            style="cursor: pointer;"
            onclick="location.href='/'"
          />
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            style="margin-right: 1rem;"
          ></button>
        </div>
        <div class="offcanvas-header" display="flex" text-align="center">
          <h4 class="offcanvas-title" id="offcanvasScrollingLabel">
            아래의 추천장소를 확인해 주세요!
          </h4>
        </div>
        <!-- 1 -->
        <div
          style="border-bottom: solid 5px #f56a6a; border-top: solid 5px #f56a6a"
        >
          <div class="row">
            <div class="col-md-12">
              <!-- 드래그 드랍?? 지우는거 응용할떄 다시 한번 볼듯
              <draggable v-model="selectlist" group="people" @start="drag = true" @end="drag = false"
                @change="chageevent()">
                <div v-for="element in selectlist" :key="element.id">{{ element.name }}</div>
              </draggable> -->

              <draggable
                v-model="mapthis"
                group="people"
                @start="drag = true"
                @end="drag = false"
                @change="chageevent()"
              >
                <div
                  id="accordion"
                  class="checkout"
                  v-for="(element, i) in mapthis"
                  :key="element.id"
                >
                  <div
                    class="panel"
                    style=" border-bottom: 1px solid lightslategrey; margin-bottom:0;"
                    draggable="true"
                  >
                    <div>
                      <span class="checkout-step-number">{{ ++i }}</span>
                      <h4 class="checkout-step-title">
                        <a
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseOne"
                          >{{ element.storeName }}</a
                        >
                      </h4>
                    </div>
                    <div id="collapseOne" class="collapse in"></div>
                  </div>
                </div>
              </draggable>
            </div>
          </div>
        </div>
        <div style="margin-top: 10px;">
          <button
            style="background-color:#113f89; border-radius: 5px; color: #ffc303; width: 100px; height: 50px; border-color: #113f89;"
            @click="hideMarkers3()"
          >
            다시 선택
          </button>
          <div>
            <img
              src="../../mainboard/images/map3.jpg"
              style="width: 100%;position: absolute;bottom: 0px;left: 0px;z-index: -9;height: 35%;"
            />
          </div>
        </div>
      </div>
    </div>

    <div id="map" style="height:100vh;"></div>
  </div>
</template>

<script>
import Axios from "axios";
import draggable from "vuedraggable";
import kakaomaporder from "../../kakaomapview/kakaomaporder.vue";
import $ from "jquery";
export default {
  name: "kakaomaps",
  el: "#it_list",
  components: {
    kakaomaporder,
    draggable
  },
  data() {
    return {
      selectlist: [
        {
          x: 37.55934312564639,
          y: 126.9254105034978,
          name: "미쁘동",
          id: "mine"
        },
        { x: 37.55540969039115, y: 126.91946112059084, name: "율곡", id: "it" },
        { x: 37.5524844, y: 126.9189927, name: "플렉스라운지", id: "record" },
        { x: 37.5543874, y: 126.9219519, name: "볼더프렌즈", id: "etes" },
        { x: 37.5503985, y: 126.920374, name: "스테이크슈퍼", id: "sadf" }
      ],
      tests: [{ x: "194968.2223", y: "442190.8232", name: "테스트항목" }],

      datas: [],
      num: 1,
      mapOption: {},
      map: [],
      marker: {},
      clusterer: {},
      markers: {},
      onclick: true,
      resetmarker: [],
      checkedemotion: [],
      markerPosition: [],
      markeris: [],
      polyline: [],
      viewModel: {
        latitude: "",
        longitude: "",
        textContent: "",
        test: []
      },
      mapthis: []
    };
  },
  // watch(){
  //   myArray
  // },
  mounted() {
    let vm = this;
    vm.tests2();
    //vm.fnGetSelectList();
    // vm.test3();
    vm.clusterer = new kakao.maps.MarkerClusterer({
      map: vm.map,
      markers: null,
      gridSize: 35,
      averageCenter: true,
      minLevel: 6,
      disableClickZoom: true,
      styles: [
        {
          width: "53px",
          height: "52px",
          background: "url(cluster.png) no-repeat",
          color: "#fff",
          textAlign: "center",
          lineHeight: "54px"
        }
      ]
    });
  },
  methods: {
    chageevent: function() {
      let vm = this;
      $(".customoverlay")
        .parent()
        .empty();
      $(
        "img[src='https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png']"
      )
        .parent()
        .empty();
      $("path[id*='daum-maps-shape-']")
        .parent()
        .empty();
      vm.Overlaydata();
    },

    fnGetSelectList: function() {
      let vm = this;
      let senddata = {
        checkedEmotion: vm.checkedemotion
      };
      console.log(senddata);

      let url = "map/findstore";

      Axios.post(url, senddata)
        .then(function(response) {
          vm.mapthis = response.data;
          // console.log(vm.mapthis)
        })
        .catch(function(ex) {
          console.log(ex);
        });
    },

    Overlaydata: function() {
      let vm = this;
      let nums = 1;

      vm.map.relayout();
      let data = vm.mapthis;
      // console.log(data)
      (vm.datas = []),
        (vm.markeris = data),
        (vm.checkedemotion = []),
        (nums = 1);
      console.log(vm.mapthis);

      //       var geocoder = new kakao.maps.services.Geocoder(), // 좌표계 변환 객체를 생성합니다
      //         wtmX = vm.tests.x, // 변환할 WTM X 좌표 입니다
      //         wtmY = vm.tests.y; // 변환할 WTM Y 좌표 입니다

      //       // WTM 좌표를 WGS84 좌표계의 좌표로 변환합니다
      //       geocoder.transCoord(wtmX, wtmY, {
      //         input_coord: kakao.maps.services.Coords.WTM, // 변환을 위해 입력한 좌표계 입니다
      //         output_coord: kakao.maps.services.Coords.WGS84 // 변환 결과로 받을 좌표계 입니다
      //       });
      // console.log(geocoder)
      // console.log(output_coord)

      // let imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다
      // let imageSrc ="../design/markerimges/img1.png", // 마커이미지의 주소입니다
      let imageSrc =
          "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png", // 마커이미지의 주소입니다
        imageSize = new kakao.maps.Size(50, 55), // 마커이미지의 크기입니다
        imageOption = { offset: new kakao.maps.Point(21, 50) };
      // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

      // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
      let markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      );

      let bounds = new kakao.maps.LatLngBounds();

      data.forEach(element => {
        vm.markerPosition = new kakao.maps.LatLng(element.x, element.y); // 마커가 표시될 위치입니다
        console.log(vm.markerPosition);
        let iwRemoveable = true;
        // 마커를 생성합니다
        vm.marker = new kakao.maps.Marker({
          position: vm.markerPosition,
          image: markerImage, // 마커이미지 설정
          removable: iwRemoveable,
          id: "tests"
        });

        let mapmovedata = bounds.extend(vm.markerPosition);

        // 마커가 지도 위에 표시되도록 설정합니다
        //this.clusteredr.clear(marker);
        //marker.setMap(null);image.png

        vm.marker.setMap(vm.map);
        vm.map.setBounds(mapmovedata);
        console.log(element.storeName);
        // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        let content =
          `<div class= 'customoverlay'>` +
          '  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
          '    <span class="title"> ' +
          nums++ +
          "." +
          element.storeName +
          "</span>" +
          "  </a>" +
          "</div>";

        // 커스텀 오버레이가 표시될 위치입니다
        let position = new kakao.maps.LatLng(element.x, element.y);

        // 커스텀 오버레이를 생성합니다아
        let customOverlay = new kakao.maps.CustomOverlay({
          map: vm.map,
          position: position,
          content: content,
          yAnchor: 0.5
        });

        vm.datas.push(new kakao.maps.LatLng(element.x, element.y));
        // vm.polyline.setMap(null);
        vm.polyline = new kakao.maps.Polyline({
          path: vm.datas, // 선을 구성하는 좌표배열 입니다
          strokeWeight: 5, // 선의 두께 입니다
          strokeColor: "#FFAE00", // 선의 색깔입니다
          strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle: "solid", // 선의 스타일입니다
          zIndex: 4
        });

        //polyline.setMap(null);
        vm.polyline.setMap(vm.map);
      });
      console.log(vm.onclick);
      vm.onclick = false;
      console.log(vm.onclick);
      // this.onclick = !this.onclick;
    },
    // tests2:function(){
    //   let vm =this;

    //   function success({ coords, timestamp }) {
    //       let latitude = coords.latitude;   // 위도
    //       let longitude = coords.longitude; // 경도
    //       vm.viewModel.latitude = latitude;
    //       vm.viewModel.longitude = longitude;
    //       console.log(vm.viewModel.latitude)
    //       console.log(vm.viewModel.longitude)

    //       let mapContainer = document.getElementById("map");
    //       if(longitude != null || longitude != ''){
    //         vm.mapOption = {
    //         //지도를 생성할 때 필요한 기본 옵션
    //         center: new kakao.maps.LatLng(latitude, longitude) //지도의 중심좌표.
    //         // center: new kakao.maps.LatLng(33.450701, 126.570667) //지도의 중심좌표. 이게 제주도 좌표야
    //         //level: 7 //지도의 레벨(확대, 축소 정도)
    //       };
    //       vm.map = new kakao.maps.Map(mapContainer, vm.mapOption);
    //       }else if(longitude.length == 0){
    //         vm.mapOption = {
    //         //지도를 생성할 때 필요한 기본 옵션
    //         // center: new kakao.maps.LatLng(latitude, longitude) //지도의 중심좌표.
    //         center: new kakao.maps.LatLng(33.450701, 126.570667) //지도의 중심좌표. 이게 제주도 좌표야
    //         //level: 7 //지도의 레벨(확대, 축소 정도)
    //       };
    //       vm.map = new kakao.maps.Map(mapContainer, vm.mapOption);
    //       }

    //       // alert(`위도: ${latitude}, 경도: ${longitude}, 위치 반환 시간: ${timestamp}`);
    //   }

    //   function getUserLocation() {
    //     console.log(navigator.geolocation);
    //     if (navigator.geolocation) {
    //       if(navigator.geolocation != null){
    //         navigator.geolocation.getCurrentPosition (success)
    //       }else {
    //         alert("이 브라우저에서는 Geolocation이 지원되지 않습니다.")
    //       }
    //     } else {
    //         alert("이 브라우저에서는 Geolocation이 지원되지 않습니다.")
    //       }

    //   }

    //   getUserLocation();

    // },
    fetchContacts: function() {
      let vm = this;

      let url = "/map/findstore";
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
    },
    tests2: function() {
      let vm = this;

      function success({ coords, timestamp }) {
        let latitude = coords.latitude; // 위도
        let longitude = coords.longitude; // 경도
        vm.viewModel.latitude = latitude;
        vm.viewModel.longitude = longitude;
        console.log(vm.viewModel.latitude);
        console.log(vm.viewModel.longitude);

        let mapContainer = document.getElementById("map");
        if (longitude != null || longitude != "") {
          vm.mapOption = {
            //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(latitude, longitude) //지도의 중심좌표.
            // center: new kakao.maps.LatLng(33.450701, 126.570667) //지도의 중심좌표. 이게 제주도 좌표야
            //level: 7 //지도의 레벨(확대, 축소 정도)
          };
          vm.map = new kakao.maps.Map(mapContainer, vm.mapOption);
        } else if (longitude.length == 0) {
          vm.mapOption = {
            //지도를 생성할 때 필요한 기본 옵션
            // center: new kakao.maps.LatLng(latitude, longitude) //지도의 중심좌표.
            center: new kakao.maps.LatLng(33.450701, 126.570667) //지도의 중심좌표. 이게 제주도 좌표야
            //level: 7 //지도의 레벨(확대, 축소 정도)
          };
          vm.map = new kakao.maps.Map(mapContainer, vm.mapOption);
        }

        // alert(`위도: ${latitude}, 경도: ${longitude}, 위치 반환 시간: ${timestamp}`);
      }

      function getUserLocation() {
        console.log(navigator.geolocation);
        if (navigator.geolocation) {
          if (navigator.geolocation != null) {
            navigator.geolocation.getCurrentPosition(success);
          } else {
            alert("이 브라우저에서는 Geolocation이 지원되지 않습니다.");
          }
        } else {
          alert("이 브라우저에서는 Geolocation이 지원되지 않습니다.");
        }
      }

      getUserLocation();
    },

    hideMarkers3: function() {
      let vm = this;
      console.log(vm.onclick);

      $(".customoverlay")
        .parent()
        .empty();
      $(
        "img[src='https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png']"
      )
        .parent()
        .empty();
      $("path[id*='daum-maps-shape-']")
        .parent()
        .empty();

      vm.onclick = true;
    }
  }
};
</script>
<style>
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
  font-size: 18px;
  font-weight: 300;
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

a {
  font-family: "Do Hyeon", sans-serif;
  font-size: 24px;
}

h4 {
  font-family: "Do Hyeon", sans-serif;
  font-size: 24px;
}

button {
  font-family: "Do Hyeon", sans-serif;
  font-size: 24px;
}

label,
span {
  font-family: "Do Hyeon", sans-serif;
}

.btn {
  height: 50px;
  width: 90px;
  text-align: justify;
}

* {
  font-family: "Open Sans", sans-serif;
}

.responsive-table {
  overflow: auto;
}

table {
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  white-space: nowrap;
}

table th {
  background: #bdbdbd;
}

table tr:nth-child(odd) {
  background-color: #f2f2f2;
}

table tr:nth-child(even) {
  background-color: #e6e6e6;
}

th,
tr,
td {
  text-align: center;
  border: 1px solid #e0e0e0;
  padding: 5px;
}

img {
  font-style: italic;
  font-size: 11px;
}

.fa-bars {
  cursor: move;
}
</style>
