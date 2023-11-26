//@@viewOn:imports
import {createVisualComponent, Lsi, useContext, useRoute, useState} from "uu5g05";
import Config from "./config/config.js";
import {Dialog, Svg, Tile} from "uu5g05-elements";
import shoppingCartImg from "../../assets/shoppingCart.jpg";
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

const ShoppingTile = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ShoppingTile",
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
    const [route, setRoute] = useRoute();
    const [openDialog, setOpenDialog] = useState(false);
    const userContext = useContext(UserContext);

    let actionList = [
      props.item.data.archived ? { icon: "uugds-open-in-modal", children: "Unarchive", collapsed: true, onClick: () => props.onUnarchive(props.item) } :
        { icon: "uugdsstencil-uiaction-archive", children: "Archive", collapsed: true, onClick: () => props.onArchive(props.item) },
    ]

    if (userContext.isOwner(props.item.data.ownerId)) {
      actionList.push({ icon: "uugds-delete", children: "Delete", collapsed: true, onClick: () => setOpenDialog(true) });
    }
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface
    //@@viewOn:render
    return (
      <>
      <Tile
      className={Config.Css.css("text-align: center")}
      actionList={actionList}>
        <div onClick={() => setRoute("shoppingListDetail", {id: props.item.data.id})} className={Config.Css.css("cursor: pointer; text-align: center")}>
          <img alt={"shoppingCart"} className={Config.Css.css({
            width: "80%",
            height: "80%",
          })} src={shoppingCartImg} />
          <h2>{props.item.data.name}</h2>
        </div>
    </Tile>
    <Dialog
      open={openDialog}
      onClose={() => setOpenDialog(false)}
      header={
        <Lsi
          lsi={{
            cs: "Smazat tuto položku?",
            en: "Delete this item?",
          }}
        />
      }
      icon={<Svg code="uugdssvg-svg-delete" />}
      info={
        <Lsi
          lsi={{
            cs: "Položku nelze obnovit",
            en: "Item cannot be recovered",
          }}
        />
      }
      actionDirection="horizontal"
      actionList={[
        {
          children: <Lsi lsi={{ en: "Cancel", cs: "Zrušit" }} />,
          onClick: () => setOpenDialog(false),
          significance: "distinct",
        },
        {
          children: <Lsi lsi={{ en: "Delete", cs: "Smazat" }} />,
          onClick: () => props.onDelete(props.item),
          colorScheme: "red",
          significance: "highlighted",
        },
      ]}
    />
  </>)
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ShoppingTile };
export default ShoppingTile;
//@@viewOff:exports
