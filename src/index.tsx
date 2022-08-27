import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import axios from "axios";
import {Provider} from "mobx-react";
import {AppStore} from "./store/AppStore";

// Axios settings
axios.defaults.withCredentials = true

// Fix 100vh on mobile devices
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
});

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const store = new AppStore()

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

