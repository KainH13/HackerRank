
def jumpingOnClouds(c):
    jumps = 0
    i = 0
    while i < len(c)-1:
        if i < len(c) - 2 and c[i + 2] == 0:
            i += 2
        else:
            i += 1
        jumps += 1

    return jumps

if __name__ == '__main__':
    print(jumpingOnClouds([0,0,1,0,0,1,0]))
    print(jumpingOnClouds([0,0,0,0,1,0]))
    print(jumpingOnClouds([0,0,0,1,0,0]))
    print(jumpingOnClouds([0,0,1,0,0,0,0,1,0,0]))