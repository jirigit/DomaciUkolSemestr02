/* eslint-disable */

const shoppingListCreateDtoInType = shape({
  name: string(3, 255).isRequired(),
});

const shoppingListDetailDtoInType = shape({
  id: string(255).isRequired(),
});

const shoppingListUpdateDtoInType = shape({
  id: string(255).isRequired(),
  name: string(3, 255).isRequired(),
  archived: boolean().isRequired(),
});

const shoppingListAddItemDtoInType = shape({
  shoppingListId: string(255).isRequired(),
  name: string(3, 255).isRequired(),
});

const shoppingListUpdateItemDtoInType = shape({
  shoppingListId: string(255).isRequired(),
  id: string(255).isRequired(),
  completed: boolean().isRequired(),
});

const shoppingListDeleteItemDtoInType = shape({
  shoppingListId: string(255).isRequired(),
  id: string(255).isRequired(),
});

const shoppingListAddMemberDtoInType = shape({
  shoppingListId: string(255).isRequired(),
  id: string(255).isRequired(),
});

const shoppingListDeleteMemberDtoInType = shape({
  shoppingListId: string(255).isRequired(),
  id: string(255).isRequired(),
});
