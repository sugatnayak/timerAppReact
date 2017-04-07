var React = require('react');
var {Link} = require('react-router');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({



  getInitialState: function(){
    return {
      count: 0,
      timerStatus: 'stopped'
    };
  },

  componentDidUpdate: function(prevProps, prevState){
    if(this.state.timerStatus!== prevState.timerStatus){
      switch(this.state.timerStatus){
        case 'started':
          this.handleStart();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },

  componentWillUnmount: function(){
    clearInterval(this.timer);
    this.timer = undefined;
  },

  handleStart: function(){
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    },1000);
  },
  handleSetCountdown: function(seconds){
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },

  handleStatusChange: function(newStatus){
    this.setState({countdownStatus: newStatus});
  },

  handleStatusChange: function(newTimerStatus){
    this.setState({timerStatus: newTimerStatus});
  },

  render: function(){
    var {count, timerStatus} = this.state;
    return(
      <div>
        
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    );
  }});

module.exports = Timer;
