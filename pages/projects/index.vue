<template>
  <div class="bg-bg-primary text-text-primary p-6">
    <Title>Projects - Hering</Title>
    <div class="flex flex-row">
      <div class="font-rekron text-5xl">
      {{ $t("projects") }}
      <svg
        class="h-4 mt-2"
        viewBox="0 0 100 1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="0" y1="0" x2="40" y2="0" stroke="#F6690C" stroke-width="1" />
      </svg>
    </div>
    <LanguageSwitcher />
    </div>
    <div class="flex flex-col justify-center items-center my-20">
      <div class="flex flex-col items-center justify-center">
        <div class="text-text-primary font-outfit text-3xl mb-5">
          Terror Nightmare Towers
        </div>
        <img
          src="../../assets/images/TNTCover.png"
          alt="Terror Nightmare Towers Image"
          class="w-1/3 h-1/5"
        />
        <div class="w-1/3">{{ projects[0].desc }}</div>
        <NuxtLink
          :to="localePath('/projects/tnt')"
          class="text-bg-primary bg-text-primary font-outfit font-bold border rounded-md p-2 w-fit mt-5 mb-16 hover:bg-accent-primary hover:border-accent-primary transition-all duration-300"
          >{{ $t("viewProject") }}</NuxtLink
        >
      </div>
      <div class="flex flex-col items-center justify-center">
        <div class="text-text-primary font-outfit text-3xl mb-5">
          VP-Tracker
        </div>
        <img
          src="../../assets/images/StudentPageCropped.png"
          alt="Terror Nightmare Towers Image"
          class="w-1/3 h-1/5"
        />
        <div class="w-1/3">{{ projects[1].desc }}</div>
        <NuxtLink
          :to="localePath('/projects/vptracker')"
          class="text-bg-primary bg-text-primary font-outfit font-bold border rounded-md p-2 w-fit mt-5 hover:bg-accent-primary hover:border-accent-primary transition-all duration-300"
          >{{ $t("viewProject") }}</NuxtLink
        >
      </div>
      <BackToTheTop />
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const i18nLocale = useI18n();

const projects = await queryContent(i18nLocale.locale.value + "/projects")
    .sort({ date: -1 })
    .where({ _partial: false })
    .find();

const localePath = useLocalePath()

</script>
