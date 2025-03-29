import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

@Controller()
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @MessagePattern('createPet')
  create(@Payload() createPetDto: CreatePetDto) {
    return this.petsService.create(createPetDto);
  }

  @MessagePattern('findAllPets')
  findAll() {
    return this.petsService.findAll();
  }

  @MessagePattern('findOnePet')
  findOne(@Payload() id: number) {
    return this.petsService.findOne(id);
  }

  @MessagePattern('updatePet')
  update(@Payload() updatePetDto: UpdatePetDto) {
    return this.petsService.update(updatePetDto.id, updatePetDto);
  }

  @MessagePattern('removePet')
  remove(@Payload() id: number) {
    return this.petsService.remove(id);
  }
}
