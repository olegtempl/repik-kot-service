<script>
  // import Filters from "./components/Filters.svelte";
  import RepetitorCard from "./components/RepetitorCard.svelte";

  import { filter } from "./data/data.js";
  import { repetitorsInfo } from "./data/data.js";
  // import ContinuousEmployment from "./filters/ContinuousEmployment.svelte";
  import SexTeacher from "./components/filters/SexTeacher.svelte";
  import StatusTeacher from "./components/filters/StatusTeacher.svelte";
  import EducationDegree from "./components/filters/EducationDegree.svelte";
  import EducationTeacher from "./components/filters/EducationTeacher.svelte";
  import GoalEmployment from "./components/filters/GoalEmployment.svelte";
  import PlaceOfEmployment from "./components/filters/PlaceOfEmployment.svelte";
  import TypeEmployment from "./components/filters/TypeEmployment.svelte";

  import { fade } from "svelte/transition";
  let visible = false;

  const showInfoMessage = () => {
    visible = !visible;
  };

  export let status = [],
    sex = [],
    continuous = [],
    degree = [],
    education = [],
    goal = [],
    place = [],
    type = [],
    name = "",
    repetitors = [];

  $: repetitors = filter({
    status,
    sex,
    continuous,
    degree,
    education,
    goal,
    place,
    type,
    name
  });
</script>

<style>

</style>

<svelte:head>
  <link rel="stylesheet" href="viktoriya.css" />
</svelte:head>

<!-- Start header block-->
<header>
  <div class="panel-logo">
    <div class="name-service-wrap">
      <div class="name-service">Repik-cat</div>
    </div>
    <div class="logo-wrap">
      <img src="./images/logo.png" alt="Logo Repik-kot project" />
    </div>
  </div>
  <div class="promo-block">
    <img
      src="./images/header_image.png"
      alt="Promo image the Repik-kot project"
      srcset="" />
  </div>
  <div class="heading-service-wrap">
    <div class="heading-service">
      <h2 class="name-service">Repikcat -</h2>
      <p class="text-center">сэрвіс для пошуку рэпетытараў</p>
      <p class="text-center text-primary">па Ангельскай мове</p>
    </div>
  </div>
</header>
<!-- End header block-->
<!-- Start main block-->
<main>
  <!-- Navigation brow-->
  <div class="content">
    <div class="section background-dark">
      <div class="container text-center">
        <h2 class="text-md text-white">Усе даступныя рэпетытары</h2>
      </div>
    </div>
    bcg_top_repik.svg
    <div class="top-repetitors-block">
      <aside>
        <div class="filter-panel-wrap">
          <h2 class="text-md text-center">Фільтр для пошуку рэпетытараў:</h2>
          <div class="filter-panel">
            <div class="checkboxes-block">
              <SexTeacher bind:sex />
              <StatusTeacher bind:status />
              <EducationDegree bind:degree />
              <EducationTeacher bind:education />
              <GoalEmployment bind:goal />
              <TypeEmployment bind:type />
              <PlaceOfEmployment bind:place />
              <!-- <Filters bind:sex bind:status bind:degree bind:education bind:goal bind:type bind:place /> -->
            </div>
          </div>
        </div>
      </aside>

      <div class="repetitors-preview">
        <h2 class="text-lg text-black">Топ 3 рэпетытараў</h2>
        {#each repetitors as rep, i}
          {#if i < 3}
            <RepetitorCard {...rep} />
          {/if}
        {:else}
          <h2 class="text-md text-center text-black">
            Шкадую, я не змог падабраць такога рэпетытара сярод топавых
          </h2>
        {/each}

      </div>

    </div>

    <!-- Start Sales panel -->
    <div class="sale-block-wrap">
      <div class="message-text">
        <h2 class="text-center text-md ">
          Пакінь свой email і атрымай зніжку 15%
        </h2>
      </div>
      {#if !visible}
        <div class="input-wrap">
          <div class="input">
            <input id="name" placeholder="ВАШ ЕМЕЙЛ" type="text" />
          </div>
          <div class="button-wrap">
            <button on:click={showInfoMessage}>→</button>
          </div>
        </div>
      {/if}

      {#if visible}
        <!-- <div class="container-sm"> -->
        <div class="message-bar background-info" transition:fade>
          <p>
            Паведамленне на вашу паштовую скрынку адпраўлена, праверце калі
            ласка пошту
          </p>
        </div>
        <!-- </div> -->
      {/if}
    </div>
    <div class="repetitors-preview">
      <h3 class="text-lg text-black text-center">Усе рэпетытары</h3>
      {#each repetitors as rep, i (rep.personalInfo.id)}
        <RepetitorCard {...rep} />
      {:else}
        <h2 class="text-md text-center text-black">
          Шкадую, я не змог падабраць такога рэпетытара
        </h2>
      {/each}
    </div>
    <!-- End Sales panel -->
  </div>

  <!-- 404 page -->
  <!-- <body class="non"></body> -->
</main>

<footer>
  <div class="content-footer">
    <section class="container-sm">
      <h3 class="text-md text-black text-normal">Сужба патрымкi</h3>
      <a href="404.html">Дапамога</a>
      <a href="404.html">Зварот сродкаў</a>
      <a href="404.html">Бяспека</a>
    </section>
    <section class="container-sm">
      <h3 class="text-md text-black text-normal">Інфармацыя пра сэрвiс</h3>
      <a href="404.html">Пра нас</a>
      <a href="404.html">Вакансіі</a>
      <a href="404.html">Артыкулы</a>
      <a href="404.html">Мабільны дадатак</a>
    </section>
    <section class="container-sm">
      <h3 class="text-md text-black text-normal">Нашi партнеры</h3>
      <a href="404.html">bivi.by</a>
      <a href="404.html">bear-software.by</a>
      <a href="404.html">darkdev.by</a>
    </section>
  </div>
  <div class="wrapper">
    <div class="wrapper-inner ">
      <div class="text-sm text-white text-normal">Мова: Беларуская</div>
    </div>
    <div class="wrapper-inner ">
      <div class="text-sm text-white text-normal">Палітыка сайта</div>
    </div>
    <div class="wrapper-inner ">
      <div class="text-sm text-white text-normal">Дамоўленасці</div>
    </div>
    <div class="wrapper-inner ">
      <div class="text-sm text-white text-normal">© 2019 Repik-kot inc.</div>
    </div>
  </div>
</footer>
