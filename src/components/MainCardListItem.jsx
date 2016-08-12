var React = require('react');

var MainCardListItem = React.createClass({
    render: function(){
        return (
            <li>
                <h3>{this.props.statistique}</h3>
                <p>{this.props.description}</p>
            </li>
        );
    }
});

module.exports =
