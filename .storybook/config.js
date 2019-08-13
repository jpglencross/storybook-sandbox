import { configure, addDecorator, addParameters } from "@storybook/react";
import { themes } from "@storybook/theming";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import backgrounds from "./backgrounds";

addDecorator(withKnobs);
addDecorator(withA11y);
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
