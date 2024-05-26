.PHONY: stop setup test e2e dev reset clean
.SILENT: stop setup test e2e dev
DEV_FILES = $(shell cat src/website/deps_dev.txt | tr '\n' ' ')
RUN_FILES = $(shell cat src/website/deps_run.txt | tr '\n' ' ')

stop:
	TEST_TYPE="none" docker-compose down

clean: stop
	rm -Rf ./src/website/.next ./src/website/cache ./src/website/node_modules ./src/website/.vercel ./src/website/yarn.lock
	touch ./src/website/.env ./src/website/.env.local ./src/website/yarn.lock

setup: clean
	TEST_TYPE="none" docker-compose up setup
	TEST_TYPE="none" docker-compose down

reset: clean
	cp src/website/package.json.tpl src/website/package.json
	yarn --cwd src/website add $(RUN_FILES)
	yarn --cwd src/website add -D $(DEV_FILES)
  yarn --cwd src/website lint
	git add src/website

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

certificate:
	rm -Rf ./src/server/certificates
	mkdir -p ./src/server/certificates
	openssl req -nodes -new -x509 -subj "/C=TH/ST=Bangkok/L=Bangkok/O=Sawan.io /OU=IT Department/CN=R&D" -keyout src/server/certificates/server.key -out src/server/certificates/server.cert

build_prod:
	docker build -t jscdroiddev/sawanio:latest -f etc/docker/production/Dockerfile .

run_prod:
	docker run -it --rm --name sawanio -p 3000:3000 jscdroiddev/sawanio:latest

server:
	yarn --cwd src/server dev
