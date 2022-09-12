![logo](https://user-images.githubusercontent.com/33086430/189179222-5e2fc7c0-f7ee-4b42-9048-1ddfa57d11b4.png)
# Movie Quotes

Movie Quotes is a social media platform, where user can add movies and add quotes to their movies. Users also have news feed, where they see and can interact with each others quotes/posts, get notifications in real time etc.

---



### Table of Contents
- [Prerequisites](#Prerequisites)  
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Resources](#Resources)

### Prerequisites
* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/2560px-Node.js_logo_2015.svg.png" height="15px" style='padding-right: 5px'> *Node JS @18.6.1*
* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png" height="15px" style='padding-right: 5px'/> *Typescript 4.7.4*
---


### Tech Stack
* <img src="https://brandlogos.net/wp-content/uploads/2022/07/next.js-logo_brandlogos.net_zeccw-512x512.png" height="15"  style='padding-right: 5px'> [Next @12.2.3](https://nextjs.org/)
* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" height="15"  style='padding-right: 5px'> [Tailwind @3.1.6](https://tailwindcss.com/)
* <img src="https://user-images.githubusercontent.com/4060187/61057426-4e5a4600-a3c3-11e9-9114-630743e05814.png" height="15"  style='padding-right: 5px'> [Formik @2.2.9](https://formik.org/)
* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC3vP9YpiYAXnrv7lZDw-N6bymDYoe45dxhVTaS5_Hl3oL4l5dFKoRe5HIn9eKSLTC1fE&usqp=CAU" height="15"  style='padding-right: 5px'> [Framer-motion @2.2.9](https://www.framer.com/motion/)
* <img src="https://1143667985-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/spaces%2F-L9iS6Wm2hynS5H9Gj7j%2Favatar.png?generation=1523462254548780&alt=media" height="15"  style='padding-right: 5px'> [i18next @21.8.14](https://www.i18next.com/)
* <img src="https://ik.imagekit.io/ably/ghost/prod/2021/03/socket-io-logo.jpeg?tr=w-1520" height="15"  style='padding-right: 5px'> [socket io @4.5.1](https://socket.io/) 
* <img src="https://next-auth.js.org/img/social-media-card.png" height="15"  style='padding-right: 5px'> [NextAuth @4.10.3](https://next-auth.js.org/)

---


### Getting Started
1. Clone Movie Quotes repository from github:

```
git clone git@github.com:RedberryInternship/movie-quotes-front-ninadarbaidze.git
```

2. copy env.example file:

```
cp .env.example .env
```

3. Install dependencies

```
npm install
```


4. Make a development server available for the application.

```
npm run dev
```

---

### Project Structure

```

├─── public
├─── src     
│   ├─── assets     
│   ├─── components  
│   ├───├─── icons
│   ├───├─── component-folder
│   ├───├───├─── component-file.tsx
│   ├───├───├─── component-custom-hook.tsx
│   ├───├───├─── index.tsx
│   ├─── pages 
│   ├───├─── page-folder
│   ├───├───|─── index.tsx
│   ├───├─── _app.tsx
│   ├───├─── index.tsx
│   ├─── public
│   ├───├─── assets
│   ├───├─── locales
│   ├─── schema
│   ├───├─── schema-file.ts
│   ├─── services
│   ├───├─── service-file.ts
│   ├─── store
│   ├───├─── store-file.tsx
│   ├─── types
│   ├───├─── types-file.tsx
│   ├─── styles

- .env.example
- .eslintrc.json
- .prettierrc.json
- .next-env.d.ts
- next-i18next.config.js
- next.config.js
- package-lock.json  
- package.json
- postcss.config.js  
- tailwind.config.js
- tsconfig.json

```

### Resources
- [Application Design](https://www.figma.com/file/5uMXCg3itJwpzh9cVIK3hA/Movie-Quotes-Bootcamp-assignment?node-id=0%3A1)
- [Git Commit Conventions](https://redberry.gitbook.io/resources/git-is-semantikuri-komitebi)


