//@@viewOn:imports
import {createVisualComponent, useContext} from "uu5g05";
import Config from "./config/config.js";
import {Grid, ListItem} from "uu5g05-elements";
import UserContext from "../../users/userContext";
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

const MemberItem = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "MemberItem",
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

    const actions =
      userContext.isOwner(props.ownerId) || userContext.isOwner(props.member)
        ? [
            {
              icon: "uugds-delete",
              onClick: () => props.onItemDelete(props.member),
            },
          ]
        : null;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface
    //@@viewOn:render
    return (
      <Grid.Item>
        <ListItem
          actionList={actions}
          key={props.member}
          className={Config.Css.css(`padding: 1rem 1rem;`)}
        >{props.member}</ListItem>
      </Grid.Item>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { MemberItem };
export default MemberItem;
//@@viewOff:exports
