import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	background: url('src/assets/notfound.jpg') no-repeat center;
	background-size: contain;
	position: relative;
	display: flex;
	justify-content: center;
`;

export const GoHome = styled(Link)`
	position: absolute;
	bottom: 100px;
	color: ${(props) => props.theme.colors.primary.primary};
	font-size: ${(props) => props.theme.typography.sizes.ctaBig.sizeWeb};
	text-decoration: none;
`;
