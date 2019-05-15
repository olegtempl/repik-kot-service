<!-- <div>
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
 -->
<!-- <div>
	<h5></h5>
	<!-- <b>{subject}</b> -->
	<p></p>
	<!-- <p>{personalInfo.otherInfo}</p> -->
	<p>{personalInfo.status}</p>
	<p>{personalInfo.sex}</p>
	<p></p>
	<p></p>
	<p>{ placeOfEmployment}</p>
	<p>{contacts.phone} </p>

	<!-- <h5>{personalInfo.firstName}</h5>
	<b>{subject}</b>
	<p>{personalInfo.status}</p>
	<p>{sex}</p> -->
</div>
 -->



<!--<div>
	<h5>{name}</h5>
	<p>{status}</p>
	<p>{sex}</p>
	<p>{continuous}</p>
	<p>{degree}</p>
	<p>{education}</p>
	<p>{goal}</p>
	<p>{place}</p>
	<p>{type}</p>
	<!-- <p>{}</p> -->
</div>
-->
<!--<div>

	<p>{status}</p>
	<p>{sex}</p>
	<p>{continuous}</p>
	<p>{degree}</p>
	<p>{education}</p>
	<p>{place}</p>
	<!-- <p>{}</p> -->
</div>
-->


<div class="repetitor-wrap">
            <div class="avatar-wrap"><img src="" alt="Repetitor $(FIO)" srcset=""></div>
            <div class="repetitor-info-wrap">
              <h3 class="text-md text-white">{name}</h3>
              <div class="info-about-repetitor">
                <div class="goal">
                  <p>Мэта:</p><span class="text-primary">{goal}</span>
                  <p>Прадметы:</p><span class="text-primary">Ангельская мова</span>
                  <p>Тып занятку:</p><span class="text-primary">{type}</span>
                </div>
                <div class="classes">
                  <h4 class="text-sm text-white">Кошт занятку</h4>
                  <div class="spaces-wrap">
                    <div class="space"><span class="text-xs">У вучня:</span>
                      <div class="coast"><span class="text-primary">15 р.</span><span>(60мin)</span></div>
                    </div>
                    <div class="space"><span class="text-xs">У рэпетытара:</span>
                      <div class="coast"><span class="text-primary">15 р.</span><span>(60мin)</span></div>
                    </div>
                    <div class="space"><span class="text-xs">Дыстанцыйна:</span>
                      <div class="coast"><span class="text-primary">15 р.</span><span>(60мin)</span></div>
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
          </div>
          </div>

<script>
	export let name = "",
	  status = [],
	  sex = [],
	  continuous = [],
	  degree = [],
	  education = [],
	  goal = [],
	  place = [],
	  type = [];
</script>

<style>


.top-repetitors-block {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1800px;
  grid-template-areas:
  "a a a r r r r r r r r r";

}


  .repetitor-wrap {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 100%;
    grid-template-areas:
    "av av av av d d d d d d d d ";
    background-color: #000000;
    margin: 5%;
    height: 400px;
  }



.goal {
  display: grid;
  grid-template-columns: 110px 200px ;
  grid-template-rows: 20px 20px 20px;
  margin-bottom: 18%;
}
.avatar-wrap {
background: url(ex_2.png);
border: 4px solid #1FCECB;
margin-right: 25px;
grid-area: av;
}
.classes {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 71px;
}
  .spaces-wrap {
    display: flex;
    flex-direction: row;
  }
  .info-about-repetitor {
}
  .repetitor-info-wrap {
    grid-area: d;
  }
.repetitor-wrap {
  display: flex;
  flex-direction: row;
}

 .space {
  width: 130.36px;
  max-height: 50px;
  text-align: center;

  }

span {
padding-right: 5px;
}
.coast {

}
.buttons-panel {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}


</style>
