//@@viewOn:imports
import {createComponent, useDataList} from "uu5g05";
import Config from "./config/config";
import Calls from "calls";
//@@viewOff:imports

const handleLoad = () => {
  return Calls.ShoppingList.getAll();
}

const handleCreate = (name) => {
  return Calls.ShoppingList.create({ name });
}

const handleUpdate = (shoppingList) => {
  const dtoIn = {id: shoppingList.id, name: shoppingList.name, archived: shoppingList.archived};
  return Calls.ShoppingList.update(dtoIn);
}

const handleDelete = (shoppingList) => {
  const dtoIn = {id: shoppingList.id};
  return Calls.ShoppingList.delete(dtoIn);
}

const ListProvider = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ListProvider",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const shoppingListDataList = useDataList({
      handlerMap: {
        load: handleLoad,
        create: handleCreate,
      },
      itemHandlerMap: {
        update: handleUpdate,
        delete: handleDelete,
      }
    });
    //@@viewOff:private
    //@@viewOn:render
    return typeof props.children === "function" ? props.children(shoppingListDataList) : props.children;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ListProvider };
export default ListProvider;
//@@viewOff:exports
