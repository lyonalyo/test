import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import {Header, IOS, platform, Separator} from "@vkontakte/vkui";
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";

import logo from "../img/logo.png";
import './logoheader.css';
//import bridge from "@vkontakte/vk-bridge";
//import MasterProfile from "./MasterProfile";

const osName = platform();

const Master = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		><img className="LogoHeader" src={logo} alt="RE-DO-ME"/></PanelHeader>

		<Group>
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="masterprofile">
					Мой профиль
				</Button>
			</Div>
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="market">
					Запросы клиентов
				</Button>
			</Div>
		</Group>
	</Panel>
);


Master.propTypes = {
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

export default Master;
