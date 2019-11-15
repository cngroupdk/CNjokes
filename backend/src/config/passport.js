import mongoose from "mongoose";
import passport from "passport";
import LocalStrategy from "passport-local";

const Users = mongoose.model("Users");

passport.use(
  new LocalStrategy(
    {
      usernameField: "user[userName]",
      passwordField: "user[password]"
    },
    (userName, password, done) => {
      Users.findOne({ userName })
        .then(user => {
          if (!user || !user.validatePassword(password)) {
            return done(null, false, {
              errors: { "userName or password": "is invalid" }
            });
          }

          return done(null, user);
        })
        .catch(done);
    }
  )
);
