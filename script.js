const addData = document.querySelector("#addData");
const deleteData = document.querySelector("#deleteData");

addData.addEventListener("click", () => {
	addStack(5);
	console.log(stack);
})

deleteData.addEventListener("click", () => {
	deleteStack();
	console.log(stack);
})

let arrLength = 5;
let head = -1;
let tail = -1;
let stack = new Array(arrLength).fill(null);

const addStack = (data) => {
	if (!isFull()) {
		if (head === -1) {
			head++;
		}
		tail++;
		stack[tail] = data;
	} else {
		console.log("Stack is Full");	}
}

const deleteStack = () => {
	if (!isEmpty()) {
		stack[tail] = null;
		if (head === tail) {
			head = -1;
			tail = -1;
		} else {
			tail--;
		}
	} else {
		console.log("Stack is Empty")
	}
}

const isFull = () => {
	if (tail === arrLength - 1) {
		return true;
	} else {
		return false;
	}
}

const isEmpty = () => {
	if (head === -1 && tail === -1) {
		return true;
	} else {
		return false;
	}
}