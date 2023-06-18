#!/bin/sh

cd /app
rm -Rf node_modules .next cache next-env.d.ts
mkdir -p node_modules .next
yarn
yarn cypress install
yarn next telemetry disable
