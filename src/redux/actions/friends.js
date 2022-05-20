import axios from 'axios'

/* import data_list from "../../data/data.json";*/
/* import data_user from '../../data/data_user.json' */
import { photos } from '../../images/index'

export const getFriends = async () => {
	const data = JSON.parse(window.sessionStorage.getItem('friends'))

	if (!data) {
		let url = 'http://private-5bdb3-friendmock.apiary-mock.com/friends'
		const { data } = await axios.get(url)
		window.sessionStorage.setItem('friends', JSON.stringify(data))
		return data
	} else return data
}

export const findOneFriend = async (id) => {
	const data = JSON.parse(sessionStorage.getItem('friend_details'))
	if (!data) {
		let url = 'https://private-5bdb3-friendmock.apiary-mock.com/friends/id'
		const { data } = await axios.get(url)
		//This is only necessary for manager photos
		data.photos = photos
		window.sessionStorage.setItem('friend_details', JSON.stringify(data))
		return data
	} else return data
}
