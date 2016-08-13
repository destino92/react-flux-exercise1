var React = require('react');
var MainCardListItem = require('./MainCardListItem.jsx');

var MainCard = React.createClass({

    render: function(){
        var panelBodyStyle = {
            height: '80px',
            backgroundColor: '#34495E',
            color: 'white',
            padding: 20,
            textAlign: 'center'
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
                        <MainCardListItem statistique="15080" description="Shot Views"/>
                        <MainCardListItem statistique="12000" description="Likes"/>
                        <MainCardListItem statistique="5100" description="Comments" />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = MainCard;
