<script setup>

</script>

<template>
    <a href="#"
       class="flex flex-col items-center border border-gray-200 shadow-xl md:flex-row md:max-w-xl hover:bg-gray-100 bg-custom-gray">
        <div class="flex flex-col justify-between p-4 pl-8 leading-normal">
            <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><slot name="title"></slot></h5>
            <p class="mb-1 font-normal text-gray-700 dark:text-white"><slot name="position"></slot></p>
            <p class="mb-3 font-normal text-gray-700 dark:text-white"><slot name="description"></slot></p>
        </div>
    </a>
</template>

<style scoped>

</style>
