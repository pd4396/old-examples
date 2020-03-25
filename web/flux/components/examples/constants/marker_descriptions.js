/*
 * marker visual parameters
 * image param is more prior than imageClass if both defined
 */

const markerDescriptions = [
  {
    size: {width: 40, height: 43},
    origin: {x: 1 / 2, y: 1},
    withText: true,
    // image: require('icons/map_icons/map_icon_interstate')
    imageClass: 'map_icon_interstate'
  },
  {
    size: {width: 40, height: 39},
    origin: {x: 1 / 2, y: 1},
    withText: true,
    // image: require('icons/map_icons/map_icon_usroute.svg')
    imageClass: 'map_icon_usroute'
  },
  {
    size: {width: 40, height: 44},
    origin: {x: 1 / 2, y: 1},
    withText: true,
    // image: require('icons/map_icons/map_icon_stateroute.svg')
    imageClass: 'map_icon_stateroute'
  },
  {
    size: {width: 40, height: 44},
    origin: {x: 1 / 2, y: 1},
    withText: true,
    // image: require('icons/map_icons/map_icon_others.svg')
    imageClass: 'map_icon_others'
  }
];

export default markerDescriptions;
