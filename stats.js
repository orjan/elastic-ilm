const fetch = require('node-fetch');


(async function () {
  const raw = await fetchData()
  /*
          "docs" : {
          "count" : 2,
          "deleted" : 0
        },
        "store" : {
          "size_in_bytes" : 9547
        },
  */
  const data = Object.entries(raw.indices)
    .map(([key, value]) => {
      return {
        indexName: key,
        count: value.total.docs.count,
        size: value.total.store.size_in_bytes
      }
    })
  console.table(data)
})()

async function fetchData() {
  const response = await fetch("http://localhost:9200/_stats")
  return response.json()
}
