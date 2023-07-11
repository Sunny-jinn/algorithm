# 브루트 포스를 이용하여 풀자

import sys

N, M, B = map(int, sys.stdin.readline().split())
mine_map = [list(map(int, sys.stdin.readline().split())) for i in range(N)]

cnt = 99999999
dnt = 0
cur = 0

for d in range(257):
    dnt = 0
    used_block = B
    for i in range(N):
        for j in range(M):
            temp = mine_map[i][j] - d
            if(mine_map[i][j] > d): # 현재 땅의 높이가 주어진 땅 보다 높으면 블록 제거
                used_block += temp
                dnt+=temp *2
            else: # 블록 추가
                dnt+=temp * -1
                used_block-=temp * -1
    if(used_block < 0):
        continue

    if (dnt <= cnt):
        cur = d
        cnt = dnt

print(cnt, cur)

