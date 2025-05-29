# Minesweeper Technical Test

Hey there! 👋

Welcome to our Minesweeper coding challenge. 
If you haven’t played Minesweeper before, [go give it a try](https://g.co/kgs/35AmDKB)—it’s a classic!

## What’s this all about?

We want to see how you approach building a Minesweeper game in React. The main goal isn’t to finish the game (seriously, don’t stress about that!). Instead, we’re interested in how you think, collaborate, and solve problems—especially together with us.

## What are we looking for?
- Pair programming & collaboration: We’ll be working together, so feel free to ask questions, bounce ideas, and suggest approaches. We value teamwork and communication over a perfect end result.
- Curiosity & initiative: Set your own objectives, explore the codebase, and don’t hesitate to use any tools (including LLMs!) to help you out.
- Adaptability: We might jump in to guide the session or ask you to try something new, just to get to know you better.

## What do you get?
- A React project with some basic components and types, so you don't need to spend time bootstrapping anything.
- A minimal structure to follow. Please, try to stick to it as much as possible, but don’t be afraid to ask if something’s unclear.
- An endpoint that generates Minesweeper maps for you. It looks like this:

```
GET https://tech-test.dynatrace.com/api/minesweeper

With these query params:
- width -> the width of the board.
- height -> the heighr of the board.
- bombs -> the number of bombs inside the board.

Returns: a json with
- width
- height
- bombs
- board
```

## Tips
- Use LLMs and any resources you like. We encourage it!
- Focus on writing clean, understandable code and communicating your thought process.
- If you get stuck, talk it through—we’re here to help.

## Feature ideas
Here are some things you can try to implement:
- The basic gameplay: you click a bomb, you lose. You uncover all empty tiles, you win!
- A "start over" button.
- Showing the number of adjacent bombs.
- Unit tests? :)
- "Flagging" bombs with a right click button.
- Uncovering ALL adjacent empty tiles on click.
- Keeping a count of the number of wins.
- Allow the user to change the settings of the board (width, height, number of bombs).

Ready? Let’s build something fun together and see if we click! 🚀
