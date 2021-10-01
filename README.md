# Welcome to Introduction to ES2021 JavaScript

![DevelopIntelligence Logo](images/developintelligence-logo.png "DevelopIntelligence Logo")

###  Software developer training for enterprise organizations

DevelopIntelligence helps you onboard, upskill and reskill your tech talent with innovative software developer training.

We do this by designing and delivering learning programs customized to your technology stack, corporate culture and business objectives. Our goal is to make sure your employees know how to apply their new skills to your particular projects.

We shorten the learning curve so your software developers can contribute more quickly to mission-critical endeavors.

## Class Information Page

[https://www.t4d.io/developintelligence-javascript-10182021](https://www.t4d.io/developintelligence-javascript-10182021)

## Other Resources

The instructor will distribute additional private links during class for downloading courseware, and downloading recordings...

All code in this repository is distributed under the [MIT license](license.txt).

## How to Use the Instructor's Version

The following instructions will help students pull down the instructor's version to resume class where the instructor is.

1. Clone this repository to a new folder. Do not attempt to copy these files over your version or another version which you have cloned. Replace `FOLDER_NAME` with the name of a new folder which will be created when the content is cloned.

```
git clone https://github.com/t4d-classes/javascript_10182021.git FOLDER_NAME
```

2. Change into the folder you cloned into.

```
cd FOLDER_NAME
```

3. Change into the `js-demo` folder.

```
cd js-demo
```

4. Run the following command to install the NPM packages and start the project.

```
npm install

npm start
```

5. Open the editor of your choice and edit the files.

## Configuration and Data for the REST API part of the class

To configure the REST API, two packages will need to installed into the `js-demo` project.

1. To install those packages, run the following command from within the root `js-demo` folder of the project:

```bash
npm install json-server npm-run-all
```

2. Next, the `package.json` needs to be updated to easily run the REST API provides by the [JSON Server](https://github.com/typicode/json-server). Here is the `scripts` configuration which can be copied and pasted for the REST API. When asked by the instructor, replace the `scripts` section of the `package.json` file in the `js-demo` project with the `scripts` section below.

```json
"scripts": {
    "start": "run-p web rest",
    "web": "serve www",
    "rest": "json-server --port 5050 db.json"
},
```

3. Finally, the REST API data file needs to be created. The data file should be named `db.json` and placed in the project root folder.

**VERY IMPORTANT! The `db.json` file will be placed in the `js-demo` folder, the same folder as the `package.json` file.**

4. The JSON below should be copied and pasted into the file.

```json
{
  "colors": [
    { "id": 1, "name": "red", "hexcode": "#ff0000" },
    { "id": 2, "name": "green", "hexcode": "#00ff00" },
    { "id": 3, "name": "blue", "hexcode": "#0000ff" }
  ],
  "cars": [
    {
      "id": 1,
      "make": "Ford",
      "model": "Fusion Hybrid",
      "year": 2019,
      "color": "blue",
      "price": 45000
    },
    {
      "id": 2,
      "make": "Tesla",
      "model": "S",
      "year": 2018,
      "color": "red",
      "price": 100000
    }
  ]
}
```

5. To verify the REST API is working, run the `npm start` command and browse the following URL: [http://localhost:5050/cars](http://localhost:5050/cars).

<br><br>
All course content and teaching is provided by: [T4D.IO](https://www.t4d.io)
