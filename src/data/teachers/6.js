import {
  sexes,
  educationDegree,
  educationTeacher,
  placeOfEmployment,
  goalEmployment,
  continuousEmployment,
  typeEmployment,
  statuses
} from '../checkboxAttributes'

import faker from 'faker/locale/ru'

export const teacherInfo = {
  // discipline: [
  //   '',
  //   '',
  //   '',
  //   ''
  // ],
  continuousEmployment: continuousEmployment[faker.random.number({
    max: 3
  })],
  educationDegree: educationDegree[faker.random.number({
    max: 1
  })],
  placeOfEmployment: placeOfEmployment[faker.random.number({
    max: 2
  })],
  educationalInfo: educationTeacher[faker.random.number({
    max: 2
  })],
  goal: {
    text: goalEmployment[faker.random.number({
      max: 4
    })],
    type: typeEmployment[faker.random.number({
      max: 1
    })],
    coastStudentPlace: faker.random.number({
      max: 35
    }),
    coastTeacherPlace: faker.random.number({
      max: 30
    }),
    coastRemote: faker.random.number({
      max: 30
    }),
  },
  personalInfo: {
    id: 6,
    dateOfBirth: faker.date.past(),
    status: statuses[faker.random.number({
      max: 6
    })],
    sex: sexes[0],

    experience: faker.random.number({
      max: 15
    }),

    // Automate generator
    otherInfo: `Кандидат химических наук (1983 г.).
    Образование: МГУ им. М.В. Ломоносова, химический факультет, специальность – химия (диплом с отличием, 1974 г.); аспирантура (1977 г.).
    Старший научный сотрудник (1989 г.).
    Опыт преподавания:
    С 2000 года – Московский государственный горный университет.
    Репетиторство – более 20 лет.
    Документы об образовании.

    Кандидат химических наук. Лучший результат ЕГЭ химия — 100 баллов. Лучший результат ЕГЭ математика 86 баллов. Подготовка к ДВИ в МГУ им. М.В. Ломоносова.
    Мои ученики учатся во всех лучших вузах Москвы на бюджете. В том числе, во всех медицинских вузах Москвы. Стаж преподавания более 20 лет. Только на сайте Ваш репетитор более 200 отзывов. Ваше будущее в ваших руках. Обращайтесь!`,
    firstName: 'Васiль',
    // firstName: faker.name.firstName(),
    lastName: 'Фiлiппов',
    img: 'https://cdn0.peopleimages.com/picture/201808/1695228-the-feeling-after-receiving-that-after-interview-message-fit_400_400.jpg',

    middleName: faker.name.findName(),
    avatarPath: faker.internet.avatar(),
    city: faker.address.city(),
    streetName: "Бакінская вуліца",
    country: faker.address.country()
  },
  contacts: {
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    // profileFacebook: '',
    // profileTwitter: ''
  },
  reviews: [{
    nameAuthor: faker.internet.userName(),
    text: faker.lorem.text()
  }],
  price: {
    atTheTeacher: faker.random.number({
      min: 7,
      max: 20
    }),
    atStudent: faker.random.number({
      max: 35,
      min: 12
    }),
    remotely: faker.random.number({
      max: 25,
      min: 7
    }),
  },
  discipline: "Ангельская мова"

  // educationalInfo: [{
  //     place: '',
  //     level: '',
  //     speciality: '',
  //     yearOfEnding: '',
  //     academicDegree: ''
  //   },
  //   {
  //     place: '',
  //     level: '',
  //     speciality: '',
  //     yearOfEnding: '',
  //     academicDegree: ''
  //   }
  // ],

  // serviceData: [{
  //     headingService: '',
  //     goalService: '',
  //     typeService: '',
  //     coastRemote: false,
  //     coastTeacherPlace: true,
  //     coastStudentPlace: false
  //   },
  //   {
  //     headingService: '',
  //     goalService: '',
  //     typeService: '',
  //     coastRemote: false,
  //     coastTeacherPlace: true,
  //     coastStudentPlace: false
  //   }
  // ],


};
