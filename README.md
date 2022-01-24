# DungeonsAndDiscord
Hope Parnell
Matthew Mires

A Discord Bot With Dice Rolling Capabilities And A Randomized Hero Creator

## Usage
Add the bot to your server [HERE](https://discord.com/api/oauth2/authorize?client_id=933763649653342231&permissions=442351713905&scope=bot)
OR temporarily join our testing server [HERE]( https://discord.gg/efjfhbwh7U)

Once the bot is in your server, send a message `&<cmd>` where `<cmd>` is the command you want the bot to run

## Commands
Here is a list of currently implemented commands. \[] indicates optional input
### cmd \[str\]
tells/changes the command prompt
If a string is specified, the string can now be used in place of '&' for commands
The bot replies with the currently set string.
* Currently not server exclusive, so string will be changed for all servers
** Will use everything up to the next space for the string
*** & will always work for commands
#### Examples:
```
&cmd
**Bot reply:** Command promt is '&'
&cmd !
**Bot reply:** Command promt is now '!'
&cmd !*
**Bot reply:** Command promt is now '!*'
&cmd i !
**Bot reply:** Command promt is now 'i'
```
### help \[command\]
Private Messages the help page for a specific command. Without a command send the general help page.
### hero
randomly generates a basic character
#### Example:
```&hero
**Bot reply:**
Your Adventerer
**Class**  **Race**     **Background**
Wizard Half-Elf Charlatan
**Stats**
Strength: 9
Dexterity: 17
Constitution: 15
Intelligence: 18
Wisdom: 14
Charisma: 13
```
**Notes**
Feature uses basic 5e rules from the PHB
Skills and other proficiencies will have to be chosen by the player
Randomly rolled stats are assigned based on the randomly chosen class
### lol
Replies with "You're so funny!"
### roll \[dice | number] \[+|-] \[dice | number] \[+|-] \[dice | number]...
rolls any comination of dice and modifiers
Rolls the specified dice and adds or subtracts any modifiers specified
Cannot roll more than 10million dice or dice with more than 10million sides
This was implemented to avoid the bot crashing
Dice rolled should be in XdY format and neither X or Y can be negative
If no input is given will roll 1d20
#### Examples:
```&roll 1d20
**Bot reply:** Your total is 16
Rolls: 16

&roll 3d6 + 4
**Bot reply:** Your total is 20
Rolls: 4, 6, 6

&roll 4d6 + 3d4 + 2
**Bot reply:** Your total is 26
Rolls: 3, 3, 5, 6, 1, 2, 4

&roll 2d4 + 7 + 1d6
**Bot reply:** Your total is 13
Rolls: 2, 3, 1
&roll 2d8 + 7 - 2d4 + 6 - 2
**Bot reply:** Your total is 14
Rolls: 7, 1, 4, 1```
