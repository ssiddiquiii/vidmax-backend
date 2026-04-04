const asyncHander = (requestHandler) => {
    return (res, req, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}