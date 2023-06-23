docker-build:
	docker build -t micro-chat-fe .

docker-run:
	docker run -d --name micro-chat-fe -p 8080:8080 -p 9901:9901 micro-chat-fe

protoc:
	protoc -I=. src/chat.proto --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.

.PHONY: docker-build docker-run