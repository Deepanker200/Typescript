type Success = {
    status: "success";
    data: string;
};

type ErrorResponse = {
    status: "error";
    errorCode: number;
};

type Response = Success | ErrorResponse;

function handleResponse(response: Response) {
    if (response.status === "success") {
        console.log(response.data);
    } else {
        console.log(response.errorCode);
    }
}

handleResponse({
    status: "error",
    errorCode: 404
});