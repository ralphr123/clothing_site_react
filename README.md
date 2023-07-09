This is the frontend of a personal project where I tested and improve my skills in full-stack development. I used React, TypeScript, Node.js, and MongoDB. I also used Adobe Photoshop to edit and format some of the images and diagrams. 
It took around a month to complete. I deployed it using netlify: https://sleepy-euclid-452e08.netlify.app/home

Backend: https://github.com/ralphr123/clothing_site_api

I've learned a lot over the course of the project and over the ~~2~~ **4** years since then. If I were to redo this project today, here's a few things I would change:
* Use ~~a state manager like Redux~~ **browser storage** to manage site-wide data like the cart, rather than relying on the React state and prop-tunneling.
* Keep complexity and logic within lower level children. This reduces the need to repeat logic, and keeps higher level components simple and focused. 
* ~~Utilize in component styles (like React JSS) for component specific styling, and keep styles.css for more general rules~~. **Use anything sensible for styling (S/CSS modules, component library, tailwind, etc) that isn't one giant css file.** This would clean up the app's styling, making it much easier to maintain the UI.
* Add unit tests for important and reused components, like the cart and item selector modal **(this would be more important for a non-demo production store)**
