// Documentation: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html

exports.handler = async function (event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({message: 'Hello World!'}),
    };
};
