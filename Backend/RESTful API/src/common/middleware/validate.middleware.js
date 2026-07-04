import ApiError from "../utils/apiError.js"

const validate = (DtoClass) => {
  return (req, res, next) => {
    try {
      const validatedData = DtoClass.validate(req.body) ;
      req.body = validatedData ;
      next() ;
    }
    catch (error) {
      next(ApiError.badRequest(error.message)) ;
    }
  }
}

export default validate ;