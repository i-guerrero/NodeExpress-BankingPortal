const fs = require("fs");
const path = require("path");

// Read Account Data
const accountData = fs.readFileSync(
  path.join(__dirname, "/json", "/accounts.json"),
  "utf-8"
);
const accounts = JSON.parse(accountData);

// Read User Data
const userData = fs.readFileSync(
  path.join(__dirname, "/json", "/users.json"),
  "utf-8"
);
const users = JSON.parse(userData);

const writeJSON = () => {
  let accountsJSON = JSON.stringify(accounts);
  fs.writeFileSync(
    path.join(__dirname, "/json", "/accounts.json"),
    accountsJSON,
    "utf-8"
  );
};

module.exports = { accounts, users, writeJSON };
