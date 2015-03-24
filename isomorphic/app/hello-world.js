
var React = require('react');

module.exports = React.createClass({
    onClick: function() {
        alert('you clicked on me!');
    },
    render: function() {
        return React.DOM.h1({
            onClick: this.onClick
        }, this.props.text);
    }
});
