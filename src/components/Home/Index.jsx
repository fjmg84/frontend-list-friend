import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFriends } from '../../redux/actions/friends'
import { setAlert } from '../../redux/actions/alerts'
import { TYPES } from '../../redux/types'
import { List } from './List'
import { Spinner } from '../Helps/Spinner'

export const Index = () => {
	const dispatch = useDispatch()
	const { status, msg, classAlert } = useSelector(
		(state) => state.alertsReducer,
	)
	const friends = useSelector((state) => state.friendsReducer)

	useEffect(() => {
		dispatch(setAlert(true, 'Loading friends...', 'loading'))
		getFriends()
			.then((friends) => {
				dispatch({ type: TYPES.LOAD, payload: friends })
				dispatch(setAlert(false, undefined))
			})
			.catch((err) => {
				console.log(err)
				dispatch(
					setAlert(true, 'Up!!! Sorry Not Found List Of Friends :(', 'error'),
				)
			})
	}, [dispatch])

	return (
		<div className="box">
			<div className="body">
				<div className="header">
					<h1>Friends</h1>
					{status && <div className={classAlert}>{msg}</div>}
				</div>

				<div className="main">
					{friends.length > 0 ? <List friends={friends} /> : <Spinner />}
				</div>
			</div>
		</div>
	)
}
