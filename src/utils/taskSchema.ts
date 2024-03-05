import { z } from "zod"

export const taskSchema = z.string().min(1, 'Task name must not be empty').max(50, 'Task name must not exceed 50 characters') 