FROM node:18-bullseye-slim

RUN DEBIAN_FRONTEND=noninteractive apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y -qq apt-utils
RUN DEBIAN_FRONTEND=noninteractive apt-get upgrade -y
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y libgtk2.0-0 \
    libgtk-3-0 libgbm-dev libnotify-dev libnss3 libxss1 \
    libasound2 libxtst6 xauth xvfb procps

WORKDIR /app
COPY src/website/cypress.config.ts src/website/postcss.config.js src/website/tailwind.config.js ./
COPY src/website/package.json src/website/tsconfig.json src/website/yarn.lock ./
RUN yarn
RUN yarn cypress install
RUN yarn next telemetry disable

COPY ./etc/docker/cypress/entrypoint.sh /
RUN chmod u+x /entrypoint.sh

ENTRYPOINT [ "/entrypoint.sh" ]
