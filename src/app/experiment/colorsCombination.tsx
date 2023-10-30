import {colorPalette, colorRGB, ColorCombination} from './IfcColors';

export default function getColorsCombination() : ColorCombination[]{
    //Color set
    const BW : colorRGB[] = [colorPalette.black, colorPalette.white];
    const RGB : colorRGB[] = [colorPalette.red, colorPalette.green, colorPalette.blue];
    const YPC : colorRGB[] = [colorPalette.yellow, colorPalette.purple, colorPalette.cyan];

    //Each color set is combinated by _pairwise(colorSet)
    let combinations : ColorCombination[] = new Array();
    combinations = [...combinations, ..._pairwise(BW)];
    combinations = [...combinations, ..._pairwise(RGB)];
    combinations = [...combinations, ..._pairwise(YPC)];

    //Combinations is randomized
    combinations = _randomizeArray(combinations);

    return combinations;
}

function _pairwise(colorSet: colorRGB[]) : ColorCombination[]{

    let combinations : ColorCombination[] = new Array();

    for (let i = 0; i<colorSet.length; i++){
        for(let j = 0; j<colorSet.length; j++){
            if(colorSet[i] != colorSet[j]){
                combinations.push({left:colorSet[i], right:colorSet[j]});
            }
        }
    }

    return combinations;
}

function _randomizeArray(array : any){
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));  // random index
        [array[i], array[j]] = [array[j], array[i]];          // swap
      }
    return array;
}