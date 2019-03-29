export const subjects = ['Foo', 'Bar', 'Baz'];
// export const sexes = ['Мужчынскі', 'Жаночы'],
// 	educationDegree = [false, true],
// 	educationTeacher = ['Сярэднее', 'Сярэдне-адмысловае', 'Найвышэйшае'],
// 	placeOfEmployment = ['У вучня', 'У рэпетытара', 'Дыстанцыйна'],
// 	goalEmployment = ['Дапамога па праграме', 'Рыхтоўля да ОГЭ', 'Рыхтоўля да АДЭ', 'Рыхтоўля да алімпіяд', 'Рыхтоўля да ДВИ'],
// 	continuousEmployment = ['30', '60', '90', '120'],
// 	typeEmployment = ['Індывідуальна', 'У групе'],
// 	statuses = ['Прыватны выкладнік', 'Доктар навук', 'Школьны настаўнік', 'Выкладнік коледжа', 'Выкладнік ВНУ', 'Навуковы супрацоўнік', 'Студэнт'];


import {
	teacherInfo as teacher1
} from './teachers/1.js'
import {
	teacherInfo as teacher2
} from './teachers/2.js'
import {
	teacherInfo as teacher3
} from './teachers/3.js'
import {
	teacherInfo as teacher4
} from './teachers/4.js'
import {
	teacherInfo as teacher5
} from './teachers/5.js'
import {
	teacherInfo as teacher6
} from './teachers/6.js'
import {
	teacherInfo as teacher7
} from './teachers/7.js'
import {
	teacherInfo as teacher8
} from './teachers/8.js'
import {
	teacherInfo as teacher9
} from './teachers/9.js'
import {
	teacherInfo as teacher10
} from './teachers/10.js'
import {
	teacherInfo as teacher11
} from './teachers/11.js'
import {
	teacherInfo as teacher12
} from './teachers/12.js'
import {
	teacherInfo as teacher13
} from './teachers/13.js'
import {
	teacherInfo as teacher14
} from './teachers/14.js'
import {
	teacherInfo as teacher15
} from './teachers/15.js'
import {
	teacherInfo as teacher16
} from './teachers/16.js'
import {
	teacherInfo as teacher17
} from './teachers/17.js'
import {
	teacherInfo as teacher18
} from './teachers/18.js'
import {
	teacherInfo as teacher19
} from './teachers/19.js'
import {
	teacherInfo as teacher20
} from './teachers/20.js'


import {
	sexes,
	educationDegree,
	placeOfEmployment,
	goalEmployment,
	continuousEmployment,
	typeEmployment,
	statuses
} from './checkboxAttributes'





const data = [
	teacher1,
	teacher2,
	teacher3,
	teacher4,
	teacher5,
	teacher6,
	// teacher7,
	// teacher8,
	// teacher9,
	// teacher10,
	// teacher11,
	// teacher12,
	// teacher13,
	// teacher14,
	// teacher15,
	// teacher16,
	// teacher17,
	// teacher18,
	// teacher19,
	// teacher20
];


export function filter({
	status = [],
	sex = [],
	continuous = [],
	degree = [],
	education = [],
	goal = [],
	place = [],
	type = [],
	// name = "",
}) {
	let res = data
		.filter(d => !status.length || status.includes(d.personalInfo.status))
		.filter(d => !sex.length || sex.includes(d.personalInfo.sex))
		// .filter(d => !continuous.length || continuous.includes(d.continuous))
		.filter(d => !degree.length || degree.includes(d.educationDegree))
		.filter(d => !education.length || education.includes(d.educationalInfo))
		.filter(d => !goal.length || goal.includes(d.goal.text))
		.filter(d => !type.length || type.includes(d.goal.type))
		.filter(d => !place.length || place.includes(d.placeOfEmployment))
	// .filter(d => !name.length || d.personalInfo.firstName.toLowerCase().includes(personalInfo.firstName.toLowerCase()))
	// .filter(d => !subject.length || d.subject.toLowerCase() === subject.toLowerCase());
	// console.log(res);
	return res;
}


// export function filter({
// 	status = [],
// 	name = '',
// 	sex = []
// }) {
// 	let res = data
// 		.filter(d => !status.length || status.includes(d.personalInfo.status))
// 		.filter(d => !sex.length || sex.includes(d.personalInfo.sex))
// 		.filter(d => !name.length || d.personalInfo.firstNam.toLowerCase().includes(firstNam.toLowerCase()))
// 	// .filter(d => !subject.length || d.subject.toLowerCase() === subject.toLowerCase());
// 	console.log(res);
// 	return res;
// }