class ApiResponses {
  static OK(res, data=null, message){
    return res.status(200).json({
      status: "success",
      data,
      message
    })
  }

  static created(res, data=null, message){
    return res.status(201).json({
      status: "success",
      data,
      message
    })
  }

  static deleted(res, data=null, message){
    return res.status(200).json({
      status: "success",
      data,
      message
    })
  }
}

export default ApiResponses ;