### About

This is a simple Cordova app based on [backbone.js](http://backbonejs.org/) and [Onsen UI V2](https://onsen.io/). The app is for testing / learning purposes and displays fictitious "company profiles", whose data is provided by this [JSON file](./www/data/company_data.json).

The fake company data was generated courtesy of **joke2k**'s [Faker](https://github.com/joke2k/faker) package. [This](./www/data/faker_gen.py) is the python script that I wrote to generate this data.

I used the [Bootstrapping](http://backbonejs.org/#FAQ-bootstrap) approach to have the data available when rendering the page.

When you run the app, it displays the first company profile, and you can go to the next one on `leftswipe`. Similarly, you can display the previous one on `rightswipe`. See what's actually happening below

<!-- https://gifs.com/gif/cordova-demo-using-backbone-js-and-onsenui-kZJ6VE -->
<!-- https://www.youtube.com/watch?v=o0STeZyRYaE -->

[![Cordova Backbone App Demo -- Multiple Rendering Problem](https://j.gifs.com/kZJ6VE.gif)](https://www.youtube.com/watch?v=o0STeZyRYaE)


### Initial Setup

```bash
git clone https://github.com/engineervix/cordova-onsenui-backbone-test
cd cordova-onsenui-backbone-test

npm install

cordova plugin add cordova-plugin-statusbar
cordova plugin add cordova-plugin-splashscreen

cordova platform add android
cordova platform add browser
```

### Run the App

```bash

# 1. on your device or emulator
cordova run android


# 1.1 if you want to see logs (console output) from your device

# 1.1.1 (optional) clear the logs
adb logcat -c

# 1.1.2 show the console output
adb logcat | grep -i "chromium:"

# 2. in the browser
cordova run browser
```
