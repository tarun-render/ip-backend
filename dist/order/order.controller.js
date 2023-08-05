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
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const decorator_1 = require("../auth/decorator");
const create_order_1 = require("./dto/create-order");
const order_service_1 = require("./order.service");
const guard_1 = require("../auth/guard");
const update_order_dto_1 = require("./dto/update-order.dto");
let OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    getOrders(userId) {
        return this.orderService.getOrders(userId);
    }
    getAllOrders() {
        return this.orderService.getAllOrders();
    }
    getAllOrdersWithUser() {
        return this.orderService.getOrdersWithUserInfo();
    }
    getOrder(orderId, userId) {
        return this.orderService.getOrderById(userId, orderId);
    }
    createOrder(userId, dto) {
        return this.orderService.createOrder(userId, dto);
    }
    updateeOrder(userId, dto) {
        return this.orderService.updateOrder(userId, dto);
    }
};
__decorate([
    (0, common_2.Get)(),
    __param(0, (0, decorator_1.GetUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getOrders", null);
__decorate([
    (0, common_2.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getAllOrders", null);
__decorate([
    (0, common_2.Get)('/allwithUser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getAllOrdersWithUser", null);
__decorate([
    (0, common_2.Get)(':id'),
    __param(0, (0, common_2.Param)('id')),
    __param(1, (0, decorator_1.GetUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getOrder", null);
__decorate([
    (0, common_2.Post)(''),
    __param(0, (0, decorator_1.GetUser)('id')),
    __param(1, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_order_1.CreateOrderDto]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "createOrder", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, decorator_1.GetUser)('id')),
    __param(1, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_order_dto_1.updateOrderDto]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "updateeOrder", null);
OrderController = __decorate([
    (0, common_2.UseGuards)(guard_1.JwtGuard),
    (0, common_1.Controller)('order'),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map