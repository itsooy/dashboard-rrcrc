<template>
  <div class="q-pa-md" style="max-width: 300px">
    <q-input
      filled
      v-model="model"
      label="Email"
      bottom-slots
      
      
    />
    <q-input
      filled
      v-model="password"
      label="Password"
      bottom-slots
      
      error-message="Wrong!!!"
    />
    <q-btn
    label="Login"
    error-message="Wrong!!!"
    :error="!isValid"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: '',
      password: ''
    }
  },

  computed: {
    isValid () {
      return (this.model === "dashboard@crcrr.org" && this.password === "Dashboard2022@")
    }
  }
}
</script>
