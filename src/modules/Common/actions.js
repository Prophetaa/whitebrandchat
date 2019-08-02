export const SET_COMMON_VALUES = 'SET_COMMON_VALUES';

export const setCommonValues = (statusBarHeight, platform) => ({
	type: SET_COMMON_VALUES,
	payload: { statusBarHeight, platform },
});
