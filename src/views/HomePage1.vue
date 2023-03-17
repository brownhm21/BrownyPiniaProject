<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- <script>
import { computed, onMounted } from 'vue';
import { useEmployeeStore } from "../store/employee";

export default {
	setup() {
		// const employeeStore = useEmployeeStore();
		// employeeStore.fetchEmployees();

    //     const storee = useEmployeeStore();

    // const employees = computed(() => {
    //   return storee.employees;
    // });

    // onMounted(() => {
    //   storee.fetchEmployees();
    // });



		return {
			// employees: employeeStore.employees,
            // employees,
		};
	},
};
</script> -->
<script>
import { ref } from "vue";
import { computed, onMounted } from "vue";
import { useEmployeeStore } from "../store/employee";

import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";

export default {
	components: {
		VueTailwindPagination,
	},
	data() {
		return {
			currentPage: 1,
			perPage: 10,
			total: 100,
		};
	},
	methods: {
		onPageClick(event) {
			this.currentPage = event;
		},
	},
	setup() {
		const storee = useEmployeeStore();

		const employees = computed(() => {
			return storee.employees;
		});

		onMounted(() => {
			storee.fetchEmployees();
		});

		const searchQuery = ref("");

		const filteredEmployees = computed(() => {
			return storee.searchEmployees(searchQuery.value);
		});

		return {
			employees,
			searchQuery,
			filteredEmployees,
		};
	},
};
</script>

<!-- <script>
import { defineComponent } from 'vue';
import { useEmployeeStore } from '../store/employee';

export default defineComponent({
  setup() {
    const { employees, fetchEmployees, currentPage, perPage, paginate, nextPage, prevPage, totalPages } = useEmployeeStore();

    fetchEmployees();

    return {
      employees,
      currentPage,
      perPage,
      paginate,
      nextPage,
      prevPage,
      totalPages,
    };
  },
});
</script> -->
<template>
	<div class="w-full px-20 bg-gray-300">
		<div class="flex items-start justify-center">
			<div class="w-full">
				<div class="bg-white shadow-md my-6 rounded-tl-xl rounded-tr-xl">
					<!-- <div class="flex items-center pt-5 pl-5 pb-5">
						<label for="countries" class="block mb-2 text-lg font-light"
							>Show</label
						>
					</div> -->

					<div class="flex ml-6 items-center pt-5 pl-5 pb-5"></div>
					<div class="flex ...">
						<div class="flex-1 h-16 bg-white">
							<div class="flex ml-6 items-center">
								<span class="mr-3">Show</span>
								<div class="relative">
									<select
										class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
									>
										<option>10</option>
										<option>20</option>
										<option>30</option>
										<option>ALL</option>
									</select>
									<span
										class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center"
									>
										<svg
											fill="none"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											class="w-4 h-4"
											viewBox="0 0 24 24"
										>
											<path d="M6 9l6 6 6-6"></path>
										</svg>
									</span>
								</div>
							</div>
						</div>
						<div class="grow h-16 w-32 bg-white"></div>
						<div class="flex-1 h-16 bg-white">
							<div class="flex ml-6 items-center">
								<span class="mr-3">Search</span>
								<input
									class="flex border h-10 pl-5 ml-3 shadow-md items-center justify-center rounded-full outline-none focus:outline focus:outline-indigo-400"
									type="text"
									autocomplete="off"
									v-model="searchQuery"
									placeholder="Search..."
								/>
							</div>
						</div>
					</div>

					<table class="w-full rounded-tl-lg sortable">
						<thead>
							<tr
								class="bg-blue-200 text-gray-600 uppercase text-sm rounded-t2xl"
							>
								<th class="py-3 px-6 text-center rounded-tl-xl">
									<div class="flex items-center justify-center">First</div>
								</th>
								<th class="py-3 px-6 text-center">
									<div class="flex items-center justify-center">Last</div>
								</th>
								<th class="py-3 px-6 text-center">
									<div class="flex items-center justify-center">Email</div>
								</th>
								<th class="py-3 px-6 text-center">
									<div class="flex items-center justify-center">Adress</div>
								</th>
								<th class="py-3 px-6 text-center">
									<div class="flex items-center justify-center">Created</div>
								</th>
								<th class="py-3 px-6 text-center">
									<div class="flex items-center justify-center">Balance</div>
								</th>

								<th class="py-3 px-6 text-center rounded-tr-xl">Actions</th>
							</tr>
						</thead>

						<tbody class="text-gray-600 text-sm font-light">
							<tr
								v-for="employee in employees"
								:key="employee.first"
								class="border-b border-gray-200 bg-white hover:bg-gray-100"
							>
								<td class="py-3 px-6 text-center whitespace-nowrap">
									<div class="flex items-center justify-center">
										{{ employee.first }}
									</div>
								</td>

								<td class="py-3 px-6 text-center whitespace-nowrap">
									<div class="flex items-center justify-center">
										{{ employee.last }}
									</div>
								</td>

								<td class="py-3 px-6 text-center whitespace-nowrap">
									<div class="flex items-center justify-center">
										{{ employee.email }}
									</div>
								</td>
								<td class="py-3 px-6 text-center whitespace-nowrap">
									<div class="flex items-center justify-center">
										{{ employee.address }}
									</div>
								</td>

								<td class="py-3 px-6 text-center whitespace-nowrap">
									<div class="flex items-center justify-center">
										{{ employee.created }}
									</div>
								</td>
								<td class="py-3 px-6 text-center whitespace-nowrap">
									<div class="flex items-center justify-center">
										{{ employee.balance }} $
									</div>
								</td>

								<td class="py-3 px-6 whitespace-nowrap">
									<div class="flex item-center justify-center">
										<div
											class="w-4 mr-2 transform hover:text-green-600 hover:scale-110"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
												/>
											</svg>
										</div>
									</div>
								</td>
							</tr>
						</tbody>

						<!-- <tbody class="text-gray-600 text-sm font-light">
							<TableRow
								v-for="employee in employeeStore"
								:key="employee.first"
								:employee="employee"
							/>
						</tbody> -->
						<!-- <tbody class="text-gray-600 text-sm font-light">
							<TableRow
                            v-for="employee in employees" :key="employee.email"
							/>
						</tbody> -->
					</table>
					<!-- <div class="flex justify-end mt-4">
                        <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>{{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    
      
                     </div> -->
				</div>
			</div>
		</div>
	</div>
</template>
