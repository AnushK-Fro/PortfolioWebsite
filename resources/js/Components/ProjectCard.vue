<script setup>

</script>

<template>
    <div class="flex flex-col items-center border border-gray-400 rounded-lg shadow-md md:flex-row md:max-w-xl bg-white ease-in-out ">
        <div class="flex flex-col justify-between p-4 pl-8 leading-norma">
            <h5 class="text-2xl font-bold tracking-tight text-gray-900 text-black">
                <slot name="name" />
            </h5>
            <p class="mb-1 font-normal text-gray-700 text-black">
                <slot name="date" />
            </p>
            <p class=" font-normal text-gray-700 text-black">
                <slot name="description" />
            </p>
            <p class="mt-2 text-sm font-thin text-gray-700 text-black" v-if="$slots.stack">
                <span class="font-semibold">
                    Stack:
                </span>
                <slot name="stack" />
            </p>
            <p class="mb-2 text-sm font-thin text-gray-700 text-black">
                <slot name="source" />
            </p>
        </div>
    </div>
</template>

<style scoped>

</style>
