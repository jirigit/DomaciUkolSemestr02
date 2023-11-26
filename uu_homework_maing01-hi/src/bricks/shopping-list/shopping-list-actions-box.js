//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
import Config from "./config/config.js";
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

const ShoppingListActionsBox = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ShoppingListActionsBox",
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
      <div className={Config.Css.css("display: flex; justify-content: right; align-items: center; padding: 1rem")}>
        {children}
      </div>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ShoppingListActionsBox };
export default ShoppingListActionsBox;
//@@viewOff:exports
