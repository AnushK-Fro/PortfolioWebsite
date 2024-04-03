<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    href: String,
    active: Boolean,
});

const classes = computed(() => {
    return props.active
        ? 'block py-2 px-3 md:p-0 text-black rounded text-blue-500'
        : 'block py-2 px-3 md:p-0 text-black rounded hover:text-blue-500';
});
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
