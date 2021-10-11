<template>
  <div v-if="error">Error</div>
  <div v-else-if="isLoading">Loading</div>
  <ul v-else id="areaList">
    <li v-for="item in items" :key="item.Ref">
      {{ item.DescriptionRu }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "NovaPoshta",
  data: () => {
    return {
      items: [{name: "Test1"}, {name: "Test2"}],
      isLoading: false,
      error: null
    }
  },
  beforeMount: function (){
    this.loadAreas();
  },
  methods:{
    loadAreas(){
      fetch(
          "https://api.novaposhta.ua/v2.0/json/",
          {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              "apiKey": "3c81d19dc6c4375bc278f4c329fb03cb",
              "modelName": "Address",
              "calledMethod": "getAreas",
              "methodProperties": {},
            })
          }
      )
          .then(response => {
            if (response.status !== 200) {
              console.log(response.status);
              console.log(response.statusText);
              this.$data.error = response.status;
            }
            return response.json();
          })
          .then(json => {
            if (json['success']) {
              this.$data.items=json["data"];
            } else {
              console.log(json['errors']);
              console.log(json['warnings']);
              this.$data.error = json['errors'];
            }
          })
          .catch(err => {
            console.log(err);
            this.$data.error = err;
          })
    }
  }
}
</script>

<style scoped>

</style>