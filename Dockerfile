FROM openjdk:17-jdk-alpine3.13 as build
LABEL name="cartoonuniverse"

RUN mkdir -p /workspace/app
WORKDIR /workspace/app


COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src src
RUN apk add --no-cache dos2unix
RUN dos2unix mvnw
RUN apk add --no-cache maven
RUN chmod +x mvnw
RUN ./mvnw install -DskipTests

FROM openjdk:17-jdk-alpine3.13

RUN mkdir -p /workspace/app

WORKDIR /workspace/app

COPY --from=build /workspace/app/target/heroes-0.0.1-SNAPSHOT.jar /workspace/app

EXPOSE 8081

CMD ["java", "-jar", "heroes-0.0.1-SNAPSHOT.jar"]

