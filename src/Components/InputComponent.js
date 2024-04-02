
import './InputComponent.css'


function InputComponent(props)
{
    return(
        <>
            
            <label htmlFor={props.labelFor} className="form-label fw-bold">{props.labelContent}</label>
            <input type = {props.type} className={` form-control  mb-1 ${props.className}`}  name={props.name} aria-describedby={props.aria} value={props.value}
            onChange={props.changeFunction}></input>
            <p className="error ">{props.errorMess}</p>
        </>
    )
}
export default InputComponent