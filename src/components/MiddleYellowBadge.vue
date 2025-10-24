<template>
  <div class="middle-yellow-badge">
    <svg class="middle-yellow-badge__shape" viewBox="0 0 69 19" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_1_145)">
    <path d="M3.00067 19L5.48982 19L5.48982 -4.05292e-07L5.0533 -3.75805e-07C3.57708 -2.76089e-07 2.32025 1.07395 2.09001 2.53211L0.0373846 15.5321C-0.250123 17.353 1.15723 19 3.00067 19Z" fill="currentColor"/>
    <rect width="58" height="19" transform="translate(5.48982)" fill="currentColor"/>
    <path d="M65.979 2.33265e-07L63.4898 3.98647e-07L63.4898 19L63.9263 19C65.4026 19 66.6594 17.926 66.8896 16.4679L68.9423 3.46789C69.2298 1.647 67.8224 1.10784e-07 65.979 2.33265e-07Z" fill="currentColor"/>
    </g>
    <defs>
    <filter id="filter0_d_1_145" x="-0.510178" y="0" width="70" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.0627451 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_145"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_145" result="shape"/>
    </filter>
    </defs>
    </svg>
    
    <!-- Content поверх SVG -->
    <div class="middle-yellow-badge__content">
      <div v-if="showIcon" class="middle-yellow-badge__icon">
        <slot name="icon">
          <BadgeIcon type="resource1" />
        </slot>
      </div>
      <span class="middle-yellow-badge__text">
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
@import url('https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap');

.middle-yellow-badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 19px;
  width: 70px;
  
  user-select: none;
  font-family: 'Zen Dots', cursive;
}

.middle-yellow-badge__shape {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #FFE501;
}

.middle-yellow-badge__content {
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

.middle-yellow-badge__icon {
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}


.middle-yellow-badge__text {
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
