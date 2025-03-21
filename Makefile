# Variables
PACKAGE_MANAGER := npm

# Targets
dev:
	$(PACKAGE_MANAGER) run dev

build-test:
	$(PACKAGE_MANAGER) run build:test

build-prod:
	$(PACKAGE_MANAGER) run build:prod

start-test:
	$(PACKAGE_MANAGER) run start:test

start-prod:
	$(PACKAGE_MANAGER) run start:prod

lint:
	$(PACKAGE_MANAGER) run lint

cypress-open:
	$(PACKAGE_MANAGER) run cypress:open

# Default Target
.PHONY: all
all: dev
