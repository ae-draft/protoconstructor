import LoginForm from '../components/login/login';
import { Provider } from 'react-redux';
import {connect} from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { login } from '../reducers/login-reducer';
import { login as loginAction } from '../actions/login-actions';

let store = createStore(combineReducers({login}), {});

@connect(state => ({ 
	isLoggedIn: state.login.isLoggedIn
}))
class Main extends React.Component<any, any> { 
	render() {
		let { dispatch, isLoggedIn } = this.props;
		
		return (
			<div>
				{ isLoggedIn ? "Стас дурак!" : "Кто дурак?" }
				<button onClick={() => dispatch(loginAction()) }>хуяк!</button>
			</div>
		);
	}
}

class App extends React.Component<any, any> {
	render() {
		return (
			<Provider store={store}>
				<div className="container-fluid">
					<Main />
				</div>
			</Provider>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById('content-wrapper'));
