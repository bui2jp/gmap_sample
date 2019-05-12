class MyMap {
 
    constructor() {
        this._map = null;
    }
 
    initMap(){
        this._map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 35.397, lng: 134.644},
          zoom: 8
        });        
    }
}
 
//インスタンスを生成する
var gMyMap = new MyMap();


// var initMap = function () {
//     var map;
//     map = new google.maps.Map(document.getElementById('map'), {
//       center: {lat: 35.397, lng: 134.644},
//       zoom: 8
//     });
//   }

