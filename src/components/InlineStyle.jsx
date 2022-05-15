export const InlineStyle = () => {
  const containerStyle = {
    border: "solid",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const titleStyle = {};
  const buttonStyle = {};

  return (
    <div style={containerStyle}>
      <p>Inline</p>
      <button>FIGHT!</button>
    </div>
  );
};
