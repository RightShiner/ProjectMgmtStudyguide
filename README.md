 Project Mgmt Studyguide
 app to help learn process groups

 #Nov 7, 2017
 ## David Eliason

Objective

This app is an exercise in building a React app the 'right way', by following the recipe suggested by the Redux team in the article "Usage With React". That, in turn, references an article by the React team in the article "Thinking In React." 

Steps Taken

First, started with a mockup, then broke the UI into a component hierarchy. With the React team's suggestion of building a non-state, non-dynamic app first, I then built out a version that used only props.

With that in place, the next step was to build a version that used state, held by the parent App compoent, which could be updated by user-inputted values in terms of which process and knowledge area of interest.

At this point, I determined that I could have a Firebase database containing all of the values used by the app, hydrate the redux store, and boom, that would be the extent as, for this version, there wouldn't be any user-added content or authentication.



The Result

