import styled from 'styled-components';
import { CtaMedium, CtaSmall } from '../../../styles';

export const Container = styled.div`
	display: inline-flex;
	width: 320px;
	flex-direction: column;
	align-items: flex-start;
	flex-shrink: 0;
	height: 100%;
	margin-bottom: 8px;
`;

export const PanelHeader = styled.div`
	display: flex;
	padding: 8px;
	justify-content: space-between;
	align-items: flex-start;
	align-self: stretch;
`;

export const PanelParts = styled.div`
	display: flex;
	padding: 2px;
	justify-content: space-between;
	align-items: flex-start;
	flex: 1 0 0;
	border-radius: 4px;
	background: ${(props) => props.theme.colors.greys.smoke};
`;

export const PanelPart = styled.button`
	display: flex;
	padding: 8px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
	border-radius: 4px;
	cursor: pointer;
	border: none;
	outline: none;

	background: ${(props) =>
		props.active === 'true'
			? props.theme.colors.primary.primaryLight
			: props.theme.colors.greys.smoke};
`;

export const PanelPartName = styled(CtaSmall)``;

export const SectionsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	flex: 1 0 0;
	align-self: stretch;
	background: ${(props) => props.theme.colors.blacksAndWhite.white};
	overflow-y: scroll;

	&::-webkit-scrollbar {
		width: 12px;
	}

	&::-webkit-scrollbar-track {
		background: ${(props) => props.theme.colors.greys.nightRider};
	}

	&::-webkit-scrollbar-thumb {
		background-color: ${(props) => props.theme.colors.greys.smoke};

		border-radius: 20px;
		border: ${(props) => `3px slid ${props.theme.colors.greys.nightRider}`};
	}
`;

export const SectionContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	width: 100%;
`;

export const SectionItemContainer = styled.div`
	display: flex;
	align-items: flex-start;
	align-self: stretch;
`;

export const SectionItem = styled.div`
	display: flex;
	padding: 8px 16px;
	align-items: center;
	gap: 4px;
	flex: 1 0 0;
	align-self: stretch;
	background: ${(props) => props.theme.colors.blacksAndWhite.white};
`;

export const SectionContentContainer = styled.div`
	display: flex;
	width: 157px;
	padding: 8px 16px 8px 0px;
	align-items: center;
	gap: 8px;
	background: var(--base-white, #fff);
`;

export const SectionItemName = styled(CtaMedium)`
	color: ${(props) => props.theme.colors.greys.dawn};
`;

export const SectionItemDirect = styled(CtaMedium)`
	color: ${(props) => props.theme.colors.greys.dawn};
`;

export const SectionItemDirectContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-self: stretch;
	gap: 8px;
	flex: 1 0 0;
`;

export const SectionItemDirectContent = styled.div`
	display: flex;
	justify-content: space-around;
	width: 157px;
	padding: 8px 16px 8px 0px;
	align-items: center;
	gap: 8px;
	background: var(--base-white, #fff);
`;

export const SectionItemsContainer = styled.div`
	display: flex;
	padding: 0px 16px;
	justify-content: space-between;
	align-items: center;
	align-self: stretch;
`;

export const SectionItems = styled.div`
	display: flex;
	padding: 8px 0px;
	align-items: center;
	gap: 10px;
	align-self: stretch;
`;

export const SectionItemsName = styled(CtaSmall)`
	color: ${(props) => props.theme.colors.greys.charcoal};
	font-weight: ${(props) => props.theme.typography.weight.semiBold};
`;

export const ItemsAdd = styled.button`
	outline: none;
	border: none;
	background: ${(props) => props.theme.colors.blacksAndWhite.white};
	cursor: pointer;
`;

export const ItemRemove = styled.button`
	width: 24px;
	height: 24px;
	flex-shrink: 0;
	outline: none;
	border: none;
	background: ${(props) => props.theme.colors.blacksAndWhite.white};
	cursor: pointer;
`;

export const SectionNumberContainer = styled.div`
	display: flex;
	padding: 10px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-self: stretch;
`;

export const SectionNumbers = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 4px;
`;

export const Numbers = styled.div`
	display: flex;
	gap: 1px;
	margin: ${(props) => (props.bottom ? `0 0 8px 0` : `8px 0 0 0`)};
`;

export const HorizontalSeparator = styled.div`
	height: 1px;
	width: 247px;
	align-self: center;
	background: ${(props) => props.theme.colors.greys.gainsboro};
`;

export const VerticalSeparator = styled.div`
	width: 1px;
	height: 100%;
	background: ${(props) => props.theme.colors.greys.gainsboro};
`;
