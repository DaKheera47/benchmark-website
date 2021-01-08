import { connect } from "mongoose";
import { userModel } from "./user.model";
const MONGO_SECRET = process.env.MONGO_SECRET;

try {
    if (MONGO_SECRET) {
        connect(MONGO_SECRET, {
            keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } else {
        console.log("MONGO FAILED TO CONNECT DUE TO URI FAILURE");
    }
} catch (err) {
    console.log(err);
}

export { userModel };
