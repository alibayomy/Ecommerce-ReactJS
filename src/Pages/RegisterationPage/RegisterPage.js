import { useState } from "react"
import InputComponent from "../../Components/InputComponent"
import MyButtonComponent from "../../Components/MyButtonComponent"

import './RegisterPage.css'

function RegisterPage(props) {

    const emailReg = new RegExp(/^\w+@(gmail| yahoo| hotmail| outlook).(com|org|net|edu)(.eg)?$/)
    const passRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[*@%$#]).+/)

const [trigger, setTrirger] = useState({
    nameTrigger: 1,
    emailTrigger: 1,
    passwordTrigger: 1,
    confPasswordTrigger:1,

})
    const [input, setInput] = useState({
        nameInput: "",
        emailInput: "",
        passwordInput: "",
        confPasswordInput: ""
    })
  

    const [error, setError] = useState({
        nameError: "",
        emailError: "",
        passwordError: "",
        confPasswordError: ""
    })
    const [errorClass, setErrorClass] = useState({
        nameErrorClass: "",
        emailErrorClass: "",
        passwordErrorClass: "",
        confPasswordErrorClass: ""
    })

    const [submitError, setSubmitError] = useState((""))


    function nameValidation(e) {
        
        setInput({ ...input, nameInput: e.target.value })
        if (!e.target.value) {
            setError({ ...error, nameError: "Requird" })
            setErrorClass({ ...errorClass, nameErrorClass: "is-invalid" })
            setTrirger({...trigger, nameTrigger: 1 })
        }
        else {
            setErrorClass({ ...input, nameErrorClass: "is-valid" })
            setError({ ...error, nameError: "" })
            setTrirger({...trigger, nameTrigger: 0 })

        }
    }


    function emailValidation(e) {
        setInput({ ...input, emailInput: e.target.value})
        if (!emailReg.test(e.target.value)) {
            setError({ ...error, emailError: "InvalidInput" })
            setErrorClass({ ...errorClass, emailErrorClass: "is-invalid" })
            setTrirger({...trigger, emailTrigger: 1 })

            
        }
        else {
            setError({ ...error, emailError: "" })
            setErrorClass({ ...error, emailErrorClass: "is-valid" })
            setTrirger({...trigger, emailTrigger: 0 })

        }
    }
   
    function passwordValidation(e) {
        setInput({ ...input, passwordInput: e.target.value })
        if (!passRegex.test(e.target.value)) {
            setError({ ...error, passwordError: "InvalidPassword" })
            setErrorClass({ ...errorClass, passwordErrorClass: "is-invalid" })
            setTrirger({...trigger, passwordTrigger: 1 })


        }
        else {
            setError({ ...error, passwordError: "" })
            setErrorClass({ ...error, passwordErrorClass: "is-valid" })
            setTrirger({...trigger, passwordTrigger: 0 })


        }

    }
    function confPassswordValidation(e) {
        setInput({ ...input, confPasswordInput: e.target.value })
        if (e.target.value != input.passwordInput ) {
            setError({ ...error, confPasswordError: "Passwords do not match" })
            setErrorClass({ ...errorClass, confPasswordErrorClass: "is-invalid" })
            setTrirger({...trigger, confPasswordTrigger: 1 })


        }
        else {
            setError({ ...error, confPasswordError: "" })
            setErrorClass({ ...error, confPasswordErrorClass: "is-valid" })
            setTrirger({...trigger, confPasswordTrigger: 0 })


        }

    }
    function checkSubmission(e) {
        e.preventDefault()
       
       if (trigger.nameTrigger === 0 && trigger.emailTrigger === 0 && trigger.passwordTrigger === 0 && trigger.confPasswordTrigger === 0)
       {
        localStorage.setItem('Users', JSON.stringify(input))
         props.history.push('/login')
       }
       else
       {
        setSubmitError(<div className="alert alert-danger" role="alert">
        Error input please fill the form with no errors
      </div>)
       }
              
    }



    return (
        <>
            <div className="container col-lg-4 col-md-6 col-sm-12 mt-3 border p-5 registerContainer">
                <h1 className="mb-4 loginTitle">Register Now</h1>
                <form onSubmit={(e) => checkSubmission(e)} noValidate className="needs-validation"> 
                    <InputComponent labelFor="name" labelContent="Name"
                        type="input" className={errorClass.nameErrorClass} name="name"
                        value={input.nameInput}
                        changeFunction={(e) => nameValidation(e)} errorMess={error.nameError}></InputComponent>
                    <InputComponent labelFor="email" labelContent="Email address"
                        type="email" className={errorClass.emailErrorClass} name="email" aria="emailHelp"
                        value={input.emailInput}
                        changeFunction={(e) => emailValidation(e)} errorMess={error.emailError}></InputComponent>
                    <InputComponent labelFor="password" labelContent="Password"
                        type="password" className={errorClass.passwordErrorClass} name="password"
                        value={input.passwordInput}
                        changeFunction={(e) => passwordValidation(e)} errorMess={error.passwordError}></InputComponent>
                    <InputComponent labelFor="confPassword" labelContent="Confirm Password"
                        type="password" className={`mb-3 ${errorClass.confPasswordErrorClass}`} name="confPassword"
                        value={input.confPasswordInput}
                        changeFunction={(e) => confPassswordValidation(e)} errorMess={error.confPasswordError}></InputComponent>
                    <div>
                        {submitError}
                    </div>
                    <MyButtonComponent display='d-grid' btnClass='btn-info' title='Register Now'></MyButtonComponent>
                </form>
            </div>
        </>
    )
}
export default RegisterPage