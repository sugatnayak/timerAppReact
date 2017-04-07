var React = require('react');

var CurrentTime = React.createClass({

    setTime: function(){

    	var currentdate = new Date();
    	var hours = currentdate.getHours();

        // correct for number over 24, and negatives
        if( hours >= 24 ){ hours -= 24; }
        if( hours < 0   ){ hours += 12; }

        // add leading zero, first convert hours to string
        hours = hours + "";
        if( hours.length == 1 ){ hours = "0" + hours; }
    
        // minutes are the same on every time zone
        var minutes = currentdate.getMinutes();

        // add leading zero, first convert hours to string
        minutes = minutes + "";
        if( minutes.length == 1 ){ minutes = "0" + minutes; }

        var seconds = currentdate.getSeconds();

        this.setState({
        	hours: hours,
          minutes: minutes,
          seconds: seconds
        });
    },
    componentWillMount: function(){
    	this.setTime();
    },
    componentDidMount: function(){
    	 window.setInterval(function () {
        this.setTime();
      }.bind(this), 1000);
    },

    render: function() {

      return(

        <div className="CurrentTime">
        <span className="current-time">{this.state.hours}:{this.state.minutes}:{this.state.seconds}</span>
        </div>
      );
    }
  });


module.exports = CurrentTime;
