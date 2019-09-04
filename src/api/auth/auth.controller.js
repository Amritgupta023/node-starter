const logIn = (req, res) => {
    console.log("login controller");
    res.json({'login module':req.body});
}

const signUp = (req, res) => {
    console.log("sign up controller");
    res.json({"req.body":req.body})
}

module.exports = {
    logIn,
    signUp
}