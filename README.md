  ![architecture](https://www.amplify-video.com/unicornflix/amplify_arch.png)

The video processing plane of Amplify Video VOD uses an S3 bucket for source material that generates S3 events on object PUT. A Lambda Function, triggered from the S3 event, schedules the MediaConvert job to process  content. The outputs of MediaConvert are put into the Output S3 bucket and also generate S3 events on object PUT. These events trigger a final Lambda function which sets access policies on the content served to users in the output bucket.

The data plane consists of AppSync hosted GraphQL APIs, Lambda Resolvers, and DynamoDB as the persistance layer for video metadata and access URLs. 

Authentication for the web application is governed through Cognito User Pools, which protect access to the GraphQL API. The API has fine-grained access based on the group in the Cognito User Pool. Cognito also generates temporary, limited-privilege AWS credentials for access to upload content into S3.