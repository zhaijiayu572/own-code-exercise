key = int(raw_input())
def half_find(arr,key):
    low = 0
    high = len(arr)-1
    while low <= high:
        mid = (low + high)/2
        if key == arr[mid]:
            return 'find'
        elif key < arr[mid]:
            high = mid - 1
        else :
            low = mid+1
    return 'not find'
arr = [2,3,5,7,8,9,10,22]
print half_find(arr,key)