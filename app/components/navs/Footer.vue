<template>
	<footer>
		<nav class="container grid gap-y-6 md:gap-y-4 bg-teal-900 rounded-t-2xl md:rounded-b-2xl p-8 md:p-16 lg:p-24 text-white">
			

			<div class="grid md:grid-cols-2 gap-4 md:gap-8">

				<div>
					<h1 class="text-2xl md:text-5xl font-semibold sm:font-black leading-5 sm:leading-none">
						Follow us on <br> <span class="text-primary">Social Media</span>
					</h1>

				</div>
				<div class="flex flex-wrap items-center gap-2 md:gap-4 md:justify-end">
					<a href="https://web.facebook.com/profile.php?id=61559946909181" target="blank" class="size-10 flex flex items-center justify-center border border-white rounded-full">
						<Facebook />
					</a>
					<a href="https://x.com/ThePuzuriGroup" target="blank" class="size-10 flex flex items-center justify-center border border-white rounded-full">
						<Twitter/>
					</a>
					<a href="https://www.linkedin.com/company/104002922/admin/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BgtLgtsFuSUi5rgKxtmosxg%3D%3D" target="blank" class="size-10 flex flex items-center justify-center border border-white rounded-full">
						<Linkedin/>
					</a>
					<a href="https://www.instagram.com/puzuri_group/" target="blank" class="size-10 flex flex items-center justify-center border border-white rounded-full">
						<Instagram/>
					</a>
					<a href="https://www.youtube.com/channel/UCrST4RBLNf3tbGpfkACJSIA%20" target="blank" class="size-10 flex flex items-center justify-center border border-white rounded-full">
						<Youtube/>
					</a>
					<!-- <a href="" target="blank" class="size-10 flex flex items-center justify-center border border-white rounded-full"></a> -->
				</div>
			</div>

			<ui-separator class="bg-border/20" decorative></ui-separator>

			<div class="grid md:grid-cols-3 gap-8">

				<div >
					<nuxt-link :to="{name: 'index'}" class="flex mb-4">
						<logos-group class="h-8 md:h-10 w-fit !fill-white"></logos-group>
					</nuxt-link>

					<p class="text-sm">
						All Rights Reserved | &copy; {{new Date()?.getFullYear()}} <br> {{$groupLtd}} 
					</p>

				</div>

				<div class="grid grid-cols-2 gap-4">
					<div class="flex flex-col">
						<span class="text-xs uppercase mb-2 text-primary">Quick Links</span>
						<nuxt-link class="text-sm md:text-sm" :to="{name: 'news'}">Latest News</nuxt-link>
						<nuxt-link class="text-sm md:text-sm" :to="{name: 'about'}">About Us</nuxt-link>
						<nuxt-link class="text-sm md:text-sm" :to="{name: 'contact'}">Contact Us</nuxt-link>
						<nuxt-link class="text-sm md:text-sm" :to="{name: 'grower'}">Grower Scheme</nuxt-link>
					</div>
					<div class="flex flex-col">
						<span class="text-xs uppercase mb-2 text-primary">Divisions</span>
						<nuxt-link class="text-sm md:text-sm" :to="{name: 'agro'}"> {{$appName}} Agro</nuxt-link>
						<nuxt-link class="text-sm md:text-sm" :to="{name: 'logistics'}"> {{$appName}} Logistics</nuxt-link>
						<nuxt-link class="text-sm md:text-sm" :to="{name: 'construction'}"> {{$appName}} Contsruction</nuxt-link>
						<nuxt-link class="text-sm md:text-sm" :to="{name: 'foundation'}"> {{$appName}} Foundation</nuxt-link>
					</div>
				</div>

				<div class="grid gap-2">
					<p class="text-sm">BB3082 Chlorine St <br> NS-414-7914, <br>Fuo, Tamale</p>
					<div class="flex flex-col">
						<a class="text-sm text-primary underline" href="tel:037 209 6740">037 209 6740</a>
						<a class="text-sm text-primary underline" href="tel:037 209 6739">037 209 6739</a>
					</div>
				</div>
			</div>
		</nav>




		<ui-drawer v-model:open="open" v-if="smAndDown">
			<ui-drawer-content class="rounded-t-xl border p-0">

				<div class="hidden">
					<ui-drawer-header>
						<ui-drawer-title>Mobile Options</ui-drawer-title>
						<ui-drawer-description>Mobile Menu Options</ui-drawer-description>
					</ui-drawer-header>
				</div>

				<div class="flex flex-col items-center gap-y-6 p-3">
					<nuxt-link class="text-sm md:text-sm" :to="{name: 'news'}">Home</nuxt-link>
					<nuxt-link class="text-sm md:text-sm" :to="{name: 'about'}">About Us</nuxt-link>
					<nuxt-link class="text-sm md:text-sm" :to="{name: 'news'}">Latest News</nuxt-link>
					<nuxt-link class="text-sm md:text-sm" :to="{name: 'contact'}">Contact Us</nuxt-link>
				</div>
			</ui-drawer-content>
		</ui-drawer>
	</footer>	
</template>
<script setup lang="ts">

import {useStorage} from "@vueuse/core"

const open = useStorage('puzu_menu_open', false)

const {smAndDown} = useScreenSize()
import { Facebook, Twitter, Youtube, Linkedin, Instagram } from 'lucide-vue-next'

</script>
