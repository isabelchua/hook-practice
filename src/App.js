import React, { createContext } from 'react';
//import AppRouter from './useContext/AppRouter';
// import ComponentC from './components/ComponentC';
// import HookCounter from './useState/HookCounter';
// import HookArray from './useState/HookArray';
// import Basic from './useEffect/Basic';
// import MouseMove from './useEffect/MouseMove';
//import MouseRemove from './useEffect/MouseRemove';
//import Timer from './useEffect/Timer';
// import FetchingWithAxios from './useEffect/FetchingWithAxios';
// import DataFetching from './useEffect/DataFetching';
//import DataFetchingReducer from './useReducer/DataFetchingReducer';
// import UseReducer from './useReducer/UseReducer';
import AppRouter from './useContext/AppRouter';

//get from component C

// export const UserContext = createContext();
// export const ChannelContext = createContext();

function App() {
	return (
		<div className="App">
			<AppRouter />
			{/* <UseReducer /> */}
			{/*<DataFetchingReducer />
			<DataFetching />
			<FetchingWithAxios />
			<Timer />
			<MouseRemove />
			 <MouseMove />
			<Basic />
			<HookArray />
			<HookCounter />
			<UserContext.Provider value={'Isabel first value'}>
				<ChannelContext.Provider value={'Company second value'}>
					<ComponentC />
				</ChannelContext.Provider>
			</UserContext.Provider> */}
		</div>
	);
}

export default App;
