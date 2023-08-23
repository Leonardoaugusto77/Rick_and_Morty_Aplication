export default function Characters_Section(): JSX.Element {
  const squareStyle = {
    width: "100px",
    height: "100px",
    backgroundColor: "blue",
    margin: "0 auto", // Centraliza horizontalmente
    display: "flex",
    alignItems: "center", // Centraliza verticalmente
    justifyContent: "center", // Centraliza horizontalmente

    marginRight: "15px",
  };

  const display = {
    display: "flex",
    justifyContent: "center", // Note a correção no nome da propriedade
    alignItems: "center", // Note a correção no nome da propriedade
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>The most charismatic</h2>
      <div style={display}>
        <div className="card_section">
          <div style={squareStyle}></div>
        </div>
        <div className="card_section">
          <div style={squareStyle}></div>
        </div>
        <div className="card_section">
          <div style={squareStyle}></div>
        </div>
        <div className="card_section">
          <div style={squareStyle}></div>
        </div>
      </div>
    </>
  );
}
