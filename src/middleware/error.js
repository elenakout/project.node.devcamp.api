const errorHnadler = (err, req, res, next) => {
    // Log to console for Dev
    console.log(err.stack);

    res.status(500).json({
        success: false,
        error: err.message,
    });
}

module.exports = errorHnadler;