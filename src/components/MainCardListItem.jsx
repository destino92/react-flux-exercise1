var React = require('react');

var MainCardListItem = React.createClass({

    render: function(){
        var h3Style = {
            marginTop: 0,
            marginBottom: 0
        };

        var pStyle = {
            color: 'silver',
            marginBottom: 0
        };
        return (
            <div className="col-xs-4 col-sm-4">
                <h3 style={h3Style}>{this.props.statistique}</h3>
                <p style={pStyle}>{this.props.description}</p>
            </div>
        );
    }
});

module.exports = MainCardListItem;
