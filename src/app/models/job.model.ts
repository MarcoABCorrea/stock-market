import { Counter } from './counter.model'
import { Categories } from './categories.model'

export class Job {
	id: number;
	title: string;
	zip_code: number;
	city: string;
	thumbnail: string;
	attachments: Array<string>;
	counter: Counter;
	is_awarded: boolean;
	categories: Array<Categories>;
	state: string;
	description: string;
	end_date: Date;
	created_at: Date;
}
