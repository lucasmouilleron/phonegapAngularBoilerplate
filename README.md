phonegapAngularBoilerplate
==========================

Install requirements
--------------------
- Install NodeJS : http://nodejs.org/download
- `sudo npm install -g phonegap`
- `sudo npm install bower -g`
- `sudo npm install grunt -g`
- `sudo gem install sass`
- `sudo gem install --pre sass-css-importer`

Install
-------
- `cd _build && npm install`
- iOS : 
    - `npm install -g ios-deploy && npm install -g ios-sim`
    - test : `phonegap  ios`
- Android : 
    - Download the Android SDK : https://developer.android.com/sdk
    - Edit path : 
        - `export ANDROID_HOME=$HOME/Library/Android`
        - `export PATH=$PATH:$ANDROID_HOME/tools`
    - Launch android sdk manager : `android`
    - Install packages (SDK + images)
    - Tools -> Manage AVDs and create a device (make sure the SDK is )
    - test : `phonegap run android`

Run
---
- `cd _build && grunt run:ios`
- `cd _build && grunt run:android`

Plugins
-------
- http://docs.phonegap.com/en/3.5.0/cordova_plugins_pluginapis.md.html#Plugin%20APIs
- `phonegap plugin add org.apache.cordova.device`

Miscs
-----
- scaffholder : `phonegap create . com.lucasmouilleron.phonegapAngularBoilerplate phonegapAngularBoilerplate`

Todo
----
- More plugins (camera, contacts, etc.)
- Specifi target (iPhone5, Android version)