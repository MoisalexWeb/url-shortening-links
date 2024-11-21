export const useValidInput = () => {
    const validURL = (url: string) => {
        const regex = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[a-zA-Z0-9-._~:\/?#[\]@!$&'()*+,;=]*)?$/
        
        if (regex.test(url)) return true
        else return false
    }

    const validFormLink = (form: React.FormEvent<HTMLFormElement>) => {
        const inputURL = (form.currentTarget.elements.namedItem('url') as HTMLInputElement).value
        const isValidURL = validURL(inputURL)
        if (isValidURL) {
            return true
        }
        else {
            return false
        }
    }

    return {
        validFormLink,
        validURL
    }
}
