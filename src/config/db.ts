import { connect } from "mongoose";

const db = async () => {
  try {
    const db_uri = process.env.DD_URI as string;

    await connect(db_uri);
    console.log("Connected Successfully");
  } catch (error) {
    console.log(error);
  }
};

export default db;
