module.exports = function(api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			require.resolve('babel-plugin-module-resolver'),
			['import', { libraryName: '@ant-design/react-native' }],
		],
	};
};
