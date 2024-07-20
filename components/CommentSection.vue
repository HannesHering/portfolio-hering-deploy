<script setup lang="ts">
import { Form, Field, ErrorMessage } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as zod from "zod";
import { ref, onMounted } from "vue";
import { computedAsync } from "@vueuse/core";

const validationSchema = toTypedSchema(
  zod.object({
    name: zod.string().default(" "),
    message: zod.string({ message: "Nachricht erforderlich!" }).min(1, { message: "Nachricht erforderlich!" }),
  })
);

const route = useRoute();
const routePath = { project: route.path.slice(3) };

async function onSubmit(values: any, { resetForm, setErrors }: any) {
  if (values.name == " ") {
    values.name = "Anonymous";
  }
  values = { ...values, ...routePath };
  try {
    const response = await fetch("/api/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    resetForm();
    try {
      const response = await fetch("/api/comment", {
        method: "GET",
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      comments.value = data.result;
      console.log(comments.value);
    } catch {}
  } catch (error) {
    console.error("Error submitting comment:", error);
  }
}

const comments = computedAsync(async () => {
  try {
    const response = await fetch("/api/comment", {
      method: "GET",
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return data.result;
  } catch {}
});
</script>

<template>
  <div class="w-full flex flex-col justify-center items-center">
    <div class="w-1/2 flex flex-col items-center justify-center">
      <Form
        :validation-schema="validationSchema"
        id="form"
        @submit="onSubmit"
        class="font-outfit text-lg mt-5 w-full"
      >
        <div class="flex flex-col">
          <label class="text-1xl" for="name">Name</label>
          <Field class="rounded-md" id="name" name="name" />
          <ErrorMessage class="text-red-600" name="name" />
        </div>
        <div class="flex flex-col mt-2">
          <label class="text-1xl" for="message">{{ $t("message") }}</label>
          <Field
            id="message"
            name="message"
            as="textarea"
            class="h-32 min-h-8 rounded-md"
          />
          <ErrorMessage class="text-red-600" name="message" />
        </div>
        <button
          class="text-bg-primary bg-text-primary font-outfit font-bold text-base border rounded-md p-2 w-fit mt-5 hover:bg-accent-primary hover:border-accent-primary transition-all duration-300"
        >
          {{ $t("submit") }}
        </button>
      </Form>
    </div>
    <div class="flex flex-col w-1/2 mt-10 font-outfit">
      <div class="text-2xl">{{ $t("comments") }}</div>
      <ul>
        <li v-for="comment in comments" :key="comment.id">
          <div v-if="comment.project == routePath.project" class="w-full h-20 border rounded-md my-4 p-3">
            <strong>{{ comment.name }}:</strong> {{ comment.message }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
