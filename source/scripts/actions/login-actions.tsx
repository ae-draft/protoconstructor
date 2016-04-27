interface ILoginAction { 
	type: string,
	payload?: any
}

export var LoginActionTypes: { login: string, logout: string } = {
	login: "LOGIN",
	logout: "LOGOUT"
};

export function login(): ILoginAction {
	return { type: LoginActionTypes.login };
}