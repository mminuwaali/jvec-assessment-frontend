import { MdEmail, MdPassword, MdPhone } from "react-icons/md"

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
}

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
}

export const createContactForm: Omit<FormPropType, 'onClose' | 'onSubmit'> = {
    links: [],
    button: "create",
    title: "create new contact",
    inputs: [
        {
            type: "text",
            required: true,
            name: "firstName",
            placeholder: "Enter contact's first name",
        },
        {
            type: "text",
            required: true,
            name: "lastName",
            placeholder: "Enter contact's last name",
        },
        {
            type: "tel",
            icon: MdPhone,
            required: true,
            name: "phoneNumber",
            placeholder: "Enter contact's phone number",
        },
    ],
}

export const updateContactForm: Omit<FormPropType, 'onClose' | 'onSubmit'> = {
    links: [],
    button: "update",
    title: "update this contact",
    inputs: [
        {
            type: "text",
            required: true,
            name: "firstName",
            placeholder: "Enter contact's first name",
        },
        {
            type: "text",
            required: true,
            name: "lastName",
            placeholder: "Enter contact's last name",
        },
        {
            type: "tel",
            icon: MdPhone,
            required: true,
            name: "phoneNumber",
            placeholder: "Enter contact's phone number",
        },
    ],
}