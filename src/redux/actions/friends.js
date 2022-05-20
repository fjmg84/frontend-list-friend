import axios from 'axios'

/* import data_list from "../../data/data.json";*/
/* import data_user from '../../data/data_user.json' */
import { photos } from '../../images/index'

export const getFriends = async () => {
	let url = 'http://private-5bdb3-friendmock.apiary-mock.com/friends'
	const { data } = await axios.get(url)
	window.sessionStorage.setItem('friends', JSON.stringify(data))
	return data
}

export const findOneFriend = async (id) => {
	let url = 'https://private-5bdb3-friendmock.apiary-mock.com/friends/id'
	const { data } = await axios.get(url)
	//This is only necessary for manager photos
	data.photos = photos
	return data
}
