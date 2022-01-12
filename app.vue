<script setup>
const receivedData = ref('')
const test = async () => {
  receivedData.value = await $fetch('/api/test', { method: 'POST', body: { some: 'json' } })
}
</script>


<template>
  <div>
  <button @click="test">Test</button>
  {{receivedData}}
  </div>
</template>