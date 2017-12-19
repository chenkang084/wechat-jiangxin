// map.js
Page({
  data: {
    markers: [
      {
        iconPath: "../../assets/imgs/icons/map-location-mark-02.png",
        id: 0,
        latitude: 23.099994,
        longitude: 113.32452,
        width: 50,
        height: 50,
        title: "酱辛世家",
        alpha: 0,
        callout: {
          content: "hehe"
        }
      }
    ],
    polyline: [
      {
        points: [
          {
            longitude: 113.3245211,
            latitude: 23.10229
          },
          {
            longitude: 113.32452,
            latitude: 23.21229
          }
        ],
        color: "#FF0000DD",
        width: 2,
        dottedLine: true
      }
    ]
    // controls: [
    //   {
    //     id: 1,
    //     iconPath: "../../assets/imgs/icons/map-location-mark.png",
    //     position: {
    //       left: 0,
    //       top: 300 - 50,
    //       width: 50,
    //       height: 50
    //     },
    //     clickable: true
    //   }
    // ]
  },
  regionchange(e) {
    console.log(e.type);
  },
  markertap(e) {
    console.log(e.markerId);
  },
  controltap(e) {
    console.log(e.controlId);
  }
});
