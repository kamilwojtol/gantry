import { Controller, Get, Param } from '@nestjs/common';
import { KanbanService } from './kanban.service';

@Controller('kanban')
export class KanbanController {
  constructor(private readonly kanbanService: KanbanService) {}

  @Get('getById/:id')
  getById(@Param('id') id: string) {
    return this.kanbanService.getKanbanByID(id);
  }

  @Get('getByName/:name')
  getByName(@Param('name') name: string) {
    return this.kanbanService.getKanbanByName(name);
  }

  @Get()
  getAll() {
    return this.kanbanService.getAllKanbans();
  }
}
