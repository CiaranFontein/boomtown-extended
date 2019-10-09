function tagsQueryString(tags, itemid, result) {
  for (i = tags.length; i > 0; i--) {
    result += `($${i}, ${itemid}),`;
  }
  return result.slice(0, -1) + ";";
}

module.exports = postgres => {
  return {
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
    async getItems(idToOmit) {
      const itemQuery = {
        text: `SELECT * FROM items WHERE ownerid != $1`,
        values: idToOmit ? [idToOmit] : []
      };
      try {
        const items = await postgres.query(itemQuery);
        return items.rows;
      } catch (e) {
        throw e;
      }
    },
    async getItemsForUser(id) {
      const itemQuery = {
        text: `SELECT id, fullname, items FROM users WHERE id=$1`,
        values: [id]
      };
      try {
        const items = await postgres.query(itemQuery);
        return items.rows;
      } catch (e) {
        throw e;
      }
    },
    async getBorrowedItemsForUser(id) {
      const itemsQuery = {
        text: `SELECT * FROM items WHERE borrower.id=$1`,
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
      const tagsQuery = {
        text: `SELECT * FROM tags`,
        values: []
      };
      try {
        const tags = await postgres.query(tagsQuery);
        return tags.rows;
      } catch (e) {
        throw e;
      }
    },
    async getTagsForItem(id) {
      const tagsQuery = {
        text: `SELECT * FROM itemtags INNER JOIN tags ON itemtags.tagid = tags.tagid WHERE itemid=$1`,
        values: [id]
      };
      const tags = await postgres.query(tagsQuery);
      return tags.rows;
    },
    async saveNewItem({ item, user }) {
      /**
       *  @TODO: Adding a New Item
       *
       *  Adding a new Item requires 2 separate INSERT statements.
       *
       *  All of the INSERT statements must:
       *  1) Proceed in a specific order.
       *  2) Succeed for the new Item to be considered added
       *  3) If any of the INSERT queries fail, any successful INSERT
       *     queries should be 'rolled back' to avoid 'orphan' data in the database.
       *
       *  To achieve #3 we'll ue something called a Postgres Transaction!
       *  The code for the transaction has been provided for you, along with
       *  helpful comments to help you get started.
       *
       *  Read the method and the comments carefully before you begin.
       */

      return new Promise((resolve, reject) => {
        /**
         * Begin transaction by opening a long-lived connection
         * to a client from the client pool.
         * - Read about transactions here: https://node-postgres.com/features/transactions
         */
        postgres.connect((err, client, done) => {
          try {
            // Begin postgres transaction
            client.query("BEGIN", async err => {
              const { title, description, tags } = item;

              // Generate new Item query
              // @TODO
              // -------------------------------

              // Insert new Item
              // @TODO
              // -------------------------------

              // Generate tag relationships query (use the'tagsQueryString' helper function provided)
              // @TODO
              // -------------------------------

              // Insert tags
              // @TODO
              // -------------------------------

              // Commit the entire transaction!
              client.query("COMMIT", err => {
                if (err) {
                  throw err;
                }
                // release the client back to the pool
                done();
                // Uncomment this resolve statement when you're ready!
                // resolve(newItem.rows[0])
                // -------------------------------
              });
            });
          } catch (e) {
            // Something went wrong
            client.query("ROLLBACK", err => {
              if (err) {
                throw err;
              }
              // release the client back to the pool
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
