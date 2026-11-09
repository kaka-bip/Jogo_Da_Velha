export const  Menu = ({onEscolherModo}) => {
    return(
        <>
        <main className="menu">
            <h1>JOGO DA VELHA</h1>
            <p>Escolha como deseja jogar:</p>

            <div className="opcoes">
                <button onClick={() => onEscolherModo("bot")}>
                    Contra Bot
                </button>
                <button onClick={() => onEscolherModo("amigo")}>
                    Contra Amigo
                </button>
            </div>
        </main>
        </>
    )
}