//@@viewOn:imports
import {createComponent, useDataObject, useRoute} from "uu5g05";
import Config from "./config/config";
import Calls from "calls";
//@@viewOff:imports


const handleUpdate = (shoppingList) => {
  const dtoIn = {id: shoppingList.id, name: shoppingList.name, archived: shoppingList.archived};
  return Calls.ShoppingList.update(dtoIn);
}

const handleAddItem = (name, shoppingListId) => {
  return Calls.ShoppingList.addItem({ name, shoppingListId });
}

const handleUpdateItem = (shoppingListId, item) => {
  const dtoIn = {id: item.id, completed: item.completed, shoppingListId};
  return Calls.ShoppingList.updateItem(dtoIn);
}

const handleDeleteItem = (id, shoppingListId) => {
  const dtoIn = {id, shoppingListId};
  return Calls.ShoppingList.deleteItem(dtoIn);
}

const handleAddMember = (id, shoppingListId) => {
  return Calls.ShoppingList.addMember({ id, shoppingListId });
}

const handleDeleteMember = (id, shoppingListId) => {
  return Calls.ShoppingList.deleteMember({ id, shoppingListId });
}

const DetailProvider = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "DetailProvider",
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
    const handleLoad = () => {
      return Calls.ShoppingList.detail({id: route.params.id});
    }
    const detailDataObject = useDataObject({
      handlerMap: {
        load: handleLoad,
        update: handleUpdate,
        addItem: handleAddItem,
        updateItem: handleUpdateItem,
        deleteItem: handleDeleteItem,
        addMember: handleAddMember,
        deleteMember: handleDeleteMember,
      }
    });
    //@@viewOff:private
    //@@viewOn:render
    return typeof props.children === "function" ? props.children(detailDataObject) : props.children;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { DetailProvider };
export default DetailProvider;
//@@viewOff:exports
