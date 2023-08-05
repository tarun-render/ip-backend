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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let OrderService = class OrderService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    getOrderById(userId, orderId) {
        return this.prisma.order.findFirst({
            where: {
                id: orderId,
                createdById: userId,
            },
        });
    }
    async createOrder(userId, dto) {
        const { title, type, status, statusMessage, description, estimatedDate, requirementDate } = dto;
        const order = this.prisma.order.create({
            data: {
                title,
                description,
                type,
                status,
                statusMessage,
                estimatedDate: estimatedDate ? new Date(estimatedDate) : new Date(),
                createdById: userId,
                requirementDate: requirementDate ? new Date(requirementDate) : new Date()
            },
        });
        console.log(order);
        return order;
    }
    async updateOrder(userId, dto) {
        const { title, type, status, statusMessage, description, estimatedDate, requirementDate } = dto;
        const order = this.prisma.order.update({
            where: {
                id: dto.id
            },
            data: {
                title,
                description,
                type,
                status,
                statusMessage,
                estimatedDate: estimatedDate ? new Date(estimatedDate) : new Date(),
                requirementDate: requirementDate ? new Date(requirementDate) : new Date()
            },
        });
        return order;
    }
    getOrders(userId) {
        return this.prisma.order.findMany({
            where: {
                createdById: userId
            },
        });
    }
    async getOrdersWithUserInfo() {
        const rawSQL = `call ip_portal.sp_get_orders()`;
        return this.prisma.$queryRaw(client_1.Prisma.sql `SELECT ipo.*,ipu.first_name,ipu.role,ipu.phone FROM ip_portal.orders ipo
    JOIN ip_portal.users ipu 
  ON ipo.createdById = ipu.id 
  order by createdAt;`);
    }
    getAllOrders() {
        return this.prisma.$queryRaw(client_1.Prisma.sql `SELECT ipo.*,ipu.first_name,ipu.role,ipu.phone FROM ip_portal.orders ipo
   JOIN ip_portal.users ipu 
 ON ipo.createdById = ipu.id 
 order by createdAt;`);
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map