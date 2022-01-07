def sockMerchant(n, ar):
    colors = set()

    pairs = 0
    for i in ar:
        if i not in colors:
            colors.add(i)
        else:
            pairs += 1
            colors.remove(i)
    return pairs
        


if __name__ == "__main__":
    print(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))