
var cloud = require("@pulumi/cloud-aws");



// Create static serving
const staticServing = new cloud.API("Bucket_Lukas");
staticServing.static("/", "../build");

exports.staticServing = staticServing.publish().url;

