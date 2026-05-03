import "../style/loginPage.css";
import { TopBar } from "../components/TopBar";
import logoImg from "../assets/LogoSite1.png"

export function LoginPage() {
  return(
    <div className="login-page">
        <TopBar />
        <main className="container-content">
            <section className="content-box">
                <img src={logoImg} alt="" className="img-page-login-icon"/>
                <div className="cont-info-login">
                    <h1 className="title-login-page">User Login</h1>
                    <form action="">
                        <input type="text" name="username" id="" className="input-login-register" placeholder="Digite aqui seu username"/>
                        <input type="password" name="password" id="" className="input-login-register" placeholder="Digite aqui sua senha"/>
                        <input type="submit" value="Login" className="btn-login" placeholder="Login"/>
                    </form>
                </div>
            </section>
        </main>
    </div>
  )
}
