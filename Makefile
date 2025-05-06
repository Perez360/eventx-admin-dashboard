# containerize-app:
# 	docker build -t react:latest .
# 	docker run --name react -itd -p 3000:3000 -p 8080:8080 react:latest
	    
start-server:
	@json-server --watch server/db.json --port 8080