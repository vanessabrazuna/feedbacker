<script setup>
import CustomHeader from '@/views/Home/CustomHeader.vue'
import Contact from '@/views/Home/Contact.vue'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import useModal from '@/hooks/useModal'

const router = useRoute()
const modal = useModal()

onMounted(() => {
  const token = window.localStorage.getItem('token')
  if (token) {
    router.push({ name: 'Feedbacks' })
  }
})

function handleLogin() {
  console.log('login')
  
  modal.open({
    component: 'ModalLogin'
  })
}

function handleAccountCreate() {}

</script>

<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header>
    <CustomHeader @createaccount="handleAccountCreate" @login="handleLogin" />
  </header>
  <main>
    <Contact />
  </main>
  <footer class="flex justify-center py-10 bg-brand-gray">
    <p class="font-medium text-center text-gray-800">
      feedbacker © {{ new Date().getFullYear() }}
    </p>
  </footer>
</template>
