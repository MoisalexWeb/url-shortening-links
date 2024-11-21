import { FormEvent } from "react"

export const useValidInput = () => {
    const validURL = (url: string) => {
        const regex = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[a-zA-Z0-9-._~:\/?#[\]@!$&'()*+,;=]*)?$/
        
        if (regex.test(url)) return true
        else return false
    }

    const validFormLink = (form: React.ReactElement) => {
        const inputURL = form.url.value
        const isValidURL = validURL(inputURL)
        if (isValidURL) {
            // console.log('Es valido')
            return true
        }
        else {
            console.log('es invalido')
            return false
        }
    }

    return {
        validFormLink,
        validURL
    }
}
