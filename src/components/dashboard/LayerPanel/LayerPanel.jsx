import React from 'react';
import {
	Container,
	LayerContainer,
	Layer,
	Img,
	LayerName,
} from './LayerPanel.styles';
import { PanelSlider } from '../PanelSlider/PanelSlider';

export const LayerPanel = (props) => {
	const { isPanelSlider, setPanelSlider } = props;

	return (
		<Container>
			<LayerContainer>
				<Layer active="true" onClick={() => {
					isPanelSlider? setPanelSlider(false): setPanelSlider(true);
				}}>
					<Img src="src/assets/face.png" />
					<LayerName>Face</LayerName>
				</Layer>
				
				<Layer>
					<Img src="src/assets/jaw.png" />
					<LayerName>Jaw</LayerName>
				</Layer>
			</LayerContainer>
			{isPanelSlider && <PanelSlider />}
		</Container>
	);
};
