import React from "react";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import Header from "./Header";

storiesOf("Molecule / Header", module).add("default", () => (
  <Header>
    <h2
      style={{
        margin: "auto",
        textTransform: "uppercase",
        fontFamily: "Avenir"
      }}
    >
      {text("Text", "Our new demo website")}
    </h2>
  </Header>
));
