line = raw_input().split(' ')
n = int(line[0])
r = int(line[1])
avg = int(line[2])
a = []
b = []
for i in range(0,n):
    line2 = raw_input().split(' ')
    a.append(int(line2[0]))
    b.append(int(line2[1]))
def getAvg(r, avg, a, b):
    count = 0
    overflow = 0
    for k in range(0,len(a)):
        for n in range(k,len(a)):
            if(b[n] < b[k]):
                changeA = a[n]
                changeb = b[n]
                a[n] = a[k]
                b[n] = b[k]
                a[k] = changeA
                b[k] = changeb
    deffer = 0
    print b
    for i in range(0,len(a)):
        deffer += (a[i] - avg)
        
        # if deffer < 0:

        # if deffer < 0:
        #     overflow += (-deffer)
        # else:
        #     if(overflow > 0):
        #         left = overflow - deffer
        #         if left < 0:
        #             count = (-left) * b[i]
        #             overflow = 0
        #         else:
        #             overflow = left
        #     else:
        #         count += deffer * b[i]
    myCount = 0
    print deffer
    if deffer >= 0:
        print 0
    
    else:
        while deffer < 0:
            
            for i in range(0,len(a)):
                count = (int(r) - a[i])
                print count,'count'
                left = deffer + count
                print deffer, 'deffer'
                if left < 0:
                    myCount += count * b[i]
                    print myCount,'mycount'
                    deffer = left
                else:
                    myCount += (-deffer)*b[i]
                    deffer = left
                    break
    print myCount
getAvg(r,avg,a,b)
def fn(arr):
    for i in range(0,len(arr)):
        j = len(arr)-1
        while j > i:
            if arr[j-1] > arr[j]:
                temp = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = temp
            j -= 1
    print arr
