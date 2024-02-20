var anoNascimento = 1981
var anoAtual = new Date().getFullYear()
var idade = anoAtual - anoNascimento
var template = `idade ${idade} anos`

console.log(template)

