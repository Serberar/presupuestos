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
exports.WorkService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let WorkService = class WorkService {
    constructor(workRepository, sectionRepository) {
        this.workRepository = workRepository;
        this.sectionRepository = sectionRepository;
    }
    async findAllWorks() {
        return this.workRepository.find({
            relations: ['section', 'budget']
        });
    }
    async findWorkById(id) {
        const work = await this.workRepository.findOne({
            where: { id },
            relations: ['section', 'budget']
        });
        if (!work) {
            throw new common_1.NotFoundException('Work not found');
        }
        return work;
    }
    async findWorksByVehicle(name) {
        return this.workRepository
            .createQueryBuilder('work')
            .innerJoin('work.section', 'section')
            .where('section.vehicle = :name', { name })
            .getMany();
    }
    async createWork(workData) {
        const sectionId = workData.section?.id;
        if (sectionId) {
            const section = await this.sectionRepository.findOne({ where: { id: sectionId } });
            if (!section) {
                throw new common_1.NotFoundException('Section not found');
            }
            const newWork = this.workRepository.create({
                ...workData,
                section: section
            });
            return this.workRepository.save(newWork);
        }
        else {
            throw new common_1.NotFoundException('Section ID not provided');
        }
    }
    async updateWork(id, updatedData) {
        const existingWork = await this.findWorkById(id);
        const updatedWork = Object.assign(existingWork, updatedData);
        return this.workRepository.save(updatedWork);
    }
    async removeWork(id) {
        const work = await this.findWorkById(id);
        if (!work) {
            throw new common_1.NotFoundException('Work not found');
        }
        work.deletedAt = new Date();
        await this.workRepository.save(work);
    }
    async restoreWork(id) {
        const restoredWork = await this.workRepository.restore(id);
        if (!restoredWork) {
            throw new common_1.NotFoundException('Work not found');
        }
    }
};
exports.WorkService = WorkService;
exports.WorkService = WorkService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('WORK_REPOSITORY')),
    __param(1, (0, common_1.Inject)('SECTION_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], WorkService);
//# sourceMappingURL=work.service.js.map