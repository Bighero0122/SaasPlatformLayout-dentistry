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
	LeftLine,
	LogoImg,
} from './DashboardHeader.styles';
import NotificationIcon from '../../../assets/icons/notification.png';
import MenuIcon from "../../../assets/icons/menuicon.png";
import MyAvatar from "../../../assets/daniel_avatar.png";

export const DashboardHeader = () => {

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
					lee
				</RightPanelContainer>
			</NotificationContainer>
		</Container>
	);
};
