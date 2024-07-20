<template>
  <div class=" bg-bg-primary text-text-primary p-6 overflow-hidden">
    <Title>Portfolio - Hering</Title>
    <div class="flex flex-row">
      <div class="font-rekron text-5xl">
        {{ $t("Hering") }}
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
    <ClientOnly>
      <Experience />
    </ClientOnly>
    <div class="flex justify-center items-center mb-28">
      <div class="relative w-full max-w-4xl">
        <!-- Left Line -->
        <svg
          class="absolute left-0 top-1/2 transform -translate-y-1/2"
          height="100"
          width="400"
        >
          <line
            x1="0"
            y1="52"
            x2="400"
            y2="52"
            style="stroke: #f6690c; stroke-width: 4"
          />
        </svg>

        <!-- Right Line -->
        <svg
          class="absolute right-0 top-1/2 transform -translate-y-1/2"
          height="100"
          width="400"
        >
          <line
            x1="0"
            y1="52"
            x2="400"
            y2="52"
            style="stroke: #f6690c; stroke-width: 4"
          />
        </svg>

        <!-- Chevron-down -->
        <svg
          class="absolute left-1/2 transform -translate-x-1/2"
          height="100"
          width="100"
        >
          <line
            x1="0"
            y1="0"
            x2="50"
            y2="49"
            style="stroke: #f6690c; stroke-width: 4"
          />
          <line
            x1="50"
            y1="52"
            x2="100"
            y2="0"
            style="stroke: #f6690c; stroke-width: 4"
          />
        </svg>
      </div>
    </div>
    <div class="flex flex-col items-center mt-6">
      <div class="flex flex-row justify-center">
        <div class="w-1/2 h-full flex flex-col">
          <div
            class="w-full text-text-primary font-outfit text-2xl text-start mb-2"
          >
            {{ $t("greeting") }}
          </div>
          <div
            class="w-full text-accent-primary font-outfit text-3xl text-left"
          >
            Hannes Hering
          </div>
          <div
            class="w-full text-text-primary font-outfit text-1xl text-left mb-3"
          >
            {{ $t("job") }}
          </div>
          <div class="w-full text-text-primary font-outfit text-xl text-left">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </div>
          <Contactform />
        </div>
        <img
          src="../assets/images/placeholderprofile.png"
          alt="Hannes Hering Profile Picture"
          class="w-1/5 h-1/6 p-4"
        />
      </div>
      <div class="h-48"></div>
      <div class="flex flex-row justify-center items-center">
        <div class="w-1/2 h-full flex flex-col">
          <div
            class="w-full text-text-primary font-outfit text-2xl text-start mb-2"
          >
            {{ $t("project") }}-Spotlight
          </div>
          <div
            class="w-full text-accent-primary font-outfit text-3xl text-left"
          >
            VP-Tracker
          </div>
          <div
            class="w-full text-text-primary font-outfit text-1xl text-left mb-3"
          >
            {{ $t("trackerdesc") }}
          </div>
          <div class="w-full text-text-primary font-outfit text-xl text-left">{{ projects[1].desc }}</div>
          <NuxtLink
            :to="localePath('/projects/vptracker')"
            class="text-bg-primary bg-text-primary font-outfit font-bold border rounded-md p-2 w-fit mt-5 hover:bg-accent-primary hover:border-accent-primary transition-all duration-300"
            >{{ $t("viewProject") }}</NuxtLink
          >
        </div>
        <img
          src="../assets/images/StudentPageCropped.png"
          alt="VP-Tracker Student-Page Picture"
          class="w-1/5 h-1/6 p-4"
        />
      </div>
    </div>
    <div class="h-48"></div>
    <BackToTheTop />
  </div>
</template>

<script setup lang="ts">

import { useI18n } from "vue-i18n";
const i18nLocale = useI18n();

const projects = await queryContent(i18nLocale.locale.value + "/projects")
    .sort({ date: -1 })
    .where({ _partial: false })
    .find();

const localePath = useLocalePath()

</script>
