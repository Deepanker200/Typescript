async function apiCallHandling() {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await result.json();
    // console.log(data);
    return data;
}
apiCallHandling().then((data) => {
    console.log(data);
});
//Using Axios
import axios from "axios";
async function apiCallHandling2() {
    const result = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    return result.data;
}
apiCallHandling2().then((data) => {
    console.log(data);
});
//# sourceMappingURL=apicall.js.map