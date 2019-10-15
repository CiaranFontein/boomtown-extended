# Boomtown 🏙

## Server

Commands must be run from the `server` directory:

### Installation

```bash
yarn install
```

### Run

```bash
yarn start
```

## Client

Commands must be run from the `client` directory:

### Installation

```bash
yarn install
```

### Run

```bash
yarn start
```

### Build

```bash
yarn run build
```

## SQL Queries List

CREATE TABLE users(
userid serial PRIMARY KEY NOT NULL,
email text UNIQUE NOT NULL,
fullname text NOT NULL,
bio text NOT NULL
);

SELECT items.borrowerid FROM items WHERE id = '1';

CREATE TABLE tags(
id serial PRIMARY KEY NOT NULL,
title text NOT NULL
);

CREATE TABLE items(
itemid serial PRIMARY KEY NOT NULL,
title text NOT NULL,
imageurl text DEFAULT NULL,
description text NOT NULL,
ownerid text DEFAULT NULL,
borrowid text DEFAULT NULL
);

DROP TABLE itemtags;
DROP TABLE tags;

CREATE TABLE itemtags(
itemid integer,
tagid integer,
FOREIGN KEY (itemid) REFERENCES items(id),
FOREIGN KEY (tagid) REFERENCES tags(id)
);

INSERT INTO items(title, description) VALUES
('Shoe', 'For feet'),
('Baseball Bat', 'Long and metal')
;

SELECT \* from items order by itemid;

INSERT INTO tags(title) VALUES
('Household Items'),
('Tools'),
('Electronics'),
('Physical Media'),
('Sporting Goods'),
('Musical Instruments'),
('Recreational Equipment');
/_ Show all tags for an item _/
SELECT \* FROM itemtags INNER JOIN tags ON itemtags.tagid = tags.id WHERE itemid='1';

/_ Add a user _/
INSERT INTO users(email, fullname, bio) VALUES ('sarahmclaghlan@gmail.com', 'Ciaran Fontein', 'I am really good databaser');

/_ Add tag _/
INSERT INTO tags(title) VALUES ('Cats');

/_ INCOMPLETE - Add item with item ids _/
INSERT INTO itemtags(itemid, tagid) VALUES (3,7);

/_ Users who have email address sarahmclaghlan@gmail.com _/
SELECT \* from users where email='sarahmclaghlan@gmail.com';

/_ Users who have id of 1 _/
SELECT \* from users where userid=1;

/_ All items _/
SELECT \* FROM items;

/_ Items whose ownerid is 1 _/
SELECT \* FROM items WHERE ownerid='1';

/_ Items borrowed by userid is 1 _/
SELECT \* FROM items WHERE borrowid='1';

/_ All tags _/
SELECT \* FROM tags;

/_ All tags with id of 1 _/
SELECT \* FROM tags WHERE tagid=1;

SELECT \* FROM items WHERE ownerid != '1';

## Graphql Schema

input AssignedBorrower {
id: ID!
}

input AssignedTag {
id: ID!
title: String!
}

type AuthPayload {
token: String
user: User
}

type Item {
id: ID!
title: String!
imageurl: String
description: String!
itemowner: User!
tags: [Tag]
created: String
borrower: User
}

type Mutation {
signup: Boolean
login: Boolean
logout: Boolean
addItem(input: NewItemInput): Item
}

input NewItemInput {
title: String!
description: String
tags: [AssignedTag]!
}

type Query {
user(id: ID!): User
viewer: User
items(filter: ID): [Item]
tags: [Tag]
}

type Tag {
id: ID!
title: String!
}

type User {
id: ID!
email: String!
fullname: String!
bio: String
items: [Item]
borrowed: [Item]
}

## Graphql Docs

### Graphql Queries

user(id: ID!): User

viewer: User

items(filter: ID): [Item]

Tags: [Tag]

### Graphql Mutations
