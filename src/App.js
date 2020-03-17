import React from 'react';

import './App.css';
import TopMenu from './components/top-menu/top-menu.component';
import SortVisualizer from './components/visualizer/visualizer.component';
import ControlBar from './components/control-bar/control-bar.component';

function App() {
  return (
    <div className="App">
        <TopMenu/>
        <SortVisualizer/>
        <ControlBar/>
    </div>
  );
}

export default App;
