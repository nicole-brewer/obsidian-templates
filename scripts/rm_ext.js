function rm_ext(filename) {
    return filename.split('.').slice(0, -1).join('.') || filename;
}
module.exports = rm_ext
