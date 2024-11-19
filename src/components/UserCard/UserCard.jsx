import "./style.css";
function Usercard(props) {

    const carreganndo = false;

    if (carreganndo) {
        return(
            <article className="user-card">
                <p>Carregando...</p>
            </article>
        );
    }
    
    return (
        <article className="user-card">
            <img src={props.avatar} alt="Foto de Perfil" width={300}/>
            <p>Nome: {props.nome}</p>
            <p>Idade: {props.idade} anos</p>
            <p>Ocupação: {props.ocup != undefined ? props.ocup: "Não definido"}</p>
           
        </article>
    );
}
export default Usercard;