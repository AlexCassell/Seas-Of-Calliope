var api_key = "key-09fda12b4a24efb7edc779cb6a0130b5";
var domain = "www.ms.mydomainseasofcalliope.com";
var mailgun = require("mailgun-js")({ apiKey: api_key, domain: domain });

var data = {
  from: "WebForm <me@samples.mailgun.org>",
  to: "alex@simulism.net",
  subject: "Hello",
  text: "Testing some Mailgun awesomeness!"
};

mailgun.messages().send(data, function(error, body) {
  console.log(body);
});