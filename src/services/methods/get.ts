import axios from 'axios'
import { configs } from "../requestConfigs";

interface IGetTodoResponse {
	id: string;
	content: {
		id: string;
		textTodo: string;
		isComplete: boolean;
	}
}

export const get = async () => {
	try {
		const response = await axios.get<IGetTodoResponse[]>(configs.baseUrl + '/todo/findall')
		return response
	} catch (error) {
		throw new Error('Get all error: ' + error)
	}
}

export const getOne = async (id: string) => {
	try {
		const response = await axios.get<IGetTodoResponse>(configs.baseUrl + '/todo/find/' + id)
		return response
	} catch (error) {
		throw new Error('Get one error: ' + error)
	}
}