"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAspiranteDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_aspirante_dto_1 = require("./create-aspirante.dto");
class UpdateAspiranteDto extends (0, mapped_types_1.PartialType)(create_aspirante_dto_1.CreateAspiranteDto) {
}
exports.UpdateAspiranteDto = UpdateAspiranteDto;
//# sourceMappingURL=update-aspirante.dto.js.map