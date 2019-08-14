import React from "react";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Atoms / Button", module)
  .add("default", () => <Button>{text("Text", "Submit Buttons")}</Button>)
  .add("with emoji", () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
