# This must match the docker image in bitbucket-pipelines.yml
FROM mcr.microsoft.com/playwright:v1.37.1-jammy

ADD . /app
WORKDIR /app

CMD ["yarn", "test:vr"]
