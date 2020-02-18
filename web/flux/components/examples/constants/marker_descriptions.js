/*
 * marker visual parameters
 * image param is more prior than imageClass if both defined
 */

const markerDescriptions = [
  {
    size: {width: 80, height: 60},
    origin: {x: 1 / 80, y: 1},
    withText: true,
    // image: require('icons/map_icons/map_icon_text_blue.svg')
    imageClass: 'map_icon_text_blue'
  },
  {
    size: {width: 80, height: 60},
    origin: {x: 1 / 80, y: 1},
    withText: true,
    // image: require('icons/map_icons/map_icon_text_orange.svg')
    imageClass: 'map_icon_text_orange'
  },
  {
    size: {width: 80, height: 60},
    origin: {x: 1 / 80, y: 1},
    withText: true,
    // image: require('icons/map_icons/map_icon_text_red.svg')
    imageClass: 'map_icon_text_red'
  },
  {
    size: {width: 80, height: 60},
    origin: {x: 1 / 80, y: 1},
    withText: true,
    // image: require('icons/map_icons/map_icon_text_grey.svg')
    imageClass: 'map_icon_text_grey'
  }
];

export default markerDescriptions;
