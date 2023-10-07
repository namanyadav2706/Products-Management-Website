const validationMiddleware = (req,res,next)=> {
    const {name,desc,price,imageUrl} = req.body;
    let errors = [];
    if(!name || name.trim()===""){
        errors.push("Enter a valid name")
    }
    if(!desc){
        errors.push("Please write the description")
    }
    if(!price || price<1){
        errors.push("Enter a valid value")
    }

    try{
        let url = new URL(imageUrl)
    }catch(err){
        errors.push("Enter a valid URL")
    }

    if(errors.length>0){
        return res.render("new-product",{errorMsg:errors[0]});
    }
    next();
}

export default validationMiddleware;