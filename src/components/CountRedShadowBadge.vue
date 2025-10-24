<template>
  <div class="count-red-shadow-badge">
    <svg class="count-red-shadow-badge__shape" viewBox="0 0 25 19" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_1_145)">
    <path d="M3.00067 19L5.48982 19L5.48982 -4.05292e-07L5.0533 -3.75805e-07C3.57708 -2.76089e-07 2.32025 1.07395 2.09001 2.53211L0.0373846 15.5321C-0.250123 17.353 1.15723 19 3.00067 19Z" fill="currentColor"/>
    <rect width="14" height="19" transform="translate(5.48982)" fill="currentColor"/>
    <path d="M21.979 2.33265e-07L19.4898 3.98647e-07L19.4898 19L19.9263 19C21.4026 19 22.6594 17.926 22.8896 16.4679L24.9423 3.46789C25.2298 1.647 23.8224 1.10784e-07 21.979 2.33265e-07Z" fill="currentColor"/>
    </g>
    <defs>
    <filter id="filter0_d_1_145" x="-0.510178" y="0" width="26" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
    <div class="count-red-shadow-badge__content">
      <span class="count-red-shadow-badge__text">
        {{ text }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: '2'
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap');

.count-red-shadow-badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 19px;
  width: 26px;
  
  user-select: none;
  font-family: 'Zen Dots', cursive;
}

.count-red-shadow-badge__shape {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #FB044A;
}

.count-red-shadow-badge__content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: 3px 0px;
  height: 100%;
  flex-shrink: 0;
}

.count-red-shadow-badge__text {
  color: #FFFFFF;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.1em;
  text-align: center;
  white-space: nowrap;
  flex-shrink: 0;
  text-shadow: 0.2px 0.2px 0 #FFFFFF;
}
</style>
