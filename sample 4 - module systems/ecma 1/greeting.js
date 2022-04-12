const translates = {
    en: "Hello, ",
    ru: "Привет, ",
}

export function sayHello(name, lang = "en") {
    export const test = "test";
    return translates[lang] + name;
}