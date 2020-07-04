import React from 'react';

export default (props: any) => {
	return (
		<section>
			<header>
				<h1>Login to view your profile</h1>
			</header>
			<div id="buttons">
				<button onClick={e => window.open('/login/picker', 'Login', 'width=600,height=735')}>Login</button>
			</div>
		</section>
	);
};
