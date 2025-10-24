<template>
  <div class="badge-icon" :class="`badge-icon--${type}`">
    <img
      v-if="type === 'resource1'"
      src="@/assets/icons/resource1.png"
      alt="Resource 1"
      class="badge-icon__image"
    />

    <img
      v-else-if="type === 'resource2'"
      src="@/assets/icons/resource2.png"
      alt="Resource 2"
      class="badge-icon__image"
    />

    <div v-else class="badge-icon__placeholder">
      <!-- Default placeholder -->
    </div>
  </div>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    required: true,
    validator: (value) => ['resource1', 'resource2'].includes(value)
  }
})
</script>

<style scoped>
.badge-icon {
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.badge-icon__image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.badge-icon__placeholder {
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  border-radius: 2px;
}
</style>
