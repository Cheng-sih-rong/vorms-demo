<script setup lang="ts">
import { useForm } from "@vorms/core"

const sugarOptions = ["no", "light", "half", "half", "standard"]

const { register, handleSubmit, handleReset } = useForm({
	initialValues: {
		drink: "",
		sugar: "light",
	},
	onSubmit(data) {
		console.log(data)
	},
})

const { value: drink, attrs: drinkFieldAttrs } = register("drink")
const { value: sugar, attrs: sugarFieldAttrs } = register("sugar")
</script>

<template>
  <form @submit="handleSubmit" @reset="handleReset" flex>
    <div>
      <label>Drink</label>
      <input
        v-model="drink"
        type="text"
        v-bind="drinkFieldAttrs"
        pr-10px
        placeholder="請輸入飲料名稱
    "
      />
    </div>

    <div>
      <label>Sugar level</label>
      <select v-model="sugar" v-bind="sugarFieldAttrs" w-200px>
        <option v-for="item in sugarOptions" :key="item" :value="item">
          {{ item }}
        </option>
      </select>
    </div>
    <div class="button-wrapper">
      <button type="reset">Reset</button>
      <button type="submit">Submit</button>
    </div>
  </form>
</template> 
<style scoped>
</style>