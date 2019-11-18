import React, {PropTypes, Component} from 'react/addons';
import shouldPureComponentUpdate from 'react-pure-render/function';
import cx from 'classnames';

import Link from 'components/link.jsx';

const styleHidden = {
  visibility: 'hidden'
};

const styleEmpty = {
};

export default class Header extends Component {
  static propTypes = {
    className: PropTypes.string, // TODO bad style remove
    example: PropTypes.any.isRequired
  }

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p style={{'text-align':'center','font-family':'Courier New','font-size':'18pt'}}><b>
          Virginia Automatic Incident Detection Platform (Beta)
        </b></p>
      </div>
    );
  }
}
