<template>
    <div class="JokesForm JokesSection">
        <form>
            <div class="JokesForm__Part">
                <select @change="changedSelect($event)" name="jokes-categories" id="jokes-categories">
                    <option value="" disabled selected>Select your category</option>
                    <option v-for="category in categories"
                            v-bind:key="category"
                            :value="category">{{category}}</option>
                </select>
                <input v-model.number="numberOfJokes" type="number" class="JokesForm__Number" step="1" min="1" value="1">
            </div>
            <div class="JokesForm__Part">
                <input v-model="searchInputText" placeholder="search text..." type="text" class="JokesForm__Search">
                <button v-on:click="callShowJokes" type="button">{{ getSearchButtonText }}</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  name: 'JokesForm',
  data() {
      return {
          categories: ["all"],
          selectedCategory: "",
          numberOfJokes: 1,
          searchInputText: "",
          clearButton: false
      }
  },
  created() {
      this.fetchCategories();
  },
  methods: {
      fetchCategories() {
          fetch('https://api.chucknorris.io/jokes/categories')
            .then(res => res.json())
            .then(data => {
                this.categories.push(...data);
                console.log(data);
            });

            console.log(this.categories);
      },
      changedSelect(event) {
          this.selectedCategory =event.target.value;
      },
      callShowJokes() {
          this.clearButton = !this.clearButton;
          this.$emit('searchButtonClicked', {selectedCategory: this.selectedCategory, numberOfJokes: this.numberOfJokes, searchInputText:this.searchInputText});
      }
  },
  computed: {
      getSearchButtonText () {
          if(this.clearButton) {
              return "Again"
          }
          if (this.searchInputText.length > 2) {
              return "search for joke";
          }
          if (this.numberOfJokes>1) {
              return "Get random jokes"
          }
          return "Get random joke";
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.JokesForm__Part * {
    font-size: 1.2rem;
    padding: .2rem;
    border: .1rem solid darkblue;
    border-radius: .6rem;
}

.JokesForm__Part:first-child select {
    width: 75%;
    margin-right: 5%;
}
.JokesForm__Part:first-child input {
    width: 20%;
    text-align: center;
}
.JokesForm__Part:last-child input {
    width: 100%;
    margin-top: 1rem;
}
.JokesForm__Part button {
    background: darkblue;
    color: white;
    margin-top: 1rem;
    padding: .2rem .6rem;
}
.JokesForm__Part button:hover {
    cursor: pointer;
}
</style>