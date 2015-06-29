var React = require('react');
var BodyComponent = require('./body');
var HeadComponent = require('./head');



module.exports = React.createClass({displayName: 'page',
	render: function() {
		return (
			<html>
				<HeadComponent />
				<BodyComponent date={this.props.date} />
			</html>
		);
	}
});