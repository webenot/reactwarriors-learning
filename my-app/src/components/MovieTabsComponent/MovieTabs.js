import classNames from 'classnames';
import React from 'react';

import TabItem from './TabItem';

class MovieTabs extends React.Component {
  constructor() {
    super();
    this.state = {
      sortTabs: [
        {
          title: 'Popularity desc',
          value: 'popularity.desc'
        },
        {
          title: 'Revenue desc',
          value: 'revenue.desc'
        },
        {
          title: 'Vote Average desc',
          value: 'vote_average.desc'
        },
      ],
    };
  }

  handleClick = (value) => () => this.props.selectSortBy(value);

  getClass = (value) => classNames({
    'nav-link': true,
    active: this.props.sort_by === value,
  });

  render() {
    return (
      <ul className="tabs nav nav-pills">
        {this.state.sortTabs.map((tabItem, index) => {
          return (
            <TabItem
              key={`tab-item-${index}`}
              title={tabItem.title}
              handleClick={this.handleClick(tabItem.value)}
              class={this.getClass(tabItem.value)}
            />
          )
        })}
      </ul>
    );
  }
}

export default MovieTabs;
