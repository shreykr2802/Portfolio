import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAuthStart } from "../../../redux/slices/authSlice";
import useSelector from "../../../utils/useSelector";
import LoginScreenInput from "../../atoms/LoginScrenInputSection/LoginScreenInputSection";
import Button from "../../button/Button";
import Header from "../../header/Header";
import classes from "./LoginScreen.module.scss";

const LoginScreen = () => {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const dispatch = useDispatch();
    const authToken = useSelector(state => state.auth.token);
    const router = useRouter();

    const fetchAuthentication = () => {
        dispatch(fetchAuthStart({ username, password }));
    }

    useEffect(() => {
        if (authToken) {
            router.push("/admin/home");
        }
    }, [authToken]);

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
            router.push("/admin/home");
        }
    }, [])

    return (
        <>
            <Header />
            <div className={classes['login-screen-container']}>
                <div className={classes['main-text-intro']}>
                    <p>Login</p>
                </div>
                <LoginScreenInput inputType="text" name="Username" value={username} setValue={setUsername} />
                <LoginScreenInput inputType="password" name="Password" value={password} setValue={setPassword} />
                <Button type="other" text="Login" onClick={fetchAuthentication} />
            </div>
        </>
    )
}

export default LoginScreen;