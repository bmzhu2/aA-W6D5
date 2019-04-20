import Clock from './clock.jsx';
import Tabs from './tabs.jsx';
import React from 'react';


class Root extends React.Component{
  render(){
    return (
      <div className="main">
        <div className="clock-and-weather">
         <Clock></Clock>
        </div>
        <div className="tabs-and-auto">
          <Tabs tabItems = {[{title: "one",content: "I am the first"},
                            {title: "two",content: "Second Pane Here"},
                            {title: "three",content: "Third Pane here"}]}>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default Root;