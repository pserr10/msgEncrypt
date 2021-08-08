export class BitlyService{

    async getShortenLink(link){
        const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer 1dfb12f108c86dd8f8550c18df0b4c8845c5dbc9"
            },
            body:JSON.stringify({"long_url": link})
        });
        return response.json();
    }

}