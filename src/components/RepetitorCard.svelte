<div>
	<h5>{personalInfo.firstName}</h5>
	<!-- <b>{subject}</b> -->
	<p>{personalInfo.lastName}</p>
	<!-- <p>{personalInfo.otherInfo}</p> -->
	<p>{personalInfo.status}</p>
	<p>{personalInfo.sex}</p>
	<p>{ goal.text}</p>
	<p>{ goal.type}</p>
	<p>{ placeOfEmployment}</p>
	<p>{contacts.phone} </p>

	<!-- <h5>{personalInfo.firstName}</h5>
	<b>{subject}</b>
	<p>{personalInfo.status}</p>
	<p>{sex}</p> -->
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
	div {
	  width: 150px;
	  float: left;
	  border: 1px solid lightgray;
	  border-radius: 3px;
	  padding: 0 10px;
	  margin: 10px;
	}
</style>