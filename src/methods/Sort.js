export const compareAll = {
  hp: function(a, b){
    if ( a.stat.hp.base < b.stat.hp.base ){
      return -1
    }else if ( a.stat.hp.base > b.stat.hp.base ){
      return 1
    }else{
      return 0;
    }
  },
  num: function(a, b){
    if ( a.id < b.id ){
      return -1
    }else if ( a.id > b.id ){
      return 1
    }else{
      return 0;
    }
  },
  name: function(a, b){
    if ( a.name < b.name ){
      return -1
    }else if ( a.name > b.name ){
      return 1
    }else{
      return 0;
    }
  },
  total: function(a, b){
    if ( a.stat.hp.base+a.stat.attack.base+a.stat.defense.base+a.stat.spAtk.base+a.stat.spDef.base+a.stat.speed.base <  b.stat.hp.base+b.stat.attack.base+b.stat.defense.base+b.stat.spAtk.base+b.stat.spDef.base+b.stat.speed.base ){
      return -1;
    }else if (  a.stat.hp.base+a.stat.attack.base+a.stat.defense.base+a.stat.spAtk.base+a.stat.spDef.base+a.stat.speed.base > b.stat.hp.base+b.stat.attack.base+b.stat.defense.base+b.stat.spAtk.base+b.stat.spDef.base+b.stat.speed.base ){
      return 1;
    }else{
      return 0;
    }
  },
  attack: function(a, b){
    if ( a.stat.attack.base < b.stat.attack.base ){
      return -1
    }else if ( a.stat.attack.base > b.stat.attack.base ){
      return 1
    }else{
      return 0;
    }
  },
  defense: function(a, b){
    if ( a.stat.defense.base < b.stat.defense.base ){
      return -1
    }else if ( a.stat.defense.base > b.stat.defense.base ){
      return 1
    }else{
      return 0;
    }
  },
  spatk: function(a, b){
    if ( a.stat.spAtk.base < b.stat.spAtk.base ){
      return -1
    }else if ( a.stat.spAtk.base > b.stat.spAtk.base ){
      return 1
    }else{
      return 0;
    }
  },
  spdef: function(a, b){
    if ( a.stat.spDef.base < b.stat.spDef.base ){
      return -1
    }else if ( a.stat.spDef.base > b.stat.spDef.base ){
      return 1
    }else{
      return 0;
    }
  },
  speed: function(a, b){
    if ( a.stat.speed.base < b.stat.speed.base ){
      return -1
    }else if ( a.stat.speed.base > b.stat.speed.base ){
      return 1
    }else{
      return 0;
    }
  },
  cat: function(a, b){
    if ( a.cat < b.cat ){
      return -1;
    }else if ( a.cat > b.cat ){
      return 1;
    }else{
      return 0;
    }
  },
  power:function(a, b){
    if ( Number(a.power) < Number(b.power) ){
      return -1;
    }else if ( Number(a.power) > Number(b.power) ){
      return 1;
    }else{
      return 0;
    }
  },
  pp:function(a,b){
    if ( Number(a.pp) < Number(b.pp) ){
      return -1;
    }else if ( Number(a.pp) > Number(b.pp) ){
      return 1;
    }else{
      return 0;
    }
  },
  acc:function(a,b){
    if ( Number(a.acc) < Number(b.acc) ){
      return -1;
    }else if ( Number(a.acc) > Number(b.acc) ){
      return 1;
    }else{
      return 0;
    }
  },
  tm:function(a,b){
    if ( a.tm < b.tm ){
      return -1;
    }else if ( a.tm > b.tm ){
      return 1;
    }else{
      return 0;
    }
  },
  per:function(a,b){
    if ( Number(a.perc) < Number(b.perc) ){
      return -1;
    }else if ( Number(a.perc) > Number(b.perc) ){
      return 1;
    }else{
      return 0;
    }
  },
  type:function(a,b){
    if ( a.type < b.type ){
      return 1;
    }else if ( a.type > b.type ){
      return -1;
    }else{
      return 0;
    }
  },
  gen: function(a,b){
    if ( a.gen < b.gen ){
      return -1;
    }else if ( a.gen > b.gen ){
      return 1;
    }else{
      return 0;
    }
  },
  pokemon:function(a,b){
    if ( a.pokemon.length < b.pokemon.length ){
      return -1;
    }else if ( a.pokemon.length > b.pokemon.length ){
      return 1;
    }else{
      return 0;
    }
  }
}
