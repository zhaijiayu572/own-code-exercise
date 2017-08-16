# coding=utf-8
print ('hello world,翟')
arr = [int(i) for i in raw_input().split(' ')]
# 冒泡排序
def bubble_sort(arr):
    for i in range(0, len(arr)):
        for j in range(i, len(arr)):
            if arr[j] < arr[i]:
                change = arr[j]
                arr[j] = arr[i]
                arr[i] = change
    print arr
bubble_sort(arr)
# 直接插入排序
def insert_sort(arr):
    for k in range(0, len(arr)):
        for j in range(0, k):
            if arr[k] < arr[j]:
                change = arr[k]
                arr[k] = arr[j]
                arr[j] = change
    print arr
insert_sort(arr)
# 选择排序
def select_sort(arr):
    for k in range(0, len(arr)):
        min = k
        for j in range(k, len(arr)):
            if arr[j] < arr[min]:
                min = j
        change = arr[min]
        arr[min] = arr[k]
        arr[k] = change
    print arr
select_sort(arr)
# 希尔排序
def shell_sort(arr):
    num = len(arr)
    step = int(num/2)
    while step > 0:
        for i in range(0, step):
            next_group_mem = i + step
            while next_group_mem < num:
                j = 0
                while j < next_group_mem:
                    if arr[next_group_mem] < arr[j]:
                        change = arr[next_group_mem]
                        arr[next_group_mem] = arr[j]
                        arr[j] = change
                    j += step
                next_group_mem += step
        step = int(step/2)
    print arr
shell_sort(arr)
# 快速排序
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
    key = right
    quick_sort(arr,begin,key-1)
    quick_sort(arr,key+1,end)
    return arr
print (quick_sort(arr,0,len(arr)-1),'quick-sort')
# 归并排序
def merge(left,right):
    i = 0
    j = 0
    merge_arr = []
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
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
print merge_sort(arr)