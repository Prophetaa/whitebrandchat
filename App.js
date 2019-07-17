import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import { StatusBar } from 'react-native';
import AppNavigator from './helpers/AppNavigation';

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<AppNavigator />
			</Provider>
		);
	}
}

export default App;
