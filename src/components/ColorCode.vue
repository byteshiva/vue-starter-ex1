<template>
  <div>
    <input 
    v-model="$store.state.colorCode"
      type="text" 
      placeholder="Enter color code" 
    /> 
  </div>
</template>

<script>
export default {
  computed: {
    colorCode: {
      get() {
        return this.$store.state.colorCode;
      },
      set(newValue) {
        this.$store.dispath('setColorCode', newValue);
      }
    }
  }
}
</script>

<style>

</style>