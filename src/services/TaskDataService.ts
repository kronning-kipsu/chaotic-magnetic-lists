import LocalStorageService from './LocalStorageService'
import { TaskData } from '../components/Task/tasksSlice'


export default class TaskDataService {

    private static readonly STORAGE_KEY: string = 'CHAOTIC_MAGNETIC_TASKS'

    private readonly localStorage: LocalStorageService

    public constructor() {
        this.localStorage = new LocalStorageService()
    }

    public getTasks(): Promise<TaskData[]> {
        return new Promise<TaskData[]>((resolve) => {
            const taskString = this.localStorage.getItem(TaskDataService.STORAGE_KEY)
            if (!taskString) {
                resolve([])
            } else {
                resolve(JSON.parse(taskString))
            }
        })
    }

    public saveTasks(tasks: TaskData[]): Promise<boolean> {
        return new Promise<boolean>((resolve) => {
            this.localStorage.setItem(TaskDataService.STORAGE_KEY, JSON.stringify(tasks))
            resolve(true)
        })
    }
}
