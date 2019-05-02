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
    id: 8,
    dateOfBirth: faker.date.past(),
    status: statuses[faker.random.number({
      max: 6
    })],
    sex: sexes[1],

    experience: faker.random.number({
      max: 15
    }),

    // Automate generator
    otherInfo: faker.lorem.paragraph(),
    firstName: 'Эма',
    // firstName: faker.name.firstName(),
    lastName: 'Карнілава',
    img: 'https://peopleimages.com/photos/picture/2016/4350-getting-the-perfect-shot-fit_400_400.jpg', //https://cdn0.peopleimages.com/picture/2016/366534-enjoying-a-lazy-sunday-afternoon-fit_400_400.jpg

    middleName: faker.name.findName(),
    avatarPath: faker.internet.avatar(),
    city: faker.address.city(),
    streetName: faker.address.streetName(),
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
  }]

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