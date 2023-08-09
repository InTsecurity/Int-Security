const ERRORS = {
  // GENERAL ERRORS
  GENERAL_ERROR: {
    message: "Something went worng!",
    description: "An unknown error has occured. Please try again!",
    code: "500",
  },
  //   FORM FIELD ERRORS
  MISSING_REQUIRED_FIELD: {
    message: "Missing required fields!",
    description: "One of the required fields is missing.",
    code: "400",
  },
  INVALID_INPUT: {
    message: "Special symbols not allowed!",
    description: "One of the field contain special symbols.",
    code: "403",
  },
  INVALID_INPUT_SIZE: {
    message: "Field size exceeded!",
    description:
      "One of the field has exceeded the field size! Make sure all field size is below 50 characters.",
    code: "403",
  },
  //   FILE INPUT ERRORS
  INVALID_FILE_TYPE: {
    message: "Invalid File type!",
    description:
      "Unsupported file type was uploaded. Please upload a valid png/jpeg file.",
    code: "403",
  },
  INVALID_FILE_SIZE: {
    message: "Invalid file size!",
    description: "Large file size. Please use a file less than 5MB!",
    code: "403",
  },
};

module.exports = ERRORS;
