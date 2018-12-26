### About

This is a simple Cordova app based on [backbone.js](http://backbonejs.org/) and [Onsen UI V2](https://onsen.io/). The app displays fictitious "company profiles", whose data is provided by this [JSON file](./www/data/company_data.json).

The fake company data was generated courtesy of **joke2k**'s [Faker](https://github.com/joke2k/faker) package. [This](./www/data/faker_gen.py) is the python script that I wrote to generate this data.

I used the [Bootstrapping](http://backbonejs.org/#FAQ-bootstrap) approach to have the data available when rendering the page.

When you run the app, it displays the first company profile, and you can go to the next one on `leftswipe`. Similarly, you can display the previous one on `rightswipe`. Well, at least this is what is supposed to happen, but :disappointed: ... see what's actually happening below

<!-- https://gifs.com/gif/cordova-backbone-app-multiple-rendering-issues-rRQYj6 -->
<!-- https://www.youtube.com/watch?v=1pKQNJ7rhh8 -->

[![Cordova Backbone App Demo -- Multiple Rendering Problem](https://j.gifs.com/rRQYj6.gif)](https://www.youtube.com/watch?v=1pKQNJ7rhh8)


### Initial Setup

```bash
git clone https://github.com/engineervix/cordova-onsenui-backbone-test
cd cordova-onsenui-backbone-test

npm install

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


### The Main Problem is ...

- I Need help in fixing the problem of the app rendering twice, which results in "skipping" one item when swiping, as seen in the video above.
