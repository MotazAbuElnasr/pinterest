import axios from "axios";
export default async function GetPosts(page, search) {
  console.log(page);
  const apiCall = search
    ? `/posts/search?q=${search}&page=${page || ""}`
    : `/posts/?page=${page || ""}`;
  const res = await axios.get(apiCall);
  const result = { posts: res.data.result, pages: res.data.pages };
  return result;
}
