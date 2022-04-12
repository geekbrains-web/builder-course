const translates = {
    en: "Hello, ",
    ru: "Привет, ",
}
function sayHello(name, lang = "en") {
    return translates[lang] + name;
}

module.exports = sayHello;