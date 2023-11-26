//@@viewOn:imports
import {createVisualComponent, Lsi, useContext} from "uu5g05";
import Config from "./config/config.js";
import {Modal, useAlertBus} from "uu5g05-elements";
import MembersList from "./members-list";
import NewMember from "./new-member";
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

const MembersModal = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "MembersModal",
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
    const { addAlert } = useAlertBus();

    const handleAddMember = async (e) => {
      const newMember = e.data.value.newMember;
      try{
        props.detailDataObject.handlerMap.addMember(newMember, props.detailDataObject.data.id);
      }catch (e){
        MembersModal.logger.error("Error while adding a new member", e);
        addAlert({
          header: "Adding a member failed!",
          message: e.message,
          priority: "error",
        });
      }
    };

    const handleDelete = (id) => {
      try{
        props.detailDataObject.handlerMap.deleteMember(id, props.detailDataObject.data.id);
      }catch (e){
        MembersModal.logger.error("Error while deleting a member", e);
        addAlert({
          header: "Deleting a member failed!",
          message: e.message,
          priority: "error",
        });
      }
    };

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface
    //@@viewOn:render
    return (
      <Modal
        open={props.show}
        onClose={props.onClose}
        actionDirection="horizontal"
        header={<Lsi lsi={{ en: "Members", cs: "Členové" }} />}
      >
        {userContext.isOwner(props.detailDataObject.data.ownerId) && <NewMember onSubmit={handleAddMember} />}
        <MembersList ownerId={props.detailDataObject.data.ownerId} data={props.detailDataObject.data} onItemDelete={handleDelete} />
      </Modal>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { MembersModal };
export default MembersModal;
//@@viewOff:exports
