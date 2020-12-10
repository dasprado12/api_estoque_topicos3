const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const authConfig = require("../config/auth");

async function authMiddleware(req, res, next){
    const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ error: "Token not provided" });
        }

    const [, token] = authHeader.split(" ");

    try {
        const decoded = await promisify(jwt.verify)(token, authConfig.secret);
        req.userName = decoded.nome;
        req.userId = decoded.id;

        return next();
    } catch (err) {
        return res.status(401).json({ error: "Invalid Token" });
    }
};

module.exports = authMiddleware