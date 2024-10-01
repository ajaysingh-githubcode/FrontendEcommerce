//import { StrictMode } from 'react';
//import { createRoot } from 'react-dom/client';
//import * as React from 'react';
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from './Components/Profile.jsx';
import Cart from './Components/Cart.jsx';
import Home from './Components/Home.jsx';
import ProductPage from './Components/ProductPage.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import ThemeContext from './Components/ThemeContext.jsx';
import AppStore from './Store/Store.js';
import Login from './Components/Login.jsx';
import { Provider } from "react-redux";
import AuthWrapper from './Components/AuthWrapper.jsx';
import Logout from './Components/Logout.jsx';

let Food = lazy(() => import('./Components/Food.jsx'));

const AppRouter = createBrowserRouter([
	{
		path: "/",
		element : <AuthWrapper> <App></App> </AuthWrapper>,
		children: [
			{
				path: "/",
				element: <Home></Home>
			},
			{
				path: "/profile",
				element: <Profile></Profile>
			},
			{
				path: "/cart",
				element: <Cart></Cart>
			}, {
				path: "/food",
				element: (<Suspense fallback={<h1> Food page is coming </h1>}>
					<Food></Food>
				</Suspense>)
			}, {
				path: "/product/:id",
				element: <ProductPage></ProductPage>
			},
			{
				path: "/logout",
				element: <Logout></Logout>
			}
		],
		errorElement: <ErrorPage></ErrorPage>
	}, {
		path: "/login",
		element: <Login></Login>
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	//<React.StrictMode>
	// <App />   
	<Provider store={AppStore}>
		<ThemeContext>
			<RouterProvider router={AppRouter}></RouterProvider>
		</ThemeContext>
	</Provider>
);