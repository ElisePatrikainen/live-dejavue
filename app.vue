<script setup>
const newData = ref('')
const { data } = await useFetch('/api/test')
const currentData = ref(JSON.parse(data.value).description)
const test = async () => {
  await $fetch('/api/test', { method: 'POST', body: {description: newData.value}})
  // todo: handle errors
  currentData.value = newData.value
  console.log(currentData.value)
  newData.value = ''
}
</script>


<template>
  <div>
  {{newData}}
  <input v-model="newData" />
  <button @click="test">Test</button>
  {{currentData}}
  </div>
</template>