var React = require('react');
var MainCardList = require('./MainCardList.jsx');

var MainCard = React.createClass({

    render: function(){
        var panelBodyStyle = {
            height: '60px',
            backgroundColor: '#34495E',
            color: 'white'
        };

        var panelHeadingStyle = {
            height: '160px',
            backgroundColor: this.props.backgroundColor
        };

        return (
            <div className="col-sm-12">
                <div className="panel panel-default">
                    <div style={panelHeadingStyle} className="panel-heading">
                    </div>
                    <div style={panelBodyStyle} className="panel-body">
                        
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = MainCard;
