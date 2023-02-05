import { v4 as uuidV4 } from 'uuid'

class Task {
    id: string
    title: string

    constructor() {
        if (!this.id) {
            this.id = uuidV4()
        }
    }
}

