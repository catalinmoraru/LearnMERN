import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button,Label,Input } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
 import {  dailyTaskDone } from '../actions/itemActions';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import {loginSucessful} from "./LoginForm";

class Dailies extends Component {
	state = {
	items: [
		{id: uuid(), name: 'Wash Your teeth'},
		{id: uuid(), name: 'Read 50 pages from a book'},
		{id: uuid(), name: 'Walk 5 km'},
	]
}

	componentDidMount() {
		// this.props.getDailies();
	}

	onDeleteClick = id => {
		this.props.deleteItem(id);
	};


	checkAddress = (event) =>
	{
		if (event.target.checked)
		{
			this.props.dailyTaskDone();
			
		}
	}
	render() {
		const loginSuccessful = this.props.loginSuccessful;
		 const {items} = this.state;






		if (loginSuccessful) {
			return(
                <Container> 
                    <Button color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={() =>{
                        const name =prompt('Enter Item');
                        if(name){
                            this.setState(state =>({
                                items: [...state.items,{if:uuid(),name}]
                            }));
                        }
                    }}
                    >Add daily task</Button>

                    <ListGroup>
                        <TransitionGroup className="shopping-list">
                         {items.map(({id, name})=>(
                             <CSSTransition key={id} timeout={500} classNames="fade">
                             <ListGroupItem>
								 <Label check>
									 {/*this.onDeleteClick.bind(this, _id)*/}
								  <Input type="checkbox" onClick={this.checkAddress.bind(this)}  />{' '}
                               {/* <Button className="remove-btn" color="danger" size="small"
                               onClick={this.onDeleteClick.bind(this, id)}
                               >
                                   &times;
                               </Button> */}
								 {name}
								 </Label>
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

// Dailies.propTypes = {
//   getDailies: PropTypes.func.isRequired,
//   item: PropTypes.object.isRequired
// };

const mapStateToProps = state => ({
	// item: state.item,
	loginSuccessful: state.item.loginSuccessful
});

// export default Dailies;
export default connect(
  mapStateToProps,
  { dailyTaskDone }
)(Dailies);
