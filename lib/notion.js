const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export const getAllPublished = async () => {
  const posts = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: "Publish",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  });

  const allPosts = posts.results;

  return allPosts.map((post) => {
    return getPageMetaData(post);
  });
};


const getPageMetaData = (post) => {
  const getTags = (tags) => {
    const allTags = tags.map((tag) => {
      return tag.name;
    });

    return allTags;
  };

  let coverImage = null;
  if (post.cover.external) {
    coverImage = post.cover.external.url;
  } else if (post.cover.file) {
    coverImage = post.cover.file.url;
  }

  return {
    id: post.id,
    title: post.properties.Name.title[0].plain_text,
    category: post.properties.Category.select.name,
    tags: getTags(post.properties.Tags.multi_select),
    description: post.properties.Description.rich_text[0].plain_text,
    date: getToday(post.properties.Date.date.start),
    slug: post.properties.Slug.rich_text[0].plain_text,
    cover: coverImage,
  };
};

function getToday (datestring) {
  const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let date = new Date();

  if (datestring) {
    date = new Date(datestring);
  }

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  let today = `${month} ${day}, ${year}`;

  return today;
};