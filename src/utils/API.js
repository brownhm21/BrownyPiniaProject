export function createStudent(student, students) {
	return new Promise((resolve, reject) => {
		try {
			const isHaveStudent = students.findIndex(({ studentNo }) => studentNo === student.studentNo) >= 0;

			if (isHaveStudent) {
				throw new Error('Bu numaraya sahip öğrenci var');
			}

			setTimeout(() => {
				resolve({ data: student });
			}, 2000);
		} catch (err) {
			reject(err);
		}
	});
}

export function deleteStudent(studentNo, students) {
	return new Promise((resolve, reject) => {
		try {
			setTimeout(() => {
				const index = students.value.findIndex((student) => student.studentNo === studentNo);

				resolve({ data: index });
			}, 1000);
		} catch (err) {
			reject(err);
		}
	});
}

export function updateStudent(student, students) {
	return new Promise((resolve, reject) => {
		try {
			setTimeout(() => {
				const index = students.value.findIndex((stdnt) => stdnt.studentNo === student.studentNo);

				resolve({ data: index });
			}, 1000);
		} catch (err) {
			reject(err);
		}
	});
}

export default {
	deleteStudent, createStudent, updateStudent,
};
