
<template>
  <!-- <div class="w-full px-20 bg-gray-300">
    <div class=" flex items-start justify-center">
      <div class="w-full ">

        <div class="flex items-center">
          <label for="search" />
          <input
            v-model="search"
            class="flex border h-10 pl-5 shadow-md  items-center justify-center rounded-full outline-none focus:outline focus:outline-indigo-400"
            type="text"
            autocomplete="off"
            name="search"
            placeholder="Search..."
          />
        </div>

        <div class="bg-white shadow-md my-6 rounded-tl-xl rounded-tr-xl">
          <table class="w-full rounded-tl-lg sortable">
            <thead>
              <tr class="bg-gray-200 text-gray-600 uppercase text-sm rounded-t2xl">
                <th @click="handleSort('name')" class="py-3 px-6 text-center rounded-tl-xl">
                  <div class="flex items-center justify-center">
                    name
                    <template v-if="sort.type === 'name'">
                      <template v-if="!sort.desc">
                        <DownChevron />
                      </template>

                      <template v-else>
                        <DownChevron class="rotate-180" />
                      </template>
                    </template>

                    <template v-else>
                      <ChevronIcon />
                    </template>
                  </div>
                </th>
                <th @click="handleSort('surname')" class="py-3 px-6 text-center">
                  <div class="flex items-center justify-center">
                    surname
                    <template v-if="sort.type === 'surname'">
                      <template v-if="!sort.desc">
                        <DownChevron />
                      </template>

                      <template v-else>
                        <DownChevron class="rotate-180" />
                      </template>
                    </template>

                    <template v-else>
                      <ChevronIcon />
                    </template>
                  </div>
                </th>
                <th @click="handleSort('age')" class="py-3 px-6 text-center">
                  <div class="flex items-center justify-center">
                    age
                    <template v-if="sort.type === 'age'">
                      <template v-if="!sort.desc">
                        <DownChevron />
                      </template>

                      <template v-else>
                        <DownChevron class="rotate-180" />
                      </template>
                    </template>

                    <template v-else>
                      <ChevronIcon />
                    </template>
                  </div>
                </th>
                <th @click="handleSort('faculty')" class="py-3 px-6 text-center">
                  <div class="flex items-center justify-center">
                    faculty
                    <template v-if="sort.type === 'faculty'">
                      <template v-if="!sort.desc">
                        <DownChevron />
                      </template>

                      <template v-else>
                        <DownChevron class="rotate-180" />
                      </template>
                    </template>

                    <template v-else>
                      <ChevronIcon />
                    </template>
                  </div>
                </th>
                <th @click="handleSort('studentNo')" class="py-3 px-6 text-center">
                  <div class="flex items-center justify-center">
                    student No
                    <template v-if="sort.type === 'studentNo'">
                      <template v-if="!sort.desc">
                        <DownChevron />
                      </template>

                      <template v-else>
                        <DownChevron class="rotate-180" />
                      </template>
                    </template>

                    <template v-else>
                      <ChevronIcon />
                    </template>
                  </div>
                </th>
                <th @click="handleSort('lesson')" class="py-3 px-6 text-center">
                  <div class="flex items-center justify-center">
                    optİonal lesson
                    <template v-if="sort.type === 'lesson'">
                      <template v-if="!sort.desc">
                        <DownChevron />
                      </template>

                      <template v-else>
                        <DownChevron class="rotate-180" />
                      </template>
                    </template>

                    <template v-else>
                      <ChevronIcon />
                    </template>
                  </div>
                </th>
                <th @click="handleSort('date')" class="py-3 px-6 text-center">
                  <div class="flex items-center justify-center">
                    date
                    <template v-if="sort.type === 'date'">
                      <template v-if="!sort.desc">
                        <DownChevron />
                      </template>

                      <template v-else>
                        <DownChevron class="rotate-180" />
                      </template>
                    </template>

                    <template v-else>
                      <ChevronIcon />
                    </template>
                  </div>
                </th>
                <th class="py-3 px-6 text-center rounded-tr-xl">
                  actions
                </th>
              </tr>
            </thead>

            <tbody class="text-gray-600 text-sm font-light">

              <TableRow
                v-for="student in studentStore.filteredStudents(search)"
                :key="student.number"
                :student="student"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div> -->
  <div class="bg-gray-700">
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div class="flex flex-col mb-16 sm:text-center sm:mb-0">
          <a href="/" class="mb-6 sm:mx-auto">
            <div class="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-200">
              <svg class="w-10 h-10 text-deep-purple-900" stroke="currentColor" viewBox="0 0 52 52">
                <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
              </svg>
            </div>
          </a>
          <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
              <span class="relative inline-block">
                <svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-deep-purple-accent-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                  <defs>
                    <pattern id="700c93bf-0068-4e32-aafe-ef5b6a647708" x="0" y="0" width=".135" height=".30">
                      <circle cx="1" cy="1" r=".7"></circle>
                    </pattern>
                  </defs>
                  <rect fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)" width="52" height="24"></rect>
                </svg>
                <span class="relative">Browny</span>
              </span>
              Vue js Demo Project
            </h2>
            <p class="text-base text-indigo-100 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.
            </p>
          </div>
          <div>
            <a
              href="/"
              class="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide bg-emerald-200 transition duration-200 rounded shadow-md hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-emerald-600 focus:shadow-outline focus:outline-none"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
