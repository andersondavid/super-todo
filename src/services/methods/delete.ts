import axios from 'axios';
import { configs } from '../requestConfigs';

interface IDeleteTodoRequest {
	id: string;
}

interface IDeleteTodoResponse {
	status: boolean
}

export const deleteTodo = async (id: string): Promise<IDeleteTodoResponse> => {
	const response = await axios.delete<any, IDeleteTodoResponse>(configs.baseUrl + '/todo/delete/' + id)
	return response
}