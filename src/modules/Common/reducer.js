import { SET_COMMON_VALUES } from './actions';

let initialState = {
	statusBarHeight: 0,
	platform: null,
};

export default function(state = initialState, { type, payload }) {
	switch (type) {
		case SET_COMMON_VALUES:
			return {
				...state,
				statusBarHeight: payload.statusBarHeight,
				platform: payload.platform.OS,
			};
		default:
			return state;
	}
}
