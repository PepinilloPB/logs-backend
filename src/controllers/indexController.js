"use strict";
exports.__esModule = true;
exports.indexController = void 0;
//Prueba para ver que servidor funciona
var IndexController = /** @class */ (function () {
    function IndexController() {
    }
    IndexController.prototype.index = function (req, res) {
        res.send("Index correcto");
    };
    return IndexController;
}());
exports.indexController = new IndexController();
