var React = require('react');

var SideListItem = React.createClass({
    render: function(){
        return (
            <li className="col-sm-4 panel panel-default">
                <div className="panel-heading">
                    <p>{this.props.title}</p>
                    <h3>{this.props.stat}</h3>
                </div>
                <div className="panel-body">
                </div>
            </li>
        );
    }
});

module.exports = SideListItem;
