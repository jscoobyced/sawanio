.PHONY: stop setup test e2e dev

setup: stop
	rm -Rf .next cache node_modules
	docker-compose up setup

stop:
	docker-compose down

test:
	xhost +local:*
	docker-compose up -d cypress-components

e2e:
	xhost +local:*
	docker-compose up -d cypress-e2e

dev:
	docker-compose up -d dev

all: e2e test dev
