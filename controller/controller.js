const { projectmodel } = require("../model/projectModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const register = async (req, res) => {
  const { name, password } = req.body;
  try {
    const hashPass = await bcrypt.hash(password, saltRounds);
    const userData = new projectmodel({
      name,
      password: hashPass,
    });
    const dbResponse = await projectmodel.insertMany(userData);
    console.log(dbResponse);
    return res.status(200).send({ message: "user saved" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: "something went wrong" });
  }
};

const login = async () => {};

const updateData = async (req, res) => {
  const updateQuery = req.body;
  try {
    const filter = updateQuery.filter;
    console.log(filter);
    const value = { $set: updateQuery.value };
    console.log(value);

    const dbResponse = await projectmodel.updateMany(filter, value);
    console.log(dbResponse);
    return res.status(200).send({ message: "user saved" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: "something went wrong" });
  }
};

const deleteData = async (req, res) => {
  const condition = req.query;
  try {
    const dbresponse = await projectmodel.deleteOne(condition);
    console.log(dbresponse);
    return res.status(200).send({ message: "deleteted" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { register, login, updateData, deleteData };
