import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import LoginForm from './components/LoginForm';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


/// test
class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<LoginForm/>
					<AppNavbar />
					<Container>
						<ItemModal name = { 'Add TO DO' }/>
						<ItemModal name = { 'Add Reward ' }/>
						<ShoppingList />
					</Container>
				</div>
			</Provider>
		);
	}
}

export default App;
