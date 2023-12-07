import styled from 'styled-components';

export const BigTitle = styled.h1`
	font-size: ${(props) => props.theme.typography.sizes.bigTitle.sizeMobile};
	line-height: ${(props) =>
		props.bigLineHeight
			? props.theme.typography.sizes.bigTitle.lineHeightBig
			: props.theme.typography.sizes.bigTitle.lineHeightDefault};
	font-weight: ${(props) => props.theme.typography.weight.black};
	color: ${(props) =>
		props.color ? props.color : props.theme.colors.blacksAndWhite.primitive};

	@media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
		font-size: ${(props) => props.theme.typography.sizes.bigTitle.sizeWeb};
	}
`;

export const MediumTitle = styled.h1`
	font-size: ${(props) => props.theme.typography.sizes.mediumTitle.sizeMobile};
	line-height: ${(props) =>
		props.bigLineHeight
			? props.theme.typography.sizes.mediumTitle.lineHeightBig
			: props.theme.typography.sizes.mediumTitle.lineHeightDefault};
	font-weight: ${(props) => props.theme.typography.weight.black};
	color: ${(props) =>
		props.color ? props.color : props.theme.colors.blacksAndWhite.primitive};

	@media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
		font-size: ${(props) => props.theme.typography.sizes.mediumTitle.sizeWeb};
	}
`;

export const SmallTitle = styled.h1`
	font-size: ${(props) => props.theme.typography.sizes.smallTitle.sizeMobile};
	line-height: ${(props) =>
		props.bigLineHeight
			? props.theme.typography.sizes.smallTitle.lineHeightBig
			: props.theme.typography.sizes.smallTitle.lineHeightDefault};
	font-weight: ${(props) => props.theme.typography.weight.black};
	color: ${(props) =>
		props.color ? props.color : props.theme.colors.blacksAndWhite.primitive};

	@media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
		font-size: ${(props) => props.theme.typography.sizes.smallTitle.sizeWeb};
	}
`;
