import React from 'react';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { store } from './src/redux';
import { Provider as AntProvider } from '@ant-design/react-native';
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
				<AntProvider>
					<AppNavigator />
				</AntProvider>
			</Provider>
		);
	}
}

export default App;
