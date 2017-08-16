arr = [int(i) for i in raw_input().split(' ')]
def quick_sort(arr,begin,end):
    if begin >= end:
        return arr
    left = begin
    right = end
    key = arr[begin]
    while left < right:
        while left < right and arr[right] >= key:
            right -= 1
        arr[left] = arr[right]
        while left < right and arr[left] <= key:
            left += 1
        arr[right] = arr[left]
    arr[right] = key
    quick_sort(arr,begin,left-1)
    quick_sort(arr,left+1,end)
    return arr
print  quick_sort(arr,0,len(arr)-1),'quick-sort'
def merge(left,right):
    i = 0
    j = 0
    merge_arr = []
    while i < len(left) and j < len(right):
        if left[i] < right[j] :
            merge_arr.append(left[i])
            i += 1
        else:
            merge_arr.append(right[j])
            j += 1
    merge_arr.extend(left[i:])
    merge_arr.extend(right[j:])
    return merge_arr
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr)/2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left,right)
print merge_sort(arr),'merge-sort'
def select_sort(arr):
    for i in range(0,len(arr)):
        min_index = i
        for j in range(i,len(arr)):
            if arr[j] < arr[i]:
                min_index = j
        change = arr[min_index]
        arr[min_index] = arr[i]
        arr[i] = change
    return arr
print select_sort(arr),'select-sort'
def insert_sort(arr):
    for i in range(0,len(arr)):
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
            next_group_mem = i + step
            while next_group_mem < len(arr):
                j = 0
                while j < next_group_mem:
                    if arr[next_group_mem] < arr[j]:
                        change = arr[next_group_mem]
                        arr[next_group_mem] = arr[j]
                        arr[j] = change
                    j += step
                next_group_mem += step
        step = step/2
    return arr
print shell_sort(arr),'shell-sort'
def bubble_sort(arr):
    for i in range(0,len(arr)):
        for j in range(i,len(arr)):
            if arr[j] < arr[i]:
                change = arr[i]
                arr[i] = arr[j]
                arr[j] = arr[i]
    return arr
print bubble_sort(arr),'bubble-sort'