<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';
/* 
const { errors, defineField } = useForm({
  validationSchema: toTypedSchema(
    z.object({
      email: z.string().min(1, 'E-Mail-Adresse erforderlich').email('Ungültige E-Mail-Adresse'),
      message: z.string().min(30, 'Nachricht muss mindestens 30 Zeichen lang sein'),
    }),
  ),
}); */

const validationSchema = toTypedSchema(
  zod.object({
    email: zod.string().min(1, { message: 'E-Mail erforderlich' }).email({ message: 'Muss eine gültige E-Mail-Adresse sein' }),
    subject: zod.string(),
    message: zod.string().min(1, { message: 'Nachricht erforderlich' }).min(30, { message: 'Nachricht muss 30 Zeichen lang sein' }),
  })
);

async function onSubmit(values: any, { resetForm }: any) {
  await $fetch('/api/contact', {
    method: 'post',
    body: values,
  })
  resetForm();
}

import { useI18n } from "vue-i18n";
const i18nLocale = useI18n();

const projects = await queryContent(i18nLocale.locale.value + "/projects")
    .sort({ date: -1 })
    .where({ _partial: false })
    .find();

const localePath = useLocalePath()

</script>

<template>
  <Form :validation-schema="validationSchema" id="form" @submit="onSubmit" class="font-outfit text-lg mt-5">
    <div class="flex flex-col">
      <label class="text-1xl" for="email">E-Mail</label>
      <Field class="rounded-md" id="email" name="email" type="email"/>
      <ErrorMessage class="text-red-600" name="email"/>
    </div>
    <div class="flex flex-col mt-2">
      <label class="text-1xl" for="subject">{{ $t("subject") }}</label>
      <Field class="rounded-md" id="subject" name="subject"/>
    </div>
    <div class="flex flex-col mt-2">
      <label class="text-1xl" for="message">{{ $t("message") }}</label>
      <Field id="message" name="message" as="textarea" class="h-32 min-h-8 rounded-md" />
      <ErrorMessage class="text-red-600" name="message"/>
    </div>
    <button
      class="text-bg-primary bg-text-primary font-outfit font-bold text-base border rounded-md p-2 w-fit mt-5 hover:bg-accent-primary hover:border-accent-primary transition-all duration-300"
    >
      {{ $t("submit") }}
    </button>
  </Form>
</template>

