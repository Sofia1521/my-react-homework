import db from "./db";

export function doneAnswer() {
    if (db.length === 0) return "Ответ не был дан";

    const num = Math.floor(Math.random() * db.length);

    return db[num];
}

