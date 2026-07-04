class ApiError extends Error {
  constructor(message, statusCode) {
    super() ;
    this.statusCode = statusCode ;
    this.isOperational = true ;
    Error.captureStackTrace(this, this.constructor) ;
  }

  static badRequest(message) {
    return new ApiError(message, 400) ;
  }

  static unauthorized(message) {
    return new ApiError(message, 401) ;
  }

  static forbidden(message) {
    return new ApiError(message, 403) ;
  }

  static notFound(message) {
    return new ApiError(message, 404) ;
  }
}

export default ApiError ;