var detailsList = document.getElementById('detailsList')
var specialPackaging = document.getElementById('specialPackaging')
var hazardousMaterials = document.getElementById('hazardousMaterials')
var smallItemsOnly = document.getElementById('smallItemsOnly')
var forkiftNeeded = document.getElementById('forkiftNeeded')
var totalItems = document.getElementById('totalItems')
var forklift = document.getElementById('forklift')

const parts = [ 
    { partNbr: 'R5AQDVU', partDescr: 'Halbendozer', aisle: 'B3', qty: 14 },
    { partNbr: 'LJBKC0M', partDescr: 'Knudleknorp', aisle: 'H1', qty: 12},
    { partNbr: 'HUS51DE', partDescr: 'Knudlescheiffer', aisle: 'H1', qty: 12},
    { partNbr: 'M0XORFH', partDescr: 'Borgom Oil', aisle: 'B2', qty: 3},
    { partNbr: '35X7AP8', partDescr: 'Glundelscharf', aisle: 'C3', qty: 1},
    { partNbr: 'C1AYCAI', partDescr: 'Tschoffle', aisle: 'A4', qty: 5},
    { partNbr: 'E9IEYLS', partDescr: 'Karmandloch', aisle: 'C2', qty: 2},
    { partNbr: 'IW2I0TG', partDescr: 'Shreckendwammer', aisle: 'J4', qty: 2},
    { partNbr: '95OJTV6', partDescr: 'Dimpenaus', aisle: 'B1', qty: 16},
    { partNbr: 'LYII1MJ', partDescr: 'Lumpenknorp', aisle: 'H1', qty: 12},
    { partNbr: 'VQIL7AO', partDescr: 'Lumpenschieffer', aisle: 'H1', qty: 12},
    { partNbr: 'XF0MPS9', partDescr: 'Ratklampen', aisle: 'N2', qty: 7},
    { partNbr: 'AFU9OUG', partDescr: 'Dulpo Fittings', aisle: 'J2', qty: 4},
    { partNbr: 'E7XWGGO', partDescr: 'Flugtrimsammler', aisle: 'B3', qty:3 },
    { partNbr: '981FNC9', partDescr: 'Grosstramle', aisle: 'A1', qty: 1},
    { partNbr: 'AGSXYVZ', partDescr: 'Skirpenflatch', aisle: 'B2', qty: 2},
    { partNbr: 'V0SK0UX', partDescr: 'Lumpenmagler', aisle: 'H1', qty: 12},
    { partNbr: 'CTL40Z1', partDescr: 'Lumpenflempest', aisle: 'H1', qty: 24},
    { partNbr: 'POO9ZPM', partDescr: 'Eumonklippen', aisle: 'D2', qty: 7},
    { partNbr: 'WEYPU3Z', partDescr: 'Mumpenflipper', aisle: 'E3', qty: 1}

]




sp = false
hp = false
var count = 0

parts.forEach((part) =>{

        count += part.qty
        
        var div_line = document.createElement('div')
        var chk = document.createElement('input')
        chk.type = 'checkbox'
        var li_qt = document.createElement('span')
        var li_num = document.createElement('span')
        var li_des = document.createElement('span')
        li_qt.innerHTML = part.qty
        li_num.innerHTML = ` (${part.partNbr}) `
        li_des.innerHTML = ` - ${part.partDescr}`
        div_line.appendChild(chk)
        div_line.appendChild(li_qt)
        div_line.appendChild(li_num)
        div_line.appendChild(li_des)
        detailsList.appendChild(div_line)

    if(part.aisle === 'B3'){

        if(sp === false){
            sp = true
            specialPackaging.innerHTML = 'Special Packaging Required'
        }
        specialPackaging.innerHTML += ` Item: ${part.partNbr} / Qty: ${part.qty}`
    }

    if(part.aisle === 'J4'){

        if(hp === false){
            hp = true
            hazardousMaterials.innerHTML = 'Hazardous Parts Included \n '
            hazardousMaterials.innerHTML += 'Get Gloves'
        }
    }
    if(part.aisle === 'H1'){
        smallItemsOnly.remove()
    }

    if(part.aisle != 'S' || part.aisle != 'T' || part.aisle != 'U'){
        forkiftNeeded.remove()
    }

    totalItems.innerHTML = `Total number of parts in order: ${count}`

})
