"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = sleep;
// sleep function that takes the number of milliseconds to wait
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
