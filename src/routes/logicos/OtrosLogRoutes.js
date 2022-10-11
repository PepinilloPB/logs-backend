"use strict";
exports.__esModule = true;
var express_1 = require("express");
var OtrosLogController_1 = require("../../controllers/logicos/OtrosLogController");
var OtrosLogRoutes = /** @class */ (function () {
    function OtrosLogRoutes() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    OtrosLogRoutes.prototype.config = function () {
        this.router.post('/', OtrosLogController_1.otrosLogController.create);
        this.router.get('/', OtrosLogController_1.otrosLogController.read);
        this.router.get('/:id', OtrosLogController_1.otrosLogController.readOne);
        this.router.put('/:id', OtrosLogController_1.otrosLogController.update);
        this.router["delete"]('/:id', OtrosLogController_1.otrosLogController["delete"]);
    };
    ;
    return OtrosLogRoutes;
}());
var otrosLogRoutes = new OtrosLogRoutes();
exports["default"] = otrosLogRoutes.router;
