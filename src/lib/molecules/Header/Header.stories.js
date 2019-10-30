import React from "react";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import Header from "./Header";

storiesOf("Molecule / Header", module)
  .add("default", () => (
    <Header>
      <h2
        style={{
          margin: "auto",
          textTransform: "uppercase",
          fontFamily: "Avenir"
        }}
      >
        {text("Text", "Demo website")}
      </h2>
    </Header>
  ))
  .add("with Icon", () => (
    <Header>
      <div style={{ display: "flex" }}>
        <img
          src="https://cdn2.iconfinder.com/data/icons/anchor-8/288/anchor-02-512.png"
          alt="anchor logo"
          style={{ height: "40px" }}
        />
        <h2
          style={{
            margin: "auto",
            textTransform: "uppercase",
            fontFamily: "Avenir"
          }}
        >
          {text("Text", "Endeavour")}
        </h2>
      </div>
    </Header>
  ));
