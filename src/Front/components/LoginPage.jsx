import "../style/loginPage.css";
import { TopBar } from "./TopBar";
import logoImg from "../assets/LogoSite1.png";
import { useNavigate } from "react-router-dom";

export function LoginPage({ title, showLinkCadastro }) {
  const navigate = useNavigate();
  const goSingInPage = () => {
    navigate("/singInPage");
  };
  return (
    <div className="login-page">
      <TopBar />
      <main className="container-content">
        <section className="content-box">
          <img src={logoImg} alt="" className="img-page-login-icon" />
          <div className="cont-info-login">
            <h1 className="title-login-page">{title}</h1>
            <form action="">
              <input
                type="text"
                name="username"
                id=""
                className="input-login-register"
                placeholder="Digite aqui seu username"
              />
              <input
                type="password"
                name="password"
                id=""
                className="input-login-register"
                placeholder="Digite aqui sua senha"
              />
              <input
                type="submit"
                value="Login"
                className="btn-login"
                placeholder="Login"
              />
              {showLinkCadastro && (
                <h1 className="link-cad">
                  Não está cadastrado?{" "}
                  <a
                    className="link-cad"
                    id="direction-login"
                    onClick={goSingInPage}
                    style={{ cursor: "pointer" }}
                  >
                    Cadastre-se
                  </a>
                </h1>
              )}
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
