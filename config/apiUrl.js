let ipUrl = "https://blogpan.herokuapp.com/default/";

let servicePath = {
  getArticlesList: ipUrl, //index
  getArticlesById: ipUrl + "getArticlesById/", //detail
  getArticlesByTypeId: ipUrl + "getArticlesByTypeId/",
};

export default servicePath;
