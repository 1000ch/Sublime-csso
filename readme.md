# Sublime-csso

A plugin for [Sublime Text](https://www.sublimetext.com/) providing an interface to [CSSO](https://github.com/css/csso).

![demo](https://cloud.githubusercontent.com/assets/1800018/24616724/ec52a8fe-18cc-11e7-86ec-2eb05d04fae3.gif)

## Install

You can install via with [Package Control](https://packagecontrol.io/) and restart Sublime.

- **Install Package**: Search with `CSSO`.
- **Add Repository**: Put URL `https://github.com/1000ch/Sublime-csso`.

Also you can install this extension locally by putting symbolic link from `~/Library/Application\ Support/Sublime\ Text/Packages/` to `~/path/to/this/repo` like below.

```bash
$ ln -s ~/workspace/github.com/1000ch/Sublime-csso ~/Library/Application\ Support/Sublime\ Text/Packages/CSSO
```

### Prerequisite

[CSSO](https://github.com/css/csso) requires Node.js as runtime. If you don't have Node.js, I recommend you to install Node.js using version managers like the followings.

- Use [nodenv/nodenv](https://github.com/nodenv/nodenv)
- Use [hokaccha/nodebrew](https://github.com/hokaccha/nodebrew)

## Usage

In a CSS file, open the Command Palette (<kbd>Cmd</kbd> <kbd>Shift</kbd> <kbd>P</kbd>) and choose **Minify CSS**.

## Config

If you want to disable `restructure` option, you can configure from Preferences → Package Settings → Csso → Settings - User.

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)
