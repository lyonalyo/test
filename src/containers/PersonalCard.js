import React from 'react';
import {Group, Header, CardGrid, Card, Avatar, Div} from "@vkontakte/vkui";


const PersonCard = ({ data }) => (
	<Group>
		<Header mode="secondary">{ data.name } (на 40%)</Header>
		<CardGrid>
			<Card size="m">
				<Div className="AvatarCenter" style={{width: 124, height: 124 }}><Avatar size={120} mode="image" src={ data.url } /></Div>
			</Card>
		</CardGrid>
	</Group>
)

export default PersonCard