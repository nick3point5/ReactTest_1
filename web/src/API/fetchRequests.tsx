import React, { useState, useEffect } from 'react';
import userApiUrl from './userAPI';

function generateFetch(url:string) {
	return (initState:any, params:any = '') => {
		const [ data, setData ] = useState(initState)
		const [ error, setError ] = useState()

		function fetchData() {
			fetch(`${url}${params}`, {
				method: 'GET'
			})
			.then(res => {
					return res.json()
			})
			.then(res => {
				if (res?.error) {
					setError(res?.error.toString())
				}else{
					setData(res)
				}
			})
			.catch(error =>{
				console.log(error)
				setError(error.toString())
			})
			console.log(error)
		}

		useEffect(() => {
			fetchData()
		}, [])
		return [data, error]
	}
}

export const useFetchAll = generateFetch(userApiUrl)
export const useFetchUser = generateFetch(userApiUrl)
