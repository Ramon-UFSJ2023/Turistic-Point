import { useLocation } from "react-router-dom";
import "../style/pageteste.css"
import { useNavigate } from "react-router-dom";

export function PageTeste(){

    const location = useLocation();
    const navigate = useNavigate();

    const user = location.state?.user;
    
    if(!user){
        navigate("/");
        return null;
    }   
    
    const goLoginPage = () => {
        navigate("/",{
            replace: true,
            state: null
        });
    };

    return(
        <div>
            
            <div className="container-btn">
                <button className="btn_logout" 
                    onClick={goLoginPage}
                    >
                    Logout
                </button>
            </div>

            {
                user
                ? <h1>{user.name}</h1>
                : <h1>Usuário não encontrado</h1>
            }

            <h1>
                {user?.is_adm ? 'É adm!' : 'Não é adm!'}
            </h1>

            

        </div>
    )
}