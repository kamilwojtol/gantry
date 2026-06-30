import { Injectable, NotFoundException } from '@nestjs/common';
import type { Kanban } from '@gantry/types';

@Injectable()
export class KanbanService {
  private kanbanData: Kanban[] = [
    {
      id: '1',
      name: 'Project A',
      tasks: ['Task 1', 'Task 2'],
    },
    {
      id: '2',
      name: 'Project B',
      tasks: ['Task 3', 'Task 4'],
    },
  ];

  getAllKanbans(): Kanban[] {
    if (!this.kanbanData) {
      throw new NotFoundException('No kanbans are created');
    }

    return this.kanbanData;
  }

  getKanbanByID(id: string): Kanban {
    const findById = this.kanbanData.find((kanban) => kanban.id === id);

    if (!findById) {
      throw new NotFoundException('Kanban not found');
    }

    return findById;
  }

  getKanbanByName(name: string): Kanban[] {
    const findByName = this.kanbanData.filter((kanban) =>
      kanban.name.toLowerCase().includes(name.toLowerCase()),
    );

    if (!findByName) {
      throw new NotFoundException('Kanban not found');
    }

    return findByName;
  }
}
