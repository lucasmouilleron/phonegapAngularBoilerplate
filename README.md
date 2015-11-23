phonegapBoileplate
==================

An basic phonegap boilerplate.

![Screenshot](http://grabs.lucasmouilleron.com/Screen%20Shot%202015-11-23%20at%2015.09.09.png)

Install requirements
--------------------
- Install NodeJS : http://nodejs.org/download
- `sudo npm install -g phonegap`
- `sudo npm install grunt -g`

Install
-------
- iOS : 
    - `sudo npm install -g ios-deploy && sudo npm install -g ios-sim`
    - test : `phonegap run ios`
- Android : 
    - Download the Android SDK : https://developer.android.com/sdk
    - Edit path : 
        - `export ANDROID_HOME=$HOME/Library/Android`
        - `export PATH=$PATH:$ANDROID_HOME/tools`
    - Launch Android SDK manager : `android`
    - Install packages (SDK + images)
    - Tools -> Manage AVDs and create a device
    - test : `phonegap run android`
- Plugins are installed from `_build/config.json->installCommands`
- `cd _build && npm install && grunt install`

Run
---
- iOS : 
    - `cd _build && grunt run:ios`
    - Edit `_build/config.json->phonegapiOSTarget` to change simulated device
    - Valid options are :
        - iPhone (Retina 3.5-inch)
        - iPhone (Retina 4-inch)
        - iPhone
        - iPad
        - iPad (Retina)
- Android : 
    - `cd _build && grunt run:android`
    - edit `_build/config.json->phonegapAndroidTarget` to change simulated device
    - Valid options are AVD name configured with the Android SDK mangaer : `android`
    - Tested only API 21 - Google Nexus

Doc
---
- Config.xml :
    - http://docs.build.phonegap.com/en_US/2.9.0/configuring_basics.md.html#The%20Basics
    - http://docs.build.phonegap.com/en_US/2.9.0/configuring_preferences.md.html
- Plugins : 
    - http://docs.phonegap.com/en/3.5.0/cordova_plugins_pluginapis.md.html#Plugin%20APIs
- Miscs : 
    - scaffholder : `phonegap create . com.lucasmouilleron.phonegapAngularBoilerplate phonegapAngularBoilerplate`

Todo
----
- More plugins (camera, etc.)
- build.phonegap.com