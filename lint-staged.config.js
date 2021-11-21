module.exports = {
  "**/*.{ts,tsx}": ["eslint", () => "tsc --skiplibcheck --noEmit"],
  "**/*.{ts,tsx,scss}": "prettier --write",
};
