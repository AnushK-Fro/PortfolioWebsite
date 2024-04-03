<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Welcome from '@/Components/Welcome.vue';
import PublicNavLink from "@/Components/PublicNavLink.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import {router} from "@inertiajs/vue3";

const props = defineProps({
    posts: {
        type: Array
    }
});

function submit() {
    router.post(route('blog.create'))
}

</script>

<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Blog Posts
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <PrimaryButton @click="submit">Create Post</PrimaryButton>
                <div class="bg-white overflow-hidden mt-5 shadow-xl sm:rounded-lg">


                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Creation Date
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Updated Date
                                </th>
                                <th scope="col" class="px-6 py-3">

                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr class="bg-white border-b" v-for="post in posts">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {{ post.name }}
                                </th>
                                <td class="px-6 py-4">
                                    {{ post.created_at }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ post.updated_at }}
                                </td>
                                <td class="px-6 py-4">
                                    <PublicNavLink :href="route('blog.edit.view', { id: post.id })">Update</PublicNavLink>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    </AppLayout>
</template>
