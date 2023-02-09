import { ContentWrapper } from "../../components/app/contentwrapper/ContentWrapper"
import axios from "axios"


const Login = () => {
    

    const submitHandle = async e => {
        const formdata = new URLSearchParams()
        formdata.append('username', e.target.form.username.value)
        formdata.append('password', e.target.form.password.value)
        
        const endpoint = `http://localhost:4000/login`
        try{
            const result = await axios.post(endpoint, formdata)
            handleSessionData(result)
        } catch(err) {
            console.error(`Kunne ikke logge ind: ${err}`)
        }
    }

    const handleSessionData = data => {
        if(data) {
            sessionStorage.setItem('token', JSON.stringify(data))
        }
    }

    return(
        <ContentWrapper title="Login">
            <form method="POST">
                <div>
                    <label htmlFor="username">Brugernavn:</label>
                    <input type="text" name="username" />
                </div>
                <div>
                    <label htmlFor="adgangskode">Adgangskode:</label>
                    <input type="password" name="password" />
                </div>
                <div>
                    <button type="button" onClick={e => submitHandle(e)}>Login</button>
                </div>
            </form>
        </ContentWrapper>
    )
}

export default Login