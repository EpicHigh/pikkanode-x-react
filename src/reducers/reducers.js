const intiState = {
	isAuth: false
};

export default function rootReducer(state = intiState, action) {
	switch (action.type) {
		case "LOGIN":
			return {...state, isAuth: true };
		case "LOGOUT":
			return {...state, isAuth: false};
		default:
			return state
	}
}