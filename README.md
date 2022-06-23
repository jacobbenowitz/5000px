# 5000px

<img src="app/assets/images/5000px-logo-blue-web.svg" width="220">

<br>

**Live link:** [**5000px**](https://my5000px.herokuapp.com/)

A full-stack clone of the popular photo sharing site [500px](https://500px.com/)

<br>

## Technologies Used

- **`React`** 
  - **`react-redux:`** centralized application state
  - **`redux-thunk:`** async action creators
- **`Ruby on Rails`**
  - custom API for frontend
  - user authentication
  - `bcrypt` to hash passwords
  - bootstrap `current_user` to the window
  - bootstrap `current_profile` to the window
- **`PostgreSQL`** 
  - SQL database for all Users, Profiles, Photos, Comments, Likes and Follows
- **`AWS S3`** 
  - Cloud storage for all uploaded photos and seed data
- **`webpack`**
  - JavaScript module bundler
- **`babel`**
  - JavaScript ES6 compiler
- **`react-photo-album`**
  - perfectly justifed photo grids
- **`react-content-loader`**
  - content placeholders to maintain structure of page while fetching data

<br>

## Key Features
- **View, Upload, Edit, and Delete Photos**
  - `Drag-and-drop` photo uploads developed with Vanilla JavaScript
  - Full CRUD Cycle: `Create`, `Read`, `Update` and `Destroy`
  - Photo modal with `height` and `width` methods to extract image dimensions on the fly
- **Dynamic Home Feed with Lazy Loading**
  - Lazy loaded photo galleries developed with Vanilla JavaScript to reduce GET requests to the server
  - Leveraged `scroll` event listener that will fetch next batch of photos if user scrolls to bottom of feed
  - Each user's `Home Feed` is unique with:
    - Featured Photographer cards
    - Photos from their followers
    - Collection cards (based on the category assigned to the image)
    - Disover photos (photos from user's not yet followed)
    - Current user's most recent photos
- **Likes, Follows, and Comments**
  - Provides a rich social experience for users
  - Each `photo` has a `liked by` modal with all users who liked the photo
  - Each `profile` has a `following` and `followers` modal with the respective users
- **Content Placeholders**
  - To ensure consistent page structure, content placeholders appear while the required data is being fetched 

<br>

## Lazy Loading
Delve deep into ~2 features that show off your technical abilities. Discuss both the challenges faced and your brilliant solutions.
### Challenges
1. Memory Leaks

    Instead of fetching all photos in the database at once, an array of photoIds are fetched one by one. Then I used `Promise.all` set state with the new photos after they have all been fetched. However, if a user navigates off the current page before the `Promise.all` has resolved, the component will attempt to `setState` after it has unmounted.
    
    Solution:
    
    The solution implemented was to set a class variable: `this.mounted = (boolean)` which is toggled in the `componentDidMount` and `componentWillUnmount` lifecycle methods. Then, within the callback of the `Promise.all` mentioned above, I check to ensure `this.mounted = true`, otherwise I return before `setState` with the fetched photos.

2. `scroll` Event Listener Fired To Often
   
   By default the `scroll` event listener is fired hundreds of times as the user scrolls. This was calling the method, `handleLazyLoad`, that checks if the user is at the bottom of the page too frequently. The result of this was too many photos being fetched repeatedly, causing structural issues and unexpected behavior.

   Solution:

   Trottle the the `handleLazyLoad` method by 1 second, severely reducing the frequency 



<br>

## Content Placeholders

### Challenges
- 
### Solutions
- 

<br>


## Code Snippets
```javascript

```