import { SET_STATUS_BAR_HEIGHT } from './actions';

let initialState = {
	statusBarHeight: 0,
};

export default function(state = initialState, { type, payload }) {
	switch (type) {
		case SET_STATUS_BAR_HEIGHT:
			return { ...state, statusBarHeight: payload };
		default:
			return state;
	}
}
