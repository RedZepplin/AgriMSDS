"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var import_core2 = require("@keystone-6/core");

// schema/index.ts
var import_core = require("@keystone-6/core");
var import_access = require("@keystone-6/core/access");
var import_fields = require("@keystone-6/core/fields");
var import_fields_document = require("@keystone-6/fields-document");
var lists = {
  User: (0, import_core.list)({
    access: import_access.allowAll,
    fields: {
      name: (0, import_fields.text)({ validation: { isRequired: true } }),
      email: (0, import_fields.text)({
        validation: { isRequired: true },
        isIndexed: "unique"
      }),
      password: (0, import_fields.password)({ validation: { isRequired: true } }),
      posts: (0, import_fields.relationship)({ ref: "Post.author", many: true }),
      isAdmin: (0, import_fields.checkbox)(),
      createdAt: (0, import_fields.timestamp)({
        defaultValue: { kind: "now" }
      })
    }
  }),
  Post: (0, import_core.list)({
    access: import_access.allowAll,
    fields: {
      title: (0, import_fields.text)({ validation: { isRequired: true } }),
      content: (0, import_fields_document.document)({
        formatting: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
          [2, 1],
          [1, 2],
          [1, 2, 1]
        ],
        links: true,
        dividers: true
      }),
      author: (0, import_fields.relationship)({
        ref: "User.posts",
        ui: {
          displayMode: "cards",
          cardFields: ["name", "email"],
          inlineEdit: { fields: ["name", "email"] },
          linkToItem: true,
          inlineConnect: true
        },
        many: false
      }),
      tags: (0, import_fields.relationship)({
        ref: "Tag.posts",
        many: true,
        ui: {
          displayMode: "cards",
          cardFields: ["name"],
          inlineEdit: { fields: ["name"] },
          linkToItem: true,
          inlineConnect: true,
          inlineCreate: { fields: ["name"] }
        }
      })
    }
  }),
  Tag: (0, import_core.list)({
    access: import_access.allowAll,
    ui: {
      isHidden: true
    },
    fields: {
      name: (0, import_fields.text)(),
      posts: (0, import_fields.relationship)({ ref: "Post.tags", many: true })
    }
  }),
  Product: (0, import_core.list)({
    access: import_access.allowAll,
    fields: {
      tradeName: (0, import_fields.text)(),
      activeIngredient: (0, import_fields.relationship)({
        ref: "ProductIngredient",
        many: true
      }),
      regCodes: (0, import_fields.relationship)({
        ref: "RegCode.product",
        many: true
      }),
      regCo: (0, import_fields.relationship)({
        ref: "RegCompany.regProducts",
        many: false
      })
    },
    ui: {
      labelField: "tradeName"
    }
  }),
  ChemicalClass: (0, import_core.list)({
    access: import_access.allowAll,
    fields: {
      chemClass: (0, import_fields.text)({
        validation: { isRequired: true },
        isIndexed: "unique"
      }),
      moa: (0, import_fields.text)(),
      rac: (0, import_fields.select)({
        type: "string",
        options: [
          { label: "Insecticide", value: "I" },
          { label: "Herbicide", value: "H" },
          { label: "Insecticide", value: "F" }
        ]
      }),
      classCode: (0, import_fields.text)(),
      activeIngredients: (0, import_fields.relationship)({ ref: "ActiveIngredientRegister.chemClass", many: true })
    },
    ui: {
      labelField: "chemClass"
    }
  }),
  ActiveIngredientRegister: (0, import_core.list)({
    access: import_access.allowAll,
    fields: {
      activeIngredient: (0, import_fields.text)({
        validation: { isRequired: true },
        isIndexed: "unique"
      }),
      chemClass: (0, import_fields.relationship)({ ref: "ChemicalClass.activeIngredients", many: false }),
      notes: (0, import_fields_document.document)({
        links: true,
        layouts: [
          [1, 1]
        ]
      })
    },
    ui: {
      labelField: "activeIngredient",
      label: "Active Ingredients",
      singular: "Active Ingredient",
      plural: "Active Ingredients"
    }
  }),
  RegCompany: (0, import_core.list)({
    access: import_access.allowAll,
    fields: {
      regName: (0, import_fields.text)(),
      regNo: (0, import_fields.text)(),
      address: (0, import_fields.text)(),
      tel: (0, import_fields.text)(),
      website: (0, import_fields.text)(),
      regProducts: (0, import_fields.relationship)({
        ref: "Product.regCo",
        many: true
      })
    },
    ui: {
      labelField: "regName"
    }
  }),
  RegCode: (0, import_core.list)({
    access: import_access.allowAll,
    fields: {
      country: (0, import_fields.text)(),
      regCode: (0, import_fields.text)({
        isIndexed: true
      }),
      product: (0, import_fields.relationship)({
        ref: "Product.regCodes",
        many: false
      })
    },
    ui: {
      labelField: "regCode"
    }
  }),
  ProductIngredient: (0, import_core.list)({
    access: import_access.allowAll,
    fields: {
      ingredient: (0, import_fields.relationship)({ ref: "ActiveIngredientRegister", many: false }),
      product: (0, import_fields.relationship)({ ref: "Product", many: false }),
      metric: (0, import_fields.select)({
        type: "string",
        options: [
          { label: "g/kg", value: "kg" },
          { label: "g/l", value: "l" }
        ]
      }),
      concentration: (0, import_fields.integer)({
        defaultValue: 100
      })
    },
    ui: {
      labelField: "ingredient"
    }
  })
};

// auth.ts
var import_crypto = require("crypto");
var import_auth = require("@keystone-6/auth");
var import_session = require("@keystone-6/core/session");
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret && true) {
  sessionSecret = (0, import_crypto.randomBytes)(32).toString("hex");
}
var { withAuth } = (0, import_auth.createAuth)({
  listKey: "User",
  identityField: "email",
  sessionData: "name createdAt",
  secretField: "password",
  initFirstItem: false ? void 0 : {
    fields: ["name", "email", "password"]
  }
});
var sessionMaxAge = 60 * 60 * 24 * 30;
var session = (0, import_session.statelessSessions)({
  maxAge: sessionMaxAge,
  secret: sessionSecret
});

// keystone.ts
var import_auth3 = require("@keystone-6/auth");
var { withAuth: withAuth2 } = (0, import_auth3.createAuth)({
  listKey: "User",
  identityField: "email",
  secretField: "password",
  sessionData: "isAdmin"
});
var keystone_default = withAuth2(
  (0, import_core2.config)({
    db: {
      provider: "sqlite",
      url: "file:./keystone.db"
    },
    lists,
    session
  })
);
