//@@viewOn:imports
import { createVisualComponent, Utils, Content, Lsi } from "uu5g05";
import Config from "./config/config.js";
import { Button, Modal } from "uu5g05-elements";
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

const EditNameModal = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "EditNameModal",
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
      <Modal
        open={props.show}
        onClose={props.onClose}
        actionDirection="horizontal"
        header={<Lsi lsi={{ en: "Edit name", cs: "Upravit název" }} />}
      >
        <Form onSubmit={props.onSubmit}>
          <div className={Config.Css.css("padding: 1rem; text-align: right")}>
            <FormText name="newName" placeholder="New name" required />
            <Button onClick={props.onClose}>Cancel</Button>
            <SubmitButton className={Config.Css.css("margin: 1rem")}>Submit</SubmitButton>
          </div>
        </Form>
      </Modal>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { EditNameModal };
export default EditNameModal;
//@@viewOff:exports
