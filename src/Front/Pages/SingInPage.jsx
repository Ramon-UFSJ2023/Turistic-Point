import { TopBar } from "../components/TopBar";
import "../style/singInPage.css"

export function SingleInPage(){
    return(
        <div className="SingInPage">
            <TopBar />
            <main className="container-content">
                <section className="content-singIn">
                    <h1>User SingIn</h1>
                    <div className="input-grid">
                        <input type="text" name="" id="" className="input-info-singIn" placeholder="Digite aqui seu nome"/>
                        <input type="email" name="" id="" className="input-info-singIn" placeholder="Digite aqui seu email"/>
                        <input type="text" name="" id="" className="input-info-singIn" placeholder="Digite aqui seu CPF"/   >
                        <input type="date" name="" id="" className="input-info-singIn" placeholder="Digite aqui sua data de nascimento"/>
                        <input type="password" name="" id="" className="input-info-singIn" placeholder="Digite aqui sua senha"/>
                        <input type="password" name="" id="" className="input-info-singIn" placeholder="Digite aqui sua senha"/>
                        <input type="submit" value="" className="input-info-singIn"/>
                    </div>

                </section>
            </main>
        </div>
    )
}