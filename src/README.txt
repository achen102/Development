README: 

For my list interface project, I have four main classes: Index, App, FilteredList, and DisplayList. 
-Index starts the app by using the imported ReactDOM to render the App component. 

-The App class contains both a productList and a sortedproductList, and passes one of them to the FilteredList component depending on the sorted state. The App component
also contains the sorting selector. When the sorting selector is set to the "Most Recent" setting, the sorted state returns true, the sortedproductList gets sorted 
by the order key, and the sortedproductList is passed into the FilteredList component. If the sorting selector is set to default "Sort", 
the sorted state returns false, and the productList is passed into the FilteredList component. 

-The FilteredList component contains the filtering method, and passes the filtered list into DisplayList. It contains two state objects:
topic, and year, as well as three functions: onSelectFilterTopic, onSelectFilterYear, and matchesFilterItems. The first two functions change
the state of the topic and year respectively to the filtering button that is selected. The matchesFilterItems function is used to check if each 
item in the productList matches both filters.

-The DisplayList component contains the aggregating methods, and maps each product from App to an html component or element for 
rendering. It also includes four state objects: aggregatedList, nameList, and topicList (all Arraylist states), as well as popup. 
The aggregatedlist updates every time the aggregator functions are called (which is when the add & remove button are clicked), 
and the each item in the aggregatedList is mapped to an html component; each item is mapped to its own card, and shows up in the "total" yellow
connection card as a symbol depending its topic (so the symbols are being aggregated). The topicList is used to check which topics are present within the aggregator,
and changes the popup state based on what is present. Lastly, the nameList is updated as items are added to the aggregatedList,
and is checked to prevent multiple of the same item to be added to the aggregatedList, as that wouldn't make sense for my interface. 

Thanks for reading :D This was my first time coding in Javascript, so it has been a hECK of a ride!!