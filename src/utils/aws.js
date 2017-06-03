import AWS from 'aws-sdk';
import uuid from 'uuid';

// const myCredentials = new AWS.Credentials('mock-key', 'mock-secret-key', null);
const s3 = new AWS.S3({credentials: myCredentials, region: 'us-east-1'});

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

export function copyObject () {
  const copyBucket = 'node-sdk-sample-f4ec3fc4-135a-433d-9365-31faaeab0a18'
  const copySource = `${copyBucket}/html`
  const copyKey = '1.jpg'

  s3.copyObject({Bucket: copyBucket, CopySource: copySource, Key: copyKey}, (err, data) => {
    if (err)
      console.log(err)
    else
      console.log(data);
  });
}

export default { createBucket: createBucket, copyObject: copyObject }
