import { z } from "zod"

export const taskSchema = z.string().max(50, 'Task name must not exceed 50 characters') 