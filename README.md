# Mocker

## Problem
I've struggled to find a local JSON mocking tool that's easy to just start up and ignore. I also ran into some issues with mock API services

Mock API services come with some common issues, too:
- External origins may be blocked by your company
- API keys may limit number of requests
- Not easy to define JSON shapes

## Goal
To make an idiot-proof local mock server that can dramatically speed up development time

## Features Planned for MVP
- Define API routes using folder structure
- Dev provides `index.json` file for defining verbs/codes/JSON
- Hot reload detection

### Nice to Haves
- Optional verbose request logging
- Optional query param for adjusting response code/JSON

## Long Term Plan
- Write a more robust version with schema validation and dynamic response generation
