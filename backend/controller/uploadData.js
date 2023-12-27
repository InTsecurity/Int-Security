import schema from "./../models/data";

const uploadData = async (request, response) => {
  const req = request.body;
  data.create({
    first_name: req.firstname,
    last_name: req.lastname,
    email: req.email,
    number: req.number,
    organization: req.organization,
    website: req.website,
    country: req.country,
    questions: req.questions,
    services: req.services,
  });
};

export default uploadData;
