import styled from 'styled-components';

export const Container = styled.div`
	position: absolute;
	left: 98px;
	top: 8px;
	width: 250px;
	display: flex;
	padding: 8px;
	align-items: center;
	gap: 10px;
	border-radius: 8px;
	background: ${(props) => props.theme.colors.supportive.viking};

	/* Depth 02 */
	box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.07);
	&:before {
		content: ' ';
		border-style: solid;
		border-width: 8px 8px 8px 0;
		border-color: ${(props) =>
			`transparent ${props.theme.colors.supportive.viking} transparent transparent`};
		position: absolute;
		left: -8px;
		top: 12px;
	}
`;

export const Slider = styled.input`
	width: 100%;
	height: 15px;
	border-radius: 24px;
	background: #312929;
	outline: none;
	opacity: 0.5;
	-webkit-transition: 0.2s;
	transition: opacity 0.2s;

	&:hover {
		opacity: 1;
	}
`;

export const Img = styled.img`
	width: 24px;
	height: 24px;
`;
