cnt = 0
hour = int(input())

for i in range(hour + 1):
    for j in range(60):
        for k in range(60):
            if '3' in str(i) + str(j) + str(k):
                cnt+= 1

print(cnt)