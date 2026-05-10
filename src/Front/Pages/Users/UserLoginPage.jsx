import { LoginPage } from "../../components/LoginPage";
import "../../style/userLoginPage.css"


export default function UserLoginPage(){
    return(
        <div className="userLogin">
            <LoginPage title={"User Login"} showLinkCadastro={true}/>
        </div>
    )
}
