import React from 'react';
import { Provider } from 'react-redux';
import { AppLoading, Font } from 'expo';

import { store } from './src/redux';

import AppNavigator from './src/helpers/AppNavigation';

class App extends React.Component {
	state = { isReady: false };

	async componentDidMount() {
		await Font.loadAsync(
			'antoutline',
			require('@ant-design/icons-react-native/fonts/antoutline.ttf')
		);
		this.setState({ isReady: true });
	}

	render() {
		if (!this.state.isReady) {
			return <AppLoading />;
		}
		return (
			<Provider store={store}>
				<AppNavigator />
			</Provider>
		);
	}
}

export default App;
