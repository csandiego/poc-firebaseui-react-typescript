import React from 'react';
import { useHistory } from 'react-router';

import * as firebase from 'firebase/app';

const style = {
	justifyContent: 'space-between'
}

export default (props: any) => {
	const history = useHistory();
	return (
		<section>
			<header>
				<h1>Welcome</h1>
			</header>
			<div id="buttons" style={style}>
				<button onClick={e => history.push('/profile')}>View profile</button>
				<button onClick={e => firebase.auth().signOut()}>Logout</button>
			</div>
		</section>
	);
};
