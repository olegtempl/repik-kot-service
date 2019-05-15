<div class="repetitor-wrap">
  <div class="avatar-wrap" style="background: url({personalInfo.img}) no-repeat center center;
  background-size: cover;" srcset=""></div>
  <div class="repetitor-info-wrap">
    <h3 class="text-md text-white">{personalInfo.firstName} {personalInfo.lastName}</h3>
    <div class="info-about-repetitor">
      <div class="goal">
        <p>Мэта:</p><span class="text-primary">{ goal.text}</span>
        <p>Прадметы:</p><span class="text-primary">Ангельская мова</span>
        <p>Тып занятку:</p><span class="text-primary">{goal.type}</span>
             </div>
              <div class="classes">
        <h4 class="text-sm text-white">Кошт занятку</h4>
        <div class="spaces-wrap">
          <div class="space"><span class="text-xs">У вучня:</span>
            <div class="coast"><span class="text-primary">15 р.</span><span>(60 мiн)</span></div>
          </div>
          <div class="space"><span class="text-xs">У рэпетытара:</span>
            <div class="coast"><span class="text-primary">15 р.</span><span>(60 мiн)</span></div>
          </div>
          <div class="space"><span class="text-xs">Дыстанцыйна:</span>
            <div class="coast"><span class="text-primary">15 р.</span><span>(60 мiн)</span></div>
          </div>
        </div>
        <div class="buttons-panel">
          <button class="button button-outlined">Дэталёвей ▼</button>
          <button class="button button-primary">Звязацца</button>
        </div>
      </div>
    </div>
  </div>
</div>



<script>
	// export let name = "",
	//   subject = "",
	//   status = "",
	//   sex = "";

	export let continuousEmployment = "",
	  educationDegree = "",
	  placeOfEmployment = "",
	  goal = {
	    text: "",
	    type: "",
	    coastStudentPlace: "",
	    coastTeacherPlace: "",
	    coastRemote: ""
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
