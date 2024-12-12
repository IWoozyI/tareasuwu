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
exports.UpdatePaqueteInput = void 0;
const create_paquete_input_1 = require("./create-paquete.input");
const graphql_1 = require("@nestjs/graphql");
let UpdatePaqueteInput = class UpdatePaqueteInput extends (0, graphql_1.PartialType)(create_paquete_input_1.CreatePaqueteInput) {
};
exports.UpdatePaqueteInput = UpdatePaqueteInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], UpdatePaqueteInput.prototype, "id", void 0);
exports.UpdatePaqueteInput = UpdatePaqueteInput = __decorate([
    (0, graphql_1.InputType)()
], UpdatePaqueteInput);
//# sourceMappingURL=update-paquete.input.js.map