# weather-service
1. clone the git repository from following url
```
  $ git clone git@github.com:mayankmike86/weather-service.git
```
2. Move to weather-service folder
```
  $ cd weather-service
```
3. Run following Command
```
  $ npm install
```

5. Run following command to start server
```
    node app
```

# Steps to Dockerige the App

Run following command to run containerized app.

1. 
```
    docker build . -t mayank/weather
```
2. 
```
    docker run -p 3234:8000 -d mayank/weather
```
