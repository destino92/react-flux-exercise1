var React = require('react');

var MainCardListItem = React.createClass({

    render: function(){
        var h3Style = {
            margin: '0'
        };

        var pStyle = {
            margin: '0'
        };
        return (
            <div className="col-sm-4">
                <h3 className="h3Style">{this.props.statistique}</h3>
                <p className="pStyle">{this.props.description}</p>
            </div>
        );
    }
});

module.exports = MainCardListItem;
