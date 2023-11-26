//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
import Config from "./config/config.js";
import { Form, FormText, SubmitButton } from "uu5g05-forms";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const NewMember = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "NewMember",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <Form onSubmit={props.onSubmit}>
        <div className={Config.Css.css("display: flex; justify-content: left")}>
          <FormText name="newMember" placeholder="Member username" required />
          <SubmitButton>Add new member</SubmitButton>
        </div>
      </Form>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { NewMember };
export default NewMember;
//@@viewOff:exports
