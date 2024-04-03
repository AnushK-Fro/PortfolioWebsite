<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';

</script>

<template>
    <Link :href="route('blog.home')">
        <slot />
    </Link>
</template>
