# Makefile for Transcendence project

# Start development environment (background)
dev:
	docker compose -f docker-compose.dev.yml up -d

# Start development environment (with logs)
dev-logs:
	docker compose -f docker-compose.dev.yml up

# Stop development environment
down:
	docker compose -f docker-compose.dev.yml down

# Start production environment
up:
	docker compose up -d

# Stop production environment
stop:
	docker compose down

# Show running containers
ps:
	docker ps

# Show logs
logs:
	docker compose -f docker-compose.dev.yml logs -f

# Rebuild containers
rebuild:
	docker compose -f docker-compose.dev.yml up -d --build

# reset the environment
re:
	docker compose -f docker-compose.dev.yml down -v
	docker compose -f docker-compose.dev.yml up -d --build

.PHONY: dev dev-logs down up stop ps logs rebuild
