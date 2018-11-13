import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import LoginForm from './components/LoginForm';

import ShoppingItemList from './components/ShoppingItemList';
import ShoppingRewardList from './components/ShoppingRewardList';

import ShoppingList from './components/ShoppingItemList';
import Dailies from './components/Dailies';

import ItemModal from './components/ItemModal';
import Gold from './components/Gold';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RewardModal from "./components/RewardModal";


/// test
class App extends Component {
	render() {
		return (

			<Provider store={store}>
				<div className="App">
					<LoginForm/>
					<AppNavbar />
					<Container>
						<Gold/>
						<ItemModal name = { 'Add TO DO' }/>
						<ShoppingItemList />
						<ItemModal />
						<Dailies />
        				<RewardModal name = { 'Add Reward ' }/>
        				<ShoppingRewardList />
					</Container>
					</div>

			</Provider>


		);
	}
}

export default App;
