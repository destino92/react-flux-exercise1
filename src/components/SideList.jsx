var React = require('react');
var SideListItem = require('./SideListItem.jsx');

var SideList = React.createClass({
    render: function() {
        var listStyle = {
            listStyle: 'none'
        };

        return (
            <ul style={listStyle} className="col-sm-4">
                <SideListItem key="1" title="New visitors" stat="1.5K" color="#22A7F0" />
                <SideListItem key="2" title="Bounce Rate" stat="50%" color="#9B59B6" />
                <SideListItem key="3" title="Searchs" stat="28%" color="#F22613" />
                <SideListItem key="4" title="Traffic" stat="140.5 kb" color="#2ECC71" />
            </ul>
        );
    }
});

module.exports = SideList;
