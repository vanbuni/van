const db = [
  'DF6mJi674ioMg2VEWPiSsTE6.pdf',
  'DFufYRtnAFUYYhkVBHQncF4Y.pdf',
  'DFeHGQo8AQgppZXE48ZPxnkS.pdf',
  'DF4RTgDrby3wxNbxPJoiuEsd.pdf',
  'DFfueFm7LvhHn5mzVJ1pMsKg.pdf',
  'DFjq8HmTez98Z1oMbr6iDMrP.pdf',
  'DFt2gGbWi5XK5PFv1QNjfNHA.pdf',
  'DFq5ZLFXVCyNoi7v1gPWFYY2.pdf',
  'DFvGpy9e55fWQio4SbpChyQP.pdf',
  'van'
]
const wp = [
  'DF4RTgDrby3wxNbxPJoiuEsd.pdf',
  'DFufYRtnAFUYYhkVBHQncF4Y.pdf',	
  'DF6mJi674ioMg2VEWPiSsTE6.pdf',	
  'DFfueFm7LvhHn5mzVJ1pMsKg.pdf',
  'DFq5ZLFXVCyNoi7v1gPWFYY2.pdf',
  'DFjq8HmTez98Z1oMbr6iDMrP.pdf',
  'DFeHGQo8AQgppZXE48ZPxnkS.pdf',
  'DFt2gGbWi5XK5PFv1QNjfNHA.pdf'
]
let answer = []

db.forEach(i =>{
  if(wp.includes(i) === false){
    answer.push(i)
  }
})
console.log(answer);
DFiq8HmTez98Z1oMbr6iDMrP.pdf
DFeHGQ08AQgppZXE48ZPxnkS.pdf
DFt2gGbWI5XK5PFv1QNifNHA.pdf
