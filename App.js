import React from 'react';
import { Provider } from 'react-redux';

import { store } from './src/redux';

import AppNavigator from './src/helpers/AppNavigation';

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
