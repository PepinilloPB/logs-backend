"use strict";
exports.__esModule = true;
var express_1 = require("express");
var SoftwareLogController_1 = require("../../controllers/logicos/SoftwareLogController");
var SoftwareLogRoute = /** @class */ (function () {
    function SoftwareLogRoute() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    SoftwareLogRoute.prototype.config = function () {
        this.router.post('/', SoftwareLogController_1.softwareLogController.create);
        this.router.get('/', SoftwareLogController_1.softwareLogController.read);
        this.router.get('/:id', SoftwareLogController_1.softwareLogController.readOne);
        //this.router.get('/type', softwareLogController.readType);
        this.router.put('/:id', SoftwareLogController_1.softwareLogController.update);
        this.router["delete"]('/:id', SoftwareLogController_1.softwareLogController["delete"]);
    };
    ;
    return SoftwareLogRoute;
}());
var softwareLogRoute = new SoftwareLogRoute();
exports["default"] = softwareLogRoute.router;
