<script setup lang="ts">
import { useForm } from '@vorms/core'

const sugarOptions = ['no', 'light', 'half', 'half', 'standard']

const { register, handleSubmit, handleReset } = useForm({
  initialValues: {
    drink: '',
    sugar: 'light',
  },
  onSubmit(data) {
    console.log(data)
  }
})

const { value: drink, attrs: drinkFieldAttrs } = register('drink')
const { value: sugar, attrs: sugarFieldAttrs } = register('sugar')
</script>

<template>
  <form @submit="handleSubmit" @reset="handleReset">
    <label>Drink</label>
    <input v-model="drink" type="text" v-bind="drinkFieldAttrs" pr-10px>

    <label>Sugar level</label>
    <select v-model="sugar" v-bind="sugarFieldAttrs">
      <option v-for="item in sugarOptions" :key="item" :value="item">
        {{ item }}
      </option>
    </select>

    <button type="reset">Reset</button>
    <button type="submit">Submit</button>
  </form>
</template> 
<style scoped>

</style>