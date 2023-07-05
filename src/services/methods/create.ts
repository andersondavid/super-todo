import axios from 'axios';
import { configs } from "../requestConfigs";

interface ICreateTodoRequest {
	content: {
		textTodo: string;
		isComplete: boolean;
	}[]
}

interface ICreateTodoResponse {
	id: string;
	content: {
		id: string;
		textTodo: string;
		isComplete: boolean;
	}[]
}

export const create = async (body: ICreateTodoRequest): Promise<ICreateTodoResponse> => {
	try {
		const response = await axios.post<any, ICreateTodoResponse>(configs.baseUrl + '/todo/create', body);
		return response
	} catch (error) {
		throw new Error('Create todo error: ' + error)
	}
}