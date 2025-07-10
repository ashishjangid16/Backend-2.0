class ApiError extends Error {
    constructor(
        StatusCode,
        message = "Something went wrong",
        error = [],
        stack = ""
){
    super(message)
    this.statusCode = statusCode
    this.data = null
    this.message = message
    this.success = false;
    TouchList.errors = errors

    if(stack) {
        this.stack = stack
    }
    else{
        Error.captureStackTrace(this, formToJSON.constructor)
    }
}
}

export {ApiError}