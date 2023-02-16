import React, { useEffect } from "react";

const App = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateAreas: `
            'red    blue  orange'
            'green  blue  purple'
            'footer footer footer'
        `,
        gridTemplateColumns: "100px 1fr 100px",
        gridTemplateRows: "30fr 70fr 100px",
        gap: "20px",

        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          background: "red",
          gridArea: "red",
        }}
      >
        <h1>Hi</h1>
      </div>
      <div
        style={{
          background: "blue",
          gridArea: "blue",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "50%",
            height: "50%",
            background: "yellow",
          }}
        >
          <h1>Middle</h1>
        </div>
        <div
          style={{
            width: "50%",
            height: "50%",
            background: "yellow",
          }}
        >
          <h1>Middle</h1>
        </div>
        <div
          style={{
            width: "50%",
            height: "50%",
            background: "yellow",
          }}
        >
          <h1>Middle</h1>
        </div>
      </div>
      <div
        style={{
          background: "green",
          gridArea: "green",
        }}
      ></div>
      <div
        style={{
          background: "orange",
          gridArea: "orange",
        }}
      ></div>
      <div
        style={{
          background: "purple",
          gridArea: "purple",
        }}
      ></div>
      <div
        style={{
          background: "pink",
          gridArea: "footer",
        }}
      ></div>
    </div>
  );
};

export default App;
