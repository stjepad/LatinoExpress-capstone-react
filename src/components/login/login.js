import React, { Component } from "react"
import LoginManager from "../../modules/loginManager"
import "./login.css"





export default class Login extends Component {


    state = {
        email: "",
        username: "",
        password: "",
        remember: false
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    // Simplistic handler for login submit
    handleLogin = (e) => {


        e.preventDefault()

        let existingUser = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password

        }

        //Check if the values are already used in database
        LoginManager.getAll().then((result) => {
            let userObject = result.find(item => {
                return existingUser.username === item.username && existingUser.email === item.email && existingUser.password === item.password
            })
            if (!userObject) {
                alert("UserName or Email is incorrect")
            } else if (this.state.remember) {
                localStorage.setItem(
                    "credentials",
                    JSON.stringify({
                        email: this.state.email,
                        username: this.state.username,
                        id: userObject.id
                    })
                )
                window.location.href="http://localhost:3000/userpage"
            } else {
        /*
            For now, just store the email and password that
            the customer enters into local storage.
        */
        sessionStorage.setItem(
            "credentials",
            JSON.stringify({
                email: this.state.email,
                username: this.state.username,
                id: userObject.id
            })
        )

        window.location.href="http://localhost:3000/userpage"
    }
})
}

    registerUser = (e) => {

        e.preventDefault()

        let newUser = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password

        }
        //Check if the values are already used in database
        LoginManager.getAll().then((result) => {
            let userName = result.find(item => {
                return newUser.username === item.username
            })
            let userEmail = result.find(item => {
                return newUser.email === item.email
            })
            if (userName) {
                alert("UserName already taken")
            } else if (userEmail) {
                alert("Email is already taken")
            } else {
                //Post to API
                LoginManager.post(newUser).then(() => {
                    //Clear the Form Fields
                    alert("You are now registered!")
                    //Put HTML Representation on the DOM
                })
            }
        })
    }

    changeRememberMe = () => {

        if (this.state.remember) {
            this.setState({remember : false})
        } else {
            this.setState({remember : true})
        }
    }




    render() {



        return (

            <form onSubmit={this.handleLogin} className="login">
            <div id="logo"></div>
            <div className ="loginForm">
                {/* <h1 className="h3 mb-3 font-weight-normal">Please Log In</h1> */}
                {/* <label htmlFor="inputEmail">
                    Email address
                </label> */}
                <input onChange={this.handleFieldChange} type="email"
                       id="email"
                       placeholder="Email address"
                       required="" autoFocus="" /><br />
                {/* <label htmlFor="inputUsername">
                    Username
                </label> */}
                <input onChange={this.handleFieldChange} type="username"
                       id="username"
                       placeholder="Username"
                       required="" /><br />
                {/* <label htmlFor="inputPassword">
                    Password
                </label> */}
                <input onChange={this.handleFieldChange} type="password"
                       id="password"
                       placeholder="Password"
                       required="" /><br />
                {/* <label htmlFor="rememberMe">
                    Remember Me
                </label> */}
                {/* <input type="checkbox" name="RememberMe" value="Remember" onClick={this.changeRememberMe}/> */}

                <div id="loginButtons">
                <button type="submit" id="register" onClick={(e) => this.registerUser(e)}>
                    Register
                </button>
                <button type="submit" id="login" onClick={this.handleLogin}>
                    Login
                </button>
                </div>
            </div>
            </form>
        )
    }
}