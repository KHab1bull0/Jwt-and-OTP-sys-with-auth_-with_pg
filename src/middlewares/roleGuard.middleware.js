

export const roleGuard = (roles) => {
    return (req, res, next) => {
        console.log(req.user);
        if(!roles.includes(req.user.role)){
            return res.status(400).send({
                message: `User role ${req.user.role} is not authorized to access this route`
            })
        }
        next()
    }
}

