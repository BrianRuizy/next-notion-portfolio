![mockup-2](https://user-images.githubusercontent.com/23439187/211413579-0dbb4f8f-0be6-443f-965a-910af62880e4.png)

## Get Started
Setup is quick! Make sure you already have a notion account created and we will need **just two things** notion database ID, and your own private notion api key.

### Notion Setup 
[Duplicate](https://absorbing-kitchen-6e6.notion.site/a1adcd880b0946a6865c95831f311b03?v=68e06b5467a1478588352270e751cba4) my **Portfolio Posts** notion page, and setup your database [integration](https://developers.notion.com/docs/create-a-notion-integration).

![](https://files.readme.io/cbbd7c3-create_integration.gif)

```
NOTION_API_KEY=secret_XXXXXXXXXXXXXXX
NOTION_DATABASE_ID=XXXXXXXXXXXXXXX
```

---

### Vercel setup 
Start new project on vercel --you can quickly clone mines [here](https://vercel.com/new/clone?s=https%3A%2F%2Fgithub.com%2FBrianRuizy%2Fnext-notion-portfolio%2F&showOptionalTeamCreation=false). Then you will need to setup your Vercel projects ```.env``` variables, which you created for notion. This is found in *Project Settings > Environment Variables*.

<img width="1324" alt="Screenshot 2023-01-09 at 3 57 19 PM" src="https://user-images.githubusercontent.com/23439187/211416471-f8264f87-1d01-41c0-8345-b1b39e85526b.png">
