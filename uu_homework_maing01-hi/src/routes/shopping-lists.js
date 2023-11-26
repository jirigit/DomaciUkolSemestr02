//@@viewOn:imports
import {createVisualComponent} from "uu5g05";
import Config from "./config/config.js";
import RouteBar from "../core/route-bar";
import ShoppingListsOverview from "../bricks/shopping-lists/shopping-lists-overview";
import ListProvider from "../bricks/shopping-lists/list-provider";
import {RouteController} from "uu_plus4u5g02-app";
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

let ShoppingLists = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ShoppingLists",
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
    return (<>
      <RouteBar />
      <ListProvider>
        {(shoppingListDataList) => (
          <RouteController routeDataObject={shoppingListDataList}>
            <ShoppingListsOverview shoppingListDataList={shoppingListDataList} />
          </RouteController>
        )}
      </ListProvider>
    </>)
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ShoppingLists };
export default ShoppingLists;
//@@viewOff:exports
