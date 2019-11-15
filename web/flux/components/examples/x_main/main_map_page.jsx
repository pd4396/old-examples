import React, {PropTypes, Component} from 'react/addons';
import shouldPureComponentUpdate from 'react-pure-render/function';

import MainMapLayout from './main_map_layout.jsx';
import IceTable from 'components/controls/fixed_table_examples/ice_table.jsx';
import MainMapBlock from './main_map_block.jsx';

import { Connector } from 'redux/react';
import { bindActionCreators } from 'redux';

import * as allMapActions from 'actions/map_actions.js';

import immutable from 'immutable';
import VirginiaMarkers_json from 'components/examples/data/VirginiaMarkers.json';

const VirginiaMarkers = immutable.fromJS(VirginiaMarkers_json);


// slice actions to support map and table interfaces
const mapActions = (({ changeBounds: onBoundsChange, markerHoverIndexChange: onMarkerHover, showBallon: onChildClick}) => ({
    onBoundsChange, onMarkerHover, onChildClick
}))(allMapActions);


const tableActions = (({ tableHoveredRowIndexChange: onHoveredRowIndexChange, tableVisibleRowsChange: onVisibleRowsChange, showBallon: onRowClick}) => ({
    onHoveredRowIndexChange, onVisibleRowsChange, onRowClick
}))(allMapActions);


export default class MainMapPage extends Component {
  static propTypes = {
    layout: PropTypes.string
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }

  _renderMap() {
    return (
      <Connector select={state => ({
          center: new immutable.List([38.0, -79.0]),
          zoom: 8,
          markers: VirginiaMarkers,
          visibleRowFirst: state.map.get('tableRowsInfo').get('visibleRowFirst'),
          visibleRowLast: state.map.get('tableRowsInfo').get('visibleRowLast'),
          maxVisibleRows: state.map.get('tableRowsInfo').get('maxVisibleRows'),
          hoveredRowIndex: state.map.get('tableRowsInfo').get('hoveredRowIndex'),
          openBallonIndex: state.map.get('openBalloonIndex')
        })}>
        {({dispatch, ...mapProps}) => (<MainMapBlock {...mapProps} {...bindActionCreators(mapActions, dispatch)} />)}
      </Connector>
    );
  }

  _renderTable() {
    return (
      <Connector select={state => ({
          markers: VirginiaMarkers,
          hoveredMapRowIndex: state.map.get('hoverMarkerIndex'),
          resetToStartObj: state.map.get('mapInfo')
        })}>
        {({dispatch, ...tableProps}) => (<IceTable {...tableProps} {...bindActionCreators(tableActions, dispatch)} />)}
      </Connector>
    );
  }

  render() {
    return (
      <MainMapLayout layout={this.props.layout} renderMap={this._renderMap} renderTable={this._renderTable} />
    );
  }
}
