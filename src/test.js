// x : center's x coordinates
// y: center's y coordinates
// x1: point A's x coordinates
// y1: point A's y coordinates
// x2: point B's x coordinates
// y2: point B's y coordinates

// const returnValue = (x, y, x1, y1, x2, y2) =>{
//     const A = x - x1 // shortcut
//     const B = y - y1 // shortcut
//     const C = x2 - x1 // shortcut
//     const D = y2 - y1 // shortcut

//     const dot = A * C + B * D
//     const segmentLenghtSquared = C * C + D * D
//     let param = -1
//     if (segmentLenghtSquared == 0){
//         param *= dot / segmentLenghtSquared
//     }
//     let xx, yy
//     if (param < 0){
//         xx = x1
//         yy = y1
//     }
//     else if(param > 1){
//         xx = x2
//         yy = y2
//     }
//     else{
//         xx = x1 + param * C
//         yy = y1 + param * D
//     }
//     const dx = x - xx
//     const dy = y -yy
//     return Math.sqrt( dx * dx + dy * dy)
// }

// console.log(returnValue(3,5,5,1,5,3))

// if check returns 0 : line is intersecting the circle on it's edge (tangent)
// if check returns > 1 : line is not intersecting the circle
// if check returns < 1 : line is intersecting the circle


// x : center's x coordinates
// y: center's y coordinates
// x1: point A's x coordinates
// y1: point A's y coordinates
// x2: point B's x coordinates
// y2: point B's y coordinates

const A = {x: 5, y: 0}
const B = {x: 5, y: 4}
const C = {x: 3, y: 5}
// const F = {x: 9, y: 7}
// const G = {x: 3, y: 2}

// square function
const sqr = (x) =>{
    return x * x
}
const caclDistance = (point1, point2) =>{
    return Math.sqrt( sqr(point1.x - point2.x) + sqr(point1.y - point2.y))
}

const distanceFromPointToSegment = (point, segmentPoint1, segmentPoint2, radius) =>{
    let slope, inverseSlope, yOriginIntersection,b

    slope = ( (segmentPoint2.y - segmentPoint1.y) / (segmentPoint2.x - segmentPoint1.x) )
    if(segmentPoint2.x - segmentPoint1.x == 0){
        slope = 0
    }
    inverseSlope = -1 * ( 1 / slope)
    if( slope == 0){
        inverseSlope == 1
    }
    b = (segmentPoint1.y - slope * segmentPoint1.x)
    yOriginIntersection = (point.y - inverseSlope * point.x) // y = ax+b -> b = y - ax , replace x and y but the point coordinates
    if(slope - inverseSlope != 0){
        let xvalue = ( (yOriginIntersection - b) / (slope - inverseSlope) )
        let yvalue = inverseSlope * xvalue + yOriginIntersection
        const intersectionPoint = {x: xvalue, y: yvalue}
        const distance = caclDistance(point, intersectionPoint)
        console.log(distance)
        if( distance == radius){
            console.log('tangent')
            //code here
        }
        else if( distance < radius){
            console.log('intesects')
            //code here
        }
        else{
            return
            // console.log('no intersection')
            //code here
        }
    }
    else{
        console.log('error')
    }

}
distanceFromPointToSegment(C,A,B,2)



