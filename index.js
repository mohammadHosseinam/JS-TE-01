function sayHello() {
    const yourName = prompt("please inter your name:").replace(/ /g , "_")
    console.log(`hello dear ${yourName.toLocaleUpperCase()}!`)
}
sayHello()
