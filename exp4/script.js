// Person Class
class Person {
    constructor(name, mobile) {
        this.name = name;
        this.mobile = mobile;
    }

    printDetails() {
        return `Name: ${this.name}, Mobile: ${this.mobile}`;
    }

    // Arrow function as a member function
    getDetails = () => `Name: ${this.name}, Mobile: ${this.mobile}`;
}

// Student Class inheriting Person
class Student extends Person {
    constructor(name, mobile, rollNo) {
        super(name, mobile);
        if (rollNo <= 0) {
            throw new Error('Roll number must be greater than zero.');
        }
        this.rollNo = rollNo;
    }

    // Overriding method
    printDetails() {
        return `Student Name: ${this.name}, Mobile: ${this.mobile}, Roll No: ${this.rollNo}`;
    }
}

// Validation functions
const validateForm = () => {
    const name = document.getElementById('name').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const message = document.getElementById('message').value.trim();

    const errors = [];

    if (!name) errors.push('Name is required.');
    if (!mobile || mobile.length !== 9 || isNaN(mobile)) errors.push('Mobile number must be exactly 9 digits.');
    if (!message) errors.push('Message is required.');

    return errors;
};

// Form submission handler
const handleSubmit = (event) => {
    event.preventDefault();
    
    // Clear previous errors and receipt
    const errorContainer = document.getElementById('errorContainer');
    const receiptContainer = document.getElementById('receipt');
    errorContainer.innerText = '';
    receiptContainer.innerHTML = '';

    // Validate form
    const errors = validateForm();

    if (errors.length > 0) {
        errorContainer.innerText = errors.join(' ');
        return;
    }

    const name = document.getElementById('name').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const message = document.getElementById('message').value.trim();

    try {
        const person = new Person(name, mobile);
        const student = new Student(name, mobile, 1); // Example roll number

        // Generate Receipt
        const receiptDate = new Date().toLocaleString();
        const receiptHtml = `
            <h2>Order Receipt</h2>
            <p>Order received on: ${receiptDate}</p>
            <p>${student.printDetails()}</p>
            <p>Message on T-Shirt: ${message}</p>
        `;
        receiptContainer.innerHTML = receiptHtml;
    } catch (error) {
        errorContainer.innerText = error.message;
    }
};

document.getElementById('orderForm').addEventListener('submit', handleSubmit);
