import { sleep } from '../util/sleep_util';

const Demo = {
  // TODO 
  // ensure no currentUser, if so log out
  // disable buttons on page

  async demoSignupForm() {
    // create variables for inputs and submit
    const username = document.getElementById('username-signup');
    const email = document.getElementById('email-signup');
    const password = document.getElementById('password-signup');
    const submit = document.getElementById('hidden-demo');

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    }

    // username
    await sleep(getRandomInt(100, 300))
    username.value = "G"
    await sleep(getRandomInt(100, 300))
    username.value = "Gu"
    await sleep(getRandomInt(100, 300))
    username.value = "Gue"
    await sleep(getRandomInt(100, 300))
    username.value = "Gues"
    await sleep(getRandomInt(100, 300))
    username.value = "Guest"
    await sleep(550)

    // email
    await sleep(getRandomInt(100, 300))
    email.value = "g"
    await sleep(getRandomInt(100, 300))
    email.value = "gu"
    await sleep(getRandomInt(100, 300))
    email.value = "gue"
    await sleep(getRandomInt(100, 300))
    email.value = "gues"
    await sleep(getRandomInt(100, 300))
    email.value = "guest"
    await sleep(getRandomInt(100, 300))
    email.value = "guest@"
    await sleep(getRandomInt(100, 300))
    email.value = "guest@g"
    await sleep(getRandomInt(100, 300))
    email.value = "guest@gm"
    await sleep(getRandomInt(100, 300))
    email.value = "guest@gma"
    await sleep(getRandomInt(100, 300))
    email.value = "guest@gmai"
    await sleep(getRandomInt(100, 300))
    email.value = "guest@gmail"
    await sleep(getRandomInt(100, 300))
    email.value = "guest@gmail."
    await sleep(getRandomInt(100, 300))
    email.value = "guest@gmail.c"
    await sleep(getRandomInt(100, 300))
    email.value = "guest@gmail.co"
    await sleep(getRandomInt(100, 300))
    email.value = "guest@gmail.com"
    await sleep(550)

    // password
    await sleep(getRandomInt(100, 300))
    password.value = "p"
    await sleep(getRandomInt(100, 300))
    password.value = "pa"
    await sleep(getRandomInt(100, 300))
    password.value = "pas"
    await sleep(getRandomInt(100, 300))
    password.value = "pass"
    await sleep(getRandomInt(100, 300))
    password.value = "passw"
    await sleep(getRandomInt(100, 300))
    password.value = "passwo"
    await sleep(getRandomInt(100, 300))
    password.value = "passwor"
    await sleep(getRandomInt(100, 300))
    password.value = "password"

    // submit
    submit.click()

  }
}

export default Demo;