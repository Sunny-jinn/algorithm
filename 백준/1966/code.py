# TODO: 다시 풀어보자. FIFO 제대로 이용할 수 있는가?

testcase = int(input())
idx = []
for i in range(testcase):
    cnt = 0
    a, b = map(int , input().split())
    user_input = list(map(int, input().split()))
    idx = list(range(a))
    idx[b] = "t"

    while 1:
        if(user_input[0] == max(user_input)):
            cnt+=1
            if(idx[0] == "t"):
                print(cnt)
                break
            else:
                user_input.pop(0)
                idx.pop(0)
        else:
            user_input.append(user_input.pop(0))
            idx.append(idx.pop(0))


