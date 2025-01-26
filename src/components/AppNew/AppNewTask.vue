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
          <FormKit type="text"/>
        </SheetContent>
      </Sheet>
</template>
