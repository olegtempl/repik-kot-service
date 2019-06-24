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
    id: 14,
    dateOfBirth: faker.date.past(),
    status: statuses[faker.random.number({
      max: 6
    })],
    sex: sexes[0],

    experience: faker.random.number({
      max: 15
    }),

    // Automate generator
    otherInfo: `Кандыдат хімічных навук (1979 г.), дацэнт (1983 г.).
    Чалец-карэспандэнт Акадэміі прафесійнай адукацыі (2001 г.).
    Ганаровы працаўнік найвысокай прафесійнай адукацыі Расійскай Федэрацыі (2012 г.).
    Узнагароджаны значком «Выдатнік народнай асветы» (1995 г.).
    У 1973 годзе скончыў хімічны факультэт Уральскага дзяржаўнага ўніверсітэта ім. А.М. Горкага па спецыяльнасці «хімія».
    У 1978 годзе скончыў аспірантуру Свярдлоўскага горнага інстытута па спецыяльнасці «фізічная хімія».
    Пасведчанне пра падвышэнне педагагічнай кваліфікацыі па праграме «Актуальныя праблемы сучаснай педагогікі і псіхалогіі найвысокай школы» (2012 г.).`,
    firstName: 'Рынат',
    // firstName: faker.name.firstName(),
    lastName: 'Лебедзеў',
    img: 'https://cdn0.peopleimages.com/picture/201701/1329233-im-five-minutes-away-from-the-office-fit_400_400.jpg', //https://cdn0.peopleimages.com/picture/2016/366534-enjoying-a-lazy-sunday-afternoon-fit_400_400.jpg

    middleName: faker.name.findName(),
    avatarPath: faker.internet.avatar(),
    city: faker.address.city(),
    streetName: "Дачная вуліца",
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
