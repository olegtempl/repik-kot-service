<script>
  // export let name = "",
  //   subject = "",
  //   status = "",
  //   sex = "";
  import { fade } from "svelte/transition";
  let contactsVisible = false,
    aboutRepikVisible = false,
    coastVisible = true;

  const showInfoAboutRepik = () => {
    aboutRepikVisible = !aboutRepikVisible;
    coastVisible = !coastVisible;
  };

  const showContactsInfo = () => {
    contactsVisible = !contactsVisible;
    coastVisible = !coastVisible;
  };

  export let continuousEmployment = "",
    educationDegree = "",
    placeOfEmployment = "",
    discipline = "",
    goal = {
      text: "",
      type: "",
      coastStudentPlace: "",
      coastTeacherPlace: "",
      coastRemote: ""
    },
    price = {
      atTheTeacher: "",
      atStudent: "",
      remotely: ""
    },
    personalInfo = {
      id: "",
      dateOfBirth: "",
      status: "",
      sex: "",
      experience: "",
      // Automate generator
      otherInfo: "",
      firstName: "",
      lastName: "",
      middleName: "",
      avatarPath: "",
      city: "",
      streetName: "",
      country: ""
    },
    contacts = {
      email: "",
      phone: ""
      // profileFacebook: '',
      // profileTwitter: ''
    },
    reviews = [
      {
        nameAuthor: "",
        text: ""
      }
    ];
</script>

<style>

</style>

<div class="repetitor-wrap">
  <div
    class="avatar-wrap"
    style="background: url({personalInfo.img}) no-repeat center center;
    background-size: 3.2em;"
    srcset="" />
  <div class="repetitor-info-wrap">
    <h3 class="text-md text-white">
       {personalInfo.firstName} {personalInfo.lastName}
    </h3>
    <div class="info-about-repetitor">
      <div class="goal">
        <p>Мэта:</p>
        <span class="text-primary">{goal.text}</span>
        <p>Прадметы:</p>
        <span class="text-primary">{discipline}</span>
        <p>Тып занятку:</p>
        <span class="text-primary">{goal.type}</span>
      </div>
      <div class="classes">
        {#if coastVisible}
          <h4 class="text-sm text-white">Кошт занятку</h4>
          <div class="spaces-wrap">
            <div class="space">
              <span class="text-xs">У вучня:</span>
              <div class="coast">
                <span class="text-primary"> {price.atStudent} р.</span>
                <span>(60 мiн)</span>
              </div>
            </div>
            <div class="space">
              <span class="text-xs">У рэпетытара:</span>
              <div class="coast">
                <span class="text-primary">{price.atTheTeacher} р.</span>
                <span>(60 мiн)</span>
              </div>
            </div>
            <div class="space">
              <span class="text-xs">Дыстанцыйна:</span>
              <div class="coast">
                <span class="text-primary">{price.remotely} р.</span>
                <span>(60 мiн)</span>
              </div>
            </div>
          </div>
        {/if}

        <div class="buttons-panel">
          <button class="button button-outlined" on:click={showInfoAboutRepik}>
            Дэталёвей ▼
          </button>
          <button class="button button-primary" on:click={showContactsInfo}>
            Звязацца
          </button>
        </div>

        {#if contactsVisible}
          <div class="container-sm">
            <div class="message-bar background-success" transition:fade>
              <p>Паштовая скрынка: {contacts.email}</p>
              <p>Нумар тэлефона: {contacts.phone}</p>
            </div>
          </div>
        {/if}

        {#if aboutRepikVisible}
          <div class="container-md">
            <div class="message-bar background-success" transition:fade>
              <p>Досвед працы па прадмеце: {personalInfo.experience} год</p>
              <p>Горад месцазнаходжання: г.{personalInfo.city}</p>
              <p>Вуліца месцазнаходжання: вул.{personalInfo.streetName}</p>
              <!-- <p>{personalInfo.country}</p> -->
              <p>Дадатковая інфармацыя: {personalInfo.otherInfo}</p>
              <!-- <p>{personalInfo.}</p> -->
            </div>
          </div>
        {/if}

      </div>
    </div>
  </div>
</div>
