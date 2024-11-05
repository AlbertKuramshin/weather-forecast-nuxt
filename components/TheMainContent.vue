<script setup lang="ts">
const page = ref<string>('/')
const route = useRoute()
const router = useRouter()
const locationStore = useLocationStore()
const currentLocation = computed(() => locationStore.currentLocation)
const selectLocationWarningText = 'Пожалуйста, выберите город'


function changePage() {
  router.push(page.value)
}

onMounted(() => {
  page.value = route.path
})
</script>
<template>
  <v-main>
    <v-container class="main-container mx-auto">
      <v-tabs
        v-model="page"
        @update:model-value="changePage"
      >
        <v-tab value="/" text="Сегодня"></v-tab>
        <v-tab value="/week" text="За неделю"></v-tab>
      </v-tabs>
      <div class="main-container__page-content">
        <template v-if="!currentLocation">
          <v-alert
            closable
            :text="selectLocationWarningText"
            type="warning"
          />
        </template>
        <slot v-else />
      </div>
    </v-container>
  </v-main>
</template>

<style lang="scss" scoped>
.main-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
