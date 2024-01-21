// make random int
function randInt (low, high) {
  const range = high - low + 1
  return Math.floor(Math.random() * range) + low
}

const lowBottom = 0;
const lowTop = 50;
const highBottom = 150;
const highTop = 255;

// bg color ranges
const bgRedLow = lowBottom, bgRedHigh = lowTop;
const bgGreenLow = lowBottom, bgGreenHigh = lowTop;
const bgBlueLow = lowBottom, bgBlueHigh = lowTop;

// fg color ranges
const fgRedLow = highBottom, fgRedHigh = highTop;
const fgGreenLow = highBottom, fgGreenHigh = highTop;
const fgBlueLow = highBottom, fgBlueHigh = highTop;

// results
const bgRed = randInt(bgRedLow, bgRedHigh);
const bgGreen = randInt(bgGreenLow, bgGreenHigh);
const bgBlue = randInt(bgBlueLow, bgBlueHigh);

const fgRed = randInt(fgRedLow, fgRedHigh);
const fgGreen = randInt(fgGreenLow, fgGreenHigh);
const fgBlue = randInt(fgBlueLow, fgBlueHigh);

const bgColor = `rgb(${bgRed} ${bgGreen} ${bgBlue})`
const fgColor = `rgb(${fgRed} ${fgGreen} ${fgBlue})`

const fonts = [
  "Arial, sans-serif",
  "Verdana, sans-serif",
  "Tahoma, sans-serif",
  "'Trebuchet MS', sans-serif",
  "'Times New Roman', serif",
  "Georgia, serif",
  "Garamond, serif",
  "'Courier New', monospace"
]

const frontEnds = [
  { name: "Angular", description: "A platform and framework for building client-side applications with HTML, CSS, and JavaScript/TypeScript." },
  { name: "Ant Design", description: "A React UI library with a set of high-quality components and a design system following the Ant Design specification." },
  { name: "Buefy", description: "A lightweight Vue.js UI library based on Bulma that simplifies the process of building responsive and feature-rich web interfaces." },
  { name: "Britecharts", description: "A reusable charting library for creating interactive and responsive charts with D3.js and React." },
  { name: "Bulma", description: "A modern CSS framework based on Flexbox that makes it easy to create responsive and flexible layouts." },
  { name: "Bootstrap", description: "A front-end component library and CSS framework that facilitates the development of responsive and visually appealing web pages." },
  { name: "Carbon Design System", description: "IBM's open-source design system for building consistent and accessible user interfaces across products and platforms." },
  { name: "Chakra UI", description: "A simple, modular, and accessible component library for React applications." },
  { name: "Chart.js", description: "A simple yet versatile JavaScript charting library for creating responsive and interactive charts in web applications." },
  { name: "D3.js", description: "A JavaScript library for producing dynamic, interactive data visualizations in web browsers." },
  { name: "Element UI", description: "A Vue.js UI library with a set of high-quality components and a consistent design language for building elegant web interfaces." },
  { name: "Ember.js", description: "A JavaScript framework for building ambitious web applications with a convention-over-configuration approach." },
  { name: "Evergreen", description: "A React UI framework for building scalable and modular design systems with a focus on simplicity and flexibility." },
  { name: "Foundation", description: "A responsive front-end framework that provides a responsive grid system and a variety of pre-built components." },
  { name: "Gatsby", description: "A React-based framework for building fast and optimized websites and applications with a focus on performance and SEO." },
  { name: "Highcharts", description: "A JavaScript charting library that simplifies the process of creating interactive and visually appealing charts for web applications." },
  { name: "Material-UI", description: "A React UI framework that implements Google's Material Design to create visually appealing and consistent user interfaces." },
  { name: "Materialize CSS", description: "A CSS framework based on Material Design that provides ready-to-use components for building modern web interfaces." },
  { name: "Next.js", description: "A React framework that enables functionality such as server-side rendering and generating static websites for React-based web applications." },
  { name: "Nuxt.js", description: "A Vue.js framework that provides a higher-level abstraction for building universal applications with Vue.js." },
  { name: "Onsen UI", description: "A framework-agnostic UI library and components for building mobile and desktop web applications using HTML, CSS, and JavaScript." },
  { name: "PrimeVue", description: "A Vue.js UI component library with a rich set of customizable and responsive components for building modern web applications." },
  { name: "React", description: "A declarative, efficient, and flexible JavaScript library for building user interfaces." },
  { name: "Rebass", description: "A library for building consistent and themeable UI components in React, with an emphasis on simplicity and flexibility." },
  { name: "Quasar Framework", description: "A Vue.js framework for building high-performance, responsive, and multi-platform applications." },
  { name: "Semantic UI", description: "A user interface framework that uses human-friendly HTML to create responsive and visually appealing web pages." },
  { name: "Semantic-UI React", description: "The React integration for Semantic UI, providing React components that match the Semantic UI design language." },
  { name: "Shoelace.css", description: "A lightweight and forward-thinking CSS framework for building responsive and customizable web components." },
  { name: "Svelte", description: "A component-based JavaScript framework that shifts the work from the browser to the build step, resulting in smaller and faster runtime code." },
  { name: "Tailwind CSS", description: "A utility-first CSS framework that provides low-level utility classes to build designs directly in your markup." },
  { name: "UIKit", description: "A lightweight and modular front-end framework for developing fast and powerful web interfaces." },
  { name: "Vanilla JS", description: "Vanilla JS offers a lightweight and versatile approach to web development, providing developers with the flexibility to tailor solutions to specific project requirements without the overhead and dependencies associated with UI frameworks." },
  { name: "Vue.js", description: "A progressive JavaScript framework for building user interfaces with an approachable and versatile design." },
  { name: "Vuetify", description: "A Vue.js framework that follows Google's Material Design guidelines, offering a set of ready-to-use components for building beautiful applications." }
]

const backEnds = [
  { name: "Active Record", description: "A pattern used in the Ruby on Rails framework that connects objects to relational database tables, simplifying database interactions and providing a convenient API for data manipulation." },
  { name: "Apollo Client", description: "A fully-featured, production-ready GraphQL client for React applications, simplifying data fetching and management." },
  { name: "Apollo Server", description: "A community-driven, open-source GraphQL server that works with any GraphQL schema, providing features like real-time updates, caching, and data manipulation." },
  { name: "ASP.NET Core", description: "A cross-platform, high-performance framework for building modern, cloud-based, and internet-connected applications with .NET." },
  { name: "Django", description: "A high-level Python web framework that encourages rapid development and clean, pragmatic design, focusing on automating as much as possible." },
  { name: "Django ORM", description: "The Object-Relational Mapping (ORM) system included in the Django web framework, allowing developers to interact with databases using Python models and queries." },
  { name: "Express.js", description: "A fast, unopinionated, and minimalist web framework for Node.js that simplifies the process of building robust and scalable server-side applications." },
  { name: "Express-GraphQL", description: "A middleware for Express.js that simplifies the integration of GraphQL with Express, making it easy to create a GraphQL API endpoint in a Node.js application." },
  { name: "FastAPI", description: "A modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints." },
  { name: "Feathers.js", description: "A web framework for building real-time applications with JavaScript or TypeScript, providing a set of tools and patterns for building scalable and maintainable server-side applications." },
  { name: "Firebase", description: "A comprehensive platform provided by Google for building web and mobile applications, offering features such as real-time database, authentication, and hosting." },
  { name: "Firebase Realtime Database", description: "A NoSQL cloud database provided by Google, designed to store and sync data in real-time across multiple clients." },
  { name: "Flyway", description: "An open-source database migration tool that simplifies the process of versioning and migrating relational databases, ensuring consistent and reproducible database changes." },
  { name: "Flask", description: "A lightweight Python web framework that is easy to use and extensible, making it suitable for building small to medium-sized web applications." },
  { name: "Flask-SQLAlchemy", description: "An extension for Flask that adds support for SQLAlchemy, simplifying the integration of a relational database with Flask applications." },
  { name: "Gatsby", description: "A React-based framework for building fast and optimized websites and applications with a focus on performance and SEO." },
  { name: "GraphQL", description: "A query language for APIs and a runtime for executing those queries with existing data. It provides a more efficient and powerful alternative to REST APIs." },
  { name: "GraphQL Yoga", description: "A fully-featured GraphQL server based on Express.js and Apollo Server, providing a simple way to set up a GraphQL API with real-time subscriptions." },
  { name: "Hasura", description: "An open-source engine that connects to your databases and microservices, instantly giving you a production-ready GraphQL API." },
  { name: "Hasura Cloud", description: "A fully managed, cloud-based platform for Hasura, offering features like automatic scaling, data backups, and security features for GraphQL APIs." },
  { name: "Hibernate", description: "A widely used Java framework for object-relational mapping and database management, simplifying the process of interacting with relational databases." },
  { name: "Koa.js", description: "A next-generation web framework for Node.js, designed by the team behind Express, with a focus on smaller, more expressive, and more robust code." },
  { name: "Laravel", description: "A PHP web framework that provides an elegant syntax, tools for tasks such as routing and templating, and a set of conventions for building maintainable and scalable applications." },
  { name: "Material-UI", description: "A React UI framework that implements Google's Material Design to create visually appealing and consistent user interfaces." },
  { name: "Materialize CSS", description: "A CSS framework based on Material Design that provides ready-to-use components for building modern web interfaces." },
  { name: "Mongoose", description: "An Object Data Modeling (ODM) library for MongoDB and Node.js, providing a straightforward way to work with MongoDB through a simple and expressive API." },
  { name: "MongoDB", description: "A NoSQL document database that provides high performance, high availability, and easy scalability for building data-intensive applications." },
  { name: "MySQL", description: "An open-source relational database management system that is widely used for building scalable and reliable data-driven applications." },
  { name: "NestJS", description: "A progressive Node.js framework for building efficient, scalable, and server-side applications, leveraging TypeScript and adopting a modular architecture." },
  { name: "Next.js", description: "A React framework that enables functionality such as server-side rendering and generating static websites for React-based web applications." },
  { name: "Nexus", description: "A declarative, code-first approach to GraphQL schema construction for TypeScript and JavaScript, providing a powerful and type-safe way to define GraphQL APIs." },
  { name: "Onsen UI", description: "A framework-agnostic UI library and components for building mobile and desktop web applications using HTML, CSS, and JavaScript." },
  { name: "Postgraphile", description: "An automatic GraphQL API generator for PostgreSQL databases, making it easy to create a GraphQL API by introspecting the database schema." },
  { name: "PostgreSQL", description: "An open-source relational database system known for its reliability, extensibility, and support for advanced data types." },
  { name: "Prisma", description: "A modern database toolkit that simplifies database access and management, offering type-safe database queries and automatic schema migrations." },
  { name: "Prisma Client", description: "A type-safe database client auto-generated based on the Prisma schema, providing a modern and efficient way to interact with databases in TypeScript or JavaScript." },
  { name: "Prisma Migrate", description: "A database schema migration tool that works seamlessly with Prisma, providing a structured and efficient way to manage database schema changes." },
  { name: "Prisma Studio", description: "A visual editor for Prisma, allowing developers to explore and interact with their database data in a user-friendly and intuitive interface." },
  { name: "Quasar Framework", description: "A Vue.js framework for building high-performance, responsive, and multi-platform applications." },
  { name: "Redux", description: "A state management library for JavaScript applications, often used with React to manage the state of the application in a predictable way." },
  { name: "Ruby on Rails", description: "A full-stack web application framework written in Ruby that follows the convention-over-configuration and don't repeat yourself (DRY) principles." },
  { name: "Sequelize", description: "A promise-based Node.js ORM for PostgreSQL, MySQL, MariaDB, SQLite, and Microsoft SQL Server, providing a simple and powerful way to interact with databases." },
  { name: "Socket.IO", description: "A library for real-time web applications, enabling bidirectional communication between clients and servers through WebSockets and other transport protocols." },
  { name: "Spring Boot", description: "An extension of the Spring framework that simplifies the process of building production-ready applications with Java, providing a convention-over-configuration approach." },
  { name: "Supabase", description: "An open-source alternative to Firebase, providing a set of tools and services for building scalable and real-time web applications with PostgreSQL as the database." },
  { name: "TypeORM", description: "An Object-Relational Mapping (ORM) library for TypeScript and JavaScript, supporting multiple database systems and providing a powerful set of features for data manipulation." },
  { name: "Vue.js", description: "A progressive JavaScript framework for building user interfaces, designed to be incrementally adoptable and easily integratable into other projects." }
]

const dbs = [
  { name: "Active Record", description: "A pattern used in the Ruby on Rails framework that connects objects to relational database tables, simplifying database interactions and providing a convenient API for data manipulation." },
  { name: "Amazon DynamoDB", description: "A fully managed NoSQL database service provided by Amazon Web Services (AWS), offering low-latency and seamless scalability for applications with any scale of traffic." },
  { name: "Apollo Server", description: "A community-driven, open-source GraphQL server that works with any GraphQL schema, providing features like real-time updates, caching, and data manipulation." },
  { name: "ArangoDB", description: "A multi-model NoSQL database that supports key-value, document, and graph data models, providing flexibility for diverse data storage needs." },
  { name: "Cassandra", description: "A highly scalable and distributed NoSQL database designed to handle large amounts of data across multiple commodity servers without a single point of failure." },
  { name: "CockroachDB", description: "A distributed SQL database that ensures consistency and availability, offering horizontal scalability and strong ACID transactions." },
  { name: "CouchDB", description: "A distributed NoSQL database that uses a document-oriented approach, providing a scalable and fault-tolerant solution for data storage." },
  { name: "Django ORM", description: "The Object-Relational Mapping (ORM) system included in the Django web framework, allowing developers to interact with databases using Python models and queries." },
  { name: "Elasticsearch", description: "A distributed search and analytics engine that provides real-time search capabilities, supporting large-scale data processing and analysis." },
  { name: "Firebase", description: "A NoSQL cloud database provided by Google, designed to store and sync data in real-time across multiple clients." },
  { name: "Flyway", description: "An open-source database migration tool that simplifies the process of versioning and migrating relational databases, ensuring consistent and reproducible database changes." },
  { name: "Flask", description: "An extension for Flask that adds support for SQLAlchemy, simplifying the integration of a relational database with Flask applications." },
  { name: "GraphQL", description: "A query language for APIs and a runtime for executing those queries with existing data. It provides a more efficient and powerful alternative to REST APIs." },
  { name: "Hasura", description: "An open-source engine that connects to your databases and microservices, instantly giving you a production-ready GraphQL API." },
  { name: "Hibernate", description: "A widely used Java framework for object-relational mapping and database management, simplifying the process of interacting with relational databases." },
  { name: "Mongoose", description: "An Object Data Modeling (ODM) library for MongoDB and Node.js, providing a straightforward way to work with MongoDB through a simple and expressive API." },
  { name: "MongoDB", description: "A NoSQL document database that provides high performance, high availability, and easy scalability for building data-intensive applications." },
  { name: "MySQL", description: "An open-source relational database management system that is widely used for building scalable and reliable data-driven applications." },
  { name: "Neo4j", description: "A graph database that allows developers to model, query, and analyze complex relationships in data, making it suitable for applications with interconnected data." },
  { name: "Prisma", description: "A modern database toolkit that simplifies database access and management, offering type-safe database queries and automatic schema migrations." },
  { name: "Prisma Client", description: "A type-safe database client auto-generated based on the Prisma schema, providing a modern and efficient way to interact with databases in TypeScript or JavaScript." },
  { name: "Prisma Migrate", description: "A database schema migration tool that works seamlessly with Prisma, providing a structured and efficient way to manage database schema changes." },
  { name: "Redis", description: "An in-memory data structure store used as a database, cache, and message broker, providing high performance and support for various data structures." },
  { name: "RethinkDB", description: "A real-time NoSQL database designed for building scalable and responsive applications with a focus on simplicity and ease of use." },
  { name: "Sequelize", description: "A promise-based Node.js ORM for PostgreSQL, MySQL, MariaDB, SQLite, and Microsoft SQL Server, providing a simple and powerful way to interact with databases." },
  { name: "SQLite", description: "A self-contained, serverless, and zero-configuration relational database engine, suitable for embedded systems and lightweight web applications." },
  { name: "TypeORM", description: "An Object-Relational Mapping (ORM) library for TypeScript and JavaScript, supporting multiple database systems and providing a powerful set of features for data manipulation." },
]

const testing = [
  { name: "Appium", description: "An open-source, cross-platform mobile application automation tool to test native, hybrid, and mobile web apps." },
  { name: "Cucumber", description: "An open-source tool for behavior-driven development (BDD) that allows tests to be written in natural language." },
  { name: "Cypress", description: "A JavaScript end-to-end testing framework for web applications, providing fast, reliable, and easy-to-write tests." },
  { name: "Detox", description: "An end-to-end testing library for React Native applications, ensuring the quality and reliability of mobile apps." },
  { name: "Gauge", description: "A cross-platform test automation tool that supports the creation and execution of executable specifications." },
  { name: "Jasmine", description: "A behavior-driven development (BDD) framework for testing JavaScript code, commonly used for unit testing." },
  { name: "Jest", description: "A JavaScript testing framework with a focus on simplicity and speed, commonly used for unit testing React applications." },
  { name: "JUnit", description: "A widely used testing framework for Java that provides annotations for writing and running tests." },
  { name: "Katalon Studio", description: "A comprehensive test automation solution for web and mobile applications, supporting both scriptless and script-based testing." },
  { name: "Mocha", description: "A flexible JavaScript test framework for Node.js and the browser, offering support for various test styles." },
  { name: "Nightwatch.js", description: "An automated testing framework for web applications and websites, using Selenium WebDriver and Node.js." },
  { name: "Playwright", description: "A Node library for automating browsers, supporting cross-browser web automation and browser context management." },
  { name: "Puppeteer", description: "A headless browser testing library for Node.js, providing a high-level API to control headless Chrome or Chromium browsers." },
  { name: "Pytest", description: "A Python testing framework that allows for simple unit tests as well as complex functional testing." },
  { name: "Robot Framework", description: "An open-source test automation framework for acceptance testing and acceptance test-driven development (ATDD)." },
  { name: "Selenium", description: "A widely used framework for web browser automation, supporting various programming languages." },
  { name: "SikuliX", description: "An open-source tool that combines visual recognition with scripting to automate graphical user interfaces (GUIs)." },
  { name: "SpecFlow", description: "An open-source framework for behavior-driven development (BDD) in .NET projects, supporting writing tests in Gherkin language." },
  { name: "Taurus", description: "An open-source automation testing tool that supports various protocols and integrates with popular testing frameworks." },
  { name: "TestNG", description: "A testing framework for the Java programming language inspired by JUnit and NUnit, supporting parallel execution and data-driven testing." },
  { name: "WebDriverIO", description: "A JavaScript end-to-end testing framework for web applications, providing a variety of built-in commands and features." },
  { name: "XCTest", description: "A testing framework for Swift and Objective-C projects, commonly used for iOS and macOS application testing." },
]

const names = [
  "Super Mega Ultra Webinator",
  "Quantum Flux Mastermind",
  "Hyper Galactic Code Vortex",
  "Epic Nebula Craft",
  "Xtreme Velocity Code Fiesta",
  "Infinite Rainbow Sparkle Magic",
  "Majestic Unicorn Dreamweaver",
  "Galactic Zapinator 3000",
  "Hyper Drive Quantum Weaver",
  "Ultra Mega Giga Awesome Frame Blitz",
  "Cosmic Laser Blade Forge",
  "Supersonic Rainbow Glitterizer",
  "Quantum Hologram Sparkle Craft",
  "Nebula Infinity Whiz Bang",
  "Turbo Hyper Nova Star Engine",
  "Ultimate Galaxy Web Mystic",
  "Epic Sonic Space Blast Framework",
  "Ludicrous Speed Funky Town",
  "Interstellar Zig Zag Webinator",
  "Neon Nebula Universe Jamboree",
  "Fantastic Warp Drive Web Craft",
  "Dimensional Pixel Magic",
  "Quantum Quantifier Quasar",
  "Giga Gyro Glow Matrix",
  "Cosmic Thunder Blast Engine",
  "Astro Sonic Hyper Wave",
  "Mega Flare Dream Dazzle",
  "Nebula Rift Pulse Blitz",
  "Quantum Fusion Flare Code",
  "Hyper Nova Neon Blitz",
  "Galactic Cyclone Sparkle",
  "Epic Quantum Surge Craft",
  "Ludicrous Laser Blast Blitz",
  "Ultrasonic Neon Wave Master",
  "Xtreme Astro Velocity Forge",
  "Supernova Sonic Jamboree",
  "Epic Quantum Storm Craft",
  "Quantum Glow Pulse Master",
  "Sonic Giga Warp Blitz",
  "Cosmic Flux Glitter Forge",
  "Mega Hyper Nova Sparkle",
  "Astro Blast Quantum Jazz",
  "Quantum Flare Wave Rift",
  "Giga Warp Blaze Burst",
  "Hyper Quantum Surge Craft",
  "Astro Flare Sonic Rift",
  "Quantum Glow Storm Master",
  "Mega Hyper Nova Sonic Jazz",
  "Ultrasonic Neon Wave Forge",
  "Cosmic Pixel Blitz Craft",
  "Epic Quantum Surge Blast",
  "Quantum Giga Warp Wave",
  "Astro Flare Sonic Matrix",
  "Hyper Quantum Surge Rift",
  "Ultrasonic Neon Blaze Jazz",
]

const platformWords = [
  "Architecture",
  "Bundle",
  "Framework",
  "Platform",
  "Scaffold",
  "System"
]

const fe = frontEnds[randInt(0, frontEnds.length - 1)]
const be = backEnds[randInt(0, backEnds.length - 1)]
const db = dbs[randInt(0, dbs.length - 1)]
const test = testing[randInt(0, testing.length - 1)]

const longName = names[randInt(0, names.length - 1)]
const longNameParts = longName.split(' ')
const baseName = longNameParts.slice(0, randInt(1, longNameParts.length - 1)).join(' ')
const platform = platformWords[randInt(0, platformWords.length - 1)]
const stackName = `${baseName} ${platform}`

function restyleByWindowWidth() {
  if (window.innerWidth < 600) {
    const body = document.getElementsByTagName('body')[0]
    body.style.backgroundColor = bgColor
    body.style.margin = "0px"
    body.style.textAlign = "center"

    const title = document.getElementById('title')
    title.style.color = fgColor
    title.style.fontFamily = fonts[randInt(0, fonts.length - 1)]
    title.style.fontSize = "2em"
    title.style.marginBottom = "0.5em"
    title.style.marginTop = "1em"
    title.innerHTML = `The ${stackName}`

    const subtitle = document.getElementById('subtitle')
    subtitle.style.backgroundColor = fgColor
    subtitle.style.border = `4px solid white`
    subtitle.style.borderRadius = '1em'
    subtitle.style.color = bgColor
    subtitle.style.display = 'inline-block'
    subtitle.style.fontFamily = fonts[randInt(0, fonts.length - 1)]
    subtitle.style.padding = '1em'
    subtitle.innerHTML = `${fe.name}<br />${be.name}<br />${db.name}<br />${test.name}`

    const stab = document.getElementById('stab')
    stab.style.color = fgColor
    stab.style.fontFamily = fonts[randInt(0, fonts.length - 1)]
    stab.style.fontSize = "0.9em"
    stab.style.padding = "0 10%"
    stab.style.lineHeight = "1.75em"
    stab.innerHTML = `Welcome to ${baseName}, the next step in the evolution of the web.  Simplify and enhance your development and delivery experience to boost efficiency so you can ship better code, faster.`

    const why = document.getElementById('why')
    why.style.backgroundColor = fgColor
    why.style.borderRadius = '1em'
    why.style.boxSizing = "border-box"
    why.style.color = bgColor
    why.style.display = 'inline-block'
    why.style.fontFamily = fonts[randInt(0, fonts.length - 1)]
    why.style.padding = "0.5em"
    why.style.width = "90vw"
    why.innerHTML = `Why ${baseName}?`

    const desc = document.getElementById('desc')
    desc.style.backgroundColor = 'black'
    desc.style.border = `4px solid ${fgColor}`
    desc.style.color = fgColor
    desc.style.fontFamily = fonts[randInt(0, fonts.length - 1)]
    desc.style.fontSize = "0.9em"
    desc.style.margin = "1em auto"
    desc.style.padding = "0.5em"
    desc.style.width = "75%"
    desc.innerHTML = `The ${stackName} is the most powerful combination of tools in your modern web dev arsenal.<br /><br /><strong>${fe.name}</strong> - ${fe.description}<br /><br /><strong>${be.name}</strong> - ${be.description}<br /><br /><strong>${db.name}</strong> - ${db.description}<br /><br /><strong>${test.name}</strong> - ${test.description}`

    const reality = document.getElementById('reality')
    reality.style.backgroundColor = "black"
    reality.style.borderTop = `4px solid ${fgColor}`
    reality.style.color = fgColor
    reality.style.margin = "0px"
    reality.style.marginTop = "2em"
    reality.style.padding = "0.5em 2em 1.5em"
    reality.style.width = "100vw"
  } else {
    const body = document.getElementsByTagName('body')[0]
    body.style.backgroundColor = bgColor
    body.style.margin = "0px"
    body.style.textAlign = "center"
    
    const title = document.getElementById('title')
    title.style.color = fgColor
    title.style.fontFamily = fonts[randInt(0, fonts.length - 1)]
    title.style.fontSize = "4em"
    title.style.marginBottom = "0.5em"
    title.style.marginTop = "1em"
    title.innerHTML = stackName
    
    const subtitle = document.getElementById('subtitle')
    subtitle.style.backgroundColor = fgColor
    subtitle.style.border = `4px solid white`
    subtitle.style.borderRadius = '1em'
    subtitle.style.color = bgColor
    subtitle.style.display = 'inline-block'
    subtitle.style.fontFamily = fonts[randInt(0, fonts.length - 1)]
    subtitle.style.padding = '1em'
    subtitle.innerHTML = `${fe.name} - ${be.name} - ${db.name} - ${test.name}`
    
    const stab = document.getElementById('stab')
    stab.style.color = fgColor
    stab.style.fontFamily = fonts[randInt(0, fonts.length - 1)]
    stab.style.fontSize = "1.5em"
    stab.style.padding = "0 25%"
    stab.style.lineHeight = "1.75em"
    stab.innerHTML = `Welcome to ${baseName}, the next step in the evolution of the web.  Simplify and enhance your development and delivery experience to boost efficiency so you can ship better code, faster.`
    
    const why = document.getElementById('why')
    why.style.backgroundColor = fgColor
    why.style.borderRadius = '1em'
    why.style.boxSizing = 'inherit'
    why.style.color = bgColor
    why.style.display = 'inline-block'
    why.style.fontFamily = fonts[randInt(0, fonts.length - 1)]
    why.style.padding = '1em 2em'
    why.style.width = 'inherit'
    why.innerHTML = `Why ${baseName}?`

    const desc = document.getElementById('desc')
    desc.style.backgroundColor = 'black'
    desc.style.border = `4px solid ${fgColor}`
    desc.style.color = fgColor
    desc.style.fontFamily = fonts[randInt(0, fonts.length - 1)]
    desc.style.fontSize = "1.5em"
    desc.style.margin = "1em auto"
    desc.style.padding = "1.5em"
    desc.style.width = "75%"
    desc.innerHTML = `The ${stackName} is the most powerful combination of tools in your modern web dev arsenal.<br /><br /><strong>${fe.name}</strong> - ${fe.description}<br /><br /><strong>${be.name}</strong> - ${be.description}<br /><br /><strong>${db.name}</strong> - ${db.description}<br /><br /><strong>${test.name}</strong> - ${test.description}`

    const reality = document.getElementById('reality')
    reality.style.backgroundColor = "black"
    reality.style.boxSizing = "border-box"
    reality.style.borderTop = `4px solid ${fgColor}`
    reality.style.color = fgColor
    reality.style.margin = "0px"
    reality.style.marginTop = "2em"
    reality.style.padding = "0.5em 2em 1.5em"
    reality.style.width = "100vw"
  }
}

// Add an event listener for window resize
window.addEventListener('resize', function () {
  restyleByWindowWidth()
});
window.addEventListener('load', function() {
  restyleByWindowWidth()
})
