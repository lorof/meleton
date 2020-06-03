import Vue from 'vue'
import dayjs from 'dayjs'

Vue.filter('date', (date: string) => dayjs(date).format('DD.MM.YYYY'))
