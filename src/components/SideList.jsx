var React = require('react');
var SideListItem = require('./SideListItem.jsx');

var SideList = React.createClass({
    render: function() {
        return (
            <ul>
                <SideListItem key="1" title="New visitors" stat="1.5K" />
                <SideListItem key="2" title="Bounce Rate" stat="50%" />
                <SideListItem key="3" title="Searchs" stat="28%" />
                <SideListItem key="4" title="Traffic" stat="140.5 kb" />
            </ul>
        );
    }
});

module.exports = SideList;
