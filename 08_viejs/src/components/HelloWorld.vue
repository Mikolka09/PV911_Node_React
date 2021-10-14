<template>
  <div class="hello">
    <EntityList></EntityList>
    <h1>{{ msg }}</h1>
    <input type="text" name="email" v-model.lazy="email"><br>
    <input type="password" name="password" v-model="password"><br>
    <input type="number" v-model.number="age" name="age">
    <textarea v-model="comment"></textarea>
    <input type="button" value="Press Me" v-on:click="doClick">
    <div id="result">
      <p>email: {{email}}</p>
      <p>age: {{age}}</p>
      <p>password: {{password}}</p>
      <p style="white-space: pre-line">comment: {{comment}}</p>
    </div>
  </div>
</template>

<script>
import EntityList from "@/components/entity/EntityList";
export default {
  components: {EntityList},
  methods: {
    doClick() {
      console.log(this.$data.email + " " + this.$data.password);
    }
  },
  name: 'HelloWorld',
  data() {
    return {
      email: Number(1),
      age: 10,
      password: "String",
      comment: ""
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
