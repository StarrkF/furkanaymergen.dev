<script setup lang="ts">
import { computed } from 'vue'

const { t, locale } = useI18n()

const props = defineProps<{
  data: any[]
  type?: 'work' | 'edu'
}>()

const formatDate = (date: any) => {
  if (!date) return t('experience.present')
  const d = new Date(date)
  if (isNaN(d.getTime())) return String(date)
  const month = (d.getMonth() + 1).toString().padStart(2, '0')
  const year = d.getFullYear()
  return `${month}.${year}`
}

const getYearMonthDifference = (startDate: any, endDate: any) => {
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : new Date()
  if (isNaN(start.getTime()) || isNaN(end.getTime())) return ''

  let totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth())

  if (end.getDate() < start.getDate()) {
    totalMonths--
  }

  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  let result = ''
  if (years > 0) result += years + t('experience.year_suffix')
  if (months > 0) result += months + t('experience.month_suffix')
  return result.trim() || t('experience.less_than_month')
}

const processedData = computed(() => {
  if (!props.data || !Array.isArray(props.data)) return []
  return props.data.map(item => {
    return {
      ...item,
      format_start_date: formatDate(item.start_date),
      format_end_date: formatDate(item.end_date),
      month_difference: getYearMonthDifference(item.start_date, item.end_date)
    }
  })
})
</script>

<template>
  <div class="relative max-w-5xl mx-auto py-6">
    <!-- Center Glowing Spine Track -->
    <div class="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-linear-to-b from-cyan-500 via-purple-500 to-transparent opacity-40"></div>

    <div class="space-y-8 sm:space-y-12">
      <div
        v-for="(item, index) in processedData"
        :key="index"
        data-aos="fade-up"
        :data-aos-delay="index * 100"
        class="relative flex flex-col md:flex-row items-start"
        :class="index % 2 === 0 ? 'md:flex-row-reverse' : ''"
      >
        <!-- Center Pulsing Node -->
        <div class="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-base-100 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_15px_#38bdf8] z-20">
          <div class="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></div>
        </div>

        <!-- Spacer for opposite side on Desktop -->
        <div class="hidden md:block w-1/2"></div>

        <!-- Content Card Container -->
        <div
          class="w-full md:w-1/2 pl-10 sm:pl-12 md:pl-0"
          :class="index % 2 === 0 ? 'md:pr-10 lg:pr-12' : 'md:pl-10 lg:pl-12'"
        >
          <div class="p-6 sm:p-8 rounded-3xl glass-card hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1 group shadow-xl">
            
            <!-- Header Info & Date Range -->
            <div class="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-base-content/10">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
                </svg>
                <span>{{ item.format_start_date }} - {{ item.format_end_date }}</span>
              </span>

              <span v-if="item.month_difference" class="px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-[11px] font-mono">
                {{ item.month_difference }}
              </span>
            </div>

            <!-- Role Title -->
            <h3 class="text-xl sm:text-2xl font-heading font-bold text-base-content group-hover:text-cyan-400 transition-colors mt-4">
              {{ item.title }}
            </h3>

            <!-- Details List -->
            <ul v-if="item.details && item.details.length" class="mt-4 space-y-2.5">
              <li
                v-for="(detail, i) in item.details"
                :key="i"
                class="flex items-start gap-2.5 text-sm sm:text-base font-sans text-base-content/80 leading-relaxed"
              >
                <span class="text-cyan-400 text-sm mt-0.5 shrink-0">▹</span>
                <span>{{ detail }}</span>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
