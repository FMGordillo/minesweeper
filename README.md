# Minesweeper Technical Test

Hey there! 👋

Welcome to our Minesweeper coding challenge. 
If you haven’t played Minesweeper before, [go give it a try first](https://g.co/kgs/aog99ao). It’s a classic!

## What’s this all about?

We want to see how you approach building a Minesweeper game in React. The main goal isn’t to finish the game or leave it in a fully working state (seriously, don’t stress about that!). Instead, we’re interested in how you think, collaborate, and solve problems. Especially together with us.

## What are we looking for?

- Pair programming & collaboration: We’ll be working together, so feel free to ask questions, bounce ideas, and suggest approaches. We value teamwork and communication over a perfect end result.
- Curiosity & initiative: Set your own objectives, explore the codebase, and don’t hesitate to use any tools (including LLMs!) to help you out.
- Adaptability: We might jump in to guide the session or ask you to try something new, just to get to know you better.
- Transparency: please, guide us through your thought process. What are you trying to do? 

## What do you get?

- A React project with some basic CSS, so you don't need to spend time bootstrapping or styling anything.
- An HTTP endpoint that generates Minesweeper boards for you. It looks like this:

```
We have these query params:
- width -> the width of the board.
- height -> the height of the board.
- mines -> the number of mines inside the board.

Example:
GET https://tech-test.dynatrace.com/api/minesweeper?width=3&height=4&mines=2

Returns: 
{
  "width": 3,
  "height": 3,
  "mines": 2,
  "board": [
    [ 0,0,0],
    [ 1,1,0],
    [-1,2,0],
    [-1,2,0],
  ]
}

Where:
-1         -> marks the place of a mine
0, 1, 2... -> the number of adjacent cells that contain bombs
```

## Where to start?

You set your own goals and objectives, but we recommend you to start small:

- Run `npm install` and `npm run dev` and see if everything works fine.
- Try to call the given endpoint and check what it returns.
- Check the `Cell` component. See how it works and what it does.

Then, we can slowly add functionality:

- Try to render a minesweeper board.
- Start reacting to clicks on the board.
- Start showing the tile contents when one is clicked.

And steadily build the game rules:

- You clicked a mine? Let's make you lose the game.
- Add a "restart game" button so we can try again.
- "Flag" mines with the right click button.
- You uncovered all non-mines? Let's make you win the game.
- You clicked on a cell with no number? Let's uncover all adjacent cells until we get to a number.

But you can always go try other things or get creative if you feel like it:

- Keeping a count of the number of wins vs the number of losses.
- Allow the user to change the settings of the board (width, height, number of mines).
- Or you can also ask us for directions at any point.

Ready? Let’s build something fun together and see if we click! 🚀
