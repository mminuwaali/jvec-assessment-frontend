import { MdEmail, MdPassword } from "react-icons/md";

export const loginForm: Omit<FormPropType, 'onClose' | 'onSubmit'> = {
    button: "log in",
    title: "welcome back",
    links: [
        {
            to: "/signup",
            title: "Don't have an account? *register*"
        }
    ],
    inputs: [
        {
            type: "email",
            name: "email",
            icon: MdEmail,
            required: true,
            placeholder: "Enter your email",
        },
        {
            required: true,
            type: "password",
            name: "password",
            icon: MdPassword,
            placeholder: "Enter your password",
        },
    ],
};

export const registerForm: Omit<FormPropType, 'onClose' | 'onSubmit'> = {
    wide: true,
    button: "register",
    title: "register here",
    links: [
        {
            to: "/signin",
            title: "Already having an account? *login here*"
        }
    ],
    inputs: [
        {
            type: "text",
            required: true,
            name: "username",
            placeholder: "Enter your username",
        },
        {
            type: "email",
            name: "email",
            icon: MdEmail,
            required: true,
            placeholder: "Enter your email",
        },
        {
            required: true,
            type: "password",
            name: "password",
            icon: MdPassword,
            placeholder: "Enter a strong password",
        },
    ],
};