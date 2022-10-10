This is a personal project where I tested and improve my skills in front-end React and TypeScript development. I also used Adobe Photoshop to edit and format some of the images and diagrams. 
It took around a month to complete. I deployed it using netlify: https://sleepy-euclid-452e08.netlify.app/home

I've learned a lot over the course of the project and over the 2 years since then. If I were to redo this project today, here's a few things I would change:
* Use a state manager like Redux to manage site-wide data like the cart, rather than relying on the React state and prop-tunneling. This would reduce complexity and improve maintainability. 
* Keep complexity and logic as deep as possible within child components. This reduces the need for repeat logic, and keeps higher level components clean and focused. 
* Utilize in component styles (like React JSS) for component specific styling, and keep styles.css for more general rules. This would clean up greatly reduce the size of the styles file, making it much easier to find and update relevant rules.
* Add unit tests for important and reused components, like the cart and item selector modal
