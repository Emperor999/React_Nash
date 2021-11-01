import Welcome from "./component/Welcome/Welcome";
import './App.css';
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import Counter from "./component/counter/Counter";
import { useState } from "react";
import CheckBoxs from "./component/CheckBoxs/CheckBoxs";
import Pokemonpage from "./pages/PokemonPage/Pokemonpage";
import RegistrationForm from "./component/Registration Form/RegistrationForm";
import React from "react";

const OPTIONS = {
    WELCOME: "Welcome",
    COUNTER: "Counter",
    CHECKBOX: "Checkboxs",
    POKEMON: "Pokemon",
    REGISTFORM: "Registration Form"
}
const App = () => {
    const [value, setValue] = useState(10);
    const [optionSelected, setOptionSelected] = useState(OPTIONS.WELCOME);
    const handleOnChange = (evt) => {
        setOptionSelected(evt.target.value);
    }
    const getPage = () => {
        switch (optionSelected) {
            case OPTIONS.WELCOME:
                return <WelcomePage />;
            case OPTIONS.COUNTER:
                return <Counter
                    value={value}
                    setValue={setValue} />;
            case OPTIONS.CHECKBOX:
                return <CheckBoxs />;
            case OPTIONS.POKEMON:
                return <Pokemonpage />
            case OPTIONS.REGISTFORM:
                return <RegistrationForm/>;
            default:
                return <div>Nothing</div>
        }


    }
    return (
        <div className="app-container">
            <select value={optionSelected}
                onChange={handleOnChange}
            >
                <option value={OPTIONS.WELCOME}>Welcome</option>
                <option value={OPTIONS.COUNTER}>Counter</option>
                <option value={OPTIONS.CHECKBOX}>Checkboxs</option>
                <option value={OPTIONS.POKEMON}>Pokemon</option>
                <option value={OPTIONS.REGISTFORM}>Registration Form</option>
            </select>
            <div>Option selected : {optionSelected}</div>
            {/* <div>Counter : {value}</div> */}
            {getPage()}
        </div>
    );
}
export default App;