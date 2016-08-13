var React = require('react');

var SideListItem = React.createClass({
    render: function(){
        var listItemHeading = {
            height: 70,
            backgroundColor: this.props.color,
            color: 'white'
        };

        var listItemP = {
            margin: 0
        };

        var listItemH3 = {
            fontWeight: 'bold',
            margin: 0
        };

        var listItemBody = {
            height: 60
        };

        return (
            <li className="panel panel-default">
                <div style={listItemHeading} className="panel-heading">
                    <p style={listItemP}>{this.props.title}</p>
                    <h3 style={listItemH3}>{this.props.stat}</h3>
                </div>
                <div style={listItemBody} className="panel-body">
                </div>
            </li>
        );
    }
});

module.exports = SideListItem;
