<template>
    <div class="JokesForm JokesSection">
        <form>
            <div class="JokesForm__Part">
                <select name="jokes-categories" id="jokes-categories">
                    <option value="" disabled selected>Select your category</option>
                    <option v-for="category in categories"
                            v-bind:key="category"
                            :value="category">{{category}}</option>
                </select>
                <input type="number" class="JokesForm__Number" step="1" min="1" value="1">
            </div>
            <div class="JokesForm__Part">
                <input type="text" class="JokesForm__Search">
                <button type="submit">Search</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  name: 'JokesForm',
  data() {
      return {
          categories: [],
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