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
    id: 4,
    dateOfBirth: faker.date.past(),
    status: statuses[faker.random.number({
      max: 6
    })],
    sex: sexes[0],

    experience: faker.random.number({
      max: 15
    }),

    // Automate generator
    otherInfo: `Образование: аспирантура МИТХТ им. М.В. Ломоносова (2012 г.); факультет биотехнологии и органического синтеза, специальность – теоретические основы химической технологии, магистр (2009 г.); бакалавр техники и технологии (2007 г.).
    Медаль Министерства образования и науки РФ (2003 г.).
    Автор более 20 публикаций научно-исследовательских работ, тезисов, методических материалов.
    Опыт преподавания:
    • преподаватель кафедры общей и неорганической химии РХТУ им. Д.И. Менделеева (с 2012 г.);
    • преподаватель Вечерней химической школы при РХТУ им. Д.И. Менделеева (ВХШ РХТУ) (с 2012 г.).
    Член жюри и эксперт Всероссийской олимпиады им. П.Д. Саркисова (с 2012 г.).
    Репетиторская деятельность – с 2005 года.
    Профессиональный репетитор с государственной регистрацией.
    Собственная система подготовки к ЕГЭ, ГИА (ОГЭ), SAT.
    Обладатель особых профессиональных наград и участник вебинаров компании «Ваш репетитор».`,
    firstName: 'Мiхась',
    // firstName: faker.name.firstName(),
    lastName: 'Васiльев',
    img: 'https://cdn2.peopleimages.com/picture/201704/1494956-hes-there-to-guide-you-through-finding-all-the-solutions-fit_400_400.jpg',

    middleName: faker.name.findName(),
    avatarPath: faker.internet.avatar(),
    city: faker.address.city(),
    streetName: "Аўтазавадскі завулак",
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
