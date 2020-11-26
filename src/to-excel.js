const { jsonToExcel } = require('nested-json-to-table');
const data = require('../data/std.json');

jsonToExcel(data, null, './test.xlsx');
