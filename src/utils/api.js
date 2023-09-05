import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-api-8tl9.onrender.com/api",
});

export const getArticles = (topic) => {
  return newsApi
    .get("/articles", { params: { topic: topic } })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getTopics = () => {
  return newsApi.get("/topics").then(({ data }) => {
    return data.topics;
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

export const patchVotesById = (id, request) => {
  return newsApi.patch(`articles/${id}`, request).then((response) => {
    return response;
  });
};

export const postCommentById = (id, request) => {
  return newsApi.post(`/articles/${id}/comments`, request).then((response) => {
    return response;
  });
};
