//@@viewOn:imports
import {createVisualComponent} from "uu5g05";
import Config from "./config/config.js";
import {Grid} from "uu5g05-elements";
import MemberItem from "./member-item";
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

const MembersList = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "MembersList",
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
    const items = props.data.members.map((member) => {
      return (
        <Grid.Item>
          <MemberItem
            member={member}
            ownerId={props.data.ownerId}
            onItemDelete={props.onItemDelete}
          />
        </Grid.Item>
      );
    });
    return items;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { MembersList };
export default MembersList;
//@@viewOff:exports
