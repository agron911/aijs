// 點向量物件的處理函數， 例如 pv.add({x:3,y:2}, {x:1, y:1}) = {x:4, y:3}
const pv = module.exports = {}

pv.add = function (p1, p2) {
  let p = {}
  for (let k in p1) {
    p[k] = p1[k] + p2[k]
  }
  return p
}

pv.sub = function (p1, p2) {
  return pv.add(p1, pv.neg(p2))
}

pv.mul = function (p1, c) {
  let p = {}
  for (let k in p1) {
    p[k] = p1[k] * c
  }
  return p
}

pv.neg = function (p) {
  return pv.mul(p, -1)
}

pv.norm = function (p) {
  let norm = 0
  for (let k in p) {
    norm += Math.abs(p[k]) 
  }
  return norm
}

pv.str = function (p, len=4) {
  let lines = []
  for (let k in p) {
    lines.push(k+':'+p[k].toFixed(len))
  }
  return '{' + lines.join(', ') + '}'
}