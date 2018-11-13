import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getRewards, deleteReward } from '../actions/rewardActions';
import PropTypes from 'prop-types';
import {loginSucessful} from "./LoginForm";

class ShoppingRewardList extends Component {
	componentDidMount() {
		this.props.getRewards();
	}


	onDeleteClick = id => {
		this.props.deleteReward(id);
	};

	render() {
		const {rewards} = this.props.reward;
		const loginSuccessful = this.props.loginSuccessful;
		// alert(loginSuccessful);

		if (loginSuccessful) {
			return (
				<Container>
					<ListGroup>
						<TransitionGroup className="shopping-list">
							{rewards.map(({_id, name}) => (
								<CSSTransition key={_id} timeout={500} classNames="fade">
									<ListGroupItem>
										<Button
											className="remove-btn"
											color="danger"
											size="sm"
											onClick={this.onDeleteClick.bind(this, _id)}
										>
											&times;
										</Button>
										{name}
									</ListGroupItem>
								</CSSTransition>
							))}
						</TransitionGroup>
					</ListGroup>
				</Container>

			);
	} else {
		return(
			<div></div>
		);
	}
  }
}

ShoppingRewardList.propTypes = {
  getRewards: PropTypes.func.isRequired,
  reward: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	reward: state.reward,
	loginSuccessful: state.reward.loginSuccessful
});

export default connect(
  mapStateToProps,
  { getRewards, deleteReward }
)(ShoppingRewardList);
