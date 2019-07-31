import React from 'react';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { YellowBox } from 'react-native';
import { store } from './src/redux';
import { Provider as AntProvider } from '@ant-design/react-native';
import AppNavigator from './src/helpers/AppNavigation';

class App extends React.Component {
	state = { isReady: false };

	async componentDidMount() {
		YellowBox.ignoreWarnings([
			'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?',
		]);

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
				<AntProvider>
					<AppNavigator />
				</AntProvider>
			</Provider>
		);
	}
}

export default App;
