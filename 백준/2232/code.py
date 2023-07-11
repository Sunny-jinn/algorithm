arr = []
n = int(input())
for i in range(n):
    arr.append(int(input()))
if len(arr) == 1 or arr[0] >= arr[1]:
    print(1)
for i in range(1, n - 1):
    if arr[i-1] <= arr[i] and arr[i + 1] <= arr[i]:
        print(i + 1)
if len(arr) != 1 and arr[n - 1] >= arr[n - 2]:
    print(n)