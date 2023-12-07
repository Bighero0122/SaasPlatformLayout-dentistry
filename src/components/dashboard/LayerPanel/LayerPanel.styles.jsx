import styled from 'styled-components';
import { CtaSmall } from '../../../styles';

export const Container = styled.div`
	position: absolute;
	left: 0;
	top: 300px;
	display: flex;
`;

export const LayerContainer = styled.div`
	display: inline-flex;
	flex-direction: column;
	align-items: center;
	border-radius: 0px 18px 18px 0px;
	background: var(--surface-surface-blue-3, #60a6c5);
`;

export const Layer = styled.div`
	display: flex;
	width: 80px;
	height: 64px;
	padding: 8px 0px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2px;
	background: ${(props) => props.active === 'true' && '#5B9EBB;'};
	border-radius: 8px;
`;

export const Img = styled.img`
	width: 24px;
	height: 24px;
	flex-shrink: 0;
`;

export const LayerName = styled(CtaSmall)`
	color: ${(props) => props.theme.colors.blacksAndWhite.white};
`;
