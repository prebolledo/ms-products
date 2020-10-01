# MS Products

## Commands

### Build

```sh
docker build -t ms-wmproducts .
```

### Run

```sh
docker run  -it --rm \
-e PORT=9000 \
-e HOST=0.0.0.0 \
-e MONGO_URI="mongodb+srv://<username>:<password>@<your-cluster-url>/<dbname>?retryWrites=true&w=majority" \
-p 9000:9000 \
--name ms-wmproducts ms-wmproducts
```
