<script setup>
const newData = ref('')
const { data } = await useFetch('/api/test')
console.log(data.value)
const test = async () => {
  await $fetch('/api/test', { method: 'POST', body: {description: newData.value}})
  // todo: handle errors
  data.value = newData.value
  console.log(data.value)
  newData.value = ''
}
</script>


<template>
  <div>
  {{newData}}
  <input v-model="newData" />
  <button @click="test">Test</button>
  {{data}}
  </div>
</template>