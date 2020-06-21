import React, {Fragment, Component} from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import {Group, Header, List, Cell, Placeholder, Button} from '@vkontakte/vkui';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import {IOS, platform} from "@vkontakte/vkui";
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon56UsersOutline from '@vkontakte/icons/dist/56/camera_off_outline';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import logo from "../img/logo.png";
import './logoheader.css';
import PersonCard from "../containers/PersonalCard";

const osName = platform();




class ShowAllZayavki extends Component {
	constructor(props) {
		super(props);
		this.state = { loading: true, zayavki: null, fetchedUser: props.fetchedUser };
	}


	componentDidMount() {
		console.log(this.props);
		const { id, fetchedUser, go }= this.props;
		fetch('https://redome.simplex48.ru:43210/ReDoMeApi/Request/GetByClient?client=' + fetchedUser.id)
			.then(response => response.json())
			.then(json => this.setState( {loading: false, zayavki: json} ))

	}

	render() {
		const { loading, zayavki } = this.state;
		const { id, fetchedUser, go }= this.props;

		if (loading) {
			return (
				<Panel id={id}>
					<PanelHeader
						left={<PanelHeaderButton onClick={go} data-to="home">
							{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
						</PanelHeaderButton>}
					><img className="LogoHeader" src={logo} alt="RE-DO-ME"/></PanelHeader>
					<Group>
						<Header separator="hide" mode="secondary">loading...</Header>
					</Group>
				</Panel>
			)
		}

		if(typeof this.zayavki == "undefined")
			return (
		<Panel id={id}>
			<PanelHeader
				left={<PanelHeaderButton onClick={go} data-to="home">
					{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
				</PanelHeaderButton>}
			><img className="LogoHeader" src={logo} alt="RE-DO-ME"/></PanelHeader>

			{console.log('пусто')}

			<Group>
				<List>
					 <Placeholder
						icon={<Icon56UsersOutline />}
						header="Мои запросы"
						action={<Button size="l" onClick={go} data-to="clientform">Содать запрос</Button>} >
						Активных запросов не найдено.
					</Placeholder>

				</List>
			</Group>

		</Panel>
			)
		else
			return (
		<Panel id={id}>
			<PanelHeader
				left={<PanelHeaderButton onClick={go} data-to="home">
					{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
				</PanelHeaderButton>}
			><img className="LogoHeader" src={logo} alt="RE-DO-ME"/></PanelHeader>

			{console.log('непусто')}

			<Group>
				<List>
					{zayavki.items.map(item => <Cell expandable before={<Icon28UserOutline />}>{item.comment}</Cell> )}

				</List>
			</Group>

		</Panel>
			)




	}
}




ShowAllZayavki.propTypes = {
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

export default ShowAllZayavki;
