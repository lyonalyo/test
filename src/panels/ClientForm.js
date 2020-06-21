import React, {Fragment, Component} from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import {Button, Group, Input, FormLayout, Textarea, File, Header} from '@vkontakte/vkui';

import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import PanelHeaderContent from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import {IOS, platform} from "@vkontakte/vkui";
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Camera from '@vkontakte/icons/dist/24/camera';
import axios from 'axios';
//import ReactDOM from 'react-dom';


import logo from "../img/logo.png";
import './logoheader.css';

const osName = platform();

class ClientForm extends Component {
	constructor(props) {
		super(props);
		this.state = {loading: true, album_id: null, fetchedUser: props.fetchedUser, foto1: "sdsf", foto2:""};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		console.log(this.props);
		const { id, fetchedUser, go }= this.props;
		fetch('https://redome.simplex48.ru:43210/ReDoMeApi/Request/GetByClient?client=' + fetchedUser.id)
			.then(response => response.json())
			.then(json => this.setState( {loading: false, zayavki: json} ))

	}

	handleChange(event) {
		this.setState({foto1: event.target.value});
		{console.log(this.foto1)}
	}

	handleChange2(event) {
		this.setState({foto2: event.target.value});
		{console.log(this.foto2)}
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
					left={<PanelHeaderButton onClick={go} data-to="client">
						{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
					</PanelHeaderButton>}
				><img class="LogoHeader" src={logo} alt="RE-DO-ME" /></PanelHeader>


				<Group>
					<FormLayout onSubmit={this.handleSubmit}>
						{console.log(this.foto1)}
						<Input type="text" value={this.foto1} onChange={this.handleChange} />

						{console.log(this.foto2)}
						<Input type="text" value={this.foto2} onChange={this.handleChange2} />

						<Div>
							<Button size="xl" level="2" onClick={go} data-to="youlikestar">
								Найти похожую звезду
							</Button>
						</Div>
						<Textarea top="Ваш комментарий" placeholder="Хочу стрижку! Хочу макияж! Хочу укладку!" />

						<Div>
							<Button size="xl" level="2" onClick={go} data-to="persik">
								Поиск мастера
							</Button>
						</Div>
					</FormLayout>
				</Group>
			</Panel>
		)
	}
}


ClientForm.propTypes = {
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

export default ClientForm;
