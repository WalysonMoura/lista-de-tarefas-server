import { v4 as uuidV4 } from 'uuid'

import { Entity, Column, PrimaryKey } from '@prisma/client';

@Entity("task")
class Task {

    @PrimaryKey
    id: string

    @Column
    title: string

    constructor() {
        if (!this.id) {
            this.id = uuidV4()
        }
    }
}

