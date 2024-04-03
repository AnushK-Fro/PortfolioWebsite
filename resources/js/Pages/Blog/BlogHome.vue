<script setup>

import PublicLayout from "@/Layouts/PublicLayout.vue";
import TextInput from "@/Components/TextInput.vue";
import InputError from "@/Components/InputError.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import {ref} from 'vue';
import BlogLink from "@/Components/BlogLink.vue";
import {Head, useForm, usePage} from "@inertiajs/vue3";
import DialogModal from "@/Components/DialogModal.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import VueTurnstile from 'vue-turnstile';

const showEmail = ref(false);

const showEmailAddition = () => {
    showEmail.value = true;

    setTimeout(() => email.value.focus(), 250);
};


const props = defineProps({
    posts: Array,
    turnstile_sitekey: String
});

const email = ref('');
const token = ref('');

const closeModal = () => {
    showEmail.value = false;

    form.reset();
};

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

const form = useForm({
    email: email.value,
    token: token
});

function subscribe() {
    form.token = token;
    form.post(route('newsletter.subscribe'), {
        onSuccess: () => {
            closeModal()
        },
        onError: () => email.value.focus(),
    });
}

function readTime(wordCount) {
    let totalSeconds = Math.round(wordCount / 200 * 60);

    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    let output = "";
    if (minutes > 0) {
        output += minutes + (minutes === 1 ? " minute" : " minutes");
    }
    if (seconds > 0) {
        if (output.length > 0) output += " ";
        output += seconds + " seconds";
    }
    if (output.length === 0) {
        return "less than a minute";
    }
    return output;
}

</script>
<template>
    <Head>
        <title>Blog Posts</title>
        <meta name="description" content="I create discussions on a range of topics including business dynamics, cybersecurity, computing technology, and more.
            Join me as we delve into these subjects, exploring the latest trends and uncovering technology.">
    </Head>
<PublicLayout>
    <body class="bg-white">
        <div class="mt-20 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <h1 class="mb-4 text-3xl font-bold text-gray-900 dark:text-black md:text-5xl lg:text-6xl">Here are my <span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-blue-400">blog posts</span>.</h1>
            <p class="text-xl font-normal text-gray-500 dark:text-black">I create discussions on a range of topics including business dynamics, cybersecurity, computing technology, and more. Join me as we delve into these subjects, exploring the latest trends and uncovering technology.</p>

            <div class="mt-10">
                <div v-if="$page.props.flash.success" class="bg-gradient-to-r from-green-900 to-green-500 text-white p-4 mb-4 rounded-lg">
                    {{ $page.props.flash.success }}
                </div>
                <a @click="showEmailAddition" href="#">
                    <div class="relative max-w-7xl p-6 bg-gradient-to-r  border-gray-400 border rounded-lg shadow-md" @click="showEmailAddition">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">Sign up for Notifications</h5>
                        <p class="text-lg font-normal text-gray-700 ">Get notified whenever I post something new! You're always able to opt out at any time, I don't send spam :)</p>
                        <PrimaryButton class="mt-5 top-0 right-6 absolute" @click="showEmailAddition">Sign Up</PrimaryButton>
                    </div>
                </a>
            </div>
            <div class="mt-5">
                    <div v-for="post in posts" class="mt-5">
                        <BlogLink :post="post">
                            <div class="max-w-7xl p-6 bg-white border-gray-400 border rounded-lg shadow-md">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-black ">{{ post.name }}</h5>
                                <p class="mb-3 font-normal text-gray-700">{{ post.description }}</p>
                                <p class="mb-3 text-sm font-thin text-gray-700">{{ "Created at " + formatTime(post.created_at) + " · Updated at " + formatTime(post.updated_at) }} (Authored by {{ post.author }})<br />Estimated {{ readTime(post.word_count) }} to read, containing {{ post.word_count }} words.</p>
                            </div>
                        </BlogLink>
                    </div>
            </div>

            <DialogModal :show="showEmail" @close="closeModal">
                <template #title>
                    Sign Up or Opt Out for Email Notifications
                </template>

                <template #content>
                    You will receive notifications for new blog posts. A verification email will be sent to confirm your subscription. If your email already exists in the system, you will be sent out an opt out email.

                    <div class="mt-4">
                        <TextInput
                            ref="email"
                            v-model="form.email"
                            type="email"
                            class="mt-1 block w-full"
                            placeholder="Email"
                            autocomplete="email"
                            @keyup.enter="subscribe"
                        />

                        <InputError :message="form.errors.email" class="mt-2" />
                        <InputError :message="form.errors.token" class="mt-2" />
                        <VueTurnstile class="mt-4" :site-key="turnstile_sitekey" v-model="token"></VueTurnstile>

                        <p class="mt-4">Please read my <a class="text-blue-500 hover:text-blue-600" href="/privacypolicy" target="_blank">privacy policy</a> before opting in for my emails.</p>
                    </div>
                </template>
                <template #footer>
                    <SecondaryButton @click="closeModal">
                        Cancel
                    </SecondaryButton>

                    <PrimaryButton
                        class="ms-3"
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                        @click="subscribe"
                    >
                        Submit
                    </PrimaryButton>
                </template>
            </DialogModal>


        </div>
    </body>
</PublicLayout>
</template>
