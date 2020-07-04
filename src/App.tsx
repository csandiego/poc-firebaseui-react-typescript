import React from 'react';
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';

import * as firebase from 'firebase/app';

import Login from './Login';
import LoginPicker from './LoginPicker';
import Home from './Home';
import Profile from './Profile';

interface State {
	loading: boolean
}

export default withRouter(class extends React.Component<RouteComponentProps, State> {

	state = { loading: true };

	unsubscribe: firebase.Unsubscribe | null = null;

	componentDidMount() {
		this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
			if (this.state.loading) {
				this.setState({ ...this.state, loading: false });
			}
			const history = this.props.history;
			if (user == null && !history.location.pathname.startsWith('/login')) {
				const url = history.location.pathname +
					(history.location.search.length > 0 ? '?' + history.location.search : '') +
					(history.location.hash.length > 0 ? '#' + history.location.hash : '');
				history.replace('/login?redirect=' + encodeURI(url));
			}
			if (user != null && history.location.pathname === '/login') {
				const url = (new URLSearchParams(history.location.search)).get('redirect');
				history.replace(url == null ? '/profile' : decodeURI(url));
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribe?.();
	}

	render() {
		return (
			<Switch>
				<Route path="/profile">
					<Profile />
				</Route>
				<Route path="/login/picker">
					<LoginPicker />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		);
	}
});
