"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.port;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
const add = (a, b) => { return a + b; };
app.get("/", (req, res, next) => {
    let respon = add(2, 2);
    res.send(respon);
    next();
});
app.listen(80, () => {
    console.log(`server has been started`);
    console.log(port);
});
