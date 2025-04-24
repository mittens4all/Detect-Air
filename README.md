# Detect Air

This behavior pack uses scripts to detect if a player has nothing in their mainhand and assign the player a scoreboard value.
You can then run your own commands based on the player's score.

## Installing the pack:

Add the Detect Air Add-on to your behavior packs on your world. Behavior packs disable achievements, but editing the world with an NBT editor can re-enable achievements when uploading your world to a realm.

Re-enable achievements on either pc or mobile with the free NBT editor [Dovetail](https://github.com/Offroaders123/Dovetail) 

### How to use the scoreboard

You can give players who are not holding any items in their mainhand an effect, like strength. This example command would be put into a repeating command block, set to unconditional, always active in a tickingarea.

```js
effect @a[scores={detect:air=1}] strength 1 0 true
```

## Author

- [@mittens4all](https://www.github.com/mittens4all)
- [Youtube](https://www.youtube.com/@mittens4all)

```js
       _                              _     _       _ _  
      (_)  _     _                   | |   | |     | | | 
 ____  _ _| |_ _| |_ _____ ____   ___| |___| |_____| | | 
|    \| (_   _|_   _) ___ |  _ \ /___)_____  (____ | | | 
| | | | | | |_  | |_| ____| | | |___ |     | / ___ | | | 
|_|_|_|_|  \__)  \__)_____)_| |_(___/      |_\_____|\_)_)
                                                         
```