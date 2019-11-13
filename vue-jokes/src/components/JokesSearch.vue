<template>
   <div>
      <div class="jokes-title">
        <img src="../imgs/search_chuck_img.jpeg" />
        <h1>{{ title }}</h1>
      </div>
      <JokesSearchForm></JokesSearchForm>
      <JokesSearchList></JokesSearchList>
    </div>
</template>

<script>
import JokesSearchList from "./JokesSearchList.vue";
import JokesSearchForm from "./JokesSearchForm.vue";

export default {
  name: "JokesSearch",
  components: {
    JokesSearchForm,
    JokesSearchList
  },
  data() {
    return {
      title: "Search"
    };
  },
}
</script>