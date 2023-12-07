import { spacing } from './spacing';
import { colors } from './colors';
import { shadows } from './shadows';
import { typography } from './typography';

export const defaultTheme = {
	spacing,
	colors,
	shadows,
	typography,
	breakpoints: {
		sm: '320px',
		md: '640px',
		sl: '960px',
		xl: '1920px',
	},
};
