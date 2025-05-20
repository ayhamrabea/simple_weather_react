import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import { Button } from "../Button/Button"
import type { RootState } from "../../app/story";
import { logout } from "../../features/auth/AuthSlice";




const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const Navbar = () => {
    const token = useAppSelector((state) => state.auth.token)
    const user = !!token;
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return(
        <div className="header">
            <div className="container">
                <div className="navbar">
                    <div className="navbar__logo">
                        <img src="https://static.tildacdn.com/tild6331-3166-4739-b331-363362666439/Group_108_3.svg" alt="logo-Travel" />
                    </div>
                    <div className="navbar__auth">
                        {user && 
                        <Button className="btn-auth" onClick={handleLogout}>
                            logout
                        </Button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

