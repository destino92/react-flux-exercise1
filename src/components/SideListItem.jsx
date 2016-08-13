var React = require('react');

var SideListItem = React.createClass({
    render: function(){
        return (
            <li className="col-sm-4 panel panel-default">
                <div style={panelHeadingStyle} className="panel-heading">
                    <p>{this.props.title}</p>
                    <h3>{this.props.stat}</h3>
                </div>
                <div style={panelBodyStyle} className="panel-body">
                </div>
            </li>
        );
    }
});

module.exports = SideListItem;
