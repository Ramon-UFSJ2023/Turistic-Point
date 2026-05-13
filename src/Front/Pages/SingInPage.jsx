import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TopBar } from "../components/TopBar";
import { supabase } from "../../Service/supabaseClient";
import "../style/singInPage.css";
import bcrypt from 'bcryptjs';

export const validateCPF = (cpf) => {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
    let sum = 0, rest;
    for (let i = 1; i <= 9; i++) sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    rest = (sum * 10) % 11;
    if ((rest === 10) || (rest === 11)) rest = 0;
    if (rest !== parseInt(cpf.substring(9, 10))) return false;
    sum = 0;
    for (let i = 1; i <= 10; i++) sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    rest = (sum * 10) % 11;
    if ((rest === 10) || (rest === 11)) rest = 0;
    if (rest !== parseInt(cpf.substring(10, 11))) return false;
    return true;
}

export function SingleInPage(){
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCPF] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password != confirmPassword) {
            alert("As senhas não coincidem!")
            return;
        }

        if (!validateCPF(cpf)) {
            alert("CPF inválido! Verifique os números.")
            return;
        }

        setLoading(true);

        try {
            const { data: existingUser, error: checkError } = await supabase
                .from("users")
                .select("username, email, cpf")
                .or(`username.eq.${username}, email.eq.${email}, cpf.eq.${cpf}`);

            if (checkError) alert("Erro: " + checkError.message);
            else {
                if (existingUser && existingUser.length > 0) {
                    const found = existingUser[0];

                    if (found.username === username) alert("Este username já está em uso.");
                    else if (found.email === email) alert("Este email já está cadastrado.");
                    else if (found.cpf === cpf) alert("Este CPF já está cadastrado");

                    setLoading(false);
                    return;
                }

                const salt = bcrypt.genSaltSync(10)
                const passwordHash = bcrypt.hashSync(password, salt);

                const { error: insertError } = await supabase.from("users").insert([{
                    name: name,
                    username: username,
                    email: email,
                    cpf: cpf,
                    birth_date: birthDate,
                    password_hash: passwordHash
                }]);

                if (insertError) alert("Erro ao cadastrar: " + insertError.message);
                else {
                    alert("Cadastro concluído!");
                    navigate("/pageTeste");
                }
            }
        } catch (error) {
            alert("Erro no processo: " + error.message);
        } finally {
            setLoading(false);
        }
    }

    return(
        <div className="SingInPage">
            <TopBar />
            <main className="container-content">
                <section className="content-singIn">
                    <h1>User SingIn</h1>
                    <form className="input-grid" onSubmit={handleRegister}>
                        <input 
                            type="text"
                            name=""
                            id=""
                            className="input-info-singIn" 
                            placeholder="Digite aqui seu nome"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                        <input
                            type="text"
                            name=""
                            id=""
                            className="input-info-singIn"
                            placeholder="Digite aqui seu username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />

                        <input
                            type="email"
                            name=""
                            id=""
                            className="input-info-singIn"
                            placeholder="Digite aqui seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <input
                            type="text"
                            name=""
                            id=""
                            className="input-info-singIn"
                            placeholder="Digite aqui seu CPF"
                            value={cpf}
                            onChange={(e) => setCPF(e.target.value)}
                            required
                        />

                        <input
                            type="date"
                            name=""
                            id=""
                            className="input-info-singIn"
                            placeholder="Digite aqui sua data de nascimento"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                            required
                        />

                        <input
                            type="password"
                            name=""
                            id=""
                            className="input-info-singIn"
                            placeholder="Digite aqui sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <input
                            type="password"
                            name=""
                            id=""
                            className="input-info-singIn"
                            placeholder="Confirme sua senha"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />

                        <input
                            type="submit"
                            value={loading ? "Cadastrando..." : "Cadastrar"}
                            className="input-info-singIn"
                            disabled={loading}
                            style={{ cursor: loading ? "not-allowed" : "pointer" }}
                        />
                    </form>
                </section>
            </main>
        </div>
    )
}