import React, { useState } from 'react';
import {
	Container,
	PanelHeader,
	PanelParts,
	PanelPart,
	PanelPartName,
	SectionsContainer,
	SectionContainer,
	SectionItemContainer,
	SectionItem,
	SectionContentContainer,
	SectionItemName,
	SectionItemDirect,
	SectionItemDirectContainer,
	SectionItemDirectContent,
	SectionItemsContainer,
	SectionItems,
	SectionItemsName,
	ItemsAdd,
	ItemRemove,
	SectionNumberContainer,
	SectionNumbers,
	Numbers,
	HorizontalSeparator,
	VerticalSeparator,
} from './SideNav.styles';
import {
	SectionTitle,
	TextField,
	Separator,
	Dropdown,
	ItemInput,
	Number,
} from '../../common';

export const SideNav = () => {
	const [selectedPart, setSelectPart] = useState('Part A');
	const [isTextSectionOpen, setIsTextSectionOpen] = useState(true);
	const [isSection2, setIsSection2] = useState(true);
	const [isSection3, setIsSection3] = useState(true);
	const [isSection4, setIsSection4] = useState(true);
	const [isSection5, setIsSection5] = useState(true);

	const panelParts = ['Part A', 'Part B', 'Part C', 'Part D'];
	const [sectionInputItems, setSectionInputItems] = useState(['']);

	return (
		<Container>
			<PanelHeader>
				<PanelParts>
					{panelParts.map((part, index) => (
						<PanelPart
							key={index}
							active={(part === selectedPart).toString()}
							onClick={() => setSelectPart(part)}
						>
							<PanelPartName>{part}</PanelPartName>
						</PanelPart>
					))}
				</PanelParts>
			</PanelHeader>
			<SectionsContainer>
				<SectionContainer>
					<SectionTitle
						name="Section"
						isOpen={isTextSectionOpen}
						setIsOpen={setIsTextSectionOpen}
					/>
					{isTextSectionOpen && <TextField />}
				</SectionContainer>
				<Separator />
				<SectionContainer>
					<SectionTitle
						name="Section"
						isOpen={isSection2}
						setIsOpen={setIsSection2}
					/>
					{isSection2 && (
						<>
							<SectionItemContainer>
								<SectionItem>
									<SectionItemName>Item</SectionItemName>
								</SectionItem>
								<SectionContentContainer>
									<Dropdown />
								</SectionContentContainer>
							</SectionItemContainer>
							<SectionItemContainer>
								<SectionItem>
									<SectionItemName>Item</SectionItemName>
								</SectionItem>
								<SectionContentContainer>
									<ItemInput placeholder="Text Input" suffix="mm" />
								</SectionContentContainer>
							</SectionItemContainer>
						</>
					)}
				</SectionContainer>
				<Separator />
				<SectionContainer>
					<SectionTitle
						name="Section"
						isOpen={isSection3}
						setIsOpen={setIsSection3}
					/>
					{isSection3 && (
						<>
							<SectionItemDirectContainer>
								<SectionItemDirectContent>
									<SectionItemDirect>Left</SectionItemDirect>
									<SectionItemDirect>Right</SectionItemDirect>
								</SectionItemDirectContent>
							</SectionItemDirectContainer>
							<SectionItemContainer>
								<SectionItem>
									<SectionItemName>Item</SectionItemName>
								</SectionItem>
								<SectionContentContainer>
									<ItemInput placeholder="0" suffix="mm" />
									<ItemInput placeholder="0" suffix="mm" />
								</SectionContentContainer>
							</SectionItemContainer>
							<SectionItemContainer>
								<SectionItem>
									<SectionItemName>Item</SectionItemName>
								</SectionItem>
								<SectionContentContainer>
									<ItemInput placeholder="0" suffix="mm" />
								</SectionContentContainer>
							</SectionItemContainer>
							<SectionItemDirectContainer>
								<SectionItemDirectContent>
									<SectionItemDirect>Left</SectionItemDirect>
									<SectionItemDirect>Right</SectionItemDirect>
								</SectionItemDirectContent>
							</SectionItemDirectContainer>
							<SectionItemContainer>
								<SectionItem>
									<SectionItemName>Item</SectionItemName>
								</SectionItem>
								<SectionContentContainer>
									<Dropdown defaultValue="00" />
									<Dropdown defaultValue="00" />
								</SectionContentContainer>
							</SectionItemContainer>
							<SectionItemContainer>
								<SectionItem>
									<SectionItemName>Item</SectionItemName>
								</SectionItem>
								<SectionContentContainer>
									<Dropdown defaultValue="00" />
									<Dropdown defaultValue="00" />
								</SectionContentContainer>
							</SectionItemContainer>
						</>
					)}
				</SectionContainer>
				<Separator />
				<SectionContainer>
					<SectionTitle
						name="Section"
						isOpen={isSection4}
						setIsOpen={setIsSection4}
					/>
					{isSection4 && (
						<>
							<SectionItemsContainer>
								<SectionItems>
									<SectionItemsName>ITEMS</SectionItemsName>
								</SectionItems>
								<ItemsAdd
									onClick={() => {
										const newItems = '';
										setSectionInputItems([...sectionInputItems, newItems]);
									}}
								>
									+
								</ItemsAdd>
							</SectionItemsContainer>
							{sectionInputItems.map((item, index) => (
								<SectionItemContainer key={index}>
									<SectionItem>
										<SectionItemName>Item</SectionItemName>
									</SectionItem>
									<SectionContentContainer>
										<ItemInput />
										<ItemRemove
											onClick={() => {
												const newItems = sectionInputItems.filter(
													(item, i) => i !== index
												);
												setSectionInputItems(newItems);
											}}
										>
											-
										</ItemRemove>
									</SectionContentContainer>
								</SectionItemContainer>
							))}
						</>
					)}
				</SectionContainer>
				<Separator />
				<SectionContainer>
					<SectionTitle
						name="Section"
						isOpen={isSection5}
						setIsOpen={setIsSection5}
					/>
					{isSection5 && (
						<>
							<SectionNumberContainer>
								<SectionNumbers>
									<Numbers bottom="8px">
										<Number name="8" />
										<Number name="7" />
										<Number name="6" />
										<Number name="5" active="true" />
										<Number name="4" active="true" />
										<Number name="3" />
										<Number name="2" />
										<Number name="1" />
									</Numbers>
									<VerticalSeparator />
									<Numbers bottom="8px">
										<Number name="1" />
										<Number name="2" />
										<Number name="3" />
										<Number name="4" />
										<Number name="5" />
										<Number name="6" />
										<Number name="7" />
										<Number name="8" />
									</Numbers>
								</SectionNumbers>
								<HorizontalSeparator />
								<SectionNumbers>
									<Numbers>
										<Number name="8" />
										<Number name="7" />
										<Number name="6" />
										<Number name="5" />
										<Number name="4" />
										<Number name="3" />
										<Number name="2" />
										<Number name="1" />
									</Numbers>
									<VerticalSeparator />
									<Numbers>
										<Number name="1" />
										<Number name="2" />
										<Number name="3" />
										<Number name="4" />
										<Number name="5" />
										<Number name="6" />
										<Number name="7" />
										<Number name="8" />
									</Numbers>
								</SectionNumbers>
							</SectionNumberContainer>
							<SectionItemContainer>
								<SectionItem>
									<Dropdown defaultValue="none" />
									<Dropdown defaultValue="none" />
								</SectionItem>
							</SectionItemContainer>
						</>
					)}
				</SectionContainer>
			</SectionsContainer>
		</Container>
	);
};
