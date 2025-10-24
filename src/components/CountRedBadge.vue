<template>
  <div class="count-red-badge">
    <!-- SVG форма из Figma -->
    <svg class="count-red-badge__shape" viewBox="0 0 58 12" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_1_145)">
    <path d="M2.00049 12L3.63957 12L3.63957 -2.70194e-07L3.33382 -2.49542e-07C2.35615 -1.83501e-07 1.52177 0.706826 1.36104 1.6712L0.0277057 9.6712C-0.175471 10.8903 0.764614 12 2.00049 12Z" fill="currentColor"/>
    <rect width="50" height="12" transform="translate(3.63957)" fill="currentColor"/>
    <path d="M55.2787 1.56863e-07L53.6396 2.65765e-07L53.6396 12L53.9453 12C54.923 12 55.7574 11.2932 55.9181 10.3288L57.2514 2.3288C57.4546 1.10973 56.5145 7.47491e-08 55.2787 1.56863e-07Z" fill="currentColor"/>
    </g>
    <defs>
    <filter id="filter0_d_1_145" x="-0.472294" y="0" width="59" height="12" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
    <div class="count-red-badge__content">
      <div v-if="showIcon" class="count-red-badge__icon">
        <slot name="icon">
          <BadgeIcon type="resource1" />
        </slot>
      </div>
      <span class="count-red-badge__text">
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

.count-red-badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 12px;
  width: 58px;
  
  user-select: none;
  font-family: 'Zen Dots', cursive;
}

.count-red-badge__shape {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #FFE501;
}

.count-red-badge__content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: 0 1px;
  height: 100%;
  flex-shrink: 0;
}

.count-red-badge__icon {
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}


.count-red-badge__text {
  color: #131223;
  font-weight: 400;
  font-size: 8px;
  line-height: 10px;
  letter-spacing: 0.1em;
  text-align: center;
  white-space: nowrap;
  flex-shrink: 0;
  text-shadow: 0.2px 0.2px 0 #131223;
}
</style>
