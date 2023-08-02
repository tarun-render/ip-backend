"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderstatusController = void 0;
const common_1 = require("@nestjs/common");
const create_orderstatus_dto_1 = require("./dto/create-orderstatus.dto");
const update_orderstatus_dto_1 = require("./dto/update-orderstatus.dto");
const common_2 = require("@nestjs/common");
const orderstatus_service_1 = require("./orderstatus.service");
let OrderstatusController = class OrderstatusController {
    constructor(orderStatusService) {
        this.orderStatusService = orderStatusService;
    }
    getOrderStatus() {
        return this.orderStatusService.getOrderStatus();
    }
    createOrderStatus(dto) {
        return this.orderStatusService.createOrderStatus(dto);
    }
    updateOrderStatus(dto) {
        return this.orderStatusService.updateOrderStatus(dto);
    }
};
__decorate([
    (0, common_2.Get)('list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderstatusController.prototype, "getOrderStatus", null);
__decorate([
    (0, common_2.Post)(),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_orderstatus_dto_1.CreateOrderStatusDto]),
    __metadata("design:returntype", void 0)
], OrderstatusController.prototype, "createOrderStatus", null);
__decorate([
    (0, common_2.Put)(),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_orderstatus_dto_1.UpdateOrderStatusDto]),
    __metadata("design:returntype", void 0)
], OrderstatusController.prototype, "updateOrderStatus", null);
OrderstatusController = __decorate([
    (0, common_1.Controller)('orderstatus'),
    __metadata("design:paramtypes", [orderstatus_service_1.OrderstatusService])
], OrderstatusController);
exports.OrderstatusController = OrderstatusController;
//# sourceMappingURL=orderstatus.controller.js.map