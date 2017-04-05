var React = require('react');
var {Link} = require('react-router');
var Clock = require('Clock');
var Countdownform = require('Countdownform');

var Countdown = React.createClass({

  getInitialState: function(){
    return {count: 0};
  },
  handleSetCountdown: function(seconds){
    this.setState({
      count: seconds
    });
  },

  render: function(){
    var {count} = this.state;
    return(
      <div>
      <Clock totalSeconds={count}/>
      <Countdownform onSetCountdown={this.handleSetCountdown}/>
      </div>
    );
  }});

module.exports = Countdown;
