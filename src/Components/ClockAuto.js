import React from 'react'
class ClockAuto extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.timerID);
      alert('Top The Time')
    }
    tick() {
      this.setState({
        date: new Date()
      });
      console.log(this.state.date)
    }
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>

      );
    }
}

export default ClockAuto