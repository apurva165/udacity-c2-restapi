export const config = {
  "dev": {
    "username": process.env.USER_NAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "dialect": "postgres",
    "aws_region": "us-east-2",
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": "akulkarnibucket-dev"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }, 
  "jwt" : {
    "secret" :"asdf"
  }
}
