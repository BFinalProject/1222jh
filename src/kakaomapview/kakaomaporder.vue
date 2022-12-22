<template>
  <div>
    <button class="btn btn-warning" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling"
      aria-controls="offcanvasScrolling">
      카테고리s
    </button>

    <div class="offcanvas offcanvas-start show" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
      id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
      <div class="offcanvas-header" display="flex" text-align="center">
        <h4 class="offcanvas-title" id="offcanvasScrollingLabel">
          아래에 해당하는 카테고리를 선택해주세요
        </h4>

        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <!-- 1 -->
      <div>
	<div class="row">
	<div class="col-md-12">
                    <div id="accordion" class="checkout">
                        <div class="panel checkout-step">
                            <div> <span class="checkout-step-number">1</span>
                                <h4 class="checkout-step-title"> <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" > Phone Number Verification</a></h4>
                            </div>
                            <div id="collapseOne" class="collapse in">
              
                              
                            </div>
                        </div>
                        <div class="panel checkout-step">
                            <div role="tab" id="headingTwo" > <span class="checkout-step-number">2</span>
                                <h4 class="checkout-step-title"> <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" > Delivery Address </a> </h4>
                            </div>
                            <div id="collapseTwo" class="panel-collapse collapse">
                                <div class="checkout-step-body">
                                    <div class="checout-address-step">
                                        <div class="row">
                                            <form class="">
                                                <!-- Multiple Radios (inline) -->
                                                <div class="form-group">
                                                    <label class="col-md-12 control-label" for="address"></label>
                                                    <div class="col-md-12 ">
                                                        <label class="radio-inline" for="address-0">
                                                            <input type="radio" name="address" id="address-0" value="Home" checked="checked"> Home </label>
                                                        <label class="radio-inline" for="address-1">
                                                            <input type="radio" name="address" id="address-1" value="Office"> Office </label>
                                                        <label class="radio-inline" for="address-2">
                                                            <input type="radio" name="address" id="address-2" value="Other"> Other </label>
                                                    </div>
                                                </div>
                                                <!-- Text input-->
                                                <div class="form-group">
                                                    <div class="col-md-12">
                                                        <label class="control-label" for="name">Name</label>
                                                        <input id="name" name="name" type="text" placeholder="Name" class="form-control input-md" required="">
                                                    </div>
                                                </div>
                                                <!-- Text input-->
                                                <div class="form-group">
                                                    <label class="col-md-12 control-label" for="flat">Flat / House / Office No.</label>
                                                    <div class="col-md-12">
                                                        <input id="flat" name="flat" type="text" placeholder="address" class="form-control input-md" required="">
                                                    </div>
                                                </div>
                                                <!-- Text input-->
                                                <div class="form-group">
                                                    <label class="col-md-12 control-label" for="street">Street / Society / Office Name</label>
                                                    <div class="col-md-12">
                                                        <input id="street" name="street" type="text" placeholder="Street Address" class="form-control input-md">
                                                    </div>
                                                </div>
                                                <!-- Text input-->
                                                <div class="form-group">
                                                    <label class="col-md-12 control-label" for="Locality">Locality</label>
                                                    <div class="col-md-12">
                                                        <input id="Locality" name="Locality" type="text" placeholder="Ahmedabad" class="form-control input-md" required="">
                                                    </div>
                                                </div>
                                                <!-- Button -->
                                                <div class="form-group">
                                                    <div class="col-md-12">
                                                        <button id="singlebutton" name="singlebutton" class="btn btn-primary">Save</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <a class="collapsed btn btn-default" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree"> Next </a>
                                </div>
                            </div>
                        </div>
                        <div class="panel checkout-step">
                            <div role="tab" id="headingThree"> <span class="checkout-step-number">3</span>
                                <h4 class="checkout-step-title"> <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree"  > Time & Date </a> </h4>
                            </div>
                            <div id="collapseThree" class="panel-collapse collapse">
                                <div class="checkout-step-body">
                                    <div class="row">
                                        <div class="form-group">
                                            <label class="col-md-12 control-label" for="time">Time</label>
                                            <div class="col-md-12">
                                                <div class="radio">
                                                    <label for="time-0">
                                                        <input type="radio" name="time" id="time-0" value="8:00 - 9:00" checked="checked"> 8:00 - 9:00 </label>
                                                </div>
                                                <div class="radio">
                                                    <label for="time-1">
                                                        <input type="radio" name="time" id="time-1" value="10:00 - 11:00"> 10:00 - 11:00 </label>
                                                </div>
                                                <div class="radio">
                                                    <label for="time-2">
                                                        <input type="radio" name="time" id="time-2" value="12:00 - 1:00"> 12:00 - 1:00 </label>
                                                </div>
                                                <div class="radio">
                                                    <label for="time-3">
                                                        <input type="radio" name="time" id="time-3" value="1:00 - 2:00"> 1:00 - 2:00 </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a class="collapsed btn btn-default" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour"> Next </a>
                                </div>
                            </div>
                        </div>
                        <div class="panel checkout-step">
                            <div role="tab" id="headingFour"> <span class="checkout-step-number">4</span>
                                <h4 class="checkout-step-title"> <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour"  > Payment </a> </h4>
                            </div>
                            <div id="collapseFour" class="panel-collapse collapse">
                                <div class="checkout-step-body">
                                    Payment Mode
                                    <a href="#" class="btn btn-default">Proccess to payment</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
	</div>
</div>
Credit by <a href="http://jituchauhan.com/" target="_blank"> jitu chauhan</a>
      <div style="margin-top: 50px;">
        <button @click="displayMarker(markerPositions2)">마커 선택</button>
        <button @click="displayMarker([])">마커 삭제</button>
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
  import Axios from 'axios'

  export default {
    name: 'kakaomaporder',
    data() {
      return {
  
      }
    },
  
    data: function () {
      return {
        detailList: [],
        click_id:"",
  
      };
    },
  
    components: {
    }, 

    mounted: function () {
     
    },
  
    methods: {

    }
  
  };
  </script>
  <style>
  @import "../kakaomap/maporder.css";
  
  body {
    display: flex;
  }
  </style>
  