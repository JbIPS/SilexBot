## Introduction

[Wildfire Games](http://wildfiregames.com/), an international group of volunteer game developers, develops [0 A.D., a free, open-source game of ancient warfare](http://play0ad.com/).

In the game, there can be teams managed by the computer. The AI which plays these teams is called a bot, and is is a small program wrtten in [javascript](https://en.wikipedia.org/wiki/JavaScript), interpreted by the game engine. The game itself is written in C++.

## About SilexBot

SilexBot is being developped during "Dojo" sessions, organized by [Silex Labs](http://www.silexlabs.org/event/atelier-12-intelligence-artificielle-avec-0-a-d/), by members of the association.

## Play against SilexBot

* [Download and install 0ad](http://play0ad.com/)
* [download SilexBot](https://github.com/JbIPS/SilexBot)
* unzip SilexBot folder and move the content of the `bin/` folder to `~/Library/Application\ Support/0ad/mods/public/simulation/ai/silexbot/` (on MAC) or `~/.local/share/0ad/mods/public/simulation/ai/silexbot` (on Ubuntu) or `My Document\My Games\0ad\mods\public\simulation\ai\silexbot` (on Windows) - you may have to create the folders.

Then start a solo game, and choose SilexBot as AI for an opponent.

## Development

Start the game automatically on Mac

```
$ ./start_mac.sh
```

Or on Linux

```
$ ./start_linux.sh
```

Or even on windows

```
$ ./start.bat
```

Feel free to fork this repository, do your modification and then create a pull request. We'll merge them on the next scheduled dojo.

## Development status

Currently the bot send some people to cut woods.
