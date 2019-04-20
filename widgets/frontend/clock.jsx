import React from 'react';

class Clock extends React.Component {
  constructor(props){
    super(props);

    this.state = {time: new Date()};
    this.days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    this.tick = this.tick.bind(this);
  }

  tick (){
    return () => {this.setState({time: new Date()})};
  }

  componentDidMount(){
    this.interval = setInterval(this.tick(),1000);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render() {
    const currentTime = this.state.time
    return (
      <div className="clock">
        <h1>A Clock</h1>
        <section className="time">
          <div className="time-info">
            <p>Time</p>
            <p>{currentTime.getHours()}:{currentTime.getMinutes()}:{currentTime.getSeconds()}</p>
          </div>
          <div className="time-info">
            <p>Date</p>
            <p>{this.days[currentTime.getDay()]} {this.months[currentTime.getMonth()]} {currentTime.getDate()} {currentTime.getFullYear()}</p>
          </div>
        </section>
      </div>
    );
  }

}

export default Clock;