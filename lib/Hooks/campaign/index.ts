import useSWR from 'swr'

const fetcher = (url: string) => {
    return window.fetch(url).then((res) => res.json())
}

export function getSummary() {
  const { data, error } = useSWR(`/api/campaign/get-summary`, fetcher);
  
  return data;
}