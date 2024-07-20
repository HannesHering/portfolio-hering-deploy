<template>
  <div class="bg-bg-primary text-text-primary p-6">
    <Title>Projects - Hering</Title>
    <div class="flex flex-row">
      <div class="font-rekron text-5xl">
        {{ $t("legalInformation") }}
        <svg
          class="h-4 mt-2"
          viewBox="0 0 100 1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0"
            y1="0"
            x2="40"
            y2="0"
            stroke="#F6690C"
            stroke-width="1"
          />
        </svg>
      </div>
      <LanguageSwitcher />
    </div>
    <div class="flex font-outfit mt-20">
      <div class="flex h-full w-1/4"></div>
      <div class="flex flex-col h-full w-2/4">
        <p class="font-bold text-4xl mb-3">{{ $t("legalInformation") }}</p>
        <p class="font-bold mb-3 text-2xl">{{ $t("tmg") }}</p>
        <div class="mb-3">
          <p class="font-bold text-xl">{{ $t("representedBy") }}:</p>
          <p class="text-lg">Hannes Hering</p>
        </div>
        <div class="mb-3">
          <p class="font-bold text-xl">{{ $t("address") }}:</p>
          <p class="text-lg">Chasotstraße 6</p>
          <p class="text-lg">23566 Lübeck</p>
          <p class="text-lg">{{ $t("germany") }}</p>
        </div>
        <div class="mb-3">
          <p class="font-bold text-xl">{{ $t("contact") }}:</p>
          <p class="text-lg">Telefon: +4915738404546</p>
          <p class="text-lg">E-Mail: hanneshering1999@gmail.com</p>
        </div>
        <div class="mb-3">
          <p class="font-bold text-xl">{{ $t("disputeResolution") }}</p>
          <p class="text-lg">
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:
            https://ec.europa.eu/consumers/odr. Unsere E-Mail-Adresse finden Sie
            oben im Impressum. Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.{{ $t("disputeResolutionText") }}
          </p>
        </div>
        <div class="mb-3"> 
          <p class="font-bold text-xl">{{ $t("liabilityForContent") }}</p>
          <p class="text-lg">
            {{ $t("liabilityForContentText") }}
          </p>
        </div>
        <div class="mb-3">
          <p class="font-bold text-xl">{{ $t("liabilityForLinks") }}</p>
          <p class="text-lg">
            {{ $t("liabilityForLinksText") }}
          </p>
        </div>
        <div class="mb-3">
          <p class="font-bold text-xl">{{ $t("copyright") }}</p>
          <p class="text-lg">
            {{ $t("copyrightText") }}
          </p>
        </div>
      </div>

      <div class="flex h-full w-1/4"></div>
    </div>
    <BackToTheTop />
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const i18nLocale = useI18n();

const projects = await queryContent(i18nLocale.locale.value + "/projects")
  .sort({ date: -1 })
  .where({ _partial: false })
  .find();

const localePath = useLocalePath();
</script>
