const fs = require('fs');
const path = require('path');
const configDirectories = [
    path.resolve(__dirname, '../config/cases'),
    path.resolve(__dirname, '../config/collectables/dnd'),
    path.resolve(__dirname, '../config/collectables/packs'),
    path.resolve(__dirname, '../config/collectables/cards')
];
const customItemConfigs = [];
configDirectories.forEach(directory => {
    fs.readdirSync(directory).forEach(file => {
        if (file.endsWith('.json')) {
            const config = require(path.join(directory, file));
            customItemConfigs.push(config);
        }
    });
});
module.exports = { customItemConfigs };
//# sourceMappingURL=item_configs.js.map