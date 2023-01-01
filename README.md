# Hello Chi Hieu handsome

## Step 1: Install Yarn and PostgreSQL

<p>This project use <a href="https://yarnpkg.com/" target="_blank">Yarn</a> to manage package, and <a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a> to build database. Therefore, you need to install Yarn and PostgreSQL before running this project.</p>
<li>To install Yarn, please follow on <a href="https://yarnpkg.com/getting-started/install" target="_blank">this link.</a> It's not virus, do not worry hehe.</li>
<li>To install PostgreSQL, please follow on <a href="https://www.enterprisedb.com/downloads/postgres-postgresql-downloads" target="_blank">this link (let's download PostgreSQL <b>version 14.6</b>).</a></li>

</br>

## Step 2: Clone this project. Open it in VS Code and initialize a terminal.

I think you can do it. Therefore, i do not write anything here hehe. I'm so lazy.

</br>

## Step 3: Running this project

```bash
# Install all package
$ yarn install

# Run this app
$ yarn start:dev
```

</br>

## Step 4: Localhost address and API docs

<li>In the end of <b>Step 3</b>, this app will be run on domain <a href="http://localhost:3000" target="_blank">http://localhost:3000.</a> You can change starter port by changing default port in <b>src/main.ts</b> file.</li>

```bash
Line 19: await app.listen(3000);
```

<li>To access API docs, let open <a href="http://localhost:3000/api" target="_blank">http://localhost:3000/api.</a> This API doc is automatically created by <a href="https://docs.nestjs.com/openapi/introduction">Swagger.</a></li>

</br>

## Step 5: Some notes

<ul>Let's learn Docker (include core concepts such as container, image, Docker Hub and Docker compose).
<li><a href="https://www.youtube.com/watch?v=p7-TgBZ7m5s" target="_blank">Docker tutorial by Henry Web Dev</a></li>
<li>Docker tutorial <a href="https://www.youtube.com/watch?v=bxrc1otsKIM" target="_blank">part 1 (core concepts)</a>, <a href="https://www.youtube.com/watch?v=6eJM6ArdzjA" target="_blank">part 2 (Docker compose)</a> by Ong Dev</li>
<li><a href="https://www.youtube.com/watch?v=jbd71z2Gdo4" target="_blank">Docker tutorial by Tip Javascript (aka Anonystick)</a></li>
</ul>
