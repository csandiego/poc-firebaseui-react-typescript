import React from 'react';
import { useHistory } from 'react-router';

import * as firebase from 'firebase/app';

export default (props: any) => {
	const history = useHistory();
	return (
		<section>
			<header>
				<h1>{firebase.auth().currentUser?.displayName}</h1>
				<h2>{firebase.auth().currentUser?.email}</h2>
			</header>
			<div id="buttons">
				<button onClick={e => history.push('/')}>Back</button>
			</div>
		</section>
	);
};
