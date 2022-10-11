"use strict";
exports.__esModule = true;
var express_1 = require("express");
var LogFisicoController_1 = require("../../controllers/fisicos/LogFisicoController");
var LogFisicoRoute = /** @class */ (function () {
    function LogFisicoRoute() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    LogFisicoRoute.prototype.config = function () {
        this.router.post('/', LogFisicoController_1.logFisicoController.create);
        this.router.get('/', LogFisicoController_1.logFisicoController.read);
        this.router.get('/:id', LogFisicoController_1.logFisicoController.readOne);
        //this.router.get('/area', logFisicoController.readArea);
        //this.router.get('/serv', logFisicoController.readServicio);
        this.router.put('/:id', LogFisicoController_1.logFisicoController.update);
        this.router["delete"]('/:id', LogFisicoController_1.logFisicoController["delete"]);
    };
    ;
    return LogFisicoRoute;
}());
var logFisicoRoute = new LogFisicoRoute();
exports["default"] = logFisicoRoute.router;
