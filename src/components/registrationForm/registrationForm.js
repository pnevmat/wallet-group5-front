import React, {useState} from 'react';
import { NavLink } from "react-router-dom";

const RegistrationForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatePassword] = useState('');
    const [name, setName] = useState('');

    const handleChange = e => {
        const {name, value} = e.target;
        switch(name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'repeatPassword':
                setRepeatePassword(value);
                break;
            case 'name':
                setName(value);
                break;
            default:
                console.log('error');
        };
    };

    const handleSubmit = () => {
        const {onRegistrationSubmit} = props;

        onRegistrationSubmit({email, password, repeatPassword, name});
    };

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit()
            }}>
                <label htmlFor="" name="register" >
                    <input type="text" placeholder="E-mail" name="email" onChange={e => {
                        handleChange(e);
                    }}/>
                </label>
                <label>
                    <input  type="text" placeholder="Пароль" name="password" onChange={e => {
                        handleChange(e);
                    }}/>
                </label>
                <label>
                    <input  type="text" placeholder="Подтвердите пароль" name="repeatPassword" onChange={e => {
                        handleChange(e);
                    }}/>
                </label>
                <label>
                    <input  type="text" placeholder="Ваше имя" name="name" onChange={e => {
                        handleChange(e);
                    }}/>
                </label>
                <button type="submit">Регистрация</button>
                <NavLink to='/login'>Вход</NavLink>
            </form>
        </div>
    );
};

export default RegistrationForm;