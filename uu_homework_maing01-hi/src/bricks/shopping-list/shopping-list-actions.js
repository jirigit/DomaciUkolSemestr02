//@@viewOn:imports
import {createVisualComponent, useContext} from "uu5g05";
import Config from "./config/config.js";
import {Form, FormText, SubmitButton} from "uu5g05-forms";
import ShoppingListActionsBox from "./shopping-list-actions-box";
import UserContext from "../users/userContext";
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

const ShoppingListActions = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ShoppingListActions",
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
    const userContext = useContext(UserContext);
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <ShoppingListActionsBox>
        <Form onSubmit={props.onItemCreate}>
          <div className={Config.Css.css("display: flex; justify-content: left; padding: 1rem")}>
            <FormText name="newItem" placeholder="New item" required/>
            <SubmitButton>Add new item</SubmitButton>
          </div>
        </Form>
        <SubmitButton onClick={props.onDisplayChecked}>{`Display ${
          props.displayChecked ? "unchecked" : "all"
        }`}</SubmitButton>
        {userContext.isOwner(props.ownerId) && (
          <SubmitButton className={Config.Css.css("margin-left: 1rem")} onClick={props.onNameEdit}>
            Edit name
          </SubmitButton>
        )}
        <SubmitButton onClick={props.onMembersClick} className={Config.Css.css("margin-left: 1rem")}>
          Display members
        </SubmitButton>
      </ShoppingListActionsBox>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ShoppingListActions };
export default ShoppingListActions;
//@@viewOff:exports
