import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import {addReward, deleteReward, getRewards} from '../actions/rewardActions';

class RewardModal extends Component {
    state = {
        modal: false,
        name: ''
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const newReward = {
            name: this.state.name
        };

        // Add TO DO reward via addReward action
        this.props.addReward(newReward);

        // Close modal
        this.toggle();
    };

    render() {
        const loginSuccessful = this.props.loginSuccessful;

        if (loginSuccessful) {
            return (
                <div>
                <Button
            color="primary"
            style={{ marginBottom: '2rem' }}
            onClick={this.toggle}
        >
            {this.props.name}
        </Button>

            <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
            <ModalBody>
            <Form onSubmit={this.onSubmit}>
        <FormGroup>
            <Label for="reward">Reward</Label>
                <Input
                type="text"
            name="name"
            id="reward"
            placeholder="Add shopping reward"
            onChange={this.onChange}
            />
            <Button color="dark" style={{ marginTop: '2rem' }} block>
            Add Reward
            </Button>
            </FormGroup>
            </Form>
            </ModalBody>
            </Modal>
            </div>
        );
        } else {
            return ( <div></div>);
        }
    }
}


const mapStateToProps = state => ({
    item: state.reward,
    loginSuccessful: state.reward.loginSuccessful
});

export default connect(
    mapStateToProps,
    { addReward }
)(RewardModal);
