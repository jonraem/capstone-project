import AWS from 'aws-sdk';
import uuid from 'uuid';

const s3 = new AWS.S3();

export function createBucket () {
  // Create a bucket and upload something into it
  const bucketName = 'node-sdk-sample-' + uuid.v4();
  const keyName = 'hello_world.txt';

  s3.createBucket({Bucket: bucketName}, () => {
    const params = {Bucket: bucketName, Key: keyName, Body: 'Hello World!'};
    s3.putObject(params, (err, data) => {
      if (err)
        console.log(err)
      else
        console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
    });
  });
}
