class createError extends Error {
    constructor(message, statusCode) {
        super(message);

        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error'; // Corrected template literal usage

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = createError;
