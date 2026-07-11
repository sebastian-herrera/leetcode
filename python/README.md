# Python LeetCode Workspace

## Setup

### Prerequisites
- Python 3.8 or higher
- [uv](https://github.com/astral-sh/uv) (already installed on your system)

### Installation
```bash
# Install dependencies and create virtual environment (.venv)
uv sync

# Create a symbolic link so leetkick can locate the virtual environment
ln -s .venv venv
```

## Running Tests

```bash
# Run all tests
uv run pytest

# Run specific problem tests
uv run pytest tests/problem_0001/

# Run with coverage
uv run pytest --cov=src
```

## Code Quality

```bash
# Format code
uv run ruff format

# Lint code
uv run ruff check --fix

# Type checking
uv run mypy src/
```

## Development Workflow

```bash
# Run all quality checks
uv run ruff format && uv run ruff check --fix && uv run mypy src/ && uv run pytest
```

## Project Structure

```
workspace/
├── src/
│   └── problem_XXXX/
│       └── solution_name.py
└── tests/
    └── problem_XXXX/
        └── test_solution_name.py
```

Each problem is organized in its own package with the problem ID for easy navigation.