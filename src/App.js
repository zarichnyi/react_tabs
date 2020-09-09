import React from 'react';
import './App.css';

import Tabs from './components/Tabs';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    title: 'Tab 1',
    content: 'Some text 1',
  },
  {
    title: 'Tab 2',
    content: 'Some text 2',
  },
  {
    title: 'Tab 3',
    content: 'Some text 3',
  },
];

class App extends React.Component {
  state = {
    activeTabIndex: 0,
  }

  changeTabIndex = (index) => {
    this.setState({ activeTabIndex: index });
  }

  render() {
    return (
      (
        <>
          <h1>React tabs</h1>
          <Tabs
            tabs={tabs}
            changeTabIndex={this.changeTabIndex}
            activeIndex={this.state.activeTabIndex}
          />
        </>
      )
    );
  }
}

export default App;
