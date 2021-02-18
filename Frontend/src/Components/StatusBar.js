import React from "react";

const StatusBar = (props) => {
  const userState = ["Available", "Occupied", "Unknown"];

  return (
    <div>
      <form onSubmit={(event) => props.onSubmit(event.preventDefault())}>
        <label>
          <span style={{ margin: 5 }}>Current status: </span>
          <span style={{ margin: 10, color: "white" }}>
            {props.currentState}&nbsp;
          </span>
          <select
            value={props.selected}
            onChange={(event) => props.onChange(event.target.value)}
          >
            {userState.map((status) => (
              <option value={status}>{status}</option>
            ))}
          </select>
          &nbsp;
        </label>
        <input style={{ alignSelf: "flex-end" }} type="submit" value="Update" />
      </form>
    </div>
  );
};

export default StatusBar;
