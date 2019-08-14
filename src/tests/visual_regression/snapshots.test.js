import initStoryshots from "@storybook/addon-storyshots";
import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer";

//  TODO: Look into testing from file NOT url
initStoryshots({
  suite: "Image storyshots",
  test: imageSnapshot({
    storybookUrl: `http://localhost:6006`
  })
});
