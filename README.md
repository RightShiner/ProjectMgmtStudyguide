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

On the top-level parent component (App), I create the state, with values of 'data_groups' which (during dev) was populated with hard-coded array of objects with key-values of proces_group, knowledge_area, and data. On this same high-level (App component), I then created setter functions for updating the state values related to those two values. Then, those two functions were passed as props to child component, FilterBar, so they could be invoked by input form.

Dropdown menus were added, one for knowledge area and one for process group. Selecting one of these updates the App component state, with that being passed to DataTable.

Next step was setting up Firebase db, doing config, and setting up Redux store. For the latter, for me I like taking it one step at a time- testing to make sure that action creators are working by hard-coding dispatches from the store, etc. If nothing breaks, then add more complexity.

The biggest challenges that I found were twofold:
1. Having a syncronicity between Firebase DB structures and the app structure within Redux
2. The work in progress right now is that I have set as state filtered values as selected by user, and I have successfully been able to loop through the data objects (in array) but the linking of the filtered state values with the rendered value is I/P


The Result

