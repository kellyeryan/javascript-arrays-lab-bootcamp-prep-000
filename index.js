var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(name) {
  return kittens.concat(name)
}

function prependKitten(name) {
  prependKitten = [name, ...kittens]
  return prependKitten
}

function removeLastKitten() {
  return kittens.slice(0, -1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}
