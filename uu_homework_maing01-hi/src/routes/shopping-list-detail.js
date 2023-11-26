//@@viewOn:imports
import {createVisualComponent} from "uu5g05";
import Config from "./config/config.js";
import RouteBar from "../core/route-bar";
import {RouteController} from "uu_plus4u5g02-app";
import DetailProvider from "../bricks/shopping-list/detail-provider";
import ShoppingListDetailOverview from "../bricks/shopping-list/shopping-list-detail-overview";
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

const ShoppingListDetail = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ShoppingListDetail",
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
      <>
        <RouteBar />
        <DetailProvider>
          {(detailDataObject) => (
            <RouteController routeDataObject={detailDataObject}>
              <ShoppingListDetailOverview detailDataObject={detailDataObject} />
            </RouteController>
          )}
        </DetailProvider>

      </>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ShoppingListDetail };
export default ShoppingListDetail;
//@@viewOff:exports
