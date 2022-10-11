"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.helpDeskLogController = void 0;
var database_1 = require("../../database");
var HelpDeskLogController = /** @class */ (function () {
    function HelpDeskLogController() {
    }
    HelpDeskLogController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1["default"].promise().query(' INSERT INTO HelpDeskLog ' +
                            ' SET ? ', [req.body])];
                    case 1:
                        _a.sent();
                        res.json({ message: "Creado con exito" });
                        return [2 /*return*/];
                }
            });
        });
    };
    HelpDeskLogController.prototype.read = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var logs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1["default"].promise().query(' SELECT h.idHelpDeskLog, ' +
                            ' h.idTipoSoporte, ' +
                            ' t.descripcion, ' +
                            ' h.usuario, ' +
                            ' h.condicion, ' +
                            ' h.resultado, ' +
                            ' h.ultimaActualizacion, ' +
                            ' h.estado ' +
                            ' FROM HelpDeskLog h ' +
                            ' LEFT JOIN TipoSoporte t ON (h.idTipoSoporte = t.idTipoSoporte)' +
                            ' WHERE h.estado = 1 ')];
                    case 1:
                        logs = _a.sent();
                        res.json(logs[0]);
                        return [2 /*return*/];
                }
            });
        });
    };
    HelpDeskLogController.prototype.readType = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var types;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1["default"].promise().query(' SELECT idTipoSoporte, ' +
                            ' descripcion, ' +
                            ' ultimaActualizacion, ' +
                            ' estado ' +
                            ' FROM TipoSoporte ' +
                            ' WHERE estado = 1 ')];
                    case 1:
                        types = _a.sent();
                        res.json(types[0]);
                        return [2 /*return*/];
                }
            });
        });
    };
    HelpDeskLogController.prototype.readOne = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, logs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, database_1["default"].promise().query(' SELECT h.idHelpDeskLog, ' +
                                ' h.idTipoSoporte, ' +
                                ' t.descripcion, ' +
                                ' h.usuario, ' +
                                ' h.condicion, ' +
                                ' h.resultado, ' +
                                ' h.ultimaActualizacion, ' +
                                ' h.estado ' +
                                ' FROM HelpDeskLog h ' +
                                ' LEFT JOIN TipoSoporte t ON (h.idTipoSoporte = t.idTipoSoporte)' +
                                ' WHERE h.idHelpDeskLog = ? ' +
                                ' AND h.estado = 1 ', [id])];
                    case 1:
                        logs = _a.sent();
                        res.json(logs[0]);
                        return [2 /*return*/];
                }
            });
        });
    };
    HelpDeskLogController.prototype.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, database_1["default"].promise().query(' UPDATE HelpDeskLog ' +
                                ' SET ? ' +
                                ' WHERE idHelpDeskLog = ? ', [req.body, id])];
                    case 1:
                        _a.sent();
                        res.json({ message: "Actualizado con exito" });
                        return [2 /*return*/];
                }
            });
        });
    };
    HelpDeskLogController.prototype["delete"] = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, database_1["default"].promise().query(' UPDATE HelpDeskLog ' +
                                ' SET estado = 0 ' +
                                ' WHERE idHelpDeskLog = ? ', [id])];
                    case 1:
                        _a.sent();
                        res.json({ message: "Borrado con exito" });
                        return [2 /*return*/];
                }
            });
        });
    };
    return HelpDeskLogController;
}());
exports.helpDeskLogController = new HelpDeskLogController();