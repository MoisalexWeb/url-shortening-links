export const fetchData = async (URL: string) => {
    try {
        const data = new FormData();
        data.append('url', URL);

        const response = await fetch('https://url-shortener-service.p.rapidapi.com/shorten', {
            method: 'POST',
            headers: {
                'x-rapidapi-key': '5f6217efb6mshd5fa0005dd0e2ddp10ff1bjsnd0ba7b543a98',
                'x-rapidapi-host': 'url-shortener-service.p.rapidapi.com'
            },
            body: data
        });

        if (response.ok) {
            const result = await response.json();
            return {
                status: true,
                linkResult: result.result_url,
                linkOriginal: URL
            }
        }
        return {
            status: false,
        }
    } catch (error) {
        console.error(error);
    }
}