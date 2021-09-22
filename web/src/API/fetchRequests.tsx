import React, { useState, useEffect, useRef } from 'react';

let userApiUrl:string

if (process.env.REACT_APP_PRODUCTION) {
  userApiUrl = `${process.env.REACT_APP_API_URL}`
} else {
  userApiUrl = 'http://127.0.0.1:8081/api/users/'
}

function generateFetch(initState:any,url:string) {
	return ( params:string = '') => {
		const [ data, setData ] = useState(initState)
		const [ error, setError ] = useState()
		const loading = useRef(true)

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
		}

		useEffect(() => {
			fetchData()
		}, [])

		useEffect(() => {
			loading.current = false
		}, [setData,setError])

		return [data, error, loading.current]
	}
}

const defaultUser ={
	"id": "",
	"first_name": "",
	"last_name": "",
	"email": "",
	"favorite_color": "",
	"number_of_pets": 0
}

export const useFetchAll = generateFetch([],userApiUrl)
export const useFetchUser = generateFetch(defaultUser,userApiUrl)
