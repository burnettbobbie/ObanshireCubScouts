// // auth.controller.js or user.controller.js

// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const config = require("../config/auth.config");
// const db = require("../models");
// const User = db.user;
// const Role = db.role;

// // Register route/request
// exports.signup = (req, res) => {
//   // Check if password is provided
//   if (!req.body.password) {
//     res.status(400).send({ message: "Password is required." });
//     return;
//   }

//   // Generate a salt for hashing
//   const salt = bcrypt.genSaltSync(10);

//   Role.findOne({ name: "volunteer" }, (err, role) => {
//     if (err) {
//       res.status(500).send({ message: err });
//       return;
//     }

//     if (!role) {
//       res.status(500).send({ message: "Role not found." });
//       return;
//     }

//     const user = new User({
//       firstname: req.body.firstname,
//       lastname: req.body.lastname,
//       username: req.body.username,
//       email: req.body.email,
//       password: bcrypt.hashSync(req.body.password, salt),
//       roles: [role._id],
//     });

//     // Save new user
//     user.save((err, user) => {
//       if (err) {
//         res.status(500).send({ message: err });
//         return;
//       }

//       if (req.body.roles) {
//         Role.find(
//           {
//             name: { $in: req.body.roles },
//           },
//           (err, roles) => {
//             if (err) {
//               res.status(500).send({ message: err });
//               return;
//             }
//             user.roles = roles.map((role) => role._id);
//             user.save((err) => {
//               if (err) {
//                 res.status(500).send({ message: err });
//                 return;
//               }
//               res.send({ message: "Your registration was successful! Please login for access." });
//             });
//           }
//         );
//       } else {
//         Role.findOne({ name: "user" }, (err, role) => {
//           if (err) {
//             res.status(500).send({ message: err });
//             return;
//           }

//           user.roles = [role._id];
//           user.save((err) => {
//             if (err) {
//               res.status(500).send({ message: err });
//               return;
//             }
//             res.send({ message: "Your registration was successful! Please login for access." });
//           });
//         });
//       }
//     });
//   });
// };

// // Login route/request
// exports.signin = (req, res) => {
//   User.findOne({
//     username: req.body.username,
//   })
//     .populate("roles", "-__v")
//     .exec((err, user) => {
//       if (err) {
//         res.status(500).send({ message: err });
//         return;
//       }

//       if (!user) {
//         return res.status(404).send({ message: "User Not found." });
//       }

//       var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

//       if (!passwordIsValid) {
//         return res.status(401).send({
//           accessToken: null,
//           message: "Invalid Password!",
//         });
//       }

//       var token = jwt.sign({ id: user.id }, config.secret, {
//         expiresIn: 86400, // 24 hours
//       });

//       var authorities = [];

//       for (let i = 0; i < user.roles.length; i++) {
//         authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
//       }

//       res.status(200).send({
//         id: user._id,
//         firstname: user.firstname,
//         lastname: user.lastname,
//         username: user.username,
//         email: user.email,
//         roles: authorities,
//         accessToken: token,
//       });
//     });
// };
const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

//Register route/ request
exports.signup = (req, res) => {
    // Check if password is provided
    if (!req.body.password) {
      res.status(400).send({ message: "Password is required." });
      return;
    }
  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  });
//save new user
  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles }
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          user.roles = roles.map(role => role._id);
          user.save(err => {
            if (err) {
              res.status(500).send({ message: err });
              return;
           }
            res.send({ message: "Your registration was successful! Please login for access." });            
          });
        }
      );
    } else {
      Role.findOne({ name: "volunteer" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        user.roles = [role._id];
        user.save(err => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          res.send({ message: "Your registration was successful! Please login for access."});
        });
      });
    }
  });
};

//Login route/request
exports.signin = (req, res) => {
  User.findOne({
    username: req.body.username
  })
    .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      var authorities = [];

      for (let i = 0; i < user.roles.length; i++) {
        authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
      }
      res.status(200).send({
        id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        username: user.username,
        email: user.email,
        roles: authorities,
        accessToken: token
      });
    });
};

