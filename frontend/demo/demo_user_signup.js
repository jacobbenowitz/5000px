import { sleep } from '../util/sleep_util';

const Demo = {

  async demoSignupForm() {
    // create variables for inputs and submit
    const username = document.getElementById('username-signup');
    const email = document.getElementById('email-signup');
    const password = document.getElementById('password-signup');
    const password2 = document.getElementById('password2-signup');
    const submit = document.getElementById('hidden-demo');

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    }

    // username
    await sleep(getRandomInt(20, 150))
    username.value = "G"
    await sleep(getRandomInt(20, 150))
    username.value = "Gu"
    await sleep(getRandomInt(20, 150))
    username.value = "Gue"
    await sleep(getRandomInt(20, 150))
    username.value = "Gues"
    await sleep(getRandomInt(20, 150))
    username.value = "Guest"


    // email
    await sleep(getRandomInt(20, 150))
    email.value = "g"
    await sleep(getRandomInt(20, 150))
    email.value = "gu"
    await sleep(getRandomInt(20, 150))
    email.value = "gue"
    await sleep(getRandomInt(20, 150))
    email.value = "gues"
    await sleep(getRandomInt(20, 150))
    email.value = "guest"
    await sleep(getRandomInt(20, 150))
    email.value = "guest@"
    await sleep(getRandomInt(20, 150))
    email.value = "guest@g"
    await sleep(getRandomInt(20, 150))
    email.value = "guest@gm"
    await sleep(getRandomInt(20, 150))
    email.value = "guest@gma"
    await sleep(getRandomInt(20, 150))
    email.value = "guest@gmai"
    await sleep(getRandomInt(20, 150))
    email.value = "guest@gmail"
    await sleep(getRandomInt(20, 150))
    email.value = "guest@gmail."
    await sleep(getRandomInt(20, 150))
    email.value = "guest@gmail.c"
    await sleep(getRandomInt(20, 150))
    email.value = "guest@gmail.co"
    await sleep(getRandomInt(20, 150))
    email.value = "guest@gmail.com"


    // password
    await sleep(getRandomInt(20, 150))
    password.value = "d"
    await sleep(getRandomInt(20, 150))
    password.value = "de"
    await sleep(getRandomInt(20, 150))
    password.value = "dem"
    await sleep(getRandomInt(20, 150))
    password.value = "demo"
    await sleep(getRandomInt(20, 150))
    password.value = "demo#"
    await sleep(getRandomInt(20, 150))
    password.value = "demo#U"
    await sleep(getRandomInt(20, 150))
    password.value = "demo#Us"
    await sleep(getRandomInt(20, 150))
    password.value = "demo#Use"
    await sleep(getRandomInt(20, 150))
    password.value = "demo#User"
    await sleep(getRandomInt(20, 150))
    password.value = "demo#User!"
    await sleep(getRandomInt(20, 150))
    password.value = "demo#User!8"
    await sleep(getRandomInt(20, 150))
    password.value = "demo#User!80"
    await sleep(getRandomInt(20, 150))
    password.value = "demo#User!806"

    // password2
    await sleep(getRandomInt(20, 150))
    password2.value = "d"
    await sleep(getRandomInt(20, 150))
    password2.value = "de"
    await sleep(getRandomInt(20, 150))
    password2.value = "dem"
    await sleep(getRandomInt(20, 150))
    password2.value = "demo"
    await sleep(getRandomInt(20, 150))
    password2.value = "demo#"
    await sleep(getRandomInt(20, 150))
    password2.value = "demo#U"
    await sleep(getRandomInt(20, 150))
    password2.value = "demo#Us"
    await sleep(getRandomInt(20, 150))
    password2.value = "demo#Use"
    await sleep(getRandomInt(20, 150))
    password2.value = "demo#User"
    await sleep(getRandomInt(20, 150))
    password2.value = "demo#User!"
    await sleep(getRandomInt(20, 150))
    password2.value = "demo#User!8"
    await sleep(getRandomInt(20, 150))
    password2.value = "demo#User!80"
    await sleep(getRandomInt(20, 150))
    password2.value = "demo#User!806"

    // submit
    submit.click()

  }
}

export default Demo;