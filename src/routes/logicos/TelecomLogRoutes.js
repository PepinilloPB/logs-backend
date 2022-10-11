"use strict";
exports.__esModule = true;
var express_1 = require("express");
var TelecomLogController_1 = require("../../controllers/logicos/TelecomLogController");
var TelecomLogRoute = /** @class */ (function () {
    function TelecomLogRoute() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    TelecomLogRoute.prototype.config = function () {
        this.router.post('/', TelecomLogController_1.telecomLogController.create);
        this.router.get('/', TelecomLogController_1.telecomLogController.read);
        this.router.get('/:id', TelecomLogController_1.telecomLogController.readOne);
        //this.router.get('/type', softwareLogController.readType);
        this.router.put('/:id', TelecomLogController_1.telecomLogController.update);
        this.router["delete"]('/:id', TelecomLogController_1.telecomLogController["delete"]);
    };
    ;
    return TelecomLogRoute;
}());
var telecomLogRoute = new TelecomLogRoute();
exports["default"] = telecomLogRoute.router;
