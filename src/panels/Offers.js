import React, {Fragment, Component} from 'react';
import PropTypes from 'prop-types';
import bridge from '@vkontakte/vk-bridge';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import {Button, Group, Header, Div, SimpleCell, InfoRow, CardScroll, Card, RichCell, CellButton} from '@vkontakte/vkui';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import {IOS, platform} from "@vkontakte/vkui";
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import logo from "../img/logo.png";
import './logoheader.css';
import PersonCard from "../containers/PersonalCard";

const osName = platform();




class Offers extends Component {
	constructor(props) {
		super(props);
		this.state = { loading: true, data: null, fetchedUser: props.fetchedUser };
	}


	componentDidMount() {
		console.log(this.props);
		const { id, fetchedUser, go }= this.props;
		fetch('https://redome.simplex48.ru:43210/ReDoMeApi/Request/GetByClient?client=192510266' + fetchedUser.id)
			.then(response => response.json())
			.then(json => this.setState( {loading: false, zayavki: json} ))
		console.log(this.zayavki);
	}

	render() {
		const { loading, data } = this.state;
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

		return (
			<Panel id={id}>
				<PanelHeader
					left={<PanelHeaderButton onClick={go} data-to="home">
						{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
					</PanelHeaderButton>}
				><img className="LogoHeader" src={logo} alt="RE-DO-ME"/></PanelHeader>

				<Group>
					<SimpleCell>
						<InfoRow header="Ваша цель:">
							Хочу сбрить усы!
						</InfoRow>
					</SimpleCell>
				</Group>

				<Group>

					<RichCell
						disabled
						multiline
						before={<Avatar size={72} mode="image" src={'https://sun9-53.userapi.com/c846321/v846321349/ebac6/nIWOZSW2OJA.jpg?ava=1'} />}
						text="Парикмахер-стилист"
						caption="Салон InStyle, 2 км от вас"
						after="500 ₽"
					>
						Елена Хаби
					</RichCell>
					<Group separator="hide" header={<Header mode="secondary">Предложения мастера</Header>}>

						<CardScroll>
							<Card size="s">
								<div style={{ width: 64, height: 96 }} ><img scr={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZitBxt6O23feX2Wf-SLW86XRY1R-djC8soghKJEa2uNMe89Nhuw&s'} /></div>
							</Card>
							<Card size="s">
								<div style={{ width: 64, height: 96  }} ><img width={64} height ={96} scr={'https://sun9-63.userapi.com/yOEQYPHrNHjZEoanbqPb65HPl5iojmiLgLzfGA/W3geVMMt8TI.jpg'} /></div>
							</Card>
							<Card size="s">
								<div style={{ width: 64, height: 96  }} />
							</Card>
							<Card size="s">
								<div style={{ width: 64, height: 96  }} />
							</Card>
							<Card size="s">
								<div style={{ width: 64, height: 96  }} />
							</Card>
							<Card size="s">
								<div style={{ width: 64, height: 96  }} />
							</Card>
						</CardScroll>

					</Group>
					<Div>
						<Button size="xl">Записаться</Button>
					</Div>
				</Group>

			</Panel>
		)
	}
}
















Offers.propTypes = {
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

export default Offers;
