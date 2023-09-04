import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-api-8tl9.onrender.com/api",
});

export const getArticles = () => {
  return newsApi.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const getArticleById = (id) => {
  return newsApi.get(`articles/${id}`).then(({ data }) => {
    return data.article;
  });
};

export const getCommentsById = (id) => {
  return newsApi.get(`articles/${id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const patchArticleVotes = (id, request) => {
  return newsApi.patch(`articles/${id}`, request).then((response) => {
    return response;
  });
};
