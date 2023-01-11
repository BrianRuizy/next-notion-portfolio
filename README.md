![mockup-2](https://user-images.githubusercontent.com/23439187/211413579-0dbb4f8f-0be6-443f-965a-910af62880e4.png)

## Get Started
Setup is quick! Make sure you already have a notion account created and we will need **just two things** notion database ID, and your own private notion api key.

### 1. Notion Setup 
[Duplicate](https://brianruiz.notion.site/a1adcd880b0946a6865c95831f311b03?v=68e06b5467a1478588352270e751cba4) my **Portfolio Posts** notion page, and setup your database [integration](https://developers.notion.com/docs/create-a-notion-integration).

![](https://files.readme.io/cbbd7c3-create_integration.gif)

```
NOTION_API_KEY=secret_XXXXXXXXXXXXXXX
NOTION_DATABASE_ID=XXXXXXXXXXXXXXX
```

---

### 2. Vercel setup 
Start new project on vercel --you can quickly clone mines [here](https://vercel.com/new/clone?s=https%3A%2F%2Fgithub.com%2FBrianRuizy%2Fnext-notion-portfolio%2F&showOptionalTeamCreation=false). Then you will need to setup your Vercel projects ```.env``` variables, which you created for notion. This is found in *Project Settings > Environment Variables*.

<img width="1324" alt="image" src="https://user-images.githubusercontent.com/23439187/211417030-12d3e45f-ecb2-4124-b196-0d3a91d0dc3f.png">
