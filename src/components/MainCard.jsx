var React = require('react');

var MainCard = React.createClass({

    render: function(){
        var panelBodyStyle = {
            height: '60',
            backgroundColor: '#34495E'
        };

        var panelHeadingStyle = {
            height: '160',
            backgroundColor: this.props.backgroundColor
        };

        return (
            <div className="col-sm-12">
                <div className="panel panel-default">
                    <div style={panelHeadingStyle} class="panel-heading">
                    </div>
                    <div style={panelBodyStyle} class="panel-body">
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = MainCard;
