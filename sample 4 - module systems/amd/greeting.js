define(function () {
    const translates = {
        en: "Hello, ",
        ru: "Привет, ",
    }
    function sayHello(name, lang = "en") {
        return translates[lang] + name;
    }

    return { sayHello };
});