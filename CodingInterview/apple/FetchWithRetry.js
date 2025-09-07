async function fetchWithRetry(url, signal, options = {}, retries = 3, backoff = 500){
    for(let attempt = 1; attempt <= retries; attempt++){
        try {
            const response = await fetch(url, options, signal);
            if(!response.ok){
                throw new Error(`Request failed with status ${response.status}`);
            }
            return await response.json();
        }
        catch (error) {
            if(signal?.aborted){
                throw new Error('Fetch aborted by user');
            }
            if(attempt === retries){
                throw error;
            }
            await new Promise(res => setTimeout(res, backoff * attempt));
            console.log(`Retrying... ${url} : (${attempt}/${retries})`);
        }
    }
}
// Example usage:
const controller = new AbortController();

fetchWithRetry('https://api.example.com/data', controller.signal)
    .then(data => console.log(data))
    .catch(error => console.error('Fetch failed:', error));

setTimeout(() => controller.abort(), 100); // Abort after 100ms

    const controller2 = new AbortController();

    fetchWithRetry('https://jsonplaceholder.typicode.com/posts/1', controller2.signal)
    .then(data => console.log(data))
    .catch(error => console.error('Fetch failed:', error));
    