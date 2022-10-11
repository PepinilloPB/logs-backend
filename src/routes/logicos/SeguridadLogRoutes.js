"use strict";
exports.__esModule = true;
var express_1 = require("express");
var SeguridadLogController_1 = require("../../controllers/logicos/SeguridadLogController");
var SeguridadLogRoute = /** @class */ (function () {
    function SeguridadLogRoute() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    SeguridadLogRoute.prototype.config = function () {
        this.router.post('/', SeguridadLogController_1.seguridadLogController.create);
        this.router.get('/', SeguridadLogController_1.seguridadLogController.read);
        this.router.get('/:id', SeguridadLogController_1.seguridadLogController.readOne);
        //this.router.get('/type', seguridadLogController.readType);
        this.router.put('/:id', SeguridadLogController_1.seguridadLogController.update);
        this.router["delete"]('/:id', SeguridadLogController_1.seguridadLogController["delete"]);
    };
    ;
    return SeguridadLogRoute;
}());
var seguridadLogRoute = new SeguridadLogRoute();
exports["default"] = seguridadLogRoute.router;
