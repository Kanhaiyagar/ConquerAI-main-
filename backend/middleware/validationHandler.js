import { validationResult } from 'express-validator';

const validationHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log('Validation errors:', errors.array());
    return res.status(400).json({
      success: false,
      error: errors.array()[0].msg,
      statusCode: 400,
    });
  }
  next();
};

export default validationHandler;
