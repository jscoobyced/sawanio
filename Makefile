.PHONY: stop setup test e2e dev
.SILENT: stop setup test e2e dev

setup: stop
	rm -Rf .next cache node_modules .vercel yarn.lock
	touch .env .env.local yarn.lock
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

dev:
	rm -Rf .next/cache
	TEST_TYPE="none" docker-compose up -d dev
