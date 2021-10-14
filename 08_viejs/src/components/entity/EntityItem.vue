<template>
  <li><input v-on:change=SendChange v-model="itemName" type="text"></li>
</template>

<script>
export default {
  name: "EntityItem",
  beforeMount() {
    //this.$data.itemName = this.props.item;
  },
  methods: {
    SendChange(){
      this.$emit('ChangeElement',{
        index: this.index,
        item: this.$data.itemName
      })
      console.log("Change in children");
      //this.ChangeElement(this.index,this.$data.itemName)
    }
  },
  data() {
    return { itemName: this.item}
  },
  props:{
    item: String,
    index: Number,
    //ChangeElement: String
  }
}
</script>

<style scoped>
</style>