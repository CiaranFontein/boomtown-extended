const { ApolloError } = require("apollo-server");

const relationResolvers = {
  User: {
    //Get User by ID
    async id({ id }, args, { pgResource }) {
      return pgResource.getUserById(id);
    },
    //Get all items except the own users items
    async items({ user }, args, { pgResource }) {
      return pgResource.getItems(user);
    },
    //Get items borrowed by User
    async borrowed(parent, args, { pgResource }) {
      return pgResource.getBorrowedItemsForUser(parent.id);
    }
  },
  Item: {
    //Get the owner of a specific item
    async itemowner(user, args, { pgResource }) {
      return pgResource.getItemsForUser(user.id);
    },
    // Get the tags of a item
    async tags(parent, args, { pgResource }) {
      const tags = await pgResource.getTagsForItem(parent.id);
      return tags;
    },
    // Get the borrower of an item
    async borrower(parent, args, { pgResource }) {
      if (parent.borrowid) {
        return pgResource.getUserById(parent.borrowid);
      } else {
        return null;
      }
    }
  }
};
module.exports = relationResolvers;
