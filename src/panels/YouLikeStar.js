import React, {Fragment, Component} from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import PanelHeaderContent from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import {Card, CellButton, Header, IOS, platform} from "@vkontakte/vkui";
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import PersonCard from "../containers/PersonalCard.js";

import logo from "../img/logo.png";
import './logoheader.css';
import './AvatarCenter.css';
import CardGrid from "@vkontakte/vkui/dist/es6/components/CardGrid/CardGrid";

const osName = platform();



class YouLikeStar extends Component {
	constructor(props) {
		super(props);
		this.state = { loading: true, data: null, fetchedUser: props.fetchedUser };
	}


	componentDidMount() {
		console.log(this.props);
		const { id, fetchedUser, go }= this.props;
		fetch('https://redome.simplex48.ru:43210/ReDoMeApi/getStarByFace?photo_link=' + fetchedUser.photo_max_orig)
			.then(response => response.json())
			.then(json => this.setState( {loading: false, data: json} ))
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
					left={<PanelHeaderButton onClick={go} data-to="clientform">
						{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
					</PanelHeaderButton>}
				><img className="LogoHeader" src={logo} alt="RE-DO-ME"/></PanelHeader>


				<Group>
					<Div>
						<CellButton before={<Icon24Add />}>Добавить фотографию</CellButton>
					</Div>
					{fetchedUser &&
					<Div className="AvatarCenter"><Avatar size={{width: 200, height: 200 }} mode="image" src={fetchedUser.photo_200} /></Div>
					}

				</Group>

				<Group>
					<Header >На Вас похожи</Header>

					{console.log(data)}



									{data.items.map(item => <PersonCard data={item} /> )}







					<Header mode="secondary">Анджелина Джоли (на 40%)</Header>

				</Group>
			</Panel>
		)
	}
}





YouLikeStar.propTypes = {
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

export default YouLikeStar;
