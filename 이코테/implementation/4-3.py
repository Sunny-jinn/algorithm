user_input = input()
row = int(ord(user_input[0])) - int(ord('a'))
col = int(user_input[1]) - 1

move_pos = [[-2, -1], [-2, 1], [2, -1], [2, 1], [-1, -2],  [-1, 2], [1, -2], [1 , 2]]
cnt = 0
for move in move_pos:
    nx = row + move[0]
    ny = col + move[1]
    if(nx > 7 or nx <  0 or ny  > 7 or ny < 0):
        continue
    else:
        cnt+=1

print(cnt)