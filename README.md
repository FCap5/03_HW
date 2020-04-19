# 03_HW

## The assignment
This one was tricky. It involved using HTML and CSS, but it was mostly a javascript exercise. 
The goal was to create a random password generator that would randomly create a password that fit the parameters provided. The parameter were a choice of numbers, special characters, uppercase letters, and lower case letters. It also needed to be the length provided by the user. 

## A Bumpy Beginning
Getting started on this was a doozy. Since we were learning the materials we needed to complete this assignment during the course of the week, it was hard for me to conceptualize the necessary variables I would need ultimately to complete the exercise. This meant that it was difficult for me to pseudo-code and map the whole project out.

So I started with the things I was soldid on, the html, the css, and the prompts and confirms to set the parameters. The HTML and CSS were pretty straightforward. Make the page look like the other page. Check.

Getting the ball rolling helped build my confidence to wade into the things I was less comfortable with. 

I next realized that I was going to need 4 arrays, one with numbers, one with upper case letters, and one with special characters. So, I Googled it and someone else had done the leg work creating them, which I gratefully copied and pasted. 

## Wading In
I had circled the meat of the project, trying to pick off the easy scraps. But it was time to get down and dirty with the password generator. 

I knew that I needed to create an array that I could add the selected parameters to. So, if the user wanted to add numbers, I would need to add all the numbers to an array. If they then selected uppercase letters, I would need to add uppercase letters to that same array. 

Through some intense Googleing, I came accros the concat function (which we then learned about the next day in class). I used that with if statements to go through each option and add the selected paramters to the array. I would use the random generator to select from this array for the final password. 

I now had an array that had all the possible variables that fit the paramters established by the user. I created a for loop to loop through the array I had just concatinated and select characters from it randomly by their index. I then used the push function to add them to the end of a new array one by one. 

I now had an array that fit all the parameters. However, if I displayed an array, it wouldn't work because it would include commas. So, I used the .join function, and set the argument to (""). This created a string from the array and removed the default setting of putting a comma between each character. I now had a randomly generated password in string form. All I needed to do was set that string as the text content for the text variable on my HTML. 

I saved everything and ran it. AND IT WORKED! 

## Oh for F***'s sake, I thought I was done!
I pushed the button again to double check. . . and it just added the new password onto the string. 

I needed to clear the results from the last round. I did so by creating a function that just went through and set all the strings and arrays in use to blank. 

After I did that and tested it, I was finally done. 

## Lessons learned
One of things I realized is that without a clear roadmap at the beginning, I was creating a lot of variables that I didn't entirely understand the function of. The result was that I had some pretty crappy naming convenctions. I had to refractor the code and make their naming functions more applicable to their end fucntion. 

Because my thinking was a bit disparate, I also had to reorganize. While it worked before I refractored the code, the functions were not in a logical order. So I also had to fix that. 

I think the big take away was that when you come to a bump in the road, take a moment to think what else might come after that obstacle. That way your solution will not only help you concquer the challenge at hand, but also help you overcome the future challenges that will inevitably arise. 