import { useState } from "react"
import InputComponent from "../../Components/InputComponent"
import MyButtonComponent from "../../Components/MyButtonComponent"
import './LogInPage.css'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"




function LogInPage() {

    const [input, setInput] = useState(({
        emailInput: "",
        passwordInput: ""
    }))

    const [submitError, setSubmitError] = useState((""))
    const history = useHistory()
    function signInFunc(e) {
        e.preventDefault()
        const User = JSON.parse(localStorage.getItem('Users'))
        if (User) {
            if (User.emailInput === input.emailInput && User.passwordInput === input.passwordInput) {
                setSubmitError('')
                localStorage.setItem('CurrentUser', JSON.stringify(input))
                history.push('/')
            }
            else {
                setSubmitError(<div className="alert alert-danger" role="alert">
                    Wrong Input, User not found
                </div>)
            }
        }
        else {
            setSubmitError(<div className="alert alert-danger" role="alert">
                Wrong Input, User not found
            </div>)


        }
    }
    return (
        <>
            <div className="container col-lg-4 col-md-6 col-sm-12 mt-5 border p-5 ">
                <h1 className="mb-4 loginTitle">Log In</h1>
                <form>
                    <InputComponent labelFor="inputEmail" labelContent="Email address"
                        type="email" name="inputEmail" aria="emailHelp"
                        changeFunction={(e) => setInput({ ...input, emailInput: e.target.value })}></InputComponent>
                    <InputComponent labelFor="inputPassowrd" labelContent="Password"
                        type="password" className=" mb-3" name="inputPassowrd"
                        changeFunction={(e) => setInput({ ...input, passwordInput: e.target.value })}></InputComponent>
                    <div>{submitError}</div>
                    <MyButtonComponent display='d-grid' btnClass='btn-success' title='Sign In' clickFunc={(e) => signInFunc(e)}></MyButtonComponent>
                </form>
            </div>
        </>
    )
}

export default LogInPage