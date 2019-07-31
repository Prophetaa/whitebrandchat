import React from 'react';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { YellowBox } from 'react-native';
import { store } from './src/redux';

import AppNavigator from './src/helpers/AppNavigation';

class App extends React.Component {
	state = { isReady: false };

	async componentDidMount() {
		YellowBox.ignoreWarnings([
			'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?',
		]); //Ignoring this error because it's warning me to use props that I don't need.
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
