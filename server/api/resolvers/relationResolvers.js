const { ApolloError } = require("apollo-server");

const relationResolvers = {
  User: {
    //Get items for ownerid
    async items({ id }, args, { pgResource }) {
      try {
        const items = await pgResource.getItemsForUser(id);
        return items;
      } catch (e) {
        return e;
      }
    },
    //Get items borrowed by User
    async borrowed(parent, args, { pgResource }) {
      try {
        const borrowedItems = await pgResource.getBorrowedItemsForUser(
          parent.id
        );
        return borrowedItems;
      } catch (e) {
        return e;
      }
    }
  },
  Item: {
    //Get the owner of a specific item
    async itemowner({ ownerid }, args, { pgResource }) {
      try {
        const user = await pgResource.getUserById(ownerid);
        return user;
      } catch (e) {
        return e;
      }
    },
    // Get the tags of a item
    async tags(parent, args, { pgResource }) {
      try {
        const tags = await pgResource.getTagsForItem(parent.id);
        return tags;
      } catch (e) {
        return e;
      }
    },
    // Get the borrower of an item
    async borrower(parent, args, { pgResource }) {
      try {
        const borrower = await pgResource.getUserById(parent.borrowid);
        return borrower;
      } catch (e) {
        return e;
      }
    }
  }
};
module.exports = relationResolvers;
