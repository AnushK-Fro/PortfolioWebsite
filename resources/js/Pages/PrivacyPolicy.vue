<script setup>

import PublicLayout from "@/Layouts/PublicLayout.vue";
import {computed, ref} from 'vue';
import MarkdownIt from "markdown-it";
import BlogBackLink from "@/Components/BlogBackLink.vue";
import { Head } from '@inertiajs/vue3'


// Manually done for now, this implementation has to be updated at a later date or time.

const post = {
    name: 'Privacy Policy',
    created_at: '2024-04-02 22:04:05',
    updated_at: '2024-04-02 22:04:05',
    author: 'Anush',
}

const markdownText = `

### Welcome
Your privacy is critical to me. This privacy policy will describe the services we use, and how your data is treated. I try to minimize the dependency on outside or third-party services, but sometimes they can be hard to avoid.

### Third-party Services
The following third-party services are used on this blog:

- **Cloudflare**: This is used to cache and serve the website. It is used to speed up the website and includes a captcha to prevent abuse for the newsletter signup. You can read more about their privacy policy [here](https://www.cloudflare.com/privacypolicy/).
- **Amazon SES**: This is an email service ran by Amazon Web Services that is used to send out emails for the newsletter service. You can read more about their privacy policy [here](https://aws.amazon.com/privacy/).

### Data Collection
By accessing this blog, the following data is collected:

- **Email**: If you have signed up for my newsletter, your email is stored in a database. You can opt out at any time by clicking the unsubscribe link in emails. Your email may be sent to our email provider (i.e. SES) to send emails.
- **Web Requests**: When you access this blog, the request (and any error that may have occurred) is logged on the server. The logs are usually completely removed after 14 days.

### Questions
If you have any questions, please feel free to contact me at [me@anush.me](emailto:me@anush.me).
`

const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
});

const renderedHTML = computed(() => {
    return md.render(markdownText);
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
        <title>Privacy Policy</title>
        <meta name="description" content="I create discussions on a range of topics including business dynamics, cybersecurity, computing technology, and more.
            Join me as we delve into these subjects, exploring the latest trends and uncovering technology.">
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
