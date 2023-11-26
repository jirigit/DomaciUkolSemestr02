"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class ShoppingListMongo extends UuObjectDao {
  async createSchema() {
    await super.createIndex({ awid: 1 }, { unique: true });
  }

  async create(shoppingList){
    return await super.insertOne(shoppingList);
  }

  async get(awid, id) {
    return await super.findOne({ id, awid });
  }

  async getOwnerOrMember(awid, id, userId){
    return await super.findOne({ awid, id, $or: [
      { ownerId: userId },
      { members: userId }
    ]});
  }

  async getOwner(awid, id, userId){
    return await super.findOne({ awid, id, ownerId: userId});
  }

  async nameExists(awid, name, ownerId) {
    return await super.findOne({ awid, name, ownerId });
  }

  async getAll(awid) {
    const filter = {
      awid,
    };

    const pageInfo = {
      pageSize: Number.MAX_SAFE_INTEGER,
    };

    return await super.find(filter, pageInfo);
  }

  async getAllOwnerOrMember(awid, userId){
    const filter = {
      awid,
      $or: [
        { ownerId: userId },
        { members: userId }
      ]
    };

    const pageInfo = {
      pageSize: Number.MAX_SAFE_INTEGER,
    };

    return await super.find(filter, pageInfo);
  }

  async update(uuObject) {
    let filter = { id: uuObject.id, awid: uuObject.awid };
    return await super.findOneAndUpdate(filter, uuObject, "NONE");
  }

  async delete(awid, id) {
    await super.deleteOne({ awid, id });
  }

  async updateItem(awid, id, itemId, completed) {
    const filter = {
      awid,
      id,
      "items.id": itemId,
    };

    const update = {
      $set: {
        "items.$.completed": completed,
      },
    };

    return await super.findOneAndUpdate(filter, update, "NONE");
  }

  async deleteItem(awid, id, itemId) {
    const filter = {
      awid,
      id,
    };

    const update = {
      $pull: {
        items: {
          id: itemId,
        },
      },
    };

    return await super.findOneAndUpdate(filter, update, "NONE");
  }

  async deleteMember(awid, id, memberId) {
    const filter = {
      awid,
      id,
    };

    const update = {
      $pull: {
        members: memberId
      },
    };

    return await super.findOneAndUpdate(filter, update, "NONE");
  }
}

module.exports = ShoppingListMongo;
