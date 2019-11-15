import React from 'react/addons';
import cx from 'classnames';

import img_is64 from 'components/examples/data/route_images/IS-64.png'
import img_is66 from 'components/examples/data/route_images/IS-66.png'
import img_is77 from 'components/examples/data/route_images/IS-77.png'
import img_is81 from 'components/examples/data/route_images/IS-81.png'
import img_is85 from 'components/examples/data/route_images/IS-85.png'
import img_is95 from 'components/examples/data/route_images/IS-95.png'
import img_is195 from 'components/examples/data/route_images/IS-195.png'
import img_is264 from 'components/examples/data/route_images/IS-264.png'
import img_is295 from 'components/examples/data/route_images/IS-295.png'
import img_is381 from 'components/examples/data/route_images/IS-381.png'
import img_is395 from 'components/examples/data/route_images/IS-395.png'
import img_is464 from 'components/examples/data/route_images/IS-464.png'
import img_is495 from 'components/examples/data/route_images/IS-495.png'
import img_is564 from 'components/examples/data/route_images/IS-564.png'
import img_is581 from 'components/examples/data/route_images/IS-581.png'
import img_is664 from 'components/examples/data/route_images/IS-664.png'
import img_sr6 from 'components/examples/data/route_images/SR 6.png'
import img_sr7 from 'components/examples/data/route_images/SR 7.png'
import img_sr8 from 'components/examples/data/route_images/SR 8.png'
import img_sr10 from 'components/examples/data/route_images/SR 10.png'
import img_sr20 from 'components/examples/data/route_images/SR 20.png'
import img_sr28 from 'components/examples/data/route_images/SR 28.png'
import img_sr30 from 'components/examples/data/route_images/SR 30.png'
import img_sr36 from 'components/examples/data/route_images/SR 36.png'
import img_sr37 from 'components/examples/data/route_images/SR 37.png'
import img_sr40 from 'components/examples/data/route_images/SR 40.png'
import img_sr42 from 'components/examples/data/route_images/SR 42.png'
import img_sr45 from 'components/examples/data/route_images/SR 45.png'
import img_sr55 from 'components/examples/data/route_images/SR 55.png'
import img_sr73 from 'components/examples/data/route_images/SR 73.png'
import img_sr76 from 'components/examples/data/route_images/SR 76.png'
import img_sr100 from 'components/examples/data/route_images/SR 100.png'
import img_sr105 from 'components/examples/data/route_images/SR 105.png'
import img_sr117 from 'components/examples/data/route_images/SR 117.png'
import img_sr118 from 'components/examples/data/route_images/SR 118.png'
import img_sr120 from 'components/examples/data/route_images/SR 120.png'
import img_sr122 from 'components/examples/data/route_images/SR 122.png'
import img_sr123 from 'components/examples/data/route_images/SR 123.png'
import img_sr143 from 'components/examples/data/route_images/SR 143.png'
import img_sr144 from 'components/examples/data/route_images/SR 144.png'
import img_sr150 from 'components/examples/data/route_images/SR 150.png'
import img_sr161 from 'components/examples/data/route_images/SR 161.png'
import img_sr164 from 'components/examples/data/route_images/SR 164.png'
import img_sr166 from 'components/examples/data/route_images/SR 166.png'
import img_sr168 from 'components/examples/data/route_images/SR 168.png'
import img_sr173 from 'components/examples/data/route_images/SR 173.png'
import img_sr175 from 'components/examples/data/route_images/SR 175.png'
import img_sr195 from 'components/examples/data/route_images/SR 195.png'
import img_sr199 from 'components/examples/data/route_images/SR 199.png'
import img_sr207 from 'components/examples/data/route_images/SR 207.png'
import img_sr225 from 'components/examples/data/route_images/SR 225.png'
import img_sr234 from 'components/examples/data/route_images/SR 234.png'
import img_sr236 from 'components/examples/data/route_images/SR 236.png'
import img_sr238 from 'components/examples/data/route_images/SR 238.png'
import img_sr256 from 'components/examples/data/route_images/SR 256.png'
import img_sr257 from 'components/examples/data/route_images/SR 257.png'
import img_sr263 from 'components/examples/data/route_images/SR 263.png'
import img_sr286 from 'components/examples/data/route_images/SR 286.png'
import img_sr288 from 'components/examples/data/route_images/SR 288.png'
import img_sr289 from 'components/examples/data/route_images/SR 289.png'
import img_sr294 from 'components/examples/data/route_images/SR 294.png'
import img_sr307 from 'components/examples/data/route_images/SR 307.png'
import img_sr337 from 'components/examples/data/route_images/SR 337.png'
import img_sr406 from 'components/examples/data/route_images/SR 406.png'
import img_sr419 from 'components/examples/data/route_images/SR 419.png'
import img_sr895 from 'components/examples/data/route_images/SR 895.png'
import img_us1 from 'components/examples/data/route_images/US 1.png'
import img_us11 from 'components/examples/data/route_images/US 11.png'
import img_us13 from 'components/examples/data/route_images/US 13.png'
import img_us15 from 'components/examples/data/route_images/US 15.png'
import img_us17 from 'components/examples/data/route_images/US 17.png'
import img_us19 from 'components/examples/data/route_images/US 19.png'
import img_us21 from 'components/examples/data/route_images/US 21.png'
import img_us23 from 'components/examples/data/route_images/US 23.png'
import img_us29 from 'components/examples/data/route_images/US 29.png'
import img_us33 from 'components/examples/data/route_images/US 33.png'
import img_us50 from 'components/examples/data/route_images/US 50.png'
import img_us58 from 'components/examples/data/route_images/US 58.png'
import img_us60 from 'components/examples/data/route_images/US 60.png'
import img_us220 from 'components/examples/data/route_images/US 220.png'
import img_us221 from 'components/examples/data/route_images/US 221.png'
import img_us250 from 'components/examples/data/route_images/US 250.png'
import img_us258 from 'components/examples/data/route_images/US 258.png'
import img_us301 from 'components/examples/data/route_images/US 301.png'
import img_us340 from 'components/examples/data/route_images/US 340.png'
import img_us360 from 'components/examples/data/route_images/US 360.png'
import img_us460 from 'components/examples/data/route_images/US 460.png'
import img_us501 from 'components/examples/data/route_images/US 501.png'
import img_us522 from 'components/examples/data/route_images/US 522.png'

function getImage(imageName){
  if (imageName==='IS-64') {return img_is64}
  else if (imageName==='IS-66') {return img_is66}
  else if (imageName==='IS-77') {return img_is77}
  else if (imageName==='IS-81') {return img_is81}
  else if (imageName==='IS-85') {return img_is85}
  else if (imageName==='IS-95') {return img_is95}
  else if (imageName==='IS-195') {return img_is195}
  else if (imageName==='IS-264') {return img_is264}
  else if (imageName==='IS-295') {return img_is295}
  else if (imageName==='IS-381') {return img_is381}
  else if (imageName==='IS-395') {return img_is395}
  else if (imageName==='IS-464') {return img_is464}
  else if (imageName==='IS-495') {return img_is495}
  else if (imageName==='IS-564') {return img_is564}
  else if (imageName==='IS-581') {return img_is581}
  else if (imageName==='IS-664') {return img_is664}
  else if (imageName==='SR 6') {return img_sr6}
  else if (imageName==='SR 7') {return img_sr7}
  else if (imageName==='SR 8') {return img_sr8}
  else if (imageName==='SR 10') {return img_sr10}
  else if (imageName==='SR 20') {return img_sr20}
  else if (imageName==='SR 28') {return img_sr28}
  else if (imageName==='SR 30') {return img_sr30}
  else if (imageName==='SR 36') {return img_sr36}
  else if (imageName==='SR 37') {return img_sr37}
  else if (imageName==='SR 40') {return img_sr40}
  else if (imageName==='SR 42') {return img_sr42}
  else if (imageName==='SR 45') {return img_sr45}
  else if (imageName==='SR 55') {return img_sr55}
  else if (imageName==='SR 73') {return img_sr73}
  else if (imageName==='SR 76') {return img_sr76}
  else if (imageName==='SR 100') {return img_sr100}
  else if (imageName==='SR 105') {return img_sr105}
  else if (imageName==='SR 117') {return img_sr117}
  else if (imageName==='SR 118') {return img_sr118}
  else if (imageName==='SR 120') {return img_sr120}
  else if (imageName==='SR 122') {return img_sr122}
  else if (imageName==='SR 123') {return img_sr123}
  else if (imageName==='SR 143') {return img_sr143}
  else if (imageName==='SR 144') {return img_sr144}
  else if (imageName==='SR 150') {return img_sr150}
  else if (imageName==='SR 161') {return img_sr161}
  else if (imageName==='SR 164') {return img_sr164}
  else if (imageName==='SR 166') {return img_sr166}
  else if (imageName==='SR 168') {return img_sr168}
  else if (imageName==='SR 173') {return img_sr173}
  else if (imageName==='SR 175') {return img_sr175}
  else if (imageName==='SR 195') {return img_sr195}
  else if (imageName==='SR 199') {return img_sr199}
  else if (imageName==='SR 207') {return img_sr207}
  else if (imageName==='SR 225') {return img_sr225}
  else if (imageName==='SR 234') {return img_sr234}
  else if (imageName==='SR 236') {return img_sr236}
  else if (imageName==='SR 238') {return img_sr238}
  else if (imageName==='SR 256') {return img_sr256}
  else if (imageName==='SR 257') {return img_sr257}
  else if (imageName==='SR 263') {return img_sr263}
  else if (imageName==='SR 286') {return img_sr286}
  else if (imageName==='SR 288') {return img_sr288}
  else if (imageName==='SR 289') {return img_sr289}
  else if (imageName==='SR 294') {return img_sr294}
  else if (imageName==='SR 307') {return img_sr307}
  else if (imageName==='SR 337') {return img_sr337}
  else if (imageName==='SR 406') {return img_sr406}
  else if (imageName==='SR 419') {return img_sr419}
  else if (imageName==='SR 895') {return img_sr895}
  else if (imageName==='US 1') {return img_us1}
  else if (imageName==='US 11') {return img_us11}
  else if (imageName==='US 13') {return img_us13}
  else if (imageName==='US 15') {return img_us15}
  else if (imageName==='US 17') {return img_us17}
  else if (imageName==='US 19') {return img_us19}
  else if (imageName==='US 21') {return img_us21}
  else if (imageName==='US 23') {return img_us23}
  else if (imageName==='US 29') {return img_us29}
  else if (imageName==='US 33') {return img_us33}
  else if (imageName==='US 50') {return img_us50}
  else if (imageName==='US 58') {return img_us58}
  else if (imageName==='US 60') {return img_us60}
  else if (imageName==='US 220') {return img_us220}
  else if (imageName==='US 221') {return img_us221}
  else if (imageName==='US 250') {return img_us250}
  else if (imageName==='US 258') {return img_us258}
  else if (imageName==='US 301') {return img_us301}
  else if (imageName==='US 340') {return img_us340}
  else if (imageName==='US 360') {return img_us360}
  else if (imageName==='US 460') {return img_us460}
  else if (imageName==='US 501') {return img_us501}
  else if (imageName==='US 522') {return img_us522}
  else {return null}
}

const K_ROW_HEIGHT = 105;
const K_HEADER_HEIGHT = 165;
const K_MINI_HEADER_HEIGHT = 40;

export {K_ROW_HEIGHT, K_HEADER_HEIGHT, K_MINI_HEADER_HEIGHT};

const K_STYLE_IMAGE = {
  width: K_ROW_HEIGHT * 4 / 3,
  height: K_ROW_HEIGHT,
  borderLeft: '1px solid white'
};

const K_KEY_COLUMN_RANK = 'K_KEY_COLUMN_RANK';
const K_KEY_COLUMN_DESCRIPTION = 'K_KEY_COLUMN_DESCRIPTION';
const K_KEY_COLUMN_PHONE = 'K_KEY_COLUMN_PHONE';

const K_ROW_CLASS_NAME_BORDER_LINE = 'ice-table ice-table--line';
const K_ROW_CLASS_NAME_EVEN = 'ice-table ice-table--row-even';
const K_ROW_CLASS_NAME_ODD = 'ice-table ice-table--row-odd';

const K_ROW_CLASS_NAME_EVEN_HOVERED = 'ice-table ice-table--row-even ice-table--row-hovered';
const K_ROW_CLASS_NAME_ODD_HOVERED = 'ice-table ice-table--row-odd ice-table--row-hovered';

const K_SHOW_FILTERS_TEXT = 'Show filters';


// DATA DEFINITION
const columns = [
  {
    dataKey: K_KEY_COLUMN_RANK,
    fixed: false,
    flexGrow: 1,
    label: '',
    width: 105
  },
  {
    dataKey: K_KEY_COLUMN_DESCRIPTION,
    // bugs in fixed-data-table flex realization use fixed size to precise calculus
    flexGrow: 9999999999,
    fixed: false,
    label: '',
    width: 100
  },
  {
    dataKey: K_KEY_COLUMN_PHONE,
    flexGrow: 1,
    fixed: false,
    label: '',
    width: 140
  }
];

export {columns};

export function renderHeader(resetFn) {
  return (
    <div className="ice-table-header">
      <div className="ice-table-header__filter-line-header">BEST FILTERS EVER (empty)</div>
      <div className="ice-table-header__filter-line">
        <hr />
      </div>
      <div className="ice-table-header__filter-line">
        <hr />
      </div>
      <div className="ice-table-header__filter-line">
        <hr />
      </div>
      <div className="ice-table-header__filter-line">
        <hr />
      </div>
      <div className="ice-table-header__show-filters">
        <a
          className="ice-table-header__show-filters-href ice-table-header__show-filters-href--disabled"
          onClick={resetFn}>
          {K_SHOW_FILTERS_TEXT}
        </a>
      </div>
    </div>
  );
}

export function renderMiniHeader(resetFn) {
  return (
    <div className="ice-table-header">
      <div className="ice-table-header__show-filters">
        <a
          className="ice-table-header__show-filters-href"
          onClick={resetFn}>
            {K_SHOW_FILTERS_TEXT}
          </a>
      </div>
    </div>
  );
}


function renderColumn0(cellDataKey, rowData /*, rowIndex*/) {
  return (
    <div className="ice-table__column0">
      <div className={cx('ice-table__column0-number', 'ice-table__column0-number__color' + rowData.get('type'))}>{rowData.get('number')}</div>
    </div>
  );
}

function renderColumn1(cellDataKey, rowData /*, rowIndex*/) {
  return (
    <div className="ice-table__column1">
      <div className="ice-table__column1-title">
        {rowData.get('title')}
      </div>
      <div className="ice-table__column1-address">
        {rowData.get('address')}
      </div>
    </div>
  );
}

function renderColumn2(cellDataKey, rowData /*, rowIndex*/) {
  // image load hack (just put in array with key eq to src (c) istarkov :-))
  return (
    <div className="ice-table__column2">
      {[<img key={rowData.get('image')} src={getImage(rowData.get('image'))} style={K_STYLE_IMAGE} />]}
    </div>
  );
}

export function getRowClassNameAt(i, isHovered, isFirstInvisibleRow) {
  const borderTopClass = isFirstInvisibleRow ? K_ROW_CLASS_NAME_BORDER_LINE : '';

  if (isHovered) {
    return borderTopClass + ' ' + (i % 2 === 0 ? K_ROW_CLASS_NAME_EVEN_HOVERED : K_ROW_CLASS_NAME_ODD_HOVERED);
  }

  return borderTopClass + ' ' + (i % 2 === 0 ? K_ROW_CLASS_NAME_EVEN : K_ROW_CLASS_NAME_ODD);
}

export function cellRenderer(cellDataKey, rowData, rowIndex) {
  switch (cellDataKey) {
    case K_KEY_COLUMN_RANK:
      return renderColumn0(cellDataKey, rowData, rowIndex);
    case K_KEY_COLUMN_DESCRIPTION:
      return renderColumn1(cellDataKey, rowData, rowIndex);
    case K_KEY_COLUMN_PHONE:
      return renderColumn2(cellDataKey, rowData, rowIndex);
    default:
      return (
        <div>{rowData ? 'Hello world!' : ''}</div>
      );
  }
}

