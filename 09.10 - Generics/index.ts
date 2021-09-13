interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

fetch("http://jsonplaceholder.typicode.com/photos?_start=0&_limit=3");

async function enhancedFetch <ResponseData = string[]> (url: string) {
  const res = await fetch(url);
  const data: ResponseData = await res.json();
  
  return {
    status: res.status,
    data
  };
}

enhancedFetch<Photo[]>("http://jsonplaceholder.typicode.com/photos?_start=0&_limit=3")
  .then(res => {
    res.data.map(item => console.log(item.albumId))
  });
