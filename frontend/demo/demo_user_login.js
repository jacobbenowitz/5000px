import { sleep } from '../util/sleep_util';

const demoLoginScript = {

  async demoLoginForm() {
    // create variables for inputs and submit
    const username = document.getElementById('username');
    const password = document.getElementById('password');
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
    await sleep(getRandomInt(20, 150))

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
    await sleep(getRandomInt(20, 150))

    // submit
    submit.click()

  }
}

export default demoLoginScript;