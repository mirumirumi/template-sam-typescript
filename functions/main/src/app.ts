// import {  } from "aws-lambda"

export const handler = async (): Promise<void> => {
  let response

  try {
    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "hello world",
      }),
    }
  } catch (err) {
    console.log(err)
    response = {
      statusCode: 500,
      body: JSON.stringify({
        message: "some error happened",
      }),
    }
  }
}
