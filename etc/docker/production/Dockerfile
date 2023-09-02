FROM node:18-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat git

WORKDIR /app

COPY --link src/website/package.json src/website/yarn.lock .git ./
RUN echo "GIT_TAG=$(git describe --tags --abbrev=0)" >> .env
RUN yarn --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY --from=deps --link /app/node_modules ./node_modules
COPY --link  src/website/. .
COPY --from=deps --link /app/.env ./
RUN yarn build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN \
  addgroup --system --gid 1001 nodejs; \
  adduser --system --uid 1001 nextjs

COPY --from=builder --link /app/public ./public

COPY --from=builder --link --chown=1001:1001 /app/.next/standalone ./
COPY --from=builder --link --chown=1001:1001 /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME 0.0.0.0

CMD ["node", "server.js"]
