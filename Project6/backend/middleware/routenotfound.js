
function notfound(req,res,next){
    res.status(404).json({
        message: `Route ${req.url} not found`
    })
}

module.exports = notfound