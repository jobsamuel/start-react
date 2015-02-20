var React = require('react')
,	mui = require('material-ui')
,	Message = require('./message')
,	RaisedButton = mui.RaisedButton;

var Start = React.createClass({
	msg: function() {
		alert("Hack this template!");
	},
	render: function() {
		return (
			<div className="start-react">
				<Message />
				<RaisedButton label="How?" primary={true} onClick={this.msg}/>
			</div>
		)
	}
});

React.render(
	<Start />, 
	document.getElementById('content')
);