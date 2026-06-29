# SOURCE ry Website 2026

## Description

The main purpose of SOURCE ry website is info. Website is targeted for partner companies and SOURCE ry members.

The goal of the website is to be accessible. Website works both in finnish and english languages.

## Building for dev use:

### Using port 5500 (safer)

Run in website folder

Linux & CMD:

- `docker build -t sourcery . && docker run -p 5500:80 --name SOURCEry --rm sourcery`

Powershell:

- `(docker build -t sourcery .) -and (docker run -p 5500:80 --name SOURCEry --rm sourcery)`

Open `localhost:5500` on web.

Remember to delete image if not needed anymore. Container autoremoves itself after use.

**Warning**

Navigation links won't work correctly, since they connect to port 80 natively.

**Fix**

Click link and when site doesn't load add :5500 after localhost, but before /board, /titelan etc.

### Using port 80 (faster)

Run in website folder

Linux & CMD:

`docker build -t sourcery . && docker run -p 80:80 --name SOURCEry --rm sourcery`

Powershell:

- `(docker build -t sourcery .) -and (docker run -p 5500:80 --name SOURCEry --rm sourcery)`

Open `localhost` on web.

Remember to delete image if not needed anymore. Container autoremoves itself after use.

**Warning**

Port 80 may already be in use and docker may need privileged access to open it.

It may override other running web services in network.

@ Oskari Järvinen 2026