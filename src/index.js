"use strict";
exports.__esModule = true;
var express_1 = require("express");
var morgan_1 = require("morgan");
var cors_1 = require("cors");
var HardwareLogRoutes_1 = require("./routes/logicos/HardwareLogRoutes");
var OtrosLogRoutes_1 = require("./routes/logicos/OtrosLogRoutes");
var SoftwareLogRoutes_1 = require("./routes/logicos/SoftwareLogRoutes");
var TelecomLogRoutes_1 = require("./routes/logicos/TelecomLogRoutes");
var HelpDeskLogRoutes_1 = require("./routes/logicos/HelpDeskLogRoutes");
var SeguridadLogRoutes_1 = require("./routes/logicos/SeguridadLogRoutes");
var LogFisicoRoutes_1 = require("./routes/fisicos/LogFisicoRoutes");
var Server = /** @class */ (function () {
    function Server() {
        this.app = (0, express_1["default"])();
        this.config();
        this.routes();
    }
    //Metodo configuracion
    Server.prototype.config = function () {
        this.app.set('port', process.env.PORT || 3000); // Servidor en puerto 3000
        this.app.use((0, morgan_1["default"])('dev'));
        this.app.use((0, cors_1["default"])());
        this.app.use(express_1["default"].json());
        this.app.use(express_1["default"].urlencoded({ extended: false }));
    };
    ;
    //Metodo para rutas
    Server.prototype.routes = function () {
        //this.app.use('/api', indexRoutes); //ruta de prueba, deberia mostrar Index Correcto
        this.app.use('/hard', HardwareLogRoutes_1["default"]);
        this.app.use('/soft', SoftwareLogRoutes_1["default"]);
        this.app.use('/telc', TelecomLogRoutes_1["default"]);
        this.app.use('/help', HelpDeskLogRoutes_1["default"]);
        this.app.use('/seg', SeguridadLogRoutes_1["default"]);
        this.app.use('/otro', OtrosLogRoutes_1["default"]);
        this.app.use('/fis', LogFisicoRoutes_1["default"]);
    };
    ;
    //Metodo para iniciar servidor
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.app.get('port'), function () {
            console.log('Server on port ', _this.app.get('port'));
        });
    };
    ;
    return Server;
}());
var server = new Server();
server.start();
