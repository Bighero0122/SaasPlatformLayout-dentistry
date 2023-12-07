import React from 'react';
import withLayout from './components/layout/Layout';
import { Dashboard, Notfound } from './pages';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />} />
			<Route path="*" element={<Notfound />} />
		</Routes>
	);
}

export default withLayout(App);
