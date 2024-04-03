<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    post: Object
});
</script>

<template>
    <Link :href="route('blog.view', { id: post.id })">
        <slot />
    </Link>
</template>
