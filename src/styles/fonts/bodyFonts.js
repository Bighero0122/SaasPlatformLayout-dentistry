import styled from 'styled-components';

export const CtaBig = styled.p`
	font-weight: ${(props) => props.theme.typography.weight.regular};
	font-size: ${(props) => props.theme.typography.sizes.ctaBig.sizeWeb};
	line-height: ${(props) =>
		props.theme.typography.sizes.ctaBig.lineHeightDefault};
	color: ${(props) =>
		props.color ? props.color : props.theme.colors.blacksAndWhite.primitive};
`;

export const CtaBigBold = styled(CtaBig)`
	font-weight: ${(props) => props.theme.typography.weight.bold};
`;

export const CtaMedium = styled.p`
	font-weight: ${(props) => {
		if (props.bold) {
			return props.theme.typography.weight.bold;
		} else {
			return props.theme.typography.weight.regular;
		}
	}};
	font-size: ${(props) => props.theme.typography.sizes.ctaMedium.sizeWeb};
	line-height: ${(props) =>
		props.theme.typography.sizes.ctaMedium.lineHeightDefault};
	color: ${(props) =>
		props.color ? props.color : props.theme.colors.blacksAndWhite.primitive};
`;

export const CtaMediumBold = styled(CtaMedium)`
	font-weight: ${(props) => props.theme.typography.weight.bold};
`;

export const CtaSmall = styled.p`
	font-weight: ${(props) => {
		if (props.bold) {
			return props.theme.typography.weight.bold;
		} else {
			return props.theme.typography.weight.semiBold;
		}
	}};
	font-size: ${(props) => props.theme.typography.sizes.ctaSmall.sizeWeb};
	line-height: ${(props) =>
		props.theme.typography.sizes.ctaSmall.lineHeightDefault};
	color: ${(props) =>
		props.color ? props.color : props.theme.colors.blacksAndWhite.primitive};
`;

export const CtaSmallUppercase = styled(CtaSmall)`
	text-transform: uppercase;
	line-height: ${(props) =>
		props.lineHeight
			? props.lineHeight
			: props.theme.typography.sizes.ctaSmall.lineHeightDefault};
`;

export const PlaceholderText = styled.p`
	font-size: ${(props) => props.theme.typography.sizes.h6Size.sizeWeb};
	line-height: ${(props) =>
		props.theme.typography.sizes.h6Size.lineHeightDefault};
	font-weight: ${(props) => props.theme.typography.weight.regular};
	color: ${(props) => props.theme.colors.greys.charcoal};
`;
