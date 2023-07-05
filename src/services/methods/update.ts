import axios, { AxiosPromise } from 'axios';
import { configs } from '../requestConfigs';

interface IUpdateTodoRequest {
	id: string;
	itemId: string;
	isComplete: boolean;
}

interface IUpdateTodoResponse {
	id: string;
	content: {
		id: string;
		textTodo: string;
		isComplete: boolean;
	}[]
}

export const update = async (data: IUpdateTodoRequest) => {
	const response = await axios.put<IUpdateTodoResponse>(configs.baseUrl + '/todo/update', data)
	return response
}