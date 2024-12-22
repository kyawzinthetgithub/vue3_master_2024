<script setup lang="ts">
import TopNavBar from '@/components/Layout/TopNavBar.vue';
import SideBar from '@/components/Layout/SideBar.vue';
</script>

<template>
  <SideBar />
  <div class="flex flex-col lg:ml-52 ml-16 transition-[margin]">
    <TopNavBar />
    <main>
      <RouterView />
    </main>
  </div>
</template>
