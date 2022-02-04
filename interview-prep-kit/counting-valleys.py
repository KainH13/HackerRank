
def countingValleys(steps, path):
    level = 0
    valleys = 0
    for i in path:
        if i == 'U':
            level += 1
            if level == 0:
                valleys += 1
        if i == 'D':
            level -= 1
    
    return valleys

if __name__ == '__main__':
    print(countingValleys(8, "UDDDUDUU"))