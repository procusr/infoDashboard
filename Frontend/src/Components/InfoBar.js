import React from "react";

const InfoBar = (props) => {
  const toggleStyle = (status) => {
    switch (status) {
      case "Available":
        return "green";

      case "Occupied":
        return "red";

      case "Unknown":
        return "gray";

      default:
        return "";
    }
  };

  const colorValue = toggleStyle(props.status);

  const style = {
    name: { padding: 16 },
    status: { fontSize: 40, color: `${colorValue}` },
    container: {
      display: "flex",
      flexDirection: "row",
      width: 400,
      height: 40,
      justifyContent: "space-between",
      marginLeft: 30,
    },
  };

  return (
    <div style={{ width: 500 }}>
      <div style={style.container}>
        <span style={style.name}>{props.name}</span>
        <span style={style.status}>☺</span>
      </div>
      <hr />
    </div>
  );
};

export default InfoBar;
