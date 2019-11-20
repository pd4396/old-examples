import React, {PropTypes, Component} from 'react/addons';
import shouldPureComponentUpdate from 'react-pure-render/function';
import cx from 'classnames';

export default class Footer extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{'text-align':'left','margin-left':'4pt','font-family':'Courier New'}}>
        <a href={'https://transportation.seas.gwu.edu'} target={"_blank"}>About Us</a>
      </div>
    );
  }
}
