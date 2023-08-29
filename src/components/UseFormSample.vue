<script setup lang="ts">
import { useForm } from "@vorms/core";
import { ref } from "vue";

defineProps({
  revalidType: {
    type: String,
    default: "blur",
  },
});

const validOptions = ["change", "blur", "input", "submit"];
const validMode = ref("change");

const { errors, dirty, register, handleSubmit, handleReset } = useForm({
  //初始值
  initialValues: {
    drink1: "白開水",
    drink2: "",
    drink3: "",
    drink4: "",
    drink5: "",
    count: 30,
    sugar: 5,
    remark: '',
  },
  //初始錯誤
  initialErrors: {
    drink1: "要喝什麼啦",
    drink2: "",
    drink3: "",
    drink4: "",
    drink5: "",
    count: "你要幾杯啦",
    sugar: "你要幾分糖啦",
    remark:'備註啦'
  },
  initialTouched: {
    drink1:false,
    drink2: false,
    drink3: true,
    drink4:true,
    drink5:false,
    count: false,
    remark:true,
    sugar: false,
  },validateMode:'blur',
  reValidateMode:'input',
  //驗證
  validate(values) {
    const errors: Record<string, any> = {};
    const list = Object.keys(values)
    list.forEach((key)=>{
      console.log(!values[key])
        if(!values[key])errors[key]="This is required!!"
        else if(values[key]!=='水')errors[key]="只剩下水了"
    })

    // if (!values.drink) {
    //   errors.drink = "This is required!!";
    // }
    // if (!values.count) {
    //   errors.count = "This is required!!";
    // }
    // if (!values.remark) {
    //   errors.remark = "This is required!!";
    // }

    // if (!values.sugar) {
    //   errors.sugar = "This is required!!";
    // }

    return errors;
  },

  onSubmit(data, { setSubmitting }) {
    // If `onSubmit()` function is synchronous, you need to call
    // `setSubmitting(false)` yourself.
     console.log(data)
    setSubmitting(false);
  },
});

// Basic usage
// The `attrs` need to be bind on <input> to support `validateMode`
// and `reValidateMode`.
const { value: drink1, attrs: drink1FieldAttrs} = register("drink1");
const { value: drink2, attrs: drink2FieldAttrs } = register("drink2");
const { value: drink3, attrs: drink3FieldAttrs } = register("drink3");
const { value: drink4, attrs: drink4FieldAttrs } = register("drink4");
const { value: drink5, attrs: drink5FieldAttrs } = register("drink5");

const { value: count, attrs: countFieldAttrs } = register("count", {
  validate(value) {
    return value > 100 ? "This max number is 100" : undefined;
  },
});

const { value: sugar, attrs: sugarFieldAttrs } = register("sugar", {
  validate(value) {
    const error =''
    if(value)
    return value > 100 ? "This max number is 100" : undefined;
  },
});

const { value: remark, attrs: remarkFieldAttrs } = register("remark");
</script>

<template>
  <form @submit="handleSubmit" @reset="handleReset" flex-wrap>
    <div>
        <label>Drink1</label>
        <input
          v-model="drink1"
          type="text"
          v-bind="drink1FieldAttrs"
          placeholder="請輸入飲料名稱"
        />
      <div class="error-msg">{{ errors.drink1 }}</div>
    </div>
    <div>
        <label>Drink2</label>
        <input
          v-model="drink2"
          type="text"
          v-bind="drink2FieldAttrs"
          placeholder="請輸入飲料名稱"
        />
      <div class="error-msg">{{ errors.drink2 }}</div>
    </div>
    <div>
        <label>Drink3</label>
        <input
          v-model="drink3"
          type="text"
          v-bind="drink3FieldAttrs"
          placeholder="請輸入飲料名稱"
        />
      <div class="error-msg">{{ errors.drink3 }}</div>
    </div>
    <div>
        <label>Drink4</label>
        <input
          v-model="drink4"
          type="text"
          v-bind="drink4FieldAttrs"
          placeholder="請輸入飲料名稱"
        />
      <div class="error-msg">{{ errors.drink4 }}</div>
    </div>
    <div>
        <label>Drink5</label>
        <input
          v-model="drink5"
          type="text"
          v-bind="drink5FieldAttrs"
          placeholder="請輸入飲料名稱"
        />
      <div class="error-msg">{{ errors.drink5 }}</div>
    </div>

    <!-- <div>
      <label>Count</label>
      <input v-model.number="count" type="number" v-bind="countFieldAttrs" />
      <div absolute class="error-msg">{{ errors.count}}</div>
    </div>

    <div>
      <label>Sugar</label>
      <input v-model.number="sugar" type="number" v-bind="sugarFieldAttrs" max="10" min="0"/>
      <div absolute class="error-msg">{{ errors.sugar}}</div>
    </div>

     <div>
      <label>Remark</label>
      <input v-model="remark" type="text" v-bind="remarkFieldAttrs" />
      <div absolute class="error-msg">{{ errors.remark}}</div>
    </div> -->
<div>    
  <button type="reset">Reset</button>
    <button type="submit">Submit</button>
  </div>

  </form>
</template>
<style scoped>
.error-msg {
  color: red;
  position: absolute;
}
</style>