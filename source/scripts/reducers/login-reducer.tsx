import { LoginActionTypes } from '../actions/login-actions';

interface ILoginState { 
	isLoggedIn: boolean,
	loginInfo: Object
}

interface ILoginAction { 
	type: string,
	payload?: any
}

const _defaultState: ILoginState = { isLoggedIn: false, loginInfo: {} };

export function login(state = _defaultState, action: ILoginAction): ILoginState {
	switch (action.type) {
		case LoginActionTypes.login:
			return Object.assign({}, state, { isLoggedIn: true });
	
		default:
			return state;
	}
}