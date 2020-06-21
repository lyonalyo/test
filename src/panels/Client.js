import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import {Header, Separator} from '@vkontakte/vkui';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import PanelHeaderContent from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import {IOS, platform} from "@vkontakte/vkui";
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import logo from "../img/logo.png";
import './logoheader.css';

const osName = platform();

const Client = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		><img className="LogoHeader" src={logo} alt="RE-DO-ME"/></PanelHeader>


		<Group header={<Header mode="secondary">Разместить заказ</Header>}>
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="clientform">
					Сделай мне так
				</Button>
			</Div>
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="clientform">
					Помоги выбрать имидж
				</Button>
			</Div>
			<Separator style={{ margin: '12px 0' }} />
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="showAllzayavki">
					Посмотреть запросы
				</Button>
			</Div>
		</Group>
	</Panel>
);

Client.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Client;
