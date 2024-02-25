<template>
  <div class="max-w-2xl mx-auto mt-8 group w-full  duration-[400ms]   shadow-slate-950 shadow-lg md:max-w-sm lg:max-w-md hover:shadow-2xl hover:shadow-black hover:bg-neutral hover:scale-[1.02] " >
    <div class="w-full h-11 bg-slate-950 flex justify-start  items-center space-x-1.5 px-3">
      <span class="w-3 h-3 rounded-full bg-red-400"></span>
      <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
      <span class="w-3 h-3 rounded-full bg-green-400"></span>
    </div>
    <div class="p-8  bg-slate-900 h-min md:h-[400px] lg:h-[420px] ">
      <slot/>
    </div>
  </div>
</template>