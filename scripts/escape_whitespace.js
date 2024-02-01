function escape_whitespace(str) {
    return str.replace(/ /g, "\\ ");
}
module.exports = escape_whitespace
