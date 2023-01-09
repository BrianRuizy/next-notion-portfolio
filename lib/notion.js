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
    date: relativeDate(post.properties.Date.date.start),
    slug: post.properties.Slug.rich_text[0].plain_text,
    cover: coverImage,
  };
};

function formatDate (datestring) {
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

function relativeDate(datestring) {
  const date = new Date(datestring);
  const today = new Date();
  const diff = Math.floor((today - date) / (1000 * 60 * 60 * 24));

  if (diff === 0) {
    return "Today";
  } else if (diff === 1) {
    return "Yesterday";
  } else if (diff < 7) {
    return `${diff} days ago`;
  } else if (diff < 14) {
    return "Last week";
  } else if (diff < 21) {
    return "2 weeks ago";
  } else if (diff < 28) {
    return "3 weeks ago";
  } else if (diff < 60) {
    return "Last month"; 
  } else {
    return formatDate(datestring);
  }
}