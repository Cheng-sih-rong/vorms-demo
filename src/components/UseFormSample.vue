<script setup lang="ts">
import { useForm } from "@vorms/core";
import { ref } from 'vue'

defineProps({
  revalidType: {
    type:String,
    default:'blur'
    },
})



const validOptions = ['change', 'blur', 'input', 'submit'];
const validMode = ref('change')

const { errors, dirty, register, handleSubmit, handleReset } = useForm({
  initialValues: {
    drink: "",
    sugar: 30,
  },
  validate(values) {
    const errors: Record<string, any> = {};

    if (!values.drink) {
      errors.drink = "This is required!!";
    }

    return errors;
  },

  onSubmit(data, { setSubmitting }) {
    // If `onSubmit()` function is synchronous, you need to call
    // `setSubmitting(false)` yourself.
    setSubmitting(false);
  },
});

// Basic usage
// The `attrs` need to be bind on <input> to support `validateMode`
// and `reValidateMode`.
const { value: drink, attrs: drinkFieldAttrs  } = register("drink");

// Add field level validation.
const { value: sugar, attrs: sugarFieldAttrs } = register("sugar", {
  validate(value) {
    return value > 100 ? "This max number is 100" : undefined;
  },
});
</script>

<template>
    <label>validateMode</label>
    <select v-model="validMode" w-200px>
      <option v-for="item in validOptions" :key="item" :value="item">
        {{ item }}
      </option>
    </select>
  <form @submit="handleSubmit" @reset="handleReset">
    <div>
      <div >
        <label>Drink</label>
        <input v-model="drink" type="text" v-bind="drinkFieldAttrs" />
      </div>

      <div class="error-msg">{{ errors.drink }}</div>
    </div>

    <div relative>
      <label>Count</label>
      <input v-model.number="sugar" type="number" v-bind="sugarFieldAttrs" />
      <div absolute class="error-msg">{{ errors.sugar }}</div>
    </div>

    <button type="reset">Reset</button>
    <button type="submit">Submit</button>
  </form>
</template>
<style scoped>
.error-msg{
  color: red;
  position: absolute;
}
</style>