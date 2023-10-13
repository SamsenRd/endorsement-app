# what you've done well
- The app works very well, and the endorsements are rendered and kept in firebase. Great job!
- HTML: you have included important tags: doctype, title, viewport meta, body, ul li, an alt attribute on the image. Good stuff!
- JS: 
 good use of camelCase
 good naming conventions for your variables and functions
 firebase handled very well
 good separation of converns and use of small, independant functions (like clearInputField())

# to answer your question: 
My main issue was with the 'input text' section. Specifically with the placeholder text not matching with the size of the real time typing text. Thanks
=> change your endorsement-publish class: the align-center is messing things up
 .endorsement-publish {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    width: 80%;
    margin: 0 auto;
 
 Then, we reduce the padding on the button to fix the alignment problem caused by the high value
 Then, we apply the same technique on the endorsement container
 But you will see that the ul li are still not at the right size. Can you fogure out why? (answer down below)


# what could be improved
[x] main is to tiny!
[x] <section class="main"> should be <main>
[x] <input> should be a <textarea></textarea> which allows the text to break to the next line by default
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
[x] fix the cursor in input
[x] use classes instead of IDs to style your elements. There shouldn't be any # in the CSS file, unless you want to give high specificity (you'll learn this concept in M6)
[x] I didn't realize there was a delete function until I read your JS code. You might want to add some design elements to warn your user the message is about to be deleted. (for a basic example, a redbackground on hover)
[x] I'm not sure you've learned about <form> and the "submit" event yet?























[] answer: the ul li are still not at the right size because they have margin left and right that mess up the margin: 0 auto on the parent.