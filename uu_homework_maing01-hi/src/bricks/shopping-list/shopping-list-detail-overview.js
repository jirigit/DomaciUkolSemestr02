//@@viewOn:imports
import {createVisualComponent, useContext, useState} from "uu5g05";
import Config from "./config/config.js";
import ItemsList from "./items-list";
import ShoppingListActions from "./shopping-list-actions";
import EditNameModal from "./edit-name-modal";
import MembersModal from "./members/members-modal";
import UserContext from "../users/userContext";
import {useAlertBus} from "uu5g05-elements";
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

const ShoppingListDetailOverview = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ShoppingListDetailOverview",
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
    const [displayChecked, setDisplayChecked] = useState(true);
    const [showEditName, setShowEditName] = useState(false);
    const [showMembers, setShowMembers] = useState(false);
    const userContext = useContext(UserContext);
    const { addAlert } = useAlertBus();


    const handleDisplayChecked = () => {
      setDisplayChecked(!displayChecked);
    }
    const handleDelete = async (id, shoppingListId) => {
      try{
        await props.detailDataObject.handlerMap.deleteItem(id, shoppingListId);
      }catch (e){
        ShoppingListDetailOverview.logger.error("Error while deleting a shopping list", e);
        addAlert({
          header: "Shopping list deletion failed!",
          message: e.message,
          priority: "error",
        });
      }
    };

    const handleItemChecked = async (shoppingListId, item) => {
      try{
        await props.detailDataObject.handlerMap.updateItem(shoppingListId, item);
      }catch (e){
        ShoppingListDetailOverview.logger.error("Error while updating a shopping list", e);
        addAlert({
          header: "Shopping list update failed!",
          message: e.message,
          priority: "error",
        });
      }
    };

    const handleCreate = async (e) => {
      try{
        await props.detailDataObject.handlerMap.addItem(e.data.value.newItem, props.detailDataObject.data.id);
      }catch (e){
        ShoppingListDetailOverview.logger.error("Error while adding an item to a shopping list", e);
        addAlert({
          header: "Shopping list item adition failed!",
          message: e.message,
          priority: "error",
        });
      }
    };

    const handleNameEdit = async (e) => {
      try{
        await props.detailDataObject.handlerMap.update({...props.detailDataObject.data, name: e.data.value.newName});
      }catch (e){
        ShoppingListDetailOverview.logger.error("Error while editing a shopping list", e);
        addAlert({
          header: "Shopping list edit failed!",
          message: e.message,
          priority: "error",
        });
      }
      setShowEditName(false);
    };
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    // alert(JSON.stringify(props.detailDataObject.data));
    const memberSection = (userContext.isOwner(props.detailDataObject.data.ownerId) || userContext.isMember(props.detailDataObject.data.members)) && (
      <>
        <ShoppingListActions
          ownerId={props.detailDataObject.data.ownerId}
          onDisplayChecked={handleDisplayChecked}
          displayChecked={displayChecked}
          onNameEdit={() => setShowEditName(true)}
          onItemCreate={handleCreate}
          onMembersClick={() => setShowMembers(true)}
        />
        <ItemsList
          onItemChecked={handleItemChecked}
          displayChecked={displayChecked}
          onItemDelete={handleDelete}
          data={props.detailDataObject.data.items}
          shoppingListId={props.detailDataObject.data.id}
        />
      </>
    );
    return (
      <>
        <h1 className={Config.Css.css("margin-left: 1rem")}>{props.detailDataObject.data.name}</h1>
        {memberSection}
        <EditNameModal show={showEditName} onClose={() => setShowEditName(false)} onSubmit={handleNameEdit} />
        <MembersModal
          detailDataObject={props.detailDataObject}
          show={showMembers}
          onClose={() => setShowMembers(false)}
        />
      </>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ShoppingListDetailOverview };
export default ShoppingListDetailOverview;
//@@viewOff:exports
