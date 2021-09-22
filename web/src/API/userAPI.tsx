let userApiUrl:string

if (process.env.REACT_APP_PRODUCTION) {
  userApiUrl = `${process.env.REACT_APP_API_URL}`
} else {
  userApiUrl = 'http://127.0.0.1:8081/api/users/'
}

export default userApiUrl