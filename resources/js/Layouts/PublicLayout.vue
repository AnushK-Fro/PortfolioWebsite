<script setup>
import NavLink from '@/Components/NavLink.vue';
import Banner from "@/Components/Banner.vue";
import PublicNavLink from "@/Components/PublicNavLink.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import {ref} from "vue";

function openResume() {
    window.open('/resume.pdf');
}

const isMobileMenuOpen = ref(false);

function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

function closeMobileMenu() {
    isMobileMenuOpen.value = false;
}

</script>


<template>

        <nav class="bg-white">
            <div class="max-w-7xl px-2 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between mx-auto p-4">
                <div class="flex flex-shrink-0 items-center">
                    <p class="font-bold text-black text-xl">Anush</p>
                </div>
                <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <PrimaryButton @click="openResume">Resume</PrimaryButton>
                    <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-500 focus:ring-gray-200" aria-controls="navbar-cta" aria-expanded="false" @click="toggleMobileMenu">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div class="items-center justify-between w-full md:flex md:w-auto md:order-1" :class="{ 'hidden': !isMobileMenuOpen }" id="navbar-cta">
                    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-black">
                        <li>
                            <PublicNavLink :href="route('home')" :active="route().current('home')" class="text-xl" @click="closeMobileMenu">Home</PublicNavLink>
                        </li>
                        <li>
                            <PublicNavLink :href="route('blog.home')" :active="route().current('blog.*')" class="text-xl" @click="closeMobileMenu">Blog Posts</PublicNavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    <main>
        <slot></slot>
    </main>
</template>
