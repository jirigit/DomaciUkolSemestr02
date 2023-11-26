//@@viewOn:imports
import {createVisualComponent, Lsi} from "uu5g05";
import Config from "./config/config.js";
import {Modal} from "uu5g05-elements";
import {Form, FormText, SubmitButton} from "uu5g05-forms";
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

const NewShoppingListModal = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "NewShoppingListModal",
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
    const { children } = props;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <Modal
        open={props.show}
        onClose={props.onClose}
        actionDirection="horizontal"
        header={<Lsi lsi={{ en: "New shopping list", cs: "Nový nákupní seznam" }} />}
      >
        <Form onSubmit={props.onSubmit}>
          <div className={Config.Css.css("display: flex; justify-content: left")}>
            <FormText name="listName" placeholder="Shopping list name" required />
            <SubmitButton>Add new shopping list</SubmitButton>
          </div>
        </Form>
      </Modal>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { NewShoppingListModal };
export default NewShoppingListModal;
//@@viewOff:exports
