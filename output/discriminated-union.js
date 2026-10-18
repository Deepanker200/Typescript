function handleResponse(response) {
    if (response.status === "success") {
        console.log(response.data);
    }
    else {
        console.log(response.errorCode);
    }
}
handleResponse({
    status: "error",
    errorCode: 404
});
export {};
//# sourceMappingURL=discriminated-union.js.map