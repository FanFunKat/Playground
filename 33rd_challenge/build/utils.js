"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = dateStringToDate;
function dateStringToDate(dateString) {
    // 28/10/2018
    const dateParts = dateString
        .split('/') //['28', '10', '2018']
        .map((value) => {
        return parseInt(value); // [28, 10, 2018]
    });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
}
