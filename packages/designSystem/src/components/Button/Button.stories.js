import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import * as Steps from 'screener-runner/src/steps';

import {
  withKnobs,
  text,
  number,
  boolean,
  array,
  select,
  color,
  date
} from "@storybook/addon-knobs";

import myButton from "./Button.vue";

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { myButton },
    template: `<my-button> Button </my-button>`
  }));