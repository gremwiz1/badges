<template>
  <div class="pink-badge">
    <svg class="pink-badge__shape" viewBox="0 0 69 19" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.00067 19L5.48982 19L5.48982 -4.05292e-07L5.0533 -3.75805e-07C3.57708 -2.76089e-07 2.32025 1.07395 2.09001 2.53211L0.0373846 15.5321C-0.250123 17.353 1.15723 19 3.00067 19Z" fill="currentColor"/>
    <rect width="58" height="19" transform="translate(5.48982)" fill="currentColor"/>
    <path d="M65.979 2.33265e-07L63.4898 3.98647e-07L63.4898 19L63.9263 19C65.4026 19 66.6594 17.926 66.8896 16.4679L68.9423 3.46789C69.2298 1.647 67.8224 1.10784e-07 65.979 2.33265e-07Z" fill="currentColor"/>
    </svg>
    
    <!-- Content поверх SVG -->
    <div class="pink-badge__content">
      <div v-if="showIcon" class="pink-badge__icon">
        <slot name="icon">
          <BadgeIcon type="resource2" />
        </slot>
      </div>
      <span class="pink-badge__text">
        {{ text }}
      </span>
    </div>
  </div>
</template>

<script setup>
import BadgeIcon from './BadgeIcon.vue'

defineProps({
  text: {
    type: String,
    default: '1 000'
  },
  showIcon: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped>
/* Import Zen Dots font */
@import url('https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap');

.pink-badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 19px;
  width: 70px;
  
  user-select: none;
  font-family: 'Zen Dots', cursive;
}

.pink-badge__shape {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #FF2EAB;
  filter: drop-shadow(0 4px 4px rgba(30, 0, 23, 0.25));
}

.pink-badge__content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: 3px 1px 3px 0;
  height: 100%;
  flex-shrink: 0;
}

.pink-badge__icon {
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}


.pink-badge__text {
  color: #131223;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.1em;
  text-align: center;
  white-space: nowrap;
  flex-shrink: 0;
  text-shadow: 0.2px 0.2px 0 #131223;
}
</style>
