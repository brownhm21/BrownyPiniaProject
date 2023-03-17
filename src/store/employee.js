import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useEmployeeStore = defineStore("employee", () => {
	const employees = ref([]);
  const currentPage = ref(1);
  const perPage = ref(10);

	const fetchEmployees = async () => {
		try {
			const data = await axios.get(
				"https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb"
			);
			employees.value = data.data.results[0];
			console.log(this.employees);
		} catch (error) {
			console.error(error);
		}
	};
	//   const searchEmployees = (query) => {
	//     return employees.value.filter((employee) =>
	//     employee.first.toLowerCase().includes(search.toLowerCase())
	// 			|| employee.last.toLowerCase().includes(search.toLowerCase())
	// 			|| employee.email.toLowerCase().includes(search.toLowerCase())
	// 			|| employee.created.toLowerCase().includes(search.toLowerCase())

	//     );
	//   };

	const searchEmployees = (query) => {
		return employees.value.filter((employee) => {
			return employee.email.toLowerCase().includes(query.toLowerCase());
		});
	};

	// const paginate = () => {
	// 	const startIndex = (currentPage.value - 1) * perPage.value;
	// 	const endIndex = startIndex + perPage.value;
	// 	return employees.value.slice(startIndex, endIndex);
	// };

	// const nextPage = () => {
	// 	currentPage.value++;
	// };

	// const prevPage = () => {
	// 	currentPage.value--;
	// };

	// const totalPages = computed(() => {
	// 	return Math.ceil(employees.value.length / perPage.value);
	// });
	return {
		employees,
		fetchEmployees,
		searchEmployees,
		// currentPage,
		// perPage,
		// paginate,
		// nextPage,
		// prevPage,
		// totalPages,
	};
});
