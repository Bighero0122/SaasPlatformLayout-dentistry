import styled from 'styled-components';
import { defaultTheme } from '../defaultTheme';

const DEFAULT_COLOR = defaultTheme.colors.blacksAndWhite.primitive;

export const H0 = styled.h1`
	color: ${(props) => (props.color ? props.color : DEFAULT_COLOR)};
	font-weight: ${(props) =>
		props.theme.typography.weight[props.weight ?? 'regular']};
	font-size: ${(props) =>
		props.isMobile
			? props.theme.typography.sizes.h0Size.sizeMobile
			: props.theme.typography.sizes.h0Size.sizeWeb};
	line-height: ${(props) =>
		props.bigLineHeight
			? props.theme.typography.sizes.h0Size.lineHeightBig
			: props.theme.typography.sizes.h0Size.lineHeightDefault};
`;

export const H1 = styled.h1`
	color: ${(props) => (props.color ? props.color : DEFAULT_COLOR)};
	font-size: ${(props) => props.theme.typography.sizes.h1Size.sizeMobile};
	line-height: ${(props) =>
		props.bigLineHeight
			? props.theme.typography.sizes.h1Size.lineHeightBig
			: props.theme.typography.sizes.h1Size.lineHeightDefault};
	font-weight: ${(props) =>
		props.theme.typography.weight[props.weight ?? 'regular']};

	@media (min-width: ${(props) => props.theme.breakpoints.md}) {
		font-size: ${(props) => props.theme.typography.sizes.h1Size.sizeWeb};
	}
`;

export const H1CardTitle = styled(H1)`
	font-weight: ${(props) => props.theme.typography.weight.black};

	@media (max-width: ${(props) => props.theme.breakpoints.md}) {
		font-size: ${(props) => props.theme.typography.sizes.h3Size.sizeMobile};
		line-height: ${(props) =>
			props.theme.typography.sizes.h3Size.lineHeightDefault};
	}
`;

export const H2 = styled.h2`
	color: ${(props) => (props.color ? props.color : DEFAULT_COLOR)};
	font-size: ${(props) => props.theme.typography.sizes.h2Size.sizeMobile};
	font-weight: ${(props) =>
		props.theme.typography.weight[props.weight ?? 'regular']};
	line-height: ${(props) =>
		props.bigLineHeight
			? props.theme.typography.sizes.h2Size.lineHeightBig
			: props.theme.typography.sizes.h2Size.lineHeightDefault};

	@media (min-width: ${(props) => props.theme.breakpoints.md}) {
		font-size: ${(props) => props.theme.typography.sizes.h2Size.sizeWeb};
	}
`;

export const H3 = styled.h3`
	color: ${(props) => (props.color ? props.color : DEFAULT_COLOR)};
	font-size: ${(props) => props.theme.typography.sizes.h3Size.sizeMobile};
	font-weight: ${(props) =>
		props.theme.typography.weight[props.weight ?? 'regular']};
	line-height: ${(props) =>
		props.bigLineHeight
			? props.theme.typography.sizes.h3Size.lineHeightBig
			: props.theme.typography.sizes.h3Size.lineHeightDefault};

	@media (min-width: ${(props) => props.theme.breakpoints.md}) {
		font-size: ${(props) => props.theme.typography.sizes.h3Size.sizeWeb};
	}
`;

export const H4 = styled.h4`
	color: ${(props) => (props.color ? props.color : DEFAULT_COLOR)};
	font-size: ${(props) => props.theme.typography.sizes.h4Size.sizeMobile};
	font-weight: ${(props) =>
		props.theme.typography.weight[props.weight ?? 'regular']};
	line-height: ${(props) =>
		props.bigLineHeight
			? props.theme.typography.sizes.h4Size.lineHeightBig
			: props.theme.typography.sizes.h4Size.lineHeightDefault};

	@media (min-width: ${(props) => props.theme.breakpoints.md}) {
		font-size: ${(props) => props.theme.typography.sizes.h4Size.sizeWeb};
	}
`;

export const H4CardSubtitle = styled(H4)`
	@media (max-width: ${(props) => props.theme.breakpoints.md}) {
		font-size: ${(props) => props.theme.typography.sizes.h5Size.sizeMobile};
		line-height: ${(props) =>
			props.theme.typography.sizes.h5Size.lineHeightDefault};
	}
`;

export const H5 = styled.h5`
	color: ${(props) => (props.color ? props.color : DEFAULT_COLOR)};
	font-size: ${(props) => props.theme.typography.sizes.h5Size.sizeMobile};
	font-weight: ${(props) =>
		props.theme.typography.weight[props.weight ?? 'regular']};
	line-height: ${(props) =>
		props.bigLineHeight
			? props.theme.typography.sizes.h5Size.lineHeightBig
			: props.theme.typography.sizes.h5Size.lineHeightDefault};
	text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};

	@media (min-width: ${(props) => props.theme.breakpoints.md}) {
		font-size: ${(props) => props.theme.typography.sizes.h5Size.sizeWeb};
	}
`;

export const H6 = styled.h6`
	color: ${(props) => (props.color ? props.color : DEFAULT_COLOR)};
	font-size: ${(props) => props.theme.typography.sizes.h6Size.sizeMobile};
	font-weight: ${(props) =>
		props.theme.typography.weight[props.weight ?? 'regular']};
	line-height: ${(props) =>
		props.bigLineHeight
			? props.theme.typography.sizes.h6Size.lineHeightBig
			: props.theme.typography.sizes.h6Size.lineHeightDefault};
	text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};

	@media (min-width: ${(props) => props.theme.breakpoints.md}) {
		font-size: ${(props) => props.theme.typography.sizes.h6Size.sizeWeb};
	}
`;

export const H7 = styled.h6`
	color: ${(props) => (props.color ? props.color : DEFAULT_COLOR)};
	font-size: ${(props) => props.theme.typography.sizes.h7Size.sizeMobile};
	font-weight: ${(props) =>
		props.theme.typography.weight[props.weight ?? 'regular']};
	line-height: ${(props) =>
		props.bigLineHeight
			? props.theme.typography.sizes.h7Size.lineHeightBig
			: props.theme.typography.sizes.h7Size.lineHeightDefault};
	font-weight: ${(props) => props.theme.typography.weight.regular};

	text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};

	@media (min-width: ${(props) => props.theme.breakpoints.md}) {
		font-size: ${(props) => props.theme.typography.sizes.h7Size.sizeWeb};
	}
`;

export const H7Spaced = styled(H7)`
	text-transform: uppercase;
	letter-spacing: 2px;
`;

export const H8 = styled.h6`
	font-size: ${(props) => props.theme.typography.sizes.h8Size.sizeMobile};
	font-weight: ${(props) =>
		props.theme.typography.weight[props.weight ?? 'regular']};
	line-height: ${(props) =>
		props.bigLineHeight
			? props.theme.typography.sizes.h8Size.lineHeightBig
			: props.theme.typography.sizes.h8Size.lineHeightDefault};
	text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
	color: ${(props) => (props.color ? props.color : DEFAULT_COLOR)};

	@media (min-width: ${(props) => props.theme.breakpoints.md}) {
		font-size: ${(props) => props.theme.typography.sizes.h8Size.sizeWeb};
	}
`;

export const H9 = styled.h6`
	color: ${(props) => (props.color ? props.color : DEFAULT_COLOR)};
	font-size: ${(props) => props.theme.typography.sizes.h9Size.sizeMobile};
	font-weight: ${(props) =>
		props.theme.typography.weight[props.weight ?? 'regular']};
	line-height: ${(props) =>
		props.bigLineHeight
			? props.theme.typography.sizes.h9Size.lineHeightBig
			: props.theme.typography.sizes.h9Size.lineHeightDefault};
	text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};

	@media (min-width: ${(props) => props.theme.breakpoints.md}) {
		font-size: ${(props) => props.theme.typography.sizes.h9Size.sizeWeb};
	}
`;
export const H9Spaced = styled(H9)`
	text-transform: uppercase;
	letter-spacing: 1px;
`;
