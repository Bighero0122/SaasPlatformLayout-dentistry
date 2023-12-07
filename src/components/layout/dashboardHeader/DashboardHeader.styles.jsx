import styled from 'styled-components';
import { CtaMedium, CtaSmall, H1 } from '../../../styles';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	align-self: stretch;
`;

export const LogoImg = styled.img`
	width: 35px;
	height: 40px;
`;

export const ItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	flex: 1 0 0;
`;

export const BrandContainer = styled.div`
	display: flex;
	height: 64px;
	padding: 0px 24px;
	align-items: center;
	align-self: stretch;
`;

export const BrandLogo = styled.div`
	display: flex;
	height: 64px;
	padding: 8px;
	align-items: center;
	gap: 16px;
	flex: 1 0 0;
`;

export const BrandName = styled(H1)``;

export const UserInfoContainer = styled.div`
	display: flex;
	height: 64px;
	justify-content: center;
	align-items: center;
	align-self: stretch;
	gap: 8px;
`;

export const UserInfo = styled.div`
	display: flex;
	height: 64px;
	padding: 8px;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 10px;
`;

export const User = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
`;

export const UserAvatar = styled.img`
	display: flex;
	width: 32px;
	height: 32px;
	justify-content: center;
	align-items: center;
	border-radius: 100px;
`;

export const UserProfile = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

export const UserName = styled(CtaMedium)`
	font-weight: ${(props) => props.theme.typography.weight.bold};
`;

export const UserData = styled(CtaMedium)``;

export const StyledLine = styled.div`
	width: 1px;
	height: 21px;
	background: ${(props) => props.theme.colors.greys.gandalf};
`;

export const NotificationContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
	flex: 1 0 0;
`;

export const BottomLine = styled.div`
	width: 100%;
	height: 1px;
	background: ${(props) => props.theme.colors.greys.smoke};
`;

export const Notification = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	flex: 1 0 0;
`;

export const NotificationIconImg = styled.img`
	width: 24px;
	height: 24px;
`;

export const NotificationWrap = styled.div`
	display: flex;
	height: 64px;
	padding: 0px 24px;
	justify-content: flex-end;
	align-items: center;
	gap: 16px;
	align-self: stretch;
	background: ${(props) => props.theme.colors.blacksAndWhite.white};
`;

export const RightPanelContainer = styled.div`
	display: flex;
	height: 64px;
	justify-content: flex-end;
	align-items: center;
	background: ${(props) => props.theme.colors.blacksAndWhite.white};
`;

export const RightPanelItem = styled.div`
	display: flex;
	height: 64px;
	justify-content: flex-end;
	align-items: center;
	background: ${(props) => props.theme.colors.blacksAndWhite.white};

	p {
		color: ${(props) =>
			props.active === 'true'
				? props.theme.colors.primary.primary
				: props.theme.colors.blacksAndWhite.primitive};
	}
`;

export const SideFunction = styled.button`
	display: flex;
	width: 80px;
	padding: 8px 0px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2px;
	align-self: stretch;
	background: ${(props) => props.theme.colors.blacksAndWhite.white};
	border: none;
	cursor: pointer;
`;

export const FunctionName = styled(CtaSmall)`
	font-weight: ${(props) => props.theme.typography.weight.bold};
`;

export const LeftLine = styled.div`
	width: 1px;
	height: 64px;
	background: ${(props) => props.theme.colors.greys.gandalf};
`;
