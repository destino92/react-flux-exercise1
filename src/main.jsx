var React = require('react');
var ReactDOM = require('react-dom');
var WhiteCard = require('./components/WhiteCard.jsx');
var MainCard = require('./components/MainCard.jsx');
var SideList = require('./components/SideList.jsx');

ReactDOM.render(<WhiteCard title="20" description="New followers added this month" />, document.getElementById('new-followers'));
ReactDOM.render(<WhiteCard title="$ 1250" description="Average Monthly Income" />, document.getElementById('monthly-income'));
ReactDOM.render(<WhiteCard title="$ 13865" description="Yearly Income Goal" />, document.getElementById('yearly-income'));
ReactDOM.render(<MainCard backgroundColor="#22A7F0" />, document.getElementById('main-content1'));
ReactDOM.render(<MainCard backgroundColor="#BF55EC" />, document.getElementById('main-content2'));
ReactDOM.render(<SideList />, document.getElementById('aside'));
