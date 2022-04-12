export var user = "Ivan";
export const age = 20;
export let role = true;
export function bar() { };
export const baz = () => { };
export class Foo { };

/* --- */
const email = "test@ya.ru";
function check() { };

export { email, age };

/* --- */
const email = "test@ya.ru";
function check() { };

export { email as login, check };

/* --- */
import { user } from "./path/to/file/filename.js";

/* --- */
import { user, age } from "./path/to/file/filename1.js";
import { email } from "./path/to/file/filename2.js";

/* --- */
import { user as login, age } from "./path/to/file/filename1.js";

/* --- */
import * as userModule from "./path/to/file/filename1.js";

/* --- */
import "./path/to/file/filename1.js";

/* --- */
export default "любой текст";

/* --- */
export default () => { };