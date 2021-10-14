<template>
  <div>
    <ul v-for="(item, index) in items" :key="item+'com'">
      <EntityItem :item=item :index=index @ChangeElement=ChangeElement ></EntityItem>
    </ul>
    <ul v-for="item in items" :key="item +'li'">
      <li> {{item }}</li>
    </ul>
  </div>
</template>

<script>
import EntityItem from "@/components/entity/EntityItem";
export default {
  name: "EntityList",
  components: {EntityItem},
  methods: {
    // eslint-disable-next-line no-unused-vars
    ChangeElement(data){
      console.log("Change in parent: ");
      console.log(data);
      this.$data.items[data.index] = data.item;
    },
  },
  data() {
    return {
      items: ["Ravon", "Mersedes", "Toyota", "Cherry"]
    }
  }
}
</script>

<style scoped>
</style>