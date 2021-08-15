const data = {lesson1: false, lesson2: false};
async function create(data) {
	const resp = await fetch('/~/pythonworks/account/lessons', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		})
	const ans = await resp.json();
}

create(data);