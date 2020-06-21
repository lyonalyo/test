import React from 'react';
import {Avatar, Div,Card} from "@vkontakte/vkui";


const CardSc = ({ datarc }) => (

		<Card size="s">
			{console.log(datarc)}
			<Div style={{ width: 96, height: 96 }} ><Avatar size={90} mode="image" src={ datarc.vk_link } /></Div>
		</Card>
)

export default CardSc