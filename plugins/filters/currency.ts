import Vue from 'vue'

Vue.filter(
  'currency',
  (currency: string) => `${Number(currency).toLocaleString('ru-RU')} ₽`
)
