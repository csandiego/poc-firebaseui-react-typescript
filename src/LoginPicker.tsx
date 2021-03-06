import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import * as firebase from 'firebase/app';

export default (props: any) => {
	const config = {
		callbacks: {
			signInSuccessWithAuthResult: () => {
				window.close();
				return false;
			}
		},
		signInOptions: [
			firebase.auth.EmailAuthProvider.PROVIDER_ID,
			{
				provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
				customParameters: {
					prompt: 'select_account'
				}
			}
			
		]
	};
	return <StyledFirebaseAuth uiConfig={config} firebaseAuth={firebase.auth()} />;
};
