module.exports = function check (str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  }
  while (
    str.includes("{}") ||
    str.includes("()") ||
    str.includes("[]") ||
    str.includes("<>") ||
    str.includes("||")
  ) {
    str = str
      .replace("{}", "")
      .replace("()", "")
      .replace("[]", "")
      .replace("<>", "")
      .replace("||", "");
  }

  return str === "";
};