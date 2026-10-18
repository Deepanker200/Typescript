type APIType = {
    userId: number
    id: number
    title: string
    body: string
}

async function apiCallHandling(): Promise<APIType> {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const data = await result.json()
    // console.log(data);
    return data
}

apiCallHandling().then((data:APIType) => {
    console.log(data);
});


//Using Axios
import axios from "axios";

type APIType2 = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

async function apiCallHandling2(): Promise<APIType2> {
    const result = await axios.get<APIType2>(
        "https://jsonplaceholder.typicode.com/posts/1"
    );

    return result.data;
}

apiCallHandling2().then((data: APIType2) => {
    console.log(data);
});