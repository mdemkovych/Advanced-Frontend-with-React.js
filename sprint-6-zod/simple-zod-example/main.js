// 1) Import ZOD via CDN (working in browser)
import { z } from "https://cdn.jsdelivr.net/npm/zod@3.23.8/+esm";

// 2) Define validation schema
const schema = z.object({
    name: z
        .string()
        .trim()
        .min(3, "Name must be at least 3 characters long")
        .max(30, "Name must be at most 30 characters long"),

    email: z
        .string()
        .trim()
        .min(1, "E-mail is required")
        .email("Incorrect e-mail format"),

    age: z.preprocess(
        (value) => {
            if (value === "") return undefined;

            const num = Number(value);

            return Number.isNaN(num) ? value : num;
        },
        z
            .number({
                invalid_type_error: "Age should be a number",
            })
            .int("Age should be an integer")
            .min(0, "Age should be positive")
            .optional()
    ),
});

// 3) Get elements from HTML
const form = document.getElementById("registerForm");
const successBox = document.getElementById("success");

const inputs = {
    name: document.getElementById("name"),
    email: document.getElementById("email"),
    age: document.getElementById("age"),
};

const errorBoxes = {
    name: document.getElementById("nameError"),
    email: document.getElementById("emailError"),
    age: document.getElementById("ageError"),
};


function clearErrors() {
    // clear error message
    Object.values(errorBoxes).forEach((box) => {
        box.textContent = "";
    });

    // clear error styles
    Object.values(inputs).forEach((input) => {
        input.classList.remove("error");
    });
}


function showErrors(fieldErrors) {
    // fieldErrors looks like:
    // {
    //   name: ["error..."],
    //   email: ["error..."],
    //   age: ["error..."]
    // }

    for (const field in fieldErrors) {
        const messages = fieldErrors[field];

        if (messages && messages.length > 0) {
            errorBoxes[field].textContent = messages[0];

            inputs[field].classList.add("error");
        }
    }
}


// 6) handle SUBMIT
form.addEventListener("submit", (event) => {
    // prohibit page reloads
    event.preventDefault();

    // hide previous - success
    successBox.style.display = "none";
    successBox.textContent = "";

    // clear previous eroors
    clearErrors();

    // FormData -> simple JS-object
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    // validation via Zod
    const result = schema.safeParse(payload);

    if (!result.success) {
        const fieldErrors = result.error.flatten().fieldErrors;
        showErrors(fieldErrors);
        return;
    }

    // success validation
    console.log("Data is valid:", result.data);

    successBox.style.display = "block";
    successBox.textContent =
        "Validation is success!\n\n" +
        JSON.stringify(result.data, null, 2);

    // in addition we can clear the form:
    // form.reset();
});