<script setup>
defineProps({
  title: {
    type: String
  }
})

</script>
<template>
  <div class="mockup-browser bg-base-300 shadow-lg hover:drop-shadow-xl transition duration-300" >

    <div class="mockup-browser-toolbar gap-1">
        <!-- <span class="ml-2 w-3 h-3 rounded-full bg-red-400"></span>
        <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
        <span class="w-3 h-3 mr-2 rounded-full bg-green-400"></span> -->
      <div class="input text-base-content" >{{ title }}</div>
    </div>
      <slot/>
    <div class="pt-2 h-12">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped>
.mockup-browser .mockup-browser-toolbar:before {
  display: none;
}
.input {
  @apply
  sm:w-full
  w-[80%] !important

}
</style>