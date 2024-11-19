function Titulo(props){
    return(
        <h2 style={{backgroundColor: "black", color: "yellow", textAlign: "center"}}>
        {props.children}
        </h2>

    )
}

export default Titulo