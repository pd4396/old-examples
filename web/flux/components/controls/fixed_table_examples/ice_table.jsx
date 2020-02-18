import React, {PropTypes, Component} from 'react/addons';
import shouldPureComponentUpdate from 'react-pure-render/function';

import IceTableInt from './ice_table_int.jsx';

// TODO pass in props in future versions
import {columns, cellRenderer, getRowClassNameAt, renderHeader, renderMiniHeader,
        K_ROW_HEIGHT, K_HEADER_HEIGHT, K_MINI_HEADER_HEIGHT} from './ice_table_renderer.js';

const K_MIN_DEFAULT_ROWS_SIZE = 0;

export default class IceTable extends Component {
  static propTypes = {
    markers: PropTypes.any,
    hoveredRowIndex: PropTypes.number,
    hoveredMapRowIndex: PropTypes.number,
    firstInvisibleRowIndex: PropTypes.number,
    onHoveredRowIndexChange: PropTypes.func, // generated by @controllable
    onVisibleRowsChange: PropTypes.func,
    onRowClick: PropTypes.func,
    resetToStartObj: PropTypes.any
  };

  static defaultProps = {
    hoveredRowIndex: -1,
    hoveredMapRowIndex: -1,
    firstInvisibleRowIndex: -1,
    resetToStartObj: {}
  };


  constructor(props) {
    super(props);
    this.columnDefs = columns;
  }

  _cellRenderer = (cellDataKey, rowData, rowIndex) => {
    return cellRenderer(cellDataKey, rowData, rowIndex);
  }

  _getRowObjectAt = (i) => {
    return this.props.markers && this.props.markers.get(i);
  }

  _getRowClassNameAt = (i, isHovered) => {
    return getRowClassNameAt(i, isHovered || i === this.props.hoveredMapRowIndex, i === this.props.firstInvisibleRowIndex);
  }

  _renderHeader = (resetFn) => {
    return renderHeader(resetFn);
  }

  _renderMiniHeader = (resetFn) => {
    return renderMiniHeader(resetFn);
  }

  _onHoveredRowIndexChange = (index) => {
    if (this.props.onHoveredRowIndexChange) {
      this.props.onHoveredRowIndexChange(index);
    }
  }

  _onVisibleRowsChange = ({visibleRowFirst, visibleRowLast, maxVisibleRows}) => {
    if (this.props.onVisibleRowsChange) {
      this.props.onVisibleRowsChange({visibleRowFirst, visibleRowLast, maxVisibleRows});
    }
  }

  _onRowClick = (index /*, rowData */) => {
    if (this.props.onRowClick) {
      this.props.onRowClick(index);
    }
  }

  render() {
    return (
      <IceTableInt
        columnDefs={this.columnDefs}
        cellRenderer={this._cellRenderer}
        getRowObjectAt={this._getRowObjectAt}
        getRowClassNameAt={this._getRowClassNameAt}
        renderHeader={this._renderHeader}
        renderMiniHeader={this._renderMiniHeader}
        rowsCount={this.props.markers && this.props.markers.size || K_MIN_DEFAULT_ROWS_SIZE}
        headerHeight={K_HEADER_HEIGHT}
        miniHeaderHeight={K_MINI_HEADER_HEIGHT}
        rowHeight={K_ROW_HEIGHT}
        onVisibleRowsChange={this._onVisibleRowsChange}
        onHoveredRowIndexChange={this._onHoveredRowIndexChange}
        onRowClick={this._onRowClick}
        resetToStartObj={this.props.resetToStartObj}
        />
    );
  }
}
