const fs = require("fs");

const licenseKey = fs
  .readFileSync("./license-key")
  .toString()
  .replace(/\s/g, "");

module.exports = {
  env: {
    PSPDFKIT_LICENSE_KEY: licenseKey,
  },
};
