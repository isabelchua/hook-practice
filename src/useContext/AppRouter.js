import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './pages/index';
import About from './pages/about';
import { UserContext, TestContext } from './UserContext';

function AppRouter() {
	const [user, setUser] = useState(null);
	const [sample, setSample] = useState(null);

	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
					</ul>
				</nav>
				<UserContext.Provider value={{ user, setUser }}>
					<TestContext.Provider value={{ sample, setSample }}>
						<Route path="/" exact component={Index} />
						<Route path="/about" exact component={About} />
					</TestContext.Provider>
				</UserContext.Provider>
			</div>
		</Router>
	);
}

export default AppRouter;
