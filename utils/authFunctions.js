import axios from 'axios'

axios.defaults.withCredentials = true

function signup(email, password) {
    axios.post("http://localhost:8080/api/auth/signup", {email, password, roles: ["ROLE_USER"]})
        .then((res) => {
            if (res.status == 200) {
                console.log("Registration succesful. Logging in...")
                login()
            } else {
                // Show Registration Error
            }
        }) 
        .catch((err) => console.log(err))
}

function login(email, password) {
    axios.post("http://localhost:8080/api/auth/signin", {email, password})
        .then((res) => {
            if (res.status == 200) {
                console.log("Login succesful.")
            } else {
                // Show Login Error
            }
        })
}

export { signup, login }