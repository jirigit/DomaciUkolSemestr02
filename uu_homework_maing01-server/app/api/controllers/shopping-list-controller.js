"use strict";
const ShoppingListAbl = require("../../abl/shopping-list-abl");

class ShoppingListController {
  create(ucEnv) {
    const awid = ucEnv.getUri().getAwid();
    const dtoIn = ucEnv.parameters;
    return ShoppingListAbl.create(awid, dtoIn, ucEnv.getSession());
  }

  getAll(ucEnv) {
    const awid = ucEnv.getUri().getAwid();
    return ShoppingListAbl.getAll(awid, ucEnv.getSession(), ucEnv.getAuthorizationResult());
  }

  detail(ucEnv) {
    const awid = ucEnv.getUri().getAwid();
    const dtoIn = ucEnv.parameters;
    return ShoppingListAbl.detail(awid, dtoIn, ucEnv.getSession(), ucEnv.getAuthorizationResult());
  }

  delete(ucEnv) {
    const awid = ucEnv.getUri().getAwid();
    const dtoIn = ucEnv.parameters;
    return ShoppingListAbl.delete(awid, dtoIn, ucEnv.getSession(), ucEnv.getAuthorizationResult());
  }

  update(ucEnv) {
    const awid = ucEnv.getUri().getAwid();
    const dtoIn = ucEnv.parameters;
    return ShoppingListAbl.update(awid, dtoIn, ucEnv.getSession(), ucEnv.getAuthorizationResult());
  }

  addItem(ucEnv) {
    const awid = ucEnv.getUri().getAwid();
    const dtoIn = ucEnv.parameters;
    return ShoppingListAbl.addItem(awid, dtoIn, ucEnv.getSession(), ucEnv.getAuthorizationResult());
  }

  updateItem(ucEnv) {
    const awid = ucEnv.getUri().getAwid();
    const dtoIn = ucEnv.parameters;
    return ShoppingListAbl.updateItem(awid, dtoIn, ucEnv.getSession(), ucEnv.getAuthorizationResult());
  }

  deleteItem(ucEnv) {
    const awid = ucEnv.getUri().getAwid();
    const dtoIn = ucEnv.parameters;
    return ShoppingListAbl.deleteItem(awid, dtoIn, ucEnv.getSession(), ucEnv.getAuthorizationResult());
  }

  addMember(ucEnv) {
    const awid = ucEnv.getUri().getAwid();
    const dtoIn = ucEnv.parameters;
    return ShoppingListAbl.addMember(awid, dtoIn, ucEnv.getSession(), ucEnv.getAuthorizationResult());
  }

  deleteMember(ucEnv) {
    const awid = ucEnv.getUri().getAwid();
    const dtoIn = ucEnv.parameters;
    return ShoppingListAbl.deleteMember(awid, dtoIn, ucEnv.getSession(), ucEnv.getAuthorizationResult());
  }
}

module.exports = new ShoppingListController();
