import { ContentWrapper } from "../../components/app/contentwrapper/ContentWrapper"
import axios from "axios"
import { useAuth } from "../../components/providers/AuthProvider"


const Login = () => {
    const { loginData, setLoginData } = useAuth()
    

    const submitHandle = async e => {
        const formdata = new URLSearchParams()
        formdata.append('username', e.target.form.username.value)
        formdata.append('password', e.target.form.password.value)
        
        const endpoint = `http://localhost:4000/login`
        try{
            const result = await axios.post(endpoint, formdata)
            handleSessionData(result.data.access_token)
        } catch(err) {
            console.error(`Kunne ikke logge ind: ${err}`)
        }
    }

    const handleSessionData = (data) => {
        if(data) {
            sessionStorage.setItem('token', JSON.stringify(data))
            setLoginData(data)
        }
    }

    const Logout = () => {
        sessionStorage.removeItem('token')
        setLoginData('')
    }

    return(
        <ContentWrapper title="Login">
            {!loginData ? (
                <form method="POST">
                <div>
                    <label htmlFor="username">Brugernavn:</label>
                    <input type="text" name="username" />
                </div>
                <div>
                    <label htmlFor="Adganskode">Adgangskode:</label>
                    <input type="password" name="password" />
                </div>
                <div>
                    <button type="button" onClick={e => submitHandle(e)}>Login</button>
                </div>
            </form>
            ) : (
                <p>
                    Du er logget ind
                    <button onClick={() => Logout()}>Log ud</button>
                </p>
            )}
        </ContentWrapper>
    )
}

export default Login