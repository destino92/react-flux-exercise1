var React = require('react');

var WhiteCard = React.createClass({
    render: function(){
        var divStyle = {
            fontWeight: 'light',
            paddingTop: 30,
            paddingRight: 30,
            paddingBottom: 30,
            paddingLeft: 10
        };

        var titleStyle = {
            fontWeight: 'bold',
            color: '#34495E'
        };

        var pStyle = {
            color: 'silver'
        };

        return (
            <div className="col-sm-4">
                <div style={divStyle} className="panel panel-default">
                    <h3 style={titleStyle}>{this.props.title}</h3>
                    <p style={pStyle}>{this.props.description}</p>
                </div>
            </div>
        );
    }
});

module.exports = WhiteCard;
