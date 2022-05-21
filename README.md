# Mocker
Mock API services come with some common issues
- External origins may be blocked by your company
- API keys may limit number of requests
- Not easy to define JSON shapes

## Goal
To make an idiot-proof local mock server that can dramatically speed up development time

## Features Planned
- Define API routes using folder structure
- Dev provides `index.json` file for defining verbs/codes/JSON
- Hot reload detection
- Optional verbose request logging
- Optional query param for adjusting response code/JSON

