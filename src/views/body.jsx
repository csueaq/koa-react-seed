var React = require('react');

module.exports = React.createClass({displayName: 'body',
    render: function() {
        return (
            <body>
                <h1>
                    Welcome to Page 1 , my name is {this.props.date}
                </h1>
                <script src="/js/bundle.js"/>
            </body>
        );
    }
});