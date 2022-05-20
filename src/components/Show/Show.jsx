import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { MdKeyboardBackspace } from 'react-icons/md'
import { findOneFriend } from '../../redux/actions/friends'
import { setAlert } from '../../redux/actions/alerts'
import { Info } from './Details/Info'
import { Photos } from './Details/Photos'
import { avatar } from '../../images/index'
import { Spinner } from '../Helps/Spinner'

export const Show = () => {
	let { id } = useParams()

	const dispatch = useDispatch()
	const { status, msg, classAlert } = useSelector(
		(state) => state.alertsReducer,
	)
	const friends = useSelector((state) => state.friendsReducer)
	const [view, setView] = useState(true)
	const [friend, setFriend] = useState({})
	const statusOfFriend = friends.filter((friend) => friend.id === +id)[0]

	const navigate = useNavigate()

	useEffect(() => {
		dispatch(setAlert(true, 'Loading...', 'loading'))
		findOneFriend(id)
			.then((friend) => {
				setFriend(friend)
				dispatch(setAlert(false, undefined))
			})
			.catch((err) => {
				console.error(err)
				dispatch(
					setAlert(
						true,
						'Up!!! Sorry. Not Found Data For This Friend :(.',
						'error',
					),
				)
			})
	}, [id, dispatch])

	return (
		<div className="box">
			<div className="icons icons-blue arrow">
				<span className="fill vector" onClick={() => navigate('/')}>
					<MdKeyboardBackspace size={24} />
				</span>
			</div>

			<div className="body">
				<div className="header">
					<h1>Friend</h1>
					{status && <div className={classAlert}>{msg}</div>}
				</div>

				<div className="main">
					{friend?.first_name ? (
						<div className="show-card">
							<div className="show-card-img">
								<img src={avatar} alt={friend.img} className="medium" />
								<span className="availability eclipse available"></span>
							</div>

							<div className="show-card-content">
								<p className="details-name">{`${friend.first_name} ${friend?.last_name}`}</p>
								<div className="show-card-header-status">
									<span className="details-status">
										{statusOfFriend?.status}
									</span>
								</div>

								<div className="show-card-box-data">
									<div className="nav">
										<div className={`tab ${view ? 'active' : 'inactive'}`}>
											<span onClick={() => setView(!view)}>Info</span>
											<span className={`${view ? 'line' : ''}`}></span>
										</div>
										<div className={`tab ${!view ? 'active' : 'inactive'}`}>
											<span onClick={() => setView(!view)}>Photos</span>
											<span className={`${!view ? 'line' : ''}`}></span>
										</div>
									</div>

									<div className="section">
										{view ? (
											<Info friend={friend} />
										) : (
											<Photos photos={friend.photos} />
										)}
									</div>
								</div>
							</div>
						</div>
					) : (
						<Spinner />
					)}
				</div>
			</div>
		</div>
	)
}
