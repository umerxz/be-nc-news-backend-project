
exports.handleCustomErrors = (err, req, res, next) => {
    if (err.status && err.msg) res.status(err.status).send({ msg: err.msg })
    next(err)
};
exports.handlePsqlErrors=(err,req,res,next)=>{
    if(err.code==='22P02') {
        res.status(400).send({ msg: 'Bad Request: Incorrect Type.' })
    }
    else if(err.code==='23502') {
        res.status(400).send({ msg: 'Missing Information.' })
    }
    else if(err.code==='23503') {
        res.status(404).send({ msg: 'Not Found.' })
    }
    else if(err.code==='23505'){
        res.status(403).send({msg:"Already Exists"})
    }
    else next(err)
}
exports.handleServerErrors = (err, req, res, next) => {
    console.log(err)
    res.status(500).send({ msg: 'Internal Server Error' });
};