const xlsx = require('xlsx');
const json_std = require('../data/std-aoa.json');
const workbook = xlsx.utils.book_new();
const wb_content = xlsx.utils.aoa_to_sheet(json_std, {
  header: ['title', 'subtitle','items']
});
console.log(wb_content);
xlsx.utils.book_append_sheet(workbook, wb_content, 'Results');
xlsx.writeFile(workbook, './out.xlsx', { type: 'file' });
