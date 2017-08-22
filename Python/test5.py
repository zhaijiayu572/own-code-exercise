def test(number):
    strNumber = str(number)
    print strNumber
    numberArr = []
    for x in strNumber:
        numberArr.append(x)
    oldArr = numberArr
    print numberArr
    numberArr.reverse()
    if numberArr == oldArr:
        return True
    else:
        return False
print test(12321)
