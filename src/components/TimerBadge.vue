<template>
  <div class="timer-badge">
<svg class="timer-badge__shape" viewBox="0 0 64 12" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1_145)">
<path d="M3.00074 12L3.45936 12L3.45936 -2.70194e-07C2.30525 -1.92236e-07 1.3203 0.83438 1.13056 1.97279L0.0415616 8.5068C-0.263204 10.3354 1.14692 12 3.00074 12Z" fill="currentColor"/>
<rect width="57" height="12" transform="translate(3.45936)" fill="currentColor"/>
<path d="M60.918 2.35294e-07L60.4594 2.65765e-07L60.4594 12C61.6135 12 62.5984 11.1656 62.7882 10.0272L63.8772 3.4932C64.1819 1.6646 62.7718 1.12124e-07 60.918 2.35294e-07Z" fill="currentColor"/>
</g>
<defs>
<filter id="filter0_d_1_145" x="-0.540638" y="0" width="65" height="12" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.177096 0 0 0 0 0.0306146 0 0 0 0 0.0306146 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_145"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_145" result="shape"/>
</filter>
</defs>
</svg>

    <!-- Текст поверх SVG -->
    <span class="timer-badge__text">{{ text }}</span>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: '05:05:59'
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap');

.timer-badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 12px;
  width: 65px;  
  user-select: none;
  font-family: 'Zen Dots', cursive;
}

.timer-badge__shape {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #FB044A;
}

.timer-badge__text {
  position: relative;
  z-index: 1;
  color: #fff;
  font-weight: 400;
  font-size: 8px;
  line-height: 10px;
  letter-spacing: 0.1em;
  white-space: nowrap;
}
</style>
