var React = require('react');
var ReactDOM = require('react-dom');
var WhiteCard = require('./components/WhiteCard.jsx');

ReactDOM.render(<WhiteCard title="20" description="New followers added this month" />, document.getElementById('new-followers'));
ReactDOM.render(<WhiteCard title="$ 1250" description="Average Monthly Income" />, document.getElementById('monthly-income'));
ReactDOM.render(<WhiteCard title="$ 13865" description="Yearly Income Goal" />, document.getElementById('yearly-income'));
