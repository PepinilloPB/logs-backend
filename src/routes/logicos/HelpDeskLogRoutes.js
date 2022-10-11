"use strict";
exports.__esModule = true;
var express_1 = require("express");
var HelpDeskLogController_1 = require("../../controllers/logicos/HelpDeskLogController");
var HelpDeskLogRoute = /** @class */ (function () {
    function HelpDeskLogRoute() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    HelpDeskLogRoute.prototype.config = function () {
        this.router.post('/', HelpDeskLogController_1.helpDeskLogController.create);
        this.router.get('/', HelpDeskLogController_1.helpDeskLogController.read);
        this.router.get('/:id', HelpDeskLogController_1.helpDeskLogController.readOne);
        //this.router.get('/type', helpDeskLogController.readType);
        this.router.put('/:id', HelpDeskLogController_1.helpDeskLogController.update);
        this.router["delete"]('/:id', HelpDeskLogController_1.helpDeskLogController["delete"]);
    };
    ;
    return HelpDeskLogRoute;
}());
var helpDeskLogRoute = new HelpDeskLogRoute();
exports["default"] = helpDeskLogRoute.router;
