import React from 'react';
import {
	Container,
	ItemContainer,
	BrandContainer,
	BrandLogo,
	BrandName,
	UserInfoContainer,
	UserInfo,
	User,
	UserAvatar,
	UserProfile,
	UserName,
	UserData,
	StyledLine,
	NotificationContainer,
	BottomLine,
	Notification,
	NotificationIconImg,
	NotificationWrap,
	RightPanelContainer,
	RightPanelItem,
	SideFunction,
	FunctionName,
	LeftLine,
	LogoImg,
} from './DashboardHeader.styles';
import NotificationIcon from '../../../assets/icons/notification.png';
import MenuIcon from "../../../assets/icons/menuicon.png";
import MyAvatar from "../../../assets/daniel_avatar.png";
import AIcon from "../../../assets/icons/func/func_a_icon.png";
import AIconActive from "../../../assets/icons/func/func_a_icon_active.png";
import BIcon from "../../../assets/icons/func/func_b_icon.png";
import BIconActive from "../../../assets/icons/func/func_b_icon_active.png";
import CIcon from "../../../assets/icons/func/func_c_icon.png";
import CIconActive from "../../../assets/icons/func/func_c_icon_active.png";
import DIcon from "../../../assets/icons/func/func_d_icon.png";
import DIconActive from "../../../assets/icons/func/func_d_icon_active.png";

export const DashboardHeader = (props) => {
	const { sidePanel, setSidePanel } = props;

	const panelFunctions = [
		{label:'Function A', icon:AIcon, activeIcon:AIconActive},
		{label:'Function B', icon:BIcon, activeIcon:BIconActive},
		{label:'Function C', icon:CIcon, activeIcon:CIconActive},
		{label:'Function D', icon:DIcon, activeIcon:DIconActive},
	];

	return (
		<Container>
			<ItemContainer>
				<BrandContainer>
					<BrandLogo>
						<LogoImg src="src/assets/logo.png" alt="logo" />
						<BrandName>Daniel Lee</BrandName>
					</BrandLogo>
				</BrandContainer>
				<BottomLine />
			</ItemContainer>
			<ItemContainer>
				<UserInfoContainer>
					<img src={MenuIcon} />
					<UserInfo>
						<User>
							<StyledLine />
							<UserProfile>
								<UserAvatar src={MyAvatar} />
								<UserName>Daniel</UserName>
							</UserProfile>
							<UserData>F-23</UserData>
							<StyledLine />
						</User>
					</UserInfo>
				</UserInfoContainer>
				<BottomLine />
			</ItemContainer>
			<NotificationContainer>
				<Notification>
					<NotificationWrap>
						<NotificationIconImg src={NotificationIcon} />
					</NotificationWrap>
					<BottomLine />
				</Notification>
				<LeftLine />
				<RightPanelContainer>
					{panelFunctions.map((func, index) => (
						<RightPanelItem
							key={index}
							active={(func.label === sidePanel).toString()}
						>
							<SideFunction
								onClick={() => {
									if (func.label === sidePanel) setSidePanel('');
									else setSidePanel(func.label);
								}}
							>
								<NotificationIconImg src={(sidePanel === func.label) ?func.activeIcon:func.icon} />
								<FunctionName>{func.label}</FunctionName>
							</SideFunction>
						</RightPanelItem>
					))}
				</RightPanelContainer>
			</NotificationContainer>
		</Container>
	);
};
