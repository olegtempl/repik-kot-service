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
    id: 9,
    dateOfBirth: faker.date.past(),
    status: statuses[faker.random.number({
      max: 6
    })],
    sex: sexes[1],

    experience: faker.random.number({
      max: 15
    }),

    // Automate generator
    otherInfo: `Адукацыя: РХТУ ім. Д.І. Мендзялеева, Інстытут матэрыялаў сучаснай энергетыкі і нанатэхналогіі, інжынерны фізіка-хімічны факультэт, кваліфікацыя – інжынер, спецыяльнасць – хімічная тэхналогія матэрыялаў сучаснай энергетыкі (2013 г.); аспірантура, кірунак – тэхналогія рэдкіх элементаў і нанаматэрыялаў на іх грунце, 2 год навучання.
    Стыпендыят дзяржкарпарацыі «Расатам» (2010-2012 гг.).
    Рэпетытарскі досвед – з 2010 года.`,
    firstName: 'Ларыса',
    // firstName: faker.name.firstName(),
    lastName: 'Чеглокова',
    img: 'https://cdn2.peopleimages.com/picture/201612/1451333-ill-help-you-feel-your-best-fit_400_400.jpg', //https://cdn0.peopleimages.com/picture/2016/366534-enjoying-a-lazy-sunday-afternoon-fit_400_400.jpg

    middleName: faker.name.findName(),
    avatarPath: faker.internet.avatar(),
    city: faker.address.city(),
    streetName: "Ватуціна праезд",
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
