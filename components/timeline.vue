<script setup>

const { locale } = useI18n();
const props = defineProps({
  data: {
    type: Object
  }
})

const formatDate = (date) => {
  if (!date) return locale.value === 'tr' ? 'Günümüz' : 'Present';
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 0-indexli ay
  const year = date.getFullYear();
  return `${month}.${year}`;
}

const getYearMonthDifference =(startDate, endDate) => {
  endDate = endDate || new Date();
  let totalMonths =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());

  if (endDate.getDate() < startDate.getDate()) {
    totalMonths--;
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  let result = '';
  if (years > 0) result += years + (locale.value === 'tr' ? 'yıl ' : 'years ');
  if (months > 0) result += months + (locale.value === 'tr' ? 'ay' : 'months');
  return result.trim() || "0";
}

watchEffect(() => {
  if (props.data) {
    props.data.forEach(item => {
      item.start_date = new Date(item.start_date);
      item.end_date = item.end_date ? new Date(item.end_date) : null;
      item.format_start_date = formatDate(item.start_date);
      item.format_end_date = formatDate(item.end_date);
      item.month_difference = getYearMonthDifference(item.start_date, item.end_date);
    });
  }
})
</script>

<template>
  <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-10">
    <li v-for="(item, index) in data" :key="index">
      <hr/>
      <div class="timeline-middle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
          <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"/>
        </svg>
      </div>
      <div :class="{'timeline-start md:text-end': index % 2 === 0, 'timeline-end': index % 2 !== 0}" class="mb-10">
        <span class="font-oswald text-primary tracking-wider font-semibold italic">{{ item.month_difference }}</span><br>
        <time class="font-mono text-secondary font-thin italic text-sm">{{ item.format_start_date }} - {{ item.format_end_date }}</time>
        <div class="text-lg font-oswald tracking-widest font-extrabold text-accent">{{ item.title }}</div>
        <ul v-if="item.details" v-for="(detail, i) in item.details" :key="i">
          <li class="font-oswald font-semibold tracking-wider text-sm">{{ detail }}</li>
        </ul>
      </div>
      <hr/>
    </li>
  </ul>
</template>

<style scoped>

</style>