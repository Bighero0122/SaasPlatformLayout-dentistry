import styled from 'styled-components';

export const Container = styled.div`
	position: absolute;
	right: 44px;
	bottom: 44px;
	width: 180px;
	height: 180px;
	flex-shrink: 0;
	background: ${(props) => props.theme.colors.supportive.viking};
	border-radius: 50%;
	display: flex;
	flex-direction: column;
	padding: 17px;
	justify-content: space-between;
	align-items: center;
`;

export const IconImg = styled.img`
	width: 24px;
	height: 24px;
`;

export const IconContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-around;
	align-items: center;
	gap: 11px;
`;

export const WheelCenter = styled.div`
	width: 80px;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: ${(props) => `7px solid ${props.theme.colors.supportive.seagull}`};
	border-radius: 50%;
`;

export const IconButton = styled.button`
	width: 24px;
	height: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
`;