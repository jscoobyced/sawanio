.PHONY: stop setup test e2e dev
.SILENT: stop setup test e2e dev

setup: stop
	rm -Rf ./src/website/.next ./src/website/cache ./src/website/node_modules ./src/website/.vercel ./src/website/yarn.lock
	touch ./src/website/.env ./src/website/.env.local ./src/website/yarn.lock
	TEST_TYPE="none" docker-compose up setup
	TEST_TYPE="none" docker-compose down

stop:
	TEST_TYPE="none" docker-compose down

test:
	xhost +local:* >/dev/null
	TEST_TYPE=component docker-compose up -d cypress

e2e:
	xhost +local:* >/dev/null
	TEST_TYPE=e2e docker-compose up -d cypress

ci-tests:
	xhost +local:* >/dev/null
	TEST_TYPE=component:headless docker-compose up cypress
	TEST_TYPE=e2e:headless docker-compose up cypress

dev:
	rm -Rf .next/cache
	TEST_TYPE="none" docker-compose up -d dev
