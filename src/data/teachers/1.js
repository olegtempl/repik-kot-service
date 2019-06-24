import {
  sexes,
  educationDegree,
  educationTeacher,
  placeOfEmployment,
  goalEmployment,
  continuousEmployment,
  typeEmployment,
  statuses
} from '../checkboxAttributes';

import faker from 'faker/locale/ru';

export const teacherInfo = {
  continuousEmployment: continuousEmployment[
    faker.random.number({
      max: 3
    })
  ],
  educationDegree: educationDegree[
    faker.random.number({
      max: 2
    })
  ],
  placeOfEmployment: placeOfEmployment[
    faker.random.number({
      max: 2
    })
  ],
  educationalInfo: educationTeacher[
    faker.random.number({
      max: 2
    })
  ],
  goal: {
    text: goalEmployment[
      faker.random.number({
        max: 4
      })
    ],
    type: typeEmployment[
      faker.random.number({
        max: 1
      })
    ],
    coastStudentPlace: faker.random.number({
      max: 35
    }),
    coastTeacherPlace: faker.random.number({
      max: 30
    }),
    coastRemote: faker.random.number({
      max: 30
    })
  },
  personalInfo: {
    id: 1,
    dateOfBirth: faker.date.past(),
    status: statuses[
      faker.random.number({
        max: 6
      })
    ],
    sex: sexes[1],

    experience: faker.random.number({
      max: 15
    }),

    // Automate generator
    otherInfo: `Кандыдат хімічных навук (1986 г.).
    Адукацыя: МДУ ім. М.В. Ламаносава, спецыяльнасць – хімія (дыплом з адзнакай, 1979 г.); аспірантура МДУ.
    Досвед выкладання – 5 гадоў (дацэнт у шэрагу ВНУ Масквы і Падмаскоўя, кіраўнік прыватнага рэпетытарскага цэнтра).
    Досвед рэпетытарства – 30 гадоў.`,
    firstName: 'Яугенiя',
    img: 'https://cdn0.peopleimages.com/picture/2016/309528-fill-my-head-with-ideas-copyspace-fit_400_400.jpg',

    // firstName: faker.name.firstName(),
    lastName: 'Фокiна',
    middleName: faker.name.findName(),
    avatarPath: faker.internet.avatar(),
    city: faker.address.city(),
    streetName: 'Абрыкосавая вуліца',
    country: faker.address.country()
  },
  contacts: {
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber()
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
    })
  },
  discipline: 'Ангельская мова'

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
