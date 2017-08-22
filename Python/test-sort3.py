arr = [int(i) for i in raw_input().split(' ')]
def half_find(arr,key):
    arr.sort()
    print arr
    low = 0
    high = len(arr)-1
    while low <= high:
        mid = (low+high)/2
        if key == arr[mid]:
            return 'OK'
        elif key > arr[mid]:
            low = mid + 1
        else:
            high = mid - 1
    return 'not find'
print half_find(arr,6)
def quick_sort(arr,low,high):
    if low <= high:
        return arr
    left = low 
    right = high
    key = arr[low]
    while left < right:
        while left < right and arr[right] > key:
            right -= 1
        arr[left] = arr[right]
        while left < right and arr[left] < key:
            left += 1
        arr[right] = arr[left]
    arr[right] = key
    quick_sort(arr,low,right-1)
    quick_sort(arr,left+1,high)
    return arr
print quick_sort(arr,0,len(arr)-1),'quick-sort'
def merge(left,right):
    i = 0
    j = 0
    mergeArr = []
    while i<len(left) and j < len(right):
        if left[i] < right[j]:
            mergeArr.append(left[i])
            i += 1
        else:
            mergeArr.append(right[j])
            j += 1
    mergeArr.extend(left[i:])
    mergeArr.extend(right[j:])
    return mergeArr
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr)/2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left,right)
print merge_sort(arr),'merge-sort'
def insert_sort(arr):
    for i in range(0, len(arr)):
        for j in range(0,i):
            if arr[i] < arr[j]:
                change = arr[i]
                arr[i] = arr[j]
                arr[j] = change
    return arr
print insert_sort(arr),'insert-sort'
def shell_sort(arr):
    step = len(arr)/2
    while step > 0:
        for i in range(0,step):
            next_step = i + step
            while next_step < len(arr):
                j = 0
                while j < next_step: 
                    if arr[next_step] < arr[j]:
                        change = arr[j]
                        arr[j] = arr[next_step]
                        arr[next_step] = change
                    j += step
                next_step += step
        step = step / 2
    return arr
print shell_sort(arr),'shell-sort'
def select_sort(arr):
    for i in range(0,len(arr)):
        mini = i
        for j in range(i,len(arr)):
            if arr[j] < arr[mini]:
                mini = j
        change = arr[i]
        arr[i] = arr[mini]
        arr[mini] = change
    return arr
print select_sort(arr),'select-sort'
def bubble_sort(arr):
    for i in range(0,len(arr)):
        for j in range(i,len(arr)):
            if arr[j] < arr[i]:
                change = arr[j]
                arr[j] = arr[i]
                arr[i] = change
    return arr
print bubble_sort(arr),'bubble-sort'