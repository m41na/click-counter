import React from 'react';
import './App.css';
import AwayView from './containers/AwayView';
import NearView from './containers/NearView';
import Proximity from './containers/Proximity';
import ListFiles from './components/ListFiles';

export default () => {

  return (
    <div className="App">
      <NearView />
      <Proximity />
      <AwayView />
      <br/>
      <ListFiles/>
    </div>
  );
};
