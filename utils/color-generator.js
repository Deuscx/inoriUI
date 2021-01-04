const color = require("@k-vyn/coloralgorithm");
const fs = require('fs')
const path = require('path')
const jsons = JSON.parse(fs.readFileSync(path.resolve(__dirname, './colorConfig.json'), 'utf8'))

function generateOneColor(json) {
    const result = color.generate(json.properties, json.options);

    function parseColor(color) {
        return color.hex;
    }
    let colorStr;
    result.forEach((colorSet) => {
        let colors = colorSet.colors;
        let name = '$' + colorSet.name.toLocaleLowerCase();
        colorStr = colors.map((color, index) => {
            return `${name}-${index+1}: ${parseColor(color)}`
        })
    })
    console.log(colorStr.join(";\r")+`;`);
}

jsons.forEach(generateOneColor)