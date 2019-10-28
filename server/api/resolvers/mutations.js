const { ApolloError } = require("apollo-server-express");
const { AuthenticationError } = require("apollo-server-express");
const bcrypt = require("bcryptjs");

function setCookie({ name, value, res }) {
  res.cookie(name, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 1000 * 60 * 60 * 2 // 2h
  });
}

function generateToken(user, secret) {
  const { id, email } = user;
  return jwt.sign({ id, email }, secret, {
    expiresIn: "2h"
  });
}

const jwt = require("jsonwebtoken");
// const authMutations = require("./auth");

const mutationResolvers = app => ({
  async signup(
    parent,
    {
      user: { fullname, email, password }
    },
    { pgResource, req }
  ) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await pgResource.createUser({
        fullname: fullname,
        email: email,
        password: hashedPassword
      });
      const token = generateToken(user, app.get("JWT_SECRET"));

      setCookie({
        tokenName: app.get("JWT_COOKIE_NAME"),
        token,
        res: req.res
      });

      return {
        token,
        user
      };
    } catch (e) {
      throw new AuthenticationError(e);
    }
  },

  async login(
    parent,
    {
      user: { email, password }
    },
    { pgResource, req }
  ) {
    try {
      const user = await pgResource.getUserAndPasswordForVerification(email);
      if (!user) throw "User was not found.";
      const userId = users.findIndex(u => u.email === email);
      if (userId !== -1) {
        const same = await bcrypt.compare(password, users[userId].password);
        const token = generateToken(user, app.get("JWT_SECRET"));

        if (same) {
          setCookie({
            tokenName: app.get("JWT_COOKIE_NAME"),
            token: token,
            res: req.res
          });
          return {
            token,
            user
          };
        }
      }
    } catch (e) {
      throw new AuthenticationError(e);
    }
  },

  logout(parent, args, context) {
    context.req.res.clearCookie(app.get("JWT_COOKIE_NAME"));
    return true;
  },
  async addItem(parent, { input }, { pgResource }, context) {
    const user = await jwt.decode(context.token, app.get("JWT_SECRET"));

    const newItem = await pgResource.saveNewItem({
      item: input,
      user
    });
    return newItem;
  }
});
module.exports = mutationResolvers;
