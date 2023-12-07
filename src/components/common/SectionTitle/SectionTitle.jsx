import React from 'react';
import {
	Container,
	SectionName,
	StyledDown,
	StyledIcon,
	StyledSectionName,
} from './SectionTitle.styles';
// import DownIcon from 'assets/icons/down-icon.svg';
import UpIcon from '../../../assets/icons/up-icon.svg';
import DownIcon from '../../../assets/icons/down-icon.svg';

export const SectionTitle = (props) => {
	const { name, setIsOpen, isOpen } = props;

	return (
		<Container>
			<SectionName>
				<StyledSectionName>{name}</StyledSectionName>
			</SectionName>
			<StyledIcon onClick={() => setIsOpen((value) => !value)}>
				{isOpen ? <StyledDown src={UpIcon} /> : <StyledDown src={DownIcon} />}
			</StyledIcon>
		</Container>
	);
};
