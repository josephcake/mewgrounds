export const compareAll = {
  mergeSort:function (arr, value){
    if(arr.length <= 1) {
      return arr
    }
    let mid = Math.floor(arr.length/2)
    let left = this.mergeSort(arr.slice(0, mid), value)
    let right = this.mergeSort(arr.slice(mid), value)
    if(value === "hp"){
      return this.hp(left, right)
    }else if(value === "total"){
      return this.total(left, right)
    }else if(value === "name"){
        return this.name(left, right)
    }else if(value === "attack"){
        return this.attack(left, right)
    }else if(value === "defense"){
        return this.defense(left, right)
    }else if(value === "spatk"){
        return this.spatk(left, right)
    }else if(value === "spdef"){
        return this.spdef(left, right)
    }else if(value === "speed"){
        return this.speed(left, right)
    }else if(value === "power"){
        return this.power(left, right)
    }else if(value === "pp"){
        return this.pp(left, right)
    }else if(value === "tm"){
        return this.tm(left, right)
    }else if(value === "acc"){
        return this.acc(left, right)
    }else if(value === "gen"){
        return this.gen(left, right)
    }else if(value === "type"){
        return this.type(left, right)
    }else if(value === "per"){
        return this.per(left, right)
    }else if(value === "cat"){
        return this.cat(left, right)
    }else if(value === "pokemon"){
        return this.pokemon(left, right)
    }else{
      return this.num(left, right)
    }
  },
  num: function (arr1, arr2){
    let ans = []
    let i = 0
    let k = 0

    while (i < arr1.length && k < arr2.length){
      if(arr1[i].id < arr2[k].id){
        ans.push(arr1[i])
        i ++
      }else {
        ans.push(arr2[k])
        k ++
      }
    }
    while(i < arr1.length){
      ans.push(arr1[i])
      i ++
    }
    while(k < arr2.length){
      ans.push(arr2[k])
      k ++
    }
    return ans
  },
  hp: function (arr1, arr2){
    let ans = []
    let i = 0
    let k = 0

    while (i < arr1.length && k < arr2.length){
      if(arr1[i].stat.hp.base < arr2[k].stat.hp.base){
        ans.push(arr1[i])
        i ++
      }else {
        ans.push(arr2[k])
        k ++
      }
    }
    while(i < arr1.length){
      ans.push(arr1[i])
      i ++
    }
    while(k < arr2.length){
      ans.push(arr2[k])
      k ++
    }
    return ans
  },
  name: function (arr1, arr2){
    let ans = []
    let i = 0
    let k = 0

    while (i < arr1.length && k < arr2.length){
      if(arr1[i].name < arr2[k].name){
        ans.push(arr1[i])
        i ++
      }else {
        ans.push(arr2[k])
        k ++
      }
    }
    while(i < arr1.length){
      ans.push(arr1[i])
      i ++
    }
    while(k < arr2.length){
      ans.push(arr2[k])
      k ++
    }
    return ans
  },
  attack: function (arr1, arr2){
    let ans = []
    let i = 0
    let k = 0

    while (i < arr1.length && k < arr2.length){
      if(arr1[i].stat.attack.base < arr2[k].stat.attack.base){
        ans.push(arr1[i])
        i ++
      }else {
        ans.push(arr2[k])
        k ++
      }
    }
    while(i < arr1.length){
      ans.push(arr1[i])
      i ++
    }
    while(k < arr2.length){
      ans.push(arr2[k])
      k ++
    }
    return ans
  },
  defense: function (arr1, arr2){
    let ans = []
    let i = 0
    let k = 0

    while (i < arr1.length && k < arr2.length){
      if(arr1[i].stat.defense.base < arr2[k].stat.defense.base){
        ans.push(arr1[i])
        i ++
      }else {
        ans.push(arr2[k])
        k ++
      }
    }
    while(i < arr1.length){
      ans.push(arr1[i])
      i ++
    }
    while(k < arr2.length){
      ans.push(arr2[k])
      k ++
    }
    return ans
  },
  spatk: function (arr1, arr2){
    let ans = []
    let i = 0
    let k = 0

    while (i < arr1.length && k < arr2.length){
      if(arr1[i].stat.spAtk.base < arr2[k].stat.spAtk.base){
        ans.push(arr1[i])
        i ++
      }else {
        ans.push(arr2[k])
        k ++
      }
    }
    while(i < arr1.length){
      ans.push(arr1[i])
      i ++
    }
    while(k < arr2.length){
      ans.push(arr2[k])
      k ++
    }
    return ans
  },
  spdef: function (arr1, arr2){
    let ans = []
    let i = 0
    let k = 0

    while (i < arr1.length && k < arr2.length){
      if(arr1[i].stat.spDef.base < arr2[k].stat.spDef.base){
        ans.push(arr1[i])
        i ++
      }else {
        ans.push(arr2[k])
        k ++
      }
    }
    while(i < arr1.length){
      ans.push(arr1[i])
      i ++
    }
    while(k < arr2.length){
      ans.push(arr2[k])
      k ++
    }
    return ans
  },
  speed: function (arr1, arr2){
    let ans = []
    let i = 0
    let k = 0

    while (i < arr1.length && k < arr2.length){
      if(arr1[i].stat.speed.base < arr2[k].stat.speed.base){
        ans.push(arr1[i])
        i ++
      }else {
        ans.push(arr2[k])
        k ++
      }
    }
    while(i < arr1.length){
      ans.push(arr1[i])
      i ++
    }
    while(k < arr2.length){
      ans.push(arr2[k])
      k ++
    }
    return ans
  },
  cat: function (arr1, arr2){
    let ans = []
    let i = 0
    let k = 0

    while (i < arr1.length && k < arr2.length){
      if(arr1[i].cat < arr2[k].cat){
        ans.push(arr1[i])
        i ++
      }else {
        ans.push(arr2[k])
        k ++
      }
    }
    while(i < arr1.length){
      ans.push(arr1[i])
      i ++
    }
    while(k < arr2.length){
      ans.push(arr2[k])
      k ++
    }
    return ans
  },
  gen: function (arr1, arr2){
    let ans = []
    let i = 0
    let k = 0

    while (i < arr1.length && k < arr2.length){
      if(arr1[i].gen < arr2[k].gen){
        ans.push(arr1[i])
        i ++
      }else {
        ans.push(arr2[k])
        k ++
      }
    }
    while(i < arr1.length){
      ans.push(arr1[i])
      i ++
    }
    while(k < arr2.length){
      ans.push(arr2[k])
      k ++
    }
    return ans
  },
  type: function (arr1, arr2){
    let ans = []
    let i = 0
    let k = 0

    while (i < arr1.length && k < arr2.length){
      if(arr1[i].type < arr2[k].type){
        ans.push(arr1[i])
        i ++
      }else {
        ans.push(arr2[k])
        k ++
      }
    }
    while(i < arr1.length){
      ans.push(arr1[i])
      i ++
    }
    while(k < arr2.length){
      ans.push(arr2[k])
      k ++
    }
    return ans
  },
  tm: function (arr1, arr2){
    let ans = []
    let i = 0
    let k = 0

    while (i < arr1.length && k < arr2.length){
      if(arr1[i].tm < arr2[k].tm){
        ans.push(arr1[i])
        i ++
      }else {
        ans.push(arr2[k])
        k ++
      }
    }
    while(i < arr1.length){
      ans.push(arr1[i])
      i ++
    }
    while(k < arr2.length){
      ans.push(arr2[k])
      k ++
    }
    return ans
  },
  power: function (arr1, arr2){
    let ans = []
    let i = 0
    let k = 0

    while (i < arr1.length && k < arr2.length){
      if(arr1[i].power < arr2[k].power){
        ans.push(arr1[i])
        i ++
      }else {
        ans.push(arr2[k])
        k ++
      }
    }
    while(i < arr1.length){
      ans.push(arr1[i])
      i ++
    }
    while(k < arr2.length){
      ans.push(arr2[k])
      k ++
    }
    return ans
  },
  pp: function (arr1, arr2){
    let ans = []
    let i = 0
    let k = 0

    while (i < arr1.length && k < arr2.length){
      if(arr1[i].pp < arr2[k].pp){
        ans.push(arr1[i])
        i ++
      }else {
        ans.push(arr2[k])
        k ++
      }
    }
    while(i < arr1.length){
      ans.push(arr1[i])
      i ++
    }
    while(k < arr2.length){
      ans.push(arr2[k])
      k ++
    }
    return ans
  },
  acc: function (arr1, arr2){
    let ans = []
    let i = 0
    let k = 0

    while (i < arr1.length && k < arr2.length){
      if(arr1[i].acc < arr2[k].acc){
        ans.push(arr1[i])
        i ++
      }else {
        ans.push(arr2[k])
        k ++
      }
    }
    while(i < arr1.length){
      ans.push(arr1[i])
      i ++
    }
    while(k < arr2.length){
      ans.push(arr2[k])
      k ++
    }
    return ans
  },
  per: function (arr1, arr2){
    let ans = []
    let i = 0
    let k = 0

    while (i < arr1.length && k < arr2.length){
      if(arr1[i].perc < arr2[k].perc){
        ans.push(arr1[i])
        i ++
      }else {
        ans.push(arr2[k])
        k ++
      }
    }
    while(i < arr1.length){
      ans.push(arr1[i])
      i ++
    }
    while(k < arr2.length){
      ans.push(arr2[k])
      k ++
    }
    return ans
  },
  pokemon: function (arr1, arr2){
    let ans = []
    let i = 0
    let k = 0

    while (i < arr1.length && k < arr2.length){
      if(arr1[i].pokemon.length < arr2[k].pokemon.length){
        ans.push(arr1[i])
        i ++
      }else {
        ans.push(arr2[k])
        k ++
      }
    }
    while(i < arr1.length){
      ans.push(arr1[i])
      i ++
    }
    while(k < arr2.length){
      ans.push(arr2[k])
      k ++
    }
    return ans
  },
  total: function (arr1, arr2){
    let ans = []
    let i = 0
    let k = 0

    while (i < arr1.length && k < arr2.length){
      if(arr1[i].stat.hp.base+arr1[i].stat.attack.base+arr1[i].stat.defense.base+arr1[i].stat.spAtk.base+arr1[i].stat.spDef.base+arr1[i].stat.speed.base < arr2[k].stat.hp.base+arr2[k].stat.attack.base+arr2[k].stat.defense.base+arr2[k].stat.spAtk.base+arr2[k].stat.spDef.base+arr2[k].stat.speed.base){
        ans.push(arr1[i])
        i ++
      }else {
        ans.push(arr2[k])
        k ++
      }
    }
    while(i < arr1.length){
      ans.push(arr1[i])
      i ++
    }
    while(k < arr2.length){
      ans.push(arr2[k])
      k ++
    }
    return ans
  },
}
