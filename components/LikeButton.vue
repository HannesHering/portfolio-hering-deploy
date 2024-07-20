<template>
  <div>
    <button
      @click="incrementLike"
      class="w-fit flex items-center justify-center border rounded-md p-2 border-accent-primary hover:bg-accent-primary"
    >
      <svg
        class="mr-2"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
      >
        <path
          fill="#E4DFDA"
          d="M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.59 7.58C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73zM1 21h4V9H1z"
        />
      </svg>
      {{ likesOutput }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computedAsync } from '@vueuse/core';
import { like } from 'drizzle-orm';



const route = useRoute();
const routePath = route.path.slice(13)
let likesOutput = computedAsync( async () => {
    try {
    const response = await fetch("/api/likes"+routePath, {
        method: "GET",
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    likes.value = data.result
    console.log(likes.value[0].likes)
    return likes.value[0].likes
  } catch {

  }
})

function consoleOutput () {
    console.log("/api/likes"+routePath)
}

async function incrementLike(values: any) {
  try {
    const response = await fetch("/api/likes"+routePath, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    try {
    const response = await fetch("/api/likes"+routePath, {
        method: "GET",
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    likes.value = data.result
    likesOutput.value = likes.value[0].likes
    console.log(likes.value)
  } catch {

  }
  } catch (error) {
    console.error('Error submitting comment:', error);
  }
}

const likes = computedAsync(async () => {
    try {
    const response = await fetch("/api/likes"+routePath, {
        method: "GET",
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return data.result
  } catch {

  }
})

</script>
