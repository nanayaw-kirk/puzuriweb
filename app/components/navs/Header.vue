<template>
	<header class="w-full">

		<div class="container py-2">

			<div class="flex justify-between items-center w-full gap-x-2 md:gap-x-8">
				<nav class="flex items-center gap-x-3">
					<partials-toggle-menu class="lg:hidden"/>

					<nuxt-link :to="{name: 'index'}" class="flex items-center gap-x-2">
						<logos-group class="h-6 md:h-10 w-fit hidden md:block fill-foreground"></logos-group>
						<logos-group-icon class="h-6 md:h-10 w-fit md:hidden"></logos-group-icon>
					</nuxt-link>
				</nav>

				<nav class="expand hidden md:flex items-center justify-center">
					<ui-navigation-menu>
						<ui-navigation-menu-list>

							<ui-navigation-menu-item>
								<ui-navigation-menu-trigger class="font-semibold">About Us</ui-navigation-menu-trigger>
								<ui-navigation-menu-content class="!p-0">
									<div class="w-[350px]">
										<ui-navigation-menu-link as-child>
											<div class="!p-0 grid !gap-0">
												<nuxt-link :to="{name: 'about'}" class="flex flex-row w-full gap-2 items-center p-2">
													<span class="size-12 bg-primary">
														
													</span>
													<span class="expand flex flex-col">
														<span class="font-semibold text-sm">Our Story</span>
														<span class="line-clamp-1 text-xs text-foreground/70">
															Learn about {{$appName}} and what we stand for
														</span>
													</span>

													<span class="icon-right"></span>
												</nuxt-link>
											</div>
										</ui-navigation-menu-link>

										<ui-separator decorative></ui-separator>

										<ui-navigation-menu-link as-child>
											<div class="!p-0 grid !gap-0">
												<nuxt-link :to="{name: 'leadership'}" class="flex flex-row w-full gap-2 items-center p-2">
													<span class="size-12 bg-primary">
														<!-- <img :src="link.icon" alt="Link Illustration"> -->
													</span>
													<span class="expand flex flex-col">
														<span class="font-semibold text-sm">Leadership</span>
														<span class="line-clamp-1 text-xs text-foreground/70">
															Know the spearheads of our operations
														</span>
													</span>

													<span class="icon-right"></span>
												</nuxt-link>
											</div>
										</ui-navigation-menu-link>
									</div>
								</ui-navigation-menu-content>
							</ui-navigation-menu-item>


							<ui-navigation-menu-item>
								<ui-navigation-menu-trigger class="font-semibold">Subsidiaries</ui-navigation-menu-trigger>
								<ui-navigation-menu-content class="!p-0">
									<div class="w-[350px]">
										<ui-navigation-menu-link as-child>
											<div class="!p-0 grid !gap-0">
												<nuxt-link :to="{name: 'agro'}" class="flex flex-row w-full gap-2 items-center p-2">
													<span class="size-12 bg-primary">
														
													</span>
													<span class="expand flex flex-col">
														<span class="font-semibold text-sm">{{$agro}}</span>
														<span class="line-clamp-1 text-xs text-foreground/70">
															Learn about {{$appName}} and what we stand for
														</span>
													</span>

													<span class="icon-right"></span>
												</nuxt-link>
											</div>
										</ui-navigation-menu-link>

										<ui-separator decorative></ui-separator>

										<ui-navigation-menu-link as-child>
											<div class="!p-0 grid !gap-0">
												<nuxt-link :to="{name: 'logistics'}" class="flex flex-row w-full gap-2 items-center p-2">
													<span class="size-12 bg-primary">
														<!-- <img :src="link.icon" alt="Link Illustration"> -->
													</span>
													<span class="expand flex flex-col">
														<span class="font-semibold text-sm">{{$log}}</span>
														<span class="line-clamp-1 text-xs text-foreground/70">
															Know the spearheads of our operations
														</span>
													</span>

													<span class="icon-right"></span>
												</nuxt-link>

												
											</div>
										</ui-navigation-menu-link>

										<ui-separator decorative></ui-separator>


										<ui-navigation-menu-link as-child>
											<div class="!p-0 grid !gap-0">
												<nuxt-link :to="{name: 'construction'}" class="flex flex-row w-full gap-2 items-center p-2">
													<span class="size-12 bg-primary">
														<!-- <img :src="link.icon" alt="Link Illustration"> -->
													</span>
													<span class="expand flex flex-col">
														<span class="font-semibold text-sm">{{$const}}</span>
														<span class="line-clamp-1 text-xs text-foreground/70">
															Know the spearheads of our operations
														</span>
													</span>

													<span class="icon-right"></span>
												</nuxt-link>
											</div>
										</ui-navigation-menu-link>
									</div>
								</ui-navigation-menu-content>
							</ui-navigation-menu-item>

							<ui-navigation-menu-item>
								<nuxt-link :to="{name: 'news'}">
									<ui-navigation-menu-link  :class="navigationMenuTriggerStyle()" :active="$route.name === 'news'">
										<span class="font-semibold">
											News
										</span>
									</ui-navigation-menu-link>
								</nuxt-link>
							</ui-navigation-menu-item>


							<ui-navigation-menu-item>
								<nuxt-link :to="{name: 'contact'}">
									<ui-navigation-menu-link  :class="navigationMenuTriggerStyle()" :active="$route.name === 'contact'">
										<span class="font-semibold">
											Contact Us
										</span>
									</ui-navigation-menu-link>
								</nuxt-link>
							</ui-navigation-menu-item>


							<ui-navigation-menu-item class="hidden lg:flex">
								<nuxt-link :to="{name: 'foundation'}">
									<ui-navigation-menu-link  :class="navigationMenuTriggerStyle()" :active="$route.name === 'foundation'">
										<span class="font-semibold">
											{{$appName}} Foundation
										</span>
									</ui-navigation-menu-link>
								</nuxt-link>
							</ui-navigation-menu-item>





						</ui-navigation-menu-list>
					</ui-navigation-menu>
				</nav>


				<nav class="hidden md:flex items-center gap-x-2">
					<nuxt-link :to="{name: 'grower'}">
						<ui-button >
							Become A Grower
						</ui-button>
					</nuxt-link>
				</nav>

				<partials-themer/>
			</div>
			
		</div>


	</header>	
</template>

<script setup lang="ts">
import { navigationMenuTriggerStyle} from '@/components/ui/navigation-menu'
</script>
