export const subjects = ['Foo', 'Bar', 'Baz'];
export const statuses = ['student', 'lector'];
export const sexes = ['m', 'f'];

const data = [
	{
		id: 1,
		subject: subjects[0],
		name: 'Foogas',
		status: statuses[0],
		sex: sexes[0]
	},
	{
		id: 2,
		subject: subjects[1],
		name: 'Barcas',
		status: statuses[1],
		sex: sexes[1]
	},
	{
		id: 3,
		subject: subjects[2],
		name: 'Bazar',
		status: statuses[0],
		sex: sexes[1]
	},
	{
		id: 4,
		subject: subjects[1],
		name: 'Quxor',
		status: statuses[1],
		sex: sexes[0]
	}
];

export function filter({ subject = '', status = [], name = '', sex = [] }) {
	let res = data
		.filter(d => !status.length || status.includes(d.status))
		.filter(d => !sex.length || sex.includes(d.sex))
		.filter(d => !name.length || d.name.toLowerCase().includes(name.toLowerCase()))
		.filter(d => !subject.length || d.subject.toLowerCase() === subject.toLowerCase());
	console.log(res);
	return res;
}