import { LoginForm } from '../Login/Login'
import ShowWeather from '../ShowWeather/ShowWeather'
import { useSelector, type TypedUseSelectorHook } from 'react-redux'
import type { RootState } from '../../app/story'


const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const Home = () => {
    const token = useAppSelector((state) => state.auth.token)
    const user = !!token;

    return (
        <div className="home">
            <div className="container">
                {user ? (
                    <ShowWeather />
                    ) : (
                    <LoginForm />
                )}
            </div>
            
        </div>
        
    )
}