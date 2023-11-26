//@@viewOn:imports
import { createComponent, useDataObject, useState } from "uu5g05";
import Config from "./config/config";
import UserContext from "./userContext";
import { users } from "../../fakeData/fakeData";
//@@viewOff:imports

export const UserProvider = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "UserProvider",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const [user, setUser] = useState(users[0]);

    const changeUser = (id) => {
      const user = users.find((user) => user.id === id);
      const result = user ?? users[0];

      setUser(result);
    };

    const isOwner = (id) => {
      return user.id === id;
    };

    const isMember = (memberIds) => {
      return memberIds.includes(user.id);
    };

    const value = {
      user,
      users,
      changeUser,
      isOwner,
      isMember,
    };
    //@@viewOff:private

    //@@viewOn:render
    return (
      <UserContext.Provider value={value}>
        {typeof props.children === "function" ? props.children(jokesDataObject) : props.children}
      </UserContext.Provider>
    );
    //@@viewOff:render
  },
});

export default UserProvider;
