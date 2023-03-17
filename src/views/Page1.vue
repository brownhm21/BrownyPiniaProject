<template>
	<div class="flex  justify-center bg-gray-300">
        <div class="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/2 sm:w-1/2 rounded-xl">
            <div class="grid grid-cols-2 gap-x-32">
			<div class="...">
				<div class="flex -mt-2">
					<a class="flex text-gray-800 hover:text-gray-900" href="#0">
						<h1 class="text-2xl leading-snug font-bold">Profile</h1>
					</a>
				</div>
			</div>

			<div class="...">
				<div class="flex justify-end -mr-5 -mt-5">
					<span clspanss="block relative h-32 w-32">
						<img
							alt="Photo by aldi sigun on Unsplash"
							src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
							class="mx-auto object-cover rounded-full h-28 w-28 bg-white p-1"
						/>
					</span>
				</div>
			</div>
		</div>
        <div class="">
			<div class="flex divide-x divide-gray-200r -pt-5">
				<div class="grid grid-cols-2 gap-8 gap-x-24">
					<div class="...">
						<p class="font-bold text-zinc-700">First Name</p>
						<p class="text-sm font-light text-zinc-600">Leman</p>
					</div>
					<div class="...">
						<p class="font-bold text-zinc-700">Last Name</p>
						<p class="text-sm font-light text-zinc-700">Suleymanova </p>
					</div>
					<div class="...">
						<p class="font-bold text-zinc-700">Email</p>
						<p class="text-sm font-light text-zinc-700">
							Lemansuleymanova@gmail.com
						</p>
					</div>
					<div class="col-span-2 ...">
						<p class="font-bold text-zinc-700">Address</p>
						<p class="text-sm font-light text-zinc-700">
							Ganclik m/s, Ziya Bunyadzade.
						</p>
					</div>
					<div>
						<p class="font-bold text-zinc-700">Balance</p>
						<p class="text-sm font-light text-zinc-700">$4,130.78</p>
					</div>
					<div>
						<p class="font-bold text-zinc-700">Created</p>
						<p class="text-sm font-light text-zinc-700">May 15, 2022</p>
					</div>
				</div>
			</div>
		</div>
        </div>
    </div>

 
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap");

body {
	font-family: "Poppins", sans-serif;
}
</style>
<script setup>
import Profile from '../components/Profile.vue';
</script>