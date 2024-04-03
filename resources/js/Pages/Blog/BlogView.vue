<script setup>

import PublicLayout from "@/Layouts/PublicLayout.vue";
import {computed, ref} from 'vue';
import MarkdownIt from "markdown-it";
import BlogBackLink from "@/Components/BlogBackLink.vue";
import { Head } from '@inertiajs/vue3'


const props = defineProps({
    post: {
        type: Array
    },
    markdownText: {
        type: String
    }
});

const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
});

const renderedHTML = computed(() => {
    return md.render(props.markdownText);
});

function formatTime(dateString) {
    const date = new Date(dateString);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        timeZone: 'America/New_York'
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}

</script>

<template>
    <Head>
        <title>{{post.name}}</title>
        <meta name="description" :content="post.description">
    </Head>
<PublicLayout>
    <body class="bg-white">
        <div class="mt-20 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <BlogBackLink class="text-xl">
                ← Go back to blog posts
            </BlogBackLink>
            <h1 class="!mb-1 !mt-3 text-3xl font-bold text-gray-900 dark:text-black md:text-5xl lg:text-6xl">{{ post.name }}</h1>
            <p class="!text-xl dark:text-black text-gray-700">{{ "Created at " + formatTime(post.created_at)}} · {{ "Last Updated at " + formatTime(post.updated_at) }} <br />Author(s): {{ post.author }}</p>
            <div class="h-0.5 bg-gradient-to-r from-gray-400 to-gray-400"></div>
            <div v-html="renderedHTML" class="w-full h-full mt-7 rendered-content"></div>
            <br/><br/><br/><br/>
        </div>
    </body>
</PublicLayout>
</template>
<style scoped>
textarea {
    width: 100%;
    height: 200px;
}

:deep(h1) {
    @apply mb-6 text-4xl font-bold leading-tight;
}

:deep(h2) {
    @apply mb-6 text-3xl font-bold leading-tight;
}

:deep(h3) {
    @apply mb-6 text-2xl font-bold leading-tight;
}

:deep(p) {
    @apply mb-6 text-gray-700 text-xl font-normal;
}

:deep(strong) {
    @apply font-semibold;
}

:deep(em) {
    @apply italic;
}

:deep(ul) {
    @apply mb-6 pl-8 list-disc ;
}

:deep(ol) {
    @apply mb-6 pl-8 list-decimal text-lg font-normal;
}

:deep(li) {
    @apply mb-6 text-gray-700 text-xl font-normal;
}

:deep(a) {
    @apply text-blue-500 hover:text-blue-700;
}

:deep(code) {
    @apply px-2 py-1 bg-gray-200 rounded;
}

:deep(pre) {
    @apply mb-4 p-4 bg-gray-100 rounded overflow-auto;
}

:deep(pre) code {
    @apply p-0 bg-transparent;
}

:deep(blockquote) {
    @apply mb-4 pl-4 border-l-4 border-gray-300 italic;
}
</style>
