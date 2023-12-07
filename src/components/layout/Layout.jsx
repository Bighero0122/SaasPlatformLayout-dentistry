import React from 'react';
import { useLocation } from 'react-router-dom';
import { DashboardHeader } from './dashboardHeader/DashboardHeader';
const withLayout = () => {
	const WithLayout = () => {
		const location = useLocation();

		return (
			<>
				{(
					location.pathname === '/' && (
						<DashboardHeader/>
					)
				)}
			</>
		);
	};

	return WithLayout;
};

export default withLayout;
