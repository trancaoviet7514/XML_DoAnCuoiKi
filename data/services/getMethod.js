const fs = require('fs');
const DOMParser = require('xmldom').DOMParser;
const xml2js = require('xml2js');
const pathSP = __dirname + '/../San_Pham';
const pathAC = __dirname + '/../Tai_Khoan/Taikhoan.xml'

let getListProducts = () => {
    listProducts = [];
    fs.readdirSync(pathSP).forEach(file => {
        var filepath = pathSP + "/" + file;
        var parser = new xml2js.Parser();
        var data = fs.readFileSync(filepath, "utf-8");

        parser.parseString(data, function (err, result) {
            listProducts.push(result);
        })
    })
    var builder = new xml2js.Builder();
    var xml = builder.buildObject(listProducts);
    return xml;
}

let getAccount = () => {
    var data = fs.readFileSync(pathAC,"utf-8");
    var Du_Lieu = new DOMParser().parseFromString(data,"text/xml").documentElement;
    return Du_Lieu.getElementsByTagName('TaiKhoan');
}


module.exports = {
    getListProducts: getListProducts,
    getAccount: getAccount
}