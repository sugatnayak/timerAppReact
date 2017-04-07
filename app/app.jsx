var React = require('react');var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Timer=require('Timer');var Countdown=require('Countdown');var CurrentTime=require('CurrentTime');require('style!css!foundation-sites/dist/css/foundation.min.css')$(document).foundation();require('style!css!sass!applicationStyles')ReactDOM.render(  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    <Route path="countdown" component={Countdown}/>
    <Route path="currenttime" component={CurrentTime}/>
    <IndexRoute component={Timer}/>
    </Route>
  </Router>,
  document.getElementById('app'));