import React from 'react';
import PropTypes from 'prop-types';
import Sliders from '../components/Sliders';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';
import './Home.css';

/*const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Bomj Clicker</PanelHeader>
		{fetchedUser &&
		<Group header={<Header mode="secondary">Это крутой чел:</Header>}>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : 'test'}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<Group header={<Header mode="secondary">Меню</Header>}>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="persik">
					Покажи мне фоточку пж
				</Button>
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
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
};*/

const Home = ({ id, snackbarError, fetchedState }) => {

	return (
		<Panel id={id}>
			<PanelHeader>TEST TEXT</PanelHeader>
			{fetchedState && <Sliders fetchedState={fetchedState} snackbarError={snackbarError} />}
		</Panel>
	);
};

export default Home;
