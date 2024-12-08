<script setup>
import PublicLayout from '@/Layouts/PublicLayout.vue';
import Welcome from '@/Components/Welcome.vue';
import ProjectCard from "@/Components/ProjectCard.vue";
import {Head} from "@inertiajs/vue3";
</script>

<template>
    <Head>
        <title>Portfolio</title>
        <meta name="description" content="I am a business owner and a
                senior-year undergraduate student pursuing a BS in Computing and Security Technology at Drexel
                University in Philadelphia. My interests lie in cybersecurity, computing technology, and business
                administration.">
    </Head>
    <PublicLayout>

        <body class="bg-white">
        <div class="mt-20 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <h1 class="mb-4 text-3xl font-bold text-gray-900 dark:text-black md:text-5xl lg:text-6xl">Hi, my name is
                <span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400">Anush</span>.</h1>
            <p class="font-normal text-gray-500 text-xl dark:text-black">I am a business owner and a
                senior-year undergraduate student pursuing a BS in Computing and Security Technology at Drexel
                University in Philadelphia. My interests lie in cybersecurity, computing technology, and business
                administration.</p>

            <h1 class="mb-5 mt-10 text-3xl font-bold md:text-5xl lg:text-4xl text-black">Work Experience</h1>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <ProjectCard>
                    <template #name>
                        Drexel University
                    </template>
                    <template #date>
                        Course Assistant (June 2024 - Present)
                    </template>
                    <template #description>
                        Part-time role assisting professors with grading assignments, holding office hours, developing coursework, and supporting students.
                    </template>
                </ProjectCard>
                <ProjectCard>
                    <template #name>
                        Advin Servers
                    </template>
                    <template #date>
                        Company Owner (Dec. 2020 - Present)
                    </template>
                    <template #description>
                        A prepaid virtual private and dedicated server business, offering affordable cloud compute to 4,000+ clients worldwide.
                    </template>
                </ProjectCard>

                <ProjectCard>
                    <template #name>
                        FroCDN
                    </template>
                    <template #date>
                        Company Owner (Jan. 2023 - Present)
                    </template>
                    <template #description>
                        A project dedicated to providing small projects, communities, and organizations with free and reliable file hosting or CDN services.
                    </template>
                </ProjectCard>

                <ProjectCard>
                    <template #name>
                        FroHost
                    </template>
                    <template #date>
                        Company Owner (Dec. 2018 - Feb. 2020)
                    </template>
                    <template #description>
                        A niche game server hosting provider, providing website hosting and game server hosting to 100+ clients worldwide.
                    </template>
                </ProjectCard>
            </div>
            <h1 class="mb-5 mt-10 text-3xl font-bold md:text-5xl lg:text-4xl text-black">Featured Projects</h1>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <ProjectCard>
                    <template #name>
                        Portfolio & Blog
                    </template>
                    <template #date>
                        March 2024 - Present
                    </template>
                    <template #description>
                        A full-stack web application for my portfolio and blog, with an administrator interface and an email newsletter (this website!).
                    </template>
                    <template #stack>
                        Laravel, PHP, Vue.js, TailwindCSS
                    </template>
                    <template #source>
                        Currently in development; <a class="font-thin text-blue-500 hover:text-blue-700" href="https://github.com/AnushK-Fro/PortfolioWebsite" target="_blank">open source</a> on GitHub
                    </template>
                </ProjectCard>

                <ProjectCard>
                    <template #name>
                        Drexel Senior Project
                    </template>
                    <template #date>
                        Jan. 2024 - June 2024
                    </template>
                    <template #description>
                        Developing a production-ready and scalable cybersecurity suite, delivering AI-generated reports and analysis.
                    </template>
                    <template #stack>
                        Laravel, PHP, Vue.js, TailwindCSS, Python
                    </template>
                    <template #source>
                        Finished; currently closed source
                    </template>
                </ProjectCard>

                <ProjectCard>
                    <template #name>
                        Advin Cloud Panel
                    </template>
                    <template #date>
                        Dec. 2023 - Present
                    </template>
                    <template #description>
                        Developing a client-centric cloud billing and provisioning panel, integrating many services such as VPS, colocation, and DNS.
                    </template>
                    <template #stack>
                        Laravel, PHP, Vue.js, TailwindCSS, Proxmox
                    </template>
                    <template #source>
                        Currently in development; currently closed source
                    </template>
                </ProjectCard>

                <ProjectCard>
                    <template #name>
                        Archive Video Mirror
                    </template>
                    <template #date>
                        Dec. 2020 - Sep. 2024
                    </template>
                    <template #description>
                        A full-stack web application with over 10,000 daily videos for mirroring and scraping Reddit videos, over 1TB/day at peak.
                    </template>
                    <template #stack>
                        Laravel, PHP, Vue.js, TailwindCSS, Python
                    </template>
                    <template #source>
                        Finished; <a class="font-thin text-blue-500 hover:text-blue-700" href="https://github.com/AnushK-Fro/ArchiveVideoMirror" target="_blank">open source</a> on GitHub
                    </template>
                </ProjectCard>

                <ProjectCard>
                    <template #name>
                        Convoy
                    </template>
                    <template #date>
                        Oct. 2020 - Present
                    </template>
                    <template #description>
                        A production-ready virtual server control panel with Proxmox as the backend. I contribute to its development and sponsor infrastructure.
                    </template>
                    <template #stack>
                        Laravel, PHP, React, TailwindCSS
                    </template>
                    <template #source>
                        Currently in development; <a class="font-thin text-blue-500 hover:text-blue-700" href="https://github.com/ConvoyPanel/panel" target="_blank">open source</a> on GitHub
                    </template>
                </ProjectCard>

                <ProjectCard>
                    <template #name>
                        Ascienth PoC
                    </template>
                    <template #date>
                        Apr. 2018 - Dec. 2019
                    </template>
                    <template #description>
                        A proof-of-concept Lua script executor, unlocking unrestricted execution of Lua scripts within Roblox, a large multiplayer game.
                    </template>
                    <template #stack>
                        C# .NET, C++, Lua
                    </template>
                    <template #source>
                        Finished; currently closed source
                    </template>
                </ProjectCard>
            </div>
            <section id="socials" class="mt-10">
                <h1 class="text-3xl font-bold md:text-5xl lg:text-4xl text-black mb-5">Socials</h1>
                <h5 class="text-xl font-bold tracking-tight">Email: <a class="font-thin text-blue-500 hover:text-blue-700" href="email:contact@anush.me">contact@anush.me</a> <span class="font-thin">(email me!)</span></h5>
                <h5 class="text-xl font-bold tracking-tight">LinkedIn: <a class="font-thin text-blue-500 hover:text-blue-700" href="https://linkedin.com/in/anushkoneru" target="_blank">https://linkedin.com/in/anushkoneru</a></h5>
                <h5 class="text-xl font-bold tracking-tight">GitHub: <a class="font-thin text-blue-500 hover:text-blue-700" href="https://github.com/AnushK-Fro" target="_blank">https://github.com/AnushK-Fro</a></h5>
            </section>
            <section id="additional_skills" class="mt-10">
                <h1 class="text-3xl font-bold md:text-5xl lg:text-4xl text-black mb-5">Additional Skills</h1>
                <h5 class="text-xl font-bold tracking-tight">Programming Languages: <span class="font-thin">Python, PHP, JavaScript, C, C#, C++, Java, R</span></h5>
                <h5 class="text-xl font-bold tracking-tight">Frameworks: <span class="font-thin">Laravel, Vue.js, Nuxt.js, Next.js, TailwindCSS</span></h5>
                <h5 class="text-xl font-bold tracking-tight">Interests: <span class="font-thin">Cybersecurity, Systems Administration, Programming, Cloud Computing, Virtualization</span></h5>
                <h5 class="text-xl font-bold tracking-tight">Software: <span class="font-thin">Proxmox, cPanel, Plesk, Visual Studio Code</span></h5>
                <h5 class="text-xl font-bold tracking-tight">Operating Systems: <span class="font-thin">Linux (Debian + RHEL), Windows Server</span></h5>
                <h5 class="text-xl font-bold tracking-tight">Cloud Platforms: <span class="font-thin">Amazon Web Services, Google Cloud Platform, Microsoft Azure, Oracle Cloud</span></h5>
            </section>
            <br /><br /><br /><br /><br /><br />
        </div>
        </body>
    </PublicLayout>
</template>
