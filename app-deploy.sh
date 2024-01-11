set -e
npm install
npm run build
docker build --platform linux/arm64/v8 -t amir316/question-banksy .
docker push amir316/question-banksy