//@@viewOn:imports
import { createVisualComponent, Lsi, useContext, useRoute } from "uu5g05";
import Plus4U5App, { RouteHeader } from "uu_plus4u5g02-app";

import Config from "./config/config.js";
import importLsi from "../lsi/import-lsi.js";
import { Dropdown } from "uu5g05-elements";
import UserContext from "../bricks/users/userContext";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const RouteBar = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "RouteBar",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const [, setRoute] = useRoute();

    const appActionList = [
      {
        children: <Lsi import={importLsi} path={["Menu", "shoppingLists"]} />,
        onClick: () => setRoute("shoppingLists"),
      },
    ];
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const userContext = useContext(UserContext);
    const itemList = userContext.users.map((user) => {
      return {
        children: user.name,
        onClick: () => userContext.changeUser(user.id),
      };
    });
    return (
      <>
        <Plus4U5App.RouteBar appActionList={appActionList} {...props}>
          <Dropdown itemList={itemList} label={userContext.user.name} />
        </Plus4U5App.RouteBar>
      </>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { RouteBar };
export default RouteBar;
//@@viewOff:exports
