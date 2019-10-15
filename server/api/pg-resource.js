function tagsQueryString(tags, itemid, result) {
  for (i = tags.length; i > 0; i--) {
    result += `($${i}, ${itemid}),`;
  }
  return result.slice(0, -1) + ";";
}
module.exports = postgres => {
  return {
    // Create User
    async createUser({ fullname, email, password }) {
      const newUserInsert = {
        text: "", // @TODO: Authentication - Server
        values: [fullname, email, password]
      };
      try {
        const user = await postgres.query(newUserInsert);
        return user.rows[0];
      } catch (e) {
        switch (true) {
          case /users_fullname_key/.test(e.message):
            throw "An account with this username already exists.";
          case /users_email_key/.test(e.message):
            throw "An account with this email already exists.";
          default:
            throw "There was a problem creating your account.";
        }
      }
    },
    //Get User and Password for Verification
    async getUserAndPasswordForVerification(email) {
      const findUserQuery = {
        text: "SELECT * FROM users WHERE email=$1",
        values: [email]
      };
      try {
        const user = await postgres.query(findUserQuery);
        if (!user) throw "User was not found.";
        return user.rows[0];
      } catch (e) {
        throw "User was not found.";
      }
    },
    //Get User by ID
    async getUserById(id) {
      const findUserQuery = {
        text: `SELECT * FROM users WHERE id=$1`,
        values: [id]
      };
      try {
        const users = await postgres.query(findUserQuery);
        return users.rows[0];
      } catch (e) {
        throw e;
      }
    },
    //Get all Items except for the user's own items
    async getItems(idToOmit) {
      const itemQuery = {
        text: `SELECT * FROM items WHERE ownerid <> $1`,
        values: idToOmit ? [idToOmit] : [""]
      };
      try {
        const items = await postgres.query(itemQuery);
        return items.rows;
      } catch (e) {
        throw e;
      }
    },
    // Get Items owned by specific User
    async getItemsForUser(id) {
      const itemQuery = {
        text: `SELECT * FROM items WHERE ownerid=$1`,
        values: [id]
      };
      try {
        const items = await postgres.query(itemQuery);
        return items.rows;
      } catch (e) {
        throw e;
      }
    },
    // Get the borrower from by id of item
    async getBorrower(itemid) {
      const borrowerQuery = {
        text: `SELECT * FROM items WHERE borrowid = $1`,
        values: [itemid]
      };
      try {
        const users = await postgres.query(borrowerQuery);
        return users.rows[0];
      } catch (e) {
        throw e;
      }
    },
    // Get Borrowed Items for User by Id
    async getBorrowedItemsForUser(id) {
      const itemsQuery = {
        text: `SELECT * FROM items WHERE borrowid=$1`,
        values: [id]
      };
      try {
        const items = await postgres.query(itemsQuery);
        return items.rows;
      } catch (e) {
        throw e;
      }
    },
    async getTags() {
      const getAllTagsQuery = {
        text: `SELECT * FROM tags`,
        values: []
      };
      try {
        const tags = await postgres.query(getAllTagsQuery);
        return tags.rows;
      } catch (e) {
        throw e;
      }
    },
    // Get all the tags for an item by id
    async getTagsForItem(id) {
      const tagsQuery = {
        text: `SELECT * FROM itemtags INNER JOIN tags ON itemtags.tagid = tags.id WHERE itemid=$1`,
        values: [id]
      };
      try {
        const tags = await postgres.query(tagsQuery);
        return tags.rows;
      } catch (e) {
        throw e;
      }
    },
    // Save a new Item
    async saveNewItem({ item, user }) {
      return new Promise((resolve, reject) => {
        postgres.connect((err, client, done) => {
          try {
            client.query("BEGIN", async err => {
              const { title, description, tags } = item;

              //ADD ITEM
              const insertToItemsQuery = {
                text: `INSERT INTO items(title, description, ownerid) VALUES($1, $2, $3) RETURNING *;`,
                values: [title, description, user]
              };
              const insertToItems = await postgres.query(insertToItemsQuery);

              //ADD TAGS
              const itemId = insertToItems.rows[0].id;
              const itemTagsQuery = await tagsQueryString(tags, itemId, "");
              const tagIds = tags.map(tag => {
                return tag.id;
              });
              const insertToItemtagsQuery = {
                text: `INSERT INTO itemtags(tagid, itemid) VALUES${itemTagsQuery}`,
                values: tagIds
              };

              const insertToItemtags = await postgres.query(
                insertToItemtagsQuery
              );
              client.query("COMMIT", err => {
                if (err) {
                  throw err;
                }
                done();
                resolve(insertToItemtags.rows[0]);
              });
            });
          } catch (e) {
            client.query("ROLLBACK", err => {
              if (err) {
                throw err;
              }
              done();
            });
            switch (true) {
              default:
                throw e;
            }
          }
        });
      });
    }
  };
};
