<script setup>

import PublicLayout from "@/Layouts/PublicLayout.vue";
import TextInput from "@/Components/TextInput.vue";
import InputLabel from "@/Components/InputLabel.vue";
import InputError from "@/Components/InputError.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import {computed, ref} from 'vue';
import AppLayout from "@/Layouts/AppLayout.vue";

import MarkdownIt from 'markdown-it';
import {useForm} from "@inertiajs/vue3";
import DangerButton from "@/Components/DangerButton.vue";

const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
});

const markdownText = ref('');
const title = ref('');
const description = ref('');
const markdown = ref('');

const props = defineProps({
    id: String,
    title: String,
    description: String,
    markdownText: String,
    published: Number,
    author: String
});

const renderedHTML = computed(() => {
    return md.render(form.markdownText);
});

const form = useForm({
    id: props.id,
    title: props.title,
    description: props.description,
    markdownText: props.markdownText,
    published: props.published,
    author: props.author
});
const updateForm = () => {
    form.put(route('blog.edit'), {
        preserveScroll: true,
        onSuccess: () => '',
        onError: () => '',
        onFinish: () => '',
    });
};

const sendEmail = ($id) => {
    form.post(route('blog.email', { id: $id }), {
        preserveScroll: true,
        onSuccess: () => '',
        onError: () => '',
        onFinish: () => '',
    });
};

const deleteForm = ($id) => {
    form.delete(route('blog.delete', { id: $id }), {
        preserveScroll: true,
        onSuccess: () => '',
        onError: () => '',
        onFinish: () => '',
    });
};


const publishedComputed = computed({
    get() {
        return props.published === true || props.published === 1;
    },
    set(value) {
        form.published = value ? 1 : 0;
    }
});

</script>

<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Blog Post {{ id }}
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <div class="flex flex-row">
                        <!-- Flex container for textarea and renderedHTML -->
                        <div class="flex-1 p-4">
                            <InputLabel for="title">Markdown</InputLabel>
                            <textarea v-model="form.markdownText" class="w-full h-full"></textarea>

                            <InputLabel for="title">Title</InputLabel>
                            <text-input
                                id="title"
                                type="text"
                                class="mt-1 block w-full"
                                v-model="form.title"
                                required
                            ></text-input>
                            <InputLabel for="title" class="mt-2">Author</InputLabel>
                            <text-input
                                id="title"
                                type="text"
                                class="mt-1 block w-full"
                                v-model="form.author"
                                required
                            ></text-input>

                            <InputLabel for="title" class="mt-2">Description</InputLabel>

                            <textarea
                                id="description"
                                type="text"
                                class="mt-1"
                                v-model="form.description"
                                required
                            ></textarea>
                            <br />
                            <div class="flex items-center mb-4">
                                <input id="default-checkbox" v-model="publishedComputed" type="checkbox" class="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 text-black focus:ring-2">
                                <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 ">Published</label>
                            </div>
                            <PrimaryButton @click="updateForm" class="mt-2">Save</PrimaryButton>
                            <DangerButton @click="deleteForm(id)" class="mt-2 float-right">Delete</DangerButton>
                            <PrimaryButton @click="sendEmail(id)" class="mr-2 mt-2 float-right">Send Email</PrimaryButton>
                        </div>
                        <div class="flex-1 p-4">
                            <!-- RenderedHTML container with flex-1 to take the other half -->
                            <div v-html="renderedHTML" class="w-full h-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </AppLayout>
</template>

<style scoped>
textarea {
    width: 100%;
    height: 200px;
}

:deep(h1) {
    @apply mb-4 text-4xl font-bold leading-tight;
}

:deep(h2) {
    @apply mb-2 text-2xl font-bold leading-tight;
}

:deep(p) {
    @apply mb-4 text-base leading-relaxed;
}

:deep(strong) {
    @apply font-semibold;
}

:deep(em) {
    @apply italic;
}

:deep(ul) {
    @apply mb-4 pl-8 list-disc;
}

:deep(ol) {
    @apply mb-4 pl-8 list-decimal;
}

:deep(li) {
    @apply mb-2;
}

:deep(a) {
    @apply text-blue-600 underline;
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
