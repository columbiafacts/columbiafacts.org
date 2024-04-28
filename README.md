![](https://github.com/xyflow/web/blob/main/assets/codesandbox-header-ts.png?raw=true)

# Context
This is a participatory project where you can contribute to the development of the next generation of facts. The goal is to create a platform where people can easily share and discover facts about Columbia. The platform will be powered React Flow, by GPT-4 and Claude.ai, two of the most advanced AI models in the world.


# Making one for your school

If you would like to make a similar platform for your school, you can fork this repository and make the necessary changes to the code. You can also reach out to GPT-4 or Claude.ai for help with the development of the platform. The platform is built using React Flow, a React library for building node-based applications. You can find more information about React Flow [here](https://reactflow.dev/). You can purchase a domain name like columbiafacts.org from a domain registrar like Namecheap and host the platform for free on GitHub Pages like this one is hosted following https://vitejs.dev/guide/static-deploy#github-pages. To protect yourself from potential legal issues, make sure to include public evidence to support the facts you add to the platform, alongside using Stripe Atlas to create a legal entity for your project, and consulting with a lawyer or free legal clinic to ensure that you are in compliance with all relevant laws and regulations. The website for Stripe Atlas is https://stripe.com/atlas.

Time commitment: 3 hour for 1 human with a background in front-end development, starting from an existing power map such as at https://adamtooze.substack.com/p/chartbook-279-columbia-universitys (backup: https://archive.is/brbLQ).

Prerequisite to making one for your school or institution: 
* hardening of your devices, operations and information security (https://brianlovin.com/security)
* only make edits via an open source VPN
* only use Signal with a Google Voice number to communicate
* do not use your name, only use the Corporation Service Company representation and Delaware address everywhere
* do not use your school infrastructure (email, health care sharing of notes with your school from therapists or psychiatrists) to communicate
* take extra precautions if your immigration status or visa is tied to your school

# How to contribute

There are three options to contribute:

1. **Easy**: use the [#columbiafacts](https://twitter.com/search?lang=en&q=(%23columbiafacts)&src=typed_query) hashtag on Twitter to share facts about Columbia. The facts will be periodically reviewed and added to the platform if there is sufficient evidence to support them attached to the fact. Please make sure to include the source of the fact in your tweet.
2. **Medium**: you can open an issue in this repository to suggest a fact to be added to the platform, by clicking on the "Issues" tab above: https://github.com/columbiafacts/columbiafacts.org. The fact will be reviewed and added to the platform if there is sufficient evidence to support it attached to the fact. Please make sure to include the source of the fact in your issue.
3. **Advanced**: you can contribute to the development of the platform by editing the code in this repository. The platform is built using React Flow, a React library for building node-based applications. You can find more information about React Flow [here](https://reactflow.dev/). For example, you can view the existing links and facts in the code and add new ones by following the instructions below, or do so directly in the GitHub interface, for example by clicking on the "Edit" button at this link to modify links to the evidence for the facts attached to edges between nodes: https://github.com/columbiafacts/columbiafacts.org/blob/main/src/nodes/index.ts and here https://github.com/columbiafacts/columbiafacts.org/blob/main/src/edges/index.ts

If you are new to React Flow, you can start by following the instructions below to set up the development environment. Once you have set up the development environment, you can make changes to the code and create a pull request to the main repository. If you need help with the pull request, you can ask GPT-4 or Claude.ai for help. Please make sure to include public evidence to support the facts you add to the platform.

To enable expedient review and processing of your fact, please ensure that your tweet is formatted correctly. The correct format is as follows:

```
#ColumbiaFacts [fact] [source] [image]
```

The image is optional, but it is highly recommended to include one - as a default, consider clicking "Download Image" button on columbiafacts.org, using that image making and highlighting edits to this image. The source should be a link to a reputable source that supports the fact alongside the backup links to the Internet Archive Wayback Machine (https://web.archive.org) or Archive is (https://archive.is).

If you need help making a Tweet, you can also ask GPT-4 or Claude.ai for help.

# editing 
1. Run `yarn install`
2. Run `yarn dev`
3. Make changes to the code such as in the nodes or edges list 
4. The browser willnot automatically reload with your changes please refresh
5. Use this to make a pull request to this main repository: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request
6. Ask GPT-4 or Claude.ai to help you with the pull request if you need help, providing it with the copy and paste content of index.ts files and apptsx because otherwise will be difficult to help u 😥

# React Flow starter (Vite + TS)

We've put together this template to serve as a starting point for folks
interested in React Flow. You can use this both as a base for your own React
Flow applications, or for small experiments or bug reports.

**TypeScript not your thing?** We also have a vanilla JavaScript starter template,
just for you!

## Getting up and running

You can get this template without forking/cloning the repo using `degit`:

```bash
npx degit xyflow/vite-react-flow-template your-app-name
```

The template contains mostly the minimum dependencies to get up and running, but
also includes eslint and some additional rules to help you write React code that
is less likely to run into issues:

```bash
npm install # or `pnpm install` or `yarn install`
```

Vite is a great development server and build tool that we recommend our users to
use. You can start a development server with:

```bash
npm run dev
```

While the development server is running, changes you make to the code will be
automatically reflected in the browser!

## Things to try:

- Create a new custom node inside `src/nodes/` (don't forget to export it from `src/nodes/index.ts`).
- Change how things look by [overriding some of the built-in classes](https://reactflow.dev/learn/customization/theming#overriding-built-in-classes).
- Add a layouting library to [position your nodes automatically](https://reactflow.dev/learn/layouting/layouting)

## Resources

Links:

- [React Flow - Docs](https://reactflow.dev)
- [React Flow - Discord](https://discord.com/invite/Bqt6xrs)

Learn:

- [React Flow – Custom Nodes](https://reactflow.dev/learn/customization/custom-nodes)
- [React Flow – Layouting](https://reactflow.dev/learn/layouting/layouting)


# License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. Copyright 2024 Columbia Facts LLC.