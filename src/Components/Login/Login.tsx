import { FormField } from "../FormField/FormField";
import { Button } from "../Button/Button";
import { setToken } from "../../features/auth/AuthSlice";
import { useState, type FormEvent } from "react";
import { useDispatch } from "react-redux";
import Icon from "../Icon/Icon";



export const LoginForm =  () => {
    const [email, setEmail] = useState('eve.holt@reqres.in');
    const [password, setPassword] = useState('cityslicka');
    const [error] = useState('');
    const dispatch = useDispatch();

    
    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' ,
            'x-api-key': 'reqres-free-v1'
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
        if (data.token) {
        dispatch(setToken(data.token));
        }
    };

    return (
        <form className="login-form" onSubmit={handleLogin}>
            <FormField >
                <input
                type="email"
                placeholder="Электронная почта"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                />
                <Icon name="auth" />
            </FormField>

            <FormField>
                <input
                type="password"
                placeholder="Пароль"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <Icon name="password" />
            </FormField>
                {error && <span className="form-field__error-text">Ошибка входа! Проверьте введенные данные.</span>}

            <Button
                type="submit"
                className="btn"
                >
                    Воитй
            </Button>
        </form>
    );
}