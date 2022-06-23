# 5000px

<img src="app/assets/images/5000px-logo-blue-web.svg" width="220">

<br>

**Live link:** [**5000px**](https://my5000px.herokuapp.com/)

A full-stack clone of the popular photo sharing site [500px](https://500px.com/)

<br>

## Technologies Used

- **`React & Redux`** 
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
    - Photos from followers
    - Collection cards (based on the category assigned to the image)
    - Current user's most recent photos
    - Disover photos (photos from unfollowed users)
- **Likes, Follows, and Comments**
  - Provides a rich social experience for users
  - Each `photo` has a `liked by` modal with all users who liked the photo
  - Each `profile` has a `following` and `followers` modal with the respective users
- **Content Placeholders**
  - To ensure consistent page structure, content placeholders appear while the required data is being fetched 

<br>

## Lazy Loading Challanges

1. Memory Leaks

    Instead of fetching all photos in the database at once, an array of photoIds are fetched one by one. Then I used `Promise.all` set state with the new photos after they have all been fetched. However, if a user navigates off the current page before the `Promise.all` has resolved, the component will attempt to `setState` after it has unmounted.
    
    Solution:
    
    The solution implemented was to set a class variable: `this.mounted = (boolean)` which is toggled in the `componentDidMount` and `componentWillUnmount` lifecycle methods. Then, within the callback of the `Promise.all` mentioned above, I check to ensure `this.mounted = true`, otherwise I return before `setState` with the fetched photos.

2. `scroll` Event Listener Fired To Often
   
   By default the `scroll` event listener is fired hundreds of times as the user scrolls. This was calling the method, `handleLazyLoad`, that checks if the user is at the bottom of the page too frequently. The result of this was too many photos being fetched repeatedly, causing structural issues and unexpected behavior.

   Solution:

   Trottle the the `handleLazyLoad` method by 1 second, severely reducing the frequency of the callback function being called. This leads to smoother fetching performance and prevents structural issues on the page.

<br>

## Code Snippets

### `addLazyScrollListener & handleLazyLoad`
This is callback invoked by the `scroll` event listener 
```javascript
  // this function is invoked on componentDidMount
  addLazyScrollListener() {
    // this event listener is removed on componentWillUnmount
    window.addEventListener('scroll', e => {
      // use .current to get the actual element on the DOM
      const lazyLoadEle = this.lazyLoadBox.current
      this.handleLazyLoad(e, lazyLoadEle)
    })
  }

  // throttle used to delay invokation by 1 second
  handleLazyLoad = throttle((e, lazyLoadEle) => {
    e.preventDefault()
    e.stopPropagation()
    const { status } = this.state;

    // do not fetch more photos if already fetching photos
    if (lazyLoadEle !== null &&
      status !== BUSY && this.eleIsInViewport(lazyLoadEle)) {
      this.setState({ status: BUSY }, () => {
        this.fetchTenMorePhotos()
      })
    }
  })
```

### `fetchTenMorePhotos`
This is the `HomeFeed` method that dynamically builds the gallery props

```javascript
  fetchTenMorePhotos() {
    const { allPhotos, photoIds, fetchPhoto, currentProfile } = this.props;
    const { fetchedPhotos, status, followingPhotoIds } = this.state;
    let shuffledIds, userPhotoIds, filteredFollowingIds, tenShuffledPhotos;

    // map fetched photos into flattened array of ids
    let fetchedIds = fetchedPhotos.map(array => 
        array.map(photo => parseInt(photo.id))
      ).flat()

    // filter out previously fetched photos
    let unfetchedPhotos = photoIds.filter(id =>
      !fetchedIds.includes(id)
    )
    // if the currentUser has posted photos, show < 3 of them 
    if (currentProfile.photoIds) {
      userPhotoIds = currentProfile.photoIds
        .sort((a, b) => a - b)
        .filter(id => unfetchedPhotos.includes(id))
        .slice(0, 3)
    }
    // if we have followingPhotoIds, fetch 10 of those + user's photos
    if (followingPhotoIds?.length > 0) {
      filteredFollowingIds = followingPhotoIds
        .filter(id => unfetchedPhotos.includes(id))
        .sort(() => Math.random() - 0.5)
        .slice(0, 10)
    }
    // check if we've fetched all follower's photos and/or all of our photos
    if (filteredFollowingIds.length === 0 || userPhotoIds.length === 0) {
      tenShuffledPhotos = unfetchedPhotos
        .sort(() => Math.random() - 0.5)
        .slice(0, 10)
      // include tenShuffledPhotos (from all photos in database)
      shuffledIds = [
        ...userPhotoIds,
        ...filteredFollowingIds,
        ...tenShuffledPhotos
      ]
    } else {
      // prioritize follower's photos, no need to include tenShuffledPhotos
      shuffledIds = [
        ...userPhotoIds,
        ...filteredFollowingIds
      ]
    }
    // handle edge case of no more photos to fetch
    if (shuffledIds.length === 0) {
      this.setState({ noMorePhotos: true })
      this.removeLazyScrollListener()
      return;
    } else {
      // store all photoIds to fetch
      let fetches = [];
      shuffledIds.forEach(id => fetches.push(fetchPhoto(id)))
      Promise.all(fetches).then((res) => {
        // ensure component is mounted
        if (!this.mounted) return;

        let newPhotos = res.map(action => action.photo.photo)
        let updatedFetchedPhotos = fetchedPhotos.concat([newPhotos])
        this.setState({
          status: DONE,
          fetchedPhotos: updatedFetchedPhotos
        })
      })
    }
  };
```

### `throttle` util function

```javascript
export const throttle = (callback, delay = 1000) => {
  let isWaiting = false
  // save new args when waiting, invoke w/ callback once done waiting
  let waitingArgs

  const timeoutFunc = () => {
    if (waitingArgs == null) {
      // start wait until trottle is called again
      isWaiting = false
    } else {
      // if there are waitingArgs, invoke callback & restart timer
      callback(...waitingArgs)
      waitingArgs = null
      // reset waitingArgs, execute as soon as delay is done
      setTimeout(timeoutFunc, delay)
    }
  }
  return (...args) => {
    if (isWaiting) {
      waitingArgs = args
      return
    }
    callback(...args)
    isWaiting = true
    
    setTimeout(timeoutFunc, delay)
  }
}
```