<template>
  <div>
    <h1>EventList</h1>
    <router-link :to="{ name: 'event-show', params: { id: 0 } }"
      >View event #0</router-link
    >
  </div>
</template>
