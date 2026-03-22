'use client'

import {createFormSchema} from "@/app/shema/signUpShema";
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"

export default function SignUpForm() {

    const FormSchema = createFormSchema();

    // Initialize React Hook Form with Zod resolver for validation
    const {register, handleSubmit, formState: {errors}} = useForm({resolver: zodResolver(FormSchema)})

    // onSubmit is called only if validation passes
    const onSubmit = (data) => {
        alert("Booking successful!")
        console.log(data)
    };

    return (
        // handleSubmit is a wrapper of hook useForm
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="userName">name</label>
                {/* register input to RHF with validation */}
                <input id="userName" {...register("userName")} />
                {/* display validation error if exists */}
                {errors.userName && <p>{errors.userName.message}</p>}
            </div>
            <div>
                <label htmlFor="userEmail">email</label>
                <input id="userEmail" {...register("userEmail")} />
                {errors.userEmail && <p>{errors.userEmail.message}</p>}
            </div>
            <div>
                <label htmlFor="birthDate">birthday</label>
                {/* valueAsDate converts string input to JS Date object */}
                <input id="birthDate" type="date" {...register("birthDate", {valueAsDate: true})} />
                {errors.birthDate && <p>{errors.birthDate.message}</p>}
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input id="password" {...register("password")} />
                {errors.password && <p>{errors.password.message}</p>}
            </div>
            <div>
                <label htmlFor="passwordConfirmation">password confirmation</label>
                <input id="passwordConfirmation" {...register("passwordConfirmation")} />
                {errors.passwordConfirmation && <p>{errors.passwordConfirmation.message}</p>}
            </div>
            <button type="submit">Sign Up</button>
        </form>
    )
}