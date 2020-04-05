import React from 'react';

class TabItem extends React.Component {

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextProps.class !== this.props.class;
  }

  render() {
    return (
      <li className="nav-item">
        <div
          className={this.props.class}
          onClick={this.props.handleClick}
        >
          {this.props.title}
        </div>
      </li>
    );
  }
}

export default TabItem;
