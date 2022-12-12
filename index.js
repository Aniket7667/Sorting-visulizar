// function randomNumForArrays()
// {
//     int n = Math.random()*100;
// }

 array = [5,1,4,2,8];
array = insertionSort(array);

array.forEach(ele => {
    console.log(ele);
});

// Selection Sort
function selectionSort(array)
{
    for(let i=0;i<array.length-1;i++)
    {   
        let index=i;
        for(let j=i+1;j<array.length;j++)
        {
            if(array[j]<array[index])    index = j;
        }
        
        swap(array,i,index);
    }
    return array;
}

// Bubble Sort

function bubbleSort(array)
{
    let l = array.length;
    while(l!=0)
    {
        for(let i=0;i<l-1;i++)
       {
            if(array[i]>array[i+1])
                swap(array,i,i+1);
       }
       l--;
    }
    return array;
}
// Insertion sort
function insertionSort(array)
{
    let n = array.length;
    for (let i = 1; i < n; ++i) 
    {
        let key = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > key)
        {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = key;
    }
    return array;
}

// Swapping of values in array
function swap(array,i,j)
{
    let  temp = array[j];
        array[j] = array[i];
        array[i] = temp;
}