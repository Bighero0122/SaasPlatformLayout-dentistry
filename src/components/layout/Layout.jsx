import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { DashboardHeader } from './dashboardHeader/DashboardHeader';
import { SideNav } from './sideNav/SideNav';
import { Container } from './Layout.styles';
const withLayout = (WrappedComponent) => {
	const WithLayout = (props) => {
		const location = useLocation();
		const [sidePanel, setSidePanel] = useState('Function C');

		return (
			<>
				{(
					location.pathname === '/' && (
						<DashboardHeader
							setSidePanel={setSidePanel}
							sidePanel={sidePanel}
						/>
					)
				)}
				<Container>
					<WrappedComponent {...props} />
					{location.pathname === '/' && sidePanel && <SideNav />}
				</Container>
			</>
		);
	};

	return WithLayout;
};

export default withLayout;
