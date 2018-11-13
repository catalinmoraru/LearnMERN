import React, {Component} from 'react';

import {connect} from 'react-redux';
import {addItem, deleteItem, getItems} from '../actions/itemActions';

import {
	Alert
} from 'reactstrap';

class Gold extends Component {

	render() {
		const gold = this.props.gold;
		const loginSuccessful = this.props.loginSuccessful;

		if (loginSuccessful) {
			return (
				<div>
					<Alert color="warning">
						You have : {this.props.gold} gold
					</Alert>

					<img  src="https://static.businessinsider.com/image/b87a6c794f71da49312c8c00/image.jpg"></img>
				</div>
			);
		}
		else {
			return (<div></div>);
		}
	}
}




const mapStateToProps = state => ({
	gold: state.item.gold,
	loginSuccessful: state.item.loginSuccessful,
});

export default connect(
	mapStateToProps,
	{addItem}
)(Gold);