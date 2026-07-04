import joi from "joi"

class BaseDto {
  static schema = Joi.object({}) ;

  static validate(data){
    const {error, value} = this.schema.validate(data,{
        abortEarly: false,
        stripUnknown: true,
      }
    )

    if(error){
      const errorMessages = error.details.map(detail => detail.message) ;
      throw new Error(`Validation error: ${errorMessages.join(", ")}`) ;
    }
    return value ;
  }

}

export default BaseDto ;