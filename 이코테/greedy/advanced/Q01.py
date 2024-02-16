_num = int(input())
arr = list(map(int, input().split()))
arr.sort()
cnt = 0
temp = 0

for i in arr:
    temp += 1
    if temp == i:
        cnt += 1
        temp = 0

print(cnt)
