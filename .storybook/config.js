import { configure, addDecorator, addParameters } from "@storybook/react";
import { themes } from "@storybook/theming";
import { withKnobs } from "@storybook/addon-knobs";
import backgrounds from "./backgrounds";

addDecorator(withKnobs);
addParameters({ backgrounds: backgrounds });
addParameters({
  options: {
    theme: themes.dark
  }
});

function loadStories() {
  const req = require.context("../src/lib", true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
