import React, {useState} from 'react';
import Title from "../Title/Title";
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';
import "./Form.css"
import search from "../../Imgs/search.png"



function Form(props) {

    const [valueType, setValueType] = useState("")
    const [enteredSearch, setEnteredSearch] = useState(false);
    const [clickButton, setClickButton] = useState(false)

    const searchChangeHandler = event => {
        setValueType(event.target.value);
        if(event.target.value.trim().length > 0){
            setEnteredSearch(true)
        }else {
            setEnteredSearch(false)
        }
    };
    const startClickHandler = e => {
        e.preventDefault();
        setClickButton(true)
        //Child to parent component, Form to Page
        props.onInputForm(valueType);
        props.onSearchWithoutClick(false)
    }

    return (
        <div  className= {`${clickButton ? "header-search" : "midle-search"}`}>
            <Title/>
            <form>
                <div>
                    <img src={search} alt="search" onClick={startClickHandler}></img>
                    <input onChange={searchChangeHandler} type='text'/>
                </div>
                <button className= {`${enteredSearch ? "onButton" : "offButton"}`} onClick={startClickHandler} value={valueType} type="submit">Buscar</button>
            </form>
        </div>
    );
}

export default Form;