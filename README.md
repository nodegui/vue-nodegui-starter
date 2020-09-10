vue-nodegui-starter

Clone and run for a quick way to see Vue NodeGui in action.
![demo image](/assets/demo.png)

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com/)) installed on your computer. From your command line:

```shell
# Clone this repository
git clone https://github.com/nodegui/vue-nodegui-starter
# Install CMake
brew install cmake
# Go into the repository
cd vue-nodegui-starter
# Install dependencies
npm install
# Run the app
npm run dev
```

## Installation & Resources for learning Vue NodeGui

[Documentation](https://vue.nodegui.org/) - all of Vue NodeGui's documentation.
[NodeGui](https://nodegui.org/) - all of NodeGui's documentation.



## Packaging app as a distributable

In order to distribute your finished app, you can use [@nodegui/packer](https://github.com/nodegui/packer)

### Step 1: (_**Run this command only once**_)

```sh
npx nodegui-packer --init MyAppName
```

This will produce the deploy directory containing the template. You can modify this to suite your needs. Like add icons, change the name, description and add other native features or dependencies. Make sure you commit this directory.

### Step 2: (_**Run this command every time you want to build a new distributable**_)

Next you can run the pack command:

```sh
npm run build
```

This will produce the js bundle along with assets inside the `./dist` directory

```sh
npx nodegui-packer --pack ./dist
```

This will build the distributable using @nodegui/packer based on your template. The output of the command is found under the build directory. You should gitignore the build directory.

More details about packer can be found here: https://github.com/nodegui/packer

## License

MIT