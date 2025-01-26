<script setup lang="ts">

const sheetOpen = defineModel<boolean>();

</script>

<template>
  <Sheet v-model:open="sheetOpen">
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Create New Task</SheetTitle>
          </SheetHeader>
          <p>Content</p>
        </SheetContent>
      </Sheet>
</template>
