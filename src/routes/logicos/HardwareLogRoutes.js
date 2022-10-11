"use strict";
exports.__esModule = true;
var express_1 = require("express");
var HardwareLogController_1 = require("../../controllers/logicos/HardwareLogController");
var HardwareLogRoutes = /** @class */ (function () {
    function HardwareLogRoutes() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    HardwareLogRoutes.prototype.config = function () {
        this.router.post('/', HardwareLogController_1.hardwareLogController.create);
        this.router.get('/', HardwareLogController_1.hardwareLogController.read);
        this.router.get('/:id', HardwareLogController_1.hardwareLogController.readOne);
        this.router.put('/:id', HardwareLogController_1.hardwareLogController.update);
        this.router["delete"]('/:id', HardwareLogController_1.hardwareLogController["delete"]);
    };
    ;
    return HardwareLogRoutes;
}());
var hardwareLogRoutes = new HardwareLogRoutes();
exports["default"] = hardwareLogRoutes.router;
