import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

import './mainpage.css';
import './Girl.css';
import logo from "../img/logo.png";
import girl from "../img/girl.png";

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader></PanelHeader>

		<Group title="Navigation Example">
			<Div>
				<img className="Logo" src={logo}/>
			</Div>
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="client">
					Я - клиент
				</Button>
			</Div>
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="master">
					Я - мастер
				</Button>
			</Div>
			<Div>
				<img className="Logo" src={girl}/>
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		screen_name: PropTypes.string,
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
