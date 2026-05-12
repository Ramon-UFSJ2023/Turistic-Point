import "../style/loginPage.css";
import { TopBar } from "../components/TopBar";
import logoImg from "../assets/LogoSite1.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../../Service/supabaseClient";

export default function LoginPage() {
  const navigate = useNavigate();
  const goSingInPage = () => {
    navigate("/singInPage");
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .eq("password_hash", password);

    if (error) {
      alert("Erro na conexão " + error.message);
    } else if (data && data.length > 0) {
      alert("Login feito com sucesso");
      navigate("/pageTeste");
    } else {
      alert("Email ou senha errados")
    }
    setLoading(false);
  };

  return (
    <div className="login-page">
      <TopBar />
      <main className="container-content">
        <section className="content-box">
          <img src={logoImg} alt="" className="img-page-login-icon" />
          <div className="cont-info-login">
            <h1 className="title-login-page">Login</h1>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                name="email"
                id=""
                className="input-login-register"
                placeholder="Digite aqui seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                name="password"
                id=""
                className="input-login-register"
                placeholder="Digite aqui sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="btn-login" disabled={loading}>
                {loading ? "Entrando..." : "Login"}
              </button>
              <h1 className="link-cad">
                Não está cadastrado?{" "}
                <span
                  className="link-cad"
                  id="direction-login"
                  onClick={goSingInPage}
                  style={{ cursor: "pointer" }}
                >
                  Cadastre-se
                </span>
              </h1>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
