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
					<span className="col-md-6">
					<Alert color="warning">
						{/*<img  src="https://i.pinimg.com/474x/c4/ac/e9/c4ace97a0a140586a3eacee6dd2bd247.jpg"></img>*/}
						<img  src="https://2images.cgames.de/images/gamestar/204/witcher-3-daumen-hoch_2792771.jpg"></img>
						<h2> You have : {this.props.gold} gold </h2>
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