<script setup>
defineProps({
  title: {
    type: String
  }
})

</script>
<template>
  <div class="mockup-browser bg-base-300 shadow-lg hover:drop-shadow-xl duration-300" >

    <div class="mockup-browser-toolbar w-full gap-1">
      <span class="ml-2 w-3 h-3 rounded-full bg-red-400"></span>
      <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
      <span class="w-3 h-3 mr-2 rounded-full bg-green-400"></span>
      <div class="input">{{ title }}</div>
      <div class="flex gap-2">
        <slot name="header"></slot>
      </div>
    </div>
      <slot name="body"></slot>
  </div>
</template>

<style scoped>
.mockup-browser .mockup-browser-toolbar:before {
  display: none;
}
</style>