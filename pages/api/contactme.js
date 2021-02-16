const mailer = require("./mailer");

export default (req, res) => {
  const { method } = req;
  if (method === "POST") {
    const { email = "", name = "", message = "" } = req.body;

    mailer({ email, name, text: message })
      .then(() => {
        console.log("success");
        res.status(202);
        res.send("success");
      })
      .catch((error) => {
        console.log("failed", error);
        res.status(500);
        res.send("badddd");
      });
  } else {
    return res.status(200).json({ message: "hola" });
  }
};
