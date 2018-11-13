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
				<div >
					<span className="col-md-4">
					<Alert color="warning">
						You have : {this.props.gold} gold
						<img  src="https://i.imgur.com/ux6Apdn.png"></img>
					</Alert>

					</span>
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