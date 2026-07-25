# To-do List

To-do list made using React and Vite. iOS inspiration theme.

## Installation

1. Install with npm

```bash
cd todolist-js
npm i
```

2. Run with npm

```bash
npm run dev
```

## Docker Deployment

### Prerequisites

- Docker installed on your system
- Docker Compose 3.8+

### Build and Run

```bash
cd todo-list-react
docker-compose up --build
```

The application will be available at `http://localhost:3000`

### Build Image Only

```bash
cd todo-list-react
docker build -t todo-list-react .
```

### Run with Existing Image

```bash
# Multi-stage build with reverse proxy
docker run -p 3000:80 --name todo-list-react-container todo-list-react

# Or just the container without reverse proxy
docker run -p 3000:80 todo-list-react
```

### Stopping and Cleaning Up

```bash
docker-compose down
# Or if running individual container
docker stop todo-list-react-container
docker rm todo-list-react-container
```

### View Running Containers

```bash
docker-compose ps
# Or for individual container
docker ps | grep todo-list-react
```

## CI/CD Pipeline

This project includes a GitHub Actions workflow that:

1. **Builds** the React application
2. **Runs lint** to validate code quality
3. **Manages artifacts** for deployment

The workflow is configured in `.github/workflows/ci.yml` and runs on all pushes and pull requests to the main branch.

## Docker Architecture

The project uses a multi-stage Docker build:

- **Builder Stage**: Node.js 20-alpine with npm dependencies
- **Production Stage**: Nginx Alpine for serving static files

This ensures a small, optimized production image while keeping build dependencies separate.

## Demo

![Demonstration](public/img1.png)

## Roadmap

- Fix bugs
- Add more features
- Improve performance

- Add more features
- Improve performance
